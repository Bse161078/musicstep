import { Form, Formik } from "formik";
import React,{useState,useEffect} from "react";
import { SelectBox } from "../../../components";
import axios from "axios";
import { TabPaneStyle, TabsStyle } from "../../../styles/Fields.style";
import {
  Dashboard,
  DashboardHeader,
  PayoutsList,
  SearchInputWithButton,
  UpcomingPayoutsList,
} from "../../components";
import TextField from '@mui/material/TextField';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import {useLoginContext} from "../../../context/authenticationContext";
import { PayoutsStyle } from "./Payouts.style";
import { Loading } from "../../../components";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
export default function Payouts() {
  const {state, dispatch} = useLoginContext();
  const [reserveEvent,setReserveEvent] = useState({
    reservations:[]

    
  })
  const [search,setSearch] = useState('')
  const [isLoading,setLoading] = useState(false)
  const [from, setFrom] = React.useState<Date>(
    new Date(0),
  );
  const [to, setTo] = React.useState<Date >(
    new Date(),
  );

  const handleChangeFrom = (newValue: Date |any) => {
    setFrom(newValue);
  };
  const handleChangeTo = (newValue:Date |any) =>{
    setTo(newValue)
  }
  useEffect(()=>{
    setLoading(true)
    const user: any = JSON.parse(localStorage.getItem("data") || "{}");
    axios.get(`/v1/reservation/${user.id}`,{
      headers: {Authorization: `Bearer ${state.authToken}`},
    }).then((response) => {
      setLoading(false)
      setReserveEvent(response.data);
    }).catch((err) => {
      setLoading(false)
  })
  },[])
    console.log(reserveEvent);
  return (
    <Dashboard>
      <PayoutsStyle>
        <DashboardHeader heading="Payouts" isLoading={isLoading} />
        <TabsStyle defaultActiveKey="1">
          <TabPaneStyle tab="Payouts" key="1">
            <div className="header-wrapper">
              <SearchInputWithButton
                setSearch={setSearch}
                search={search}
              />
              <Formik
                initialValues={{
                  status: "All",
                  startDate: "Select a date",
                  endDate: "Select a date",
                }}
                onSubmit={() => {}}
              >
                {() => (
                  <Form className="dropdowns-form">
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker
                              label="Start Date"
                              inputFormat="MM/dd/yyyy"
                              value={from}
                              onChange={handleChangeFrom}
                              renderInput={(params:any) => <TextField {...params} />}
                       />

                     <DesktopDatePicker
                              label="End Date"
                              inputFormat="MM/dd/yyyy"
                              value={to}
                              onChange={handleChangeTo}
                              renderInput={(params:any) => <TextField {...params} />}
                             />
                       </LocalizationProvider>
                  </Form>
                )}
              </Formik>
            </div>
            <div className="table-wrapper">
              <PayoutsList reserveEvent={reserveEvent} from={from} to={to} search={search} />
            </div>
          </TabPaneStyle>

          <TabPaneStyle tab="Upcoming Payouts" key="2">
            <div className="header-wrapper">
            <SearchInputWithButton
                setSearch={setSearch}
                search={search}
              />
              <Formik
                initialValues={{
                  status: "All",
                  startDate: "Select a date",
                  endDate: "Select a date",
                }}
                onSubmit={() => {}}
              >
                {() => (
                  <Form className="dropdowns-form">
                    {/* <SelectBox
                      name="status"
                      label="Status"
                      type="horizontal"
                      options={[{ key: "", value: "All" }]}
                    /> */}
                 <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker
                              label="Start Date"
                              inputFormat="MM/dd/yyyy"
                              value={from}
                              onChange={handleChangeFrom}
                              renderInput={(params:any) => <TextField {...params} />}
                       />

                     <DesktopDatePicker
                              label="End Date"
                              inputFormat="MM/dd/yyyy"
                              value={to}
                              onChange={handleChangeTo}
                              renderInput={(params:any) => <TextField {...params} />}
                             />
                       </LocalizationProvider>
                  </Form>
                )}
              </Formik>
            </div>
            <div className="table-wrapper">
              <UpcomingPayoutsList reserveEvent={reserveEvent} from={from} to={to} search={search} />
            </div>
          </TabPaneStyle>
        </TabsStyle>
      </PayoutsStyle>
    </Dashboard>
  );
}

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
import {useLoginContext} from "../../../context/authenticationContext";
import { PayoutsStyle } from "./Payouts.style";
import { Loading } from "../../../components";
export default function Payouts() {
  const {state, dispatch} = useLoginContext();
  const [reserveEvent,setReserveEvent] = useState()
  const [isLoading,setLoading] = useState(false)
  useEffect(()=>{
    setLoading(true)
    const user: any = JSON.parse(localStorage.getItem("data") || "{}");
    axios.get(`/v1/reservation/${user.id}`,{
      headers: {Authorization: `Bearer ${state.authToken}`},
    }).then((response) => {
      setLoading(false)
      //window.open(response.data.url, '_blank');
      setReserveEvent(response.data)
      //console.log("subsribe package", response.data.url);
    }).catch((err) => {
      setLoading(false)
  })
  },[])
  return (
    <Dashboard>
      <PayoutsStyle>
        <DashboardHeader heading="Payouts" isLoading={isLoading} />

        <TabsStyle defaultActiveKey="1">
          <TabPaneStyle tab="Payouts" key="1">
            <div className="header-wrapper">
              <SearchInputWithButton />
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
                    <SelectBox
                      name="status"
                      label="Status"
                      type="horizontal"
                      options={[{ key: "", value: "All" }]}
                    />
                    <SelectBox
                      name="startDate"
                      label="Start Date"
                      type="horizontal"
                      options={[{ key: "", value: "Select a date" }]}
                    />
                    <SelectBox
                      name="endDate"
                      label="End Date"
                      type="horizontal"
                      options={[{ key: "", value: "Select a Date" }]}
                    />
                  </Form>
                )}
              </Formik>
            </div>
            <div className="table-wrapper">
              <PayoutsList reserveEvent={reserveEvent}/>
            </div>
          </TabPaneStyle>

          <TabPaneStyle tab="Upcoming Payouts" key="2">
            <div className="header-wrapper">
              <SearchInputWithButton />
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
                    <SelectBox
                      name="status"
                      label="Status"
                      type="horizontal"
                      options={[{ key: "", value: "All" }]}
                    />
                    <SelectBox
                      name="startDate"
                      label="Start Date"
                      type="horizontal"
                      options={[{ key: "", value: "Select a date" }]}
                    />
                    <SelectBox
                      name="endDate"
                      label="End Date"
                      type="horizontal"
                      options={[{ key: "", value: "Select a Date" }]}
                    />
                  </Form>
                )}
              </Formik>
            </div>
            <div className="table-wrapper">
              <UpcomingPayoutsList reserveEvent={reserveEvent} />
            </div>
          </TabPaneStyle>
        </TabsStyle>
      </PayoutsStyle>
    </Dashboard>
  );
}

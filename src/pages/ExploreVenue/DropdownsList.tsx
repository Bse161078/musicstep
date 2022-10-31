import {Form, Formik} from "formik";
import React, {useEffect, useState} from "react";
import {MessageModal, SelectBox} from "../../components";
import {
    FilledButtonStyle,
    OutlineButtonStyle,
} from "../../styles/Common.style";

import {DropdownsListStyle} from "./ExploreVenue.style";
import axios from "axios";
import {useLoginContext} from "../../context/authenticationContext";
import {BillingInformationFormStyle} from "../../userDashboard/components/BillingInformationForm/BillingInformationForm.style";

export const DropdownsList = (props: any) => {
    const {filter, setVenues, setLoading, getEvents, getFilters} = props;
    const [clear, setClear] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState<any>(null);
    const {state, dispatch} = useLoginContext();
    const [isSuccessModalVisible, setSuccessModalVisible] = useState(false);

    const handleFilter = (value: any) => {
        let data: any = [];
        if (value["All Categories"]) {
            data = [{type: "tags", search: [value["All Categories"].data]}];
        }
        if (value["Genre"]) {
            if (data.length > 0) {
                let prevSearch = data[0].search;
                prevSearch.push(value["Genre"].data)
                data[0] = {...data[0], search: prevSearch};
            } else {
                data = [{type: "tags", search: [value["Genre"].data]}];
            }
        }
        if (value["Distance"]) {
            data.push({
                type: "distance",
                search: [
                    {
                        location: {latitude: value["Distance"].latitude, longitude: value["Distance"].longtitude},
                        value: parseInt((value["Distance"].data).split(" ")),
                    },
                ],
            })
        }  if (value["Timeframe"]) {
            if (value["Timeframe"].data === "Now") {
                data.push({type: "time", search: [{unit: "hours", value: 0}]});
            } else if ((value["Timeframe"].data).includes("Not now")) {
                data.push({type: "time", search: [{unit: "hours", value: 12}]});
            } else {
                data.push({type: "time", search: [{unit: "days", value: 7}]});
            }
        } if(value["Amenities"]) {
            data.push({type: "amenities", search: [value["Amenities"].data]});
        }

        if (data.length > 0) {
            setLoading(true);

            axios
                .post("/v1/filter/event", {filters: data})
                .then((response) => {
                    setLoading(false);
                    setVenues(response.data);
                })
                .catch((err) => {
                    setLoading(false);
                });
        }

    };


    useEffect(() => {
        const locallyStoredUser = JSON.parse(localStorage.getItem("data") || "{}");

        const filterData = locallyStoredUser.preferences;
        if (filterData && filterData.length > 0) {
            handleFilter(JSON.parse(filterData));
        }
    }, [])


    useEffect(()=>{
        if(selectedFilter){
            handleFilter(selectedFilter);
        }
    },[selectedFilter]);


    const clearFilter = () => {

        saveFilterPreferences(null);

        setTimeout(() => {
            setClear(false);
        }, 100);
    }


    const locallyStoredUser = JSON.parse(localStorage.getItem("data") || "{}");
    let prevFilter: any = locallyStoredUser.preferences;

    try {
        if (prevFilter && prevFilter.length > 0) {
            prevFilter = JSON.parse(prevFilter);
        }
    } catch (e) {
    }


    const saveFilterPreferences = async (preferences: any) => {
        try {
            setLoading(true);
            const response = await axios.put("/v1/users/preferences", {preferences},
                {headers: {Authorization: `Bearer ${state.authToken}`}});
            const locallyStoredUser = JSON.parse(localStorage.getItem("data") || "{}");
            locallyStoredUser.preferences = preferences;
            localStorage.setItem("data", JSON.stringify(locallyStoredUser));
            setLoading(false);
            if(preferences) setSuccessModalVisible(true);
        } catch (e) {
            setLoading(false);
        }
    }


    const saveSelectedFilter = (type: string, data: any) => {
        setSelectedFilter({...selectedFilter, ...prevFilter, [type]: data});
    }


    return (
        <DropdownsListStyle>
            {!clear && <Formik
                initialValues={{
                    categoriesType: "All Categories",
                    genre: "Genres",
                    distance: "Distance",
                    time: "Timeframe",
                    amenities: "Amenities",
                }}
                onSubmit={(values: any, {resetForm}) => {
                    resetForm({values: ""});
                }}
            >
                {(values: any, setFieldValue: any) => (
                    <Form
                        className="drodown-form-wrapper"
                        style={{flexFlow: "nowrap", overflowX: "auto", padding: "10px"}}
                    >
            <span>
              <SelectBox
                  name={prevFilter && prevFilter["All Categories"] ? prevFilter["All Categories"].data : "All Categories"}
                  setFieldValue={setFieldValue}
                  options={[{key: "", value: filter?.categories}]}
                  values={filter?.categories}
                  setVenues={setVenues}
                  clear={clear}
                  width={"large"}
                  setLoading={setLoading}
                  handleSelectBoxChange={(data) => saveSelectedFilter("All Categories", data)}
              />
            </span>
                        <span>
              <SelectBox
                  name={prevFilter && prevFilter["Genre"] ? prevFilter["Genre"].data : "Genre"}
                  setFieldValue={setFieldValue}
                  clear={clear}
                  options={[{key: "", value: filter?.liveStream}]}
                  values={filter?.liveStream}
                  setVenues={setVenues}
                  setLoading={setLoading}
                  width={"150px"}
                  setWidthManually={true}
                  handleSelectBoxChange={(data) => saveSelectedFilter("Genre", data)}
              />
            </span>
                        <span>
              <SelectBox
                  name={prevFilter && prevFilter["Distance"] ? prevFilter["Distance"].data : "Distance"}
                  setFieldValue={setFieldValue}
                  options={[{key: "", value: filter?.distance}]}
                  values={filter?.distance}
                  width={"large"}
                  setVenues={setVenues}
                  clear={clear}
                  setLoading={setLoading}
                  handleSelectBoxChange={(data) => saveSelectedFilter("Distance", data)}
              />
            </span>
                        <span>
              <SelectBox
                  name={prevFilter && prevFilter["Timeframe"] ? prevFilter["Timeframe"].data : "Timeframe"}
                  setFieldValue={setFieldValue}
                  options={[{key: "", value: filter?.timeFrame}]}
                  values={filter?.timeFrame}
                  setVenues={setVenues}
                  clear={clear}
                  setLoading={setLoading}
                  width={"large"}
                  handleSelectBoxChange={(data) => saveSelectedFilter("Timeframe", data)}
              />
            </span>

                        <span>
              <SelectBox
                  name={prevFilter && prevFilter["Amenities"] ? prevFilter["Amenities"].data : "Amenities"}
                  setFieldValue={setFieldValue}
                  options={[{key: "", value: filter?.amenities}]}
                  values={filter?.amenities}
                  setVenues={setVenues}
                  width={"large"}
                  clear={clear}
                  setLoading={setLoading}
                  handleSelectBoxChange={(data) => saveSelectedFilter("Amenities", data)}
              />
            </span>
                        <div>
              <OutlineButtonStyle
                  style={{
                      width: "120%",
                      marginTop: 5,
                      border: "white",
                      background: "#F7F7F7",
                      padding: "5px",
                  }}
                  type="submit"
                  onClick={() => {
                      setClear(true);
                      getEvents();
                      //setFieldValue(name)
                      getFilters();
                      clearFilter()
                  }}
              >
                Clear All
              </OutlineButtonStyle>
            </div>
                        <div>
              <FilledButtonStyle
                  style={{
                      marginTop: 5,
                      background: "#fff",
                      padding: "5px",
                      marginLeft:10,
                      color: "#100840",
                      border: "1px solid #100840",
                  }}
                  onClick={(e) => {
                      if (selectedFilter) {
                          saveFilterPreferences(JSON.stringify(selectedFilter));
                      }
                  }}
              >
                Save filter preferences
              </FilledButtonStyle>
            </div>
                    </Form>
                )}
            </Formik>}
            <MessageModal
                isModalVisible={isSuccessModalVisible}
                setIsModalVisible={setSuccessModalVisible}
                heading="Success"
                message="Preferences saved."
            />
        </DropdownsListStyle>
    );
};

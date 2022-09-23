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
    const [selectedFilter, setSelectedFilter] = useState(null);
    const {state, dispatch} = useLoginContext();
    const [isSuccessModalVisible, setSuccessModalVisible] = useState(false);

    const handleFilter = (value: any) => {
        setLoading(true);
        let data;
        if (value.key === "All Categories" || value.key === "genre") {
            data = [{type: "tags", search: [value.data]}];
        } else if (value.key === "distance") {
            data = [
                {
                    type: "distance",
                    search: [
                        {
                            location: {latitude: value.latitude, longitude: value.longtitude},
                            value: parseInt((value.data).split(" ")),
                        },
                    ],
                },
            ];
        } else if (value.key === "time") {
            if (value.data === "Now") {
                data = [{type: "time", search: [{unit: "hours", value: 0}]}];
            } else if ((value.data).includes("Not now")) {
                data = [{type: "time", search: [{unit: "hours", value: 12}]}];
            } else {
                data = [{type: "time", search: [{unit: "days", value: 7}]}];
            }
        } else {
            data = [{type: "amenities", search: [value.data]}];
        }

        axios
            .post("/v1/filter/event", {filters: data})
            .then((response) => {
                setLoading(false);
                setVenues(response.data);
            })
            .catch((err) => {
                setLoading(false);
            });
    };


    useEffect(() => {
        const locallyStoredUser=JSON.parse(localStorage.getItem("data") || "{}");

        const filterData = locallyStoredUser.preferences;
        if (filterData && filterData.length > 0) {
            handleFilter(JSON.parse(filterData));
        }
    }, [])

    const clearFilter = () => {
        let locallyStoredUser=JSON.parse(localStorage.getItem("data") || "{}");
        delete locallyStoredUser["preferences"];
        localStorage.removeItem("filter");
        localStorage.setItem("data",JSON.stringify(locallyStoredUser))
        setTimeout(() => {
            setClear(false);
        }, 100);
    }


    const locallyStoredUser=JSON.parse(localStorage.getItem("data") || "{}");
    let prevFilter: any = locallyStoredUser.preferences;

    try{
        if (prevFilter && prevFilter.length > 0) {
            prevFilter = JSON.parse(prevFilter);
        }
    }catch (e) {
    }


    const saveFilterPreferences = async (preferences: any) => {
        try {
            setLoading(true);
            const response = await axios.put("/v1/users/preferences", {preferences},
                {headers: {Authorization: `Bearer ${state.authToken}`}});
            const locallyStoredUser=JSON.parse(localStorage.getItem("data") || "{}");
            locallyStoredUser.preferences=preferences;
            localStorage.setItem("data",JSON.stringify(locallyStoredUser));
            setLoading(false);
            setSuccessModalVisible(true);
        } catch (e) {
            setLoading(false);
        }
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
                  name={prevFilter && prevFilter.key === "All Categories" ? prevFilter.data : "All Categories"}
                  setFieldValue={setFieldValue}
                  options={[{key: "", value: filter?.categories}]}
                  values={filter?.categories}
                  setVenues={setVenues}
                  clear={clear}
                  width={"large"}
                  setLoading={setLoading}
                  handleSelectBoxChange={(data) => setSelectedFilter(data)}
              />
            </span>
                        <span>
              <SelectBox
                  name={prevFilter && prevFilter.key === "Genre" ? prevFilter.data : "Genre"}
                  setFieldValue={setFieldValue}
                  clear={clear}
                  options={[{key: "", value: filter?.liveStream}]}
                  values={filter?.liveStream}
                  setVenues={setVenues}
                  setLoading={setLoading}
                  width={"150px"}
                  setWidthManually={true}
                  handleSelectBoxChange={(data) => setSelectedFilter(data)}
              />
            </span>
                        <span>
              <SelectBox
                  name={prevFilter && prevFilter.key === "Distance" ? prevFilter.data : "Distance"}
                  setFieldValue={setFieldValue}
                  options={[{key: "", value: filter?.distance}]}
                  values={filter?.distance}
                  width={"large"}
                  setVenues={setVenues}
                  clear={clear}
                  setLoading={setLoading}
                  handleSelectBoxChange={(data) => setSelectedFilter(data)}
              />
            </span>
                        <span>
              <SelectBox
                  name={prevFilter && prevFilter.key === "Timeframe" ? prevFilter.data : "Timeframe"}
                  setFieldValue={setFieldValue}
                  options={[{key: "", value: filter?.timeFrame}]}
                  values={filter?.timeFrame}
                  setVenues={setVenues}
                  clear={clear}
                  setLoading={setLoading}
                  width={"large"}
                  handleSelectBoxChange={(data) => setSelectedFilter(data)}
              />
            </span>

                        <span>
              <SelectBox
                  name={prevFilter && prevFilter.key === "Amenities" ? prevFilter.data : "Amenities"}
                  setFieldValue={setFieldValue}
                  options={[{key: "", value: filter?.amenities}]}
                  values={filter?.amenities}
                  setVenues={setVenues}
                  width={"large"}
                  clear={clear}
                  setLoading={setLoading}
                  handleSelectBoxChange={(data) => setSelectedFilter(data)}
              />
            </span>
                        <span>
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
            </span>
                        <span>
              <FilledButtonStyle
                  style={{
                      width: "120%",
                      marginTop: 5,
                      background: "#fff",
                      padding: "5px",
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
            </span>
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

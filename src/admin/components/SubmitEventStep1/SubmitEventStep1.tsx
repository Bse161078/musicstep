import React, {useEffect, useState} from "react";
import axios from "axios";
import {Form, Formik} from "formik";

import {
    InputBox,
    SelectBox,
    TimePickerModal,
    DatePickerModal,
} from "../../../components";
import {OutlineButtonStyle} from "../../../styles/Common.style";
import {EventManagmenPhotoScroller} from "../EventManagmenPhotoScroller";
import {SubmitEventStep1Style} from "./SubmitEventStep1.style";
import {DashboardHeader} from "..";
import {useHistory} from "react-router-dom";
import SelectSearch from "react-select-search";
import {EventFormValidationSchema} from "./validation";
import {useLoginContext} from "../../../context/authenticationContext";
import moment from "moment";
// import { initialValues } from "./initialvalues";
import {useEventContext} from "../../../context/eventContext";
import {Label} from "semantic-ui-react";

type SubmitEventStep1Props = {
    setCurrentStep: any;
    setEventData: any;
    eventData: any;
};

let formikForm: any;

const staticGenresList = ["Alternative", "Blues", "Classical", "Country/Folk", "Dance/Electronic", "Hip-Hop/Rap", "Jazz", "Latin", "Metal", "New Age",
    "Pop", "R&B", "Reggae", "Rock", "World"];

const staticAgeRestrictionList=["18+","21+","All ages"]

const SubmitEvent = (props: SubmitEventStep1Props) => {
    const {setCurrentStep, setEventData, eventData} = props;
    const [value, onChange] = useState("10:00");
    const history = useHistory();
    const {state} = useLoginContext();
    const EventStateContext = useEventContext();
    const [cities, setcities] = useState([]);
    const [states, setStates] = useState([]);
    const [organizersForDropDown, setOrganizersForDropDown] = useState([]);
    const [genreList, setGenreList] = useState(staticGenresList);

    const [description, setDescription] = useState("");
    const [organizers, setOrganizers] = useState(
        EventStateContext.state.organizersList
    );
    const [venues, setVenues] = useState([]);
    const [statesObj, setStatesObj] = useState([]);
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedState, setSelectedState] = useState("");
    const [selectedCountryIndex, setSelectedCountryIndex] = useState(0);
    const [selectedOrganizerId, setSelectedOrganizerId] = useState(
        EventStateContext.state.selectedOrganizerId
    );
    const [previewVenuePhoto, setPreviewVenuePhotoss] = useState(
        EventStateContext.state.previewVenuePhoto
    );
    const [
        previewVenuePhotoOfOrganizer,
        setPreviewVenuePhotosOfOrganizer,
    ] = useState([]);
    const [
        isVenuePhotoSameAsOrganizer,
        setIsVenuePhotoSameAsOrganizer,
    ] = useState(true);

    let additionalPhotoUpload: any = React.createRef();
    let submitRef: any = React.createRef();

    const [initialValues, setInitialValues] = useState({
        title: EventStateContext.state.title,
        startdate: EventStateContext.state.startdate,
        enddate: EventStateContext.state.enddate,
        startingTime: EventStateContext.state.startingTime,
        endingTime: EventStateContext.state.endingTime,
        country: EventStateContext.state.country,
        state: EventStateContext.state.state,
        city: EventStateContext.state.city,
        venue: EventStateContext.state.venue,
        organizer: EventStateContext.state.organizer,
        eventDescription: EventStateContext.state.eventDescription,
        eventPhotoSameAsOrganizerPhoto:
        EventStateContext.state.eventPhotoSameAsOrganizerPhoto,
        additionalPhotos: EventStateContext.state.additionalPhotos,
        genre: EventStateContext.state.genre,
        age_restriction:EventStateContext.state.age_restriction
    });

    ////////////// countrystatecity config ///////////////////////////
    let headers = new Headers();
    headers.append(
        "X-CSCAPI-KEY",
        "MWN2RzlpS0xhVHFTdzBUR3VMS0xoejRud0x5Qm94M1U5SjcxZ0U5Ng=="
    );

    let requestOptions: any = {
        method: "GET",
        headers: headers,
        redirect: "follow",
    };

    useEffect(() => {
        //get all countries from countrystatecity

        fetch("https://api.countrystatecity.in/v1/countries", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                const tempcountry = result.map((country: any) => {
                    return country.name;
                });
                setCountries(tempcountry);
            })
            .catch((error) => {
            });

        axios
            .get("/v1/organizer/All", {
                headers: {Authorization: `Bearer ${state.authToken}`},
            })
            .then((res) => {
                // setProfilesList(res.data);
                setOrganizers(res.data);
                const tempOrganizer = res.data.map((organizer: any) => {
                    return organizer.organizerName;
                });
                setOrganizersForDropDown(tempOrganizer);
            })
            .catch((error) => {
            });

        axios
            .get("/v1/venue/All", {
                headers: {Authorization: `Bearer ${state.authToken}`},
            })
            .then((res) => {
                setVenues(res.data);
            })
            .catch((error) => {
            });
    }, []);

    useEffect(() => {
        if (selectedCountry) {
            const countryId = countries.findIndex(
                (item: any) => item === selectedCountry
            );
            if (countryId) {
                setSelectedCountryIndex(countryId + 1);

                fetch(
                    `https://api.countrystatecity.in/v1/countries/${
                    countryId + 1
                        }/states`,
                    requestOptions
                )
                    .then((response) => response.json())
                    .then((result) => {
                        setStatesObj(result);
                        const tempState = result.map((country: any) => {
                            return country.name;
                        });
                        setStates(tempState);
                    })
                    .catch((error) => {
                    });
            }
        }
    }, [selectedCountry]);

    useEffect(() => {
        if (selectedState) {
            const stateObj: any = statesObj.find(
                (item: any) => item.name === selectedState
            );

            if (stateObj) {
                const stateId = stateObj.iso2;

                fetch(
                    `https://api.countrystatecity.in/v1/countries/${selectedCountryIndex}/states/${stateId}/cities`,
                    requestOptions
                )
                    .then((response) => response.json())
                    .then((result) => {
                        const tempCities = result.map((city: any) => {
                            return city.name;
                        });
                        setcities(tempCities);
                    })
                    .catch((error) => {
                    });
            }
        }
    }, [selectedState]);

    useEffect(() => {
        if (isVenuePhotoSameAsOrganizer && selectedOrganizerId) {
            const singleorganizer: any = organizers.find(
                (item: any) => item.id === selectedOrganizerId
            );

            // const additionalPhoto = singleorganizer?.additionalPhotosUrls;
            const additionalPhoto: [] = singleorganizer?.additionalPhotosUrls.map(
                (photo: any) => process.env.REACT_APP_BASE_URL + "/images/" + photo
            );

            setPreviewVenuePhotosOfOrganizer(additionalPhoto);
        }
    }, [isVenuePhotoSameAsOrganizer, selectedOrganizerId]);

    const handleAdditionalPhoto = () => {
        additionalPhotoUpload.current.click();
    };
    //

    const handleAdditionalPhotoUpload = async (event: any, form: any) => {
        const imageType = event.target.files[0].type;
        if (
            imageType === "image/jpeg" ||
            imageType === "image/png" ||
            imageType === "image/jpg" ||
            imageType === "image/svg"
        ) {
            let prevFiles = form.values.additionalPhotos;
            if (prevFiles) prevFiles.push(event.target.files[0]);
            else prevFiles = [event.target.files[0]];

            form.setFieldValue("additionalPhotos", prevFiles);
            formikForm = form;
            if (event.target.files) {
                const files = Array.from(prevFiles);
                Promise.all(
                    files.map((file: any) => {
                        return new Promise((resolve, reject) => {
                            const reader = new FileReader();
                            reader.addEventListener("load", (ev) => {
                                resolve(ev.target?.result);
                            });
                            reader.addEventListener("error", reject);
                            reader.readAsDataURL(file);
                        });
                    })
                ).then(
                    (images: any) => {
                        /* Once all promises are resolved, update state with image URI array */
                        setPreviewVenuePhotoss(images);
                    },
                    (error) => {
                        console.error(error);
                    }
                );
            }
        }
    };

    const handleFormSubmit = (e: any) => {
        const startDate = new Date(moment(e.startdate).format("YYYY-MM-DD") + "T" + e.startingTime + ":00");
        const endDate = new Date(moment(e.enddate).format("YYYY-MM-DD") + "T" + e.endingTime + ":00");

        EventStateContext.dispatch({
            type: "SAVE_EVENT",
            payload: {
                data: {...e, startDate, endDate},
                selectedOrganizerId: selectedOrganizerId,
                organizersList: organizers,
                previewVenuePhoto: previewVenuePhoto,
            },
        });

        const filteredEvent: any = venues.find(
            (v: any) => e.venue === v.name + " - " + v.location.address
        );
        const filteredOrganizer: any = organizers.find(
            (org: any) => e.organizer === org.organizerName
        );

        e.venue_id = filteredEvent.id;
        e.organizer_id = filteredOrganizer.id;

        setEventData({...eventData, ...e, startDate, endDate, eventDescription: description});
        setCurrentStep(2);
    };

    const onDeleteFile = (form: any, index: any) => {
        const tempPhotos = previewVenuePhoto;
        const tempFormPhotos = form.values.additionalPhotos;
        if (tempPhotos && tempPhotos.length > index) {
            tempPhotos.splice(index, 1);
            tempFormPhotos.splice(index, 1);
            setPreviewVenuePhotoss(tempPhotos);
            form.setFieldValue("additionalPhotos", tempFormPhotos);
        }
    };

    const filteredVenues = venues.map((venue: any) => {
        return venue.name + " - " + venue.location.address;
    });

    console.log("event context = ", EventStateContext)

    return (
        <SubmitEventStep1Style>
            <DashboardHeader
                heading="Submit an Event"
                backButtonText="Back To Events Management"
                handleSaveClick={() => {
                    submitRef.current.click();
                }}
                handleBackClick={() => {
                    history.push("/admin/events-management");
                }}
                saveButtonText="Next Step (1/2)"
                saveButtonWidth="190px"
            />
            <Formik
                initialValues={initialValues}
                onSubmit={handleFormSubmit}
                validationSchema={EventFormValidationSchema}
                enableReinitialize={true}
            >
                {(form) => (
                    <Form className="form-wrapper">
                        <div className="inputs-wrapper">
                            <InputBox
                                label="Event Title"
                                placeholder="Enter Event Title"
                                name="title"
                                width="640px"
                            />
                            {/* <InputBox label="Date" name="date" width="200px" /> */}
                            {/* <DatePickerModal /> */}

                            {/* <TimePicker onChange={(e: any) => onChange(e)} value={value} /> */}
                        </div>
                        <div className="dropdown-row-wrapper">
                            <span></span>
                            <span>
                <DatePickerModal
                    value={form.values.startdate}
                    onChange={(e: any) => {
                        form.setFieldValue("startdate", e);
                    }}
                    lable="Start Date"
                />
                                {form.touched.startdate && form.errors.startdate && (
                                    <span className="error-message">{form.errors.startdate}</span>
                                )}
              </span>
                            <span>
                <TimePickerModal
                    value={form.values.startingTime}
                    onChange={(e: any) => {
                        form.setFieldValue("startingTime", e);
                    }}
                    lable="Start Time"
                />
                                {form.touched.startingTime && form.errors.startingTime && (
                                    <span className="error-message">
                    {form.errors.startingTime}
                  </span>
                                )}
              </span>
                        </div>
                        <div className="dropdown-row-wrapper">
                            <span></span>

                            <span>
                <DatePickerModal
                    value={form.values.enddate}
                    onChange={(e: any) => {
                        form.setFieldValue("enddate", e);
                    }}
                    lable="End Date"
                />
                                {form.touched.enddate && form.errors.enddate && (
                                    <span className="error-message">{form.errors.enddate}</span>
                                )}
              </span>

                            <span>
                <TimePickerModal
                    value={form.values.endingTime}
                    onChange={(e: any) => {
                        form.setFieldValue("endingTime", e);
                    }}
                    lable="End Time"
                />
                                {form.touched.endingTime && form.errors.endingTime && (
                                    <span className="error-message">
                    {form.errors.endingTime}
                  </span>
                                )}
              </span>
                        </div>
                        {/* <div className="dropdown-row-wrapper">
             
             
          
            </div> */}
                        {/* <div className="error-row-wrapper">
              <span className="error-message">2</span>
              <span className="error-message">3</span>
            </div> */}
                        <div className="thirdrow-wrapper">
              <span>
                <SelectBox
                    // style={{ maxWidth: "100%" }}
                    name="venue"
                    label="Venue"
                    width="large"
                    defaultValue="Select a venue"
                    options={filteredVenues}
                    setFieldValue={form.setFieldValue}
                    // options={countries}
                    values={filteredVenues}
                />
                  {form.touched.venue && form.errors.venue && (
                      <span className="error-message">{form.errors.venue}</span>
                  )}
              </span>
                            {/* onClick go to add venue page */}
                            <OutlineButtonStyle
                                buttonType="light"
                                name="addvenue"
                                value="Add venue"
                                width="153px;"
                                // height="53px"
                                className="addvenue-btn"
                                type="button"
                                onClick={() => {
                                    EventStateContext.dispatch({
                                        type: "SAVE_EVENT",
                                        payload: {
                                            data: form.values,
                                            //////////////////////Below object properies are to presiste data on page
                                            selectedOrganizerId: selectedOrganizerId,
                                            organizersList: organizers,
                                            previewVenuePhoto: previewVenuePhoto,
                                        },
                                    });
                                    history.push("/admin/add-venueprofile");
                                }}
                                style={{width: "100%"}}
                            >
                                Add Venue
                            </OutlineButtonStyle>
                        </div>
                        <span>
              <SelectBox
                  name="organizer"
                  label="Organizer"
                  width="large"
                  defaultValue="Select an organizer"
                  options={organizersForDropDown}
                  setFieldValue={form.setFieldValue}
                  values={organizersForDropDown}
              />
                            {form.touched.organizer && form.errors.organizer && (
                                <span className="error-message">{form.errors.organizer}</span>
                            )}
            </span>
                        <span>
              <SelectBox
                  name="genre"
                  label="Genre"
                  width="large"
                  defaultValue="Select an genre"
                  options={genreList}
                  setFieldValue={form.setFieldValue}
                  values={genreList}
              />
                            {form.touched.genre && form.errors.genre && (
                                <span className="error-message">{form.errors.genre}</span>
                            )}
            </span>
                        <span>
              <SelectBox
                  name="age_restriction"
                  label="Age requirement"
                  width="large"
                  defaultValue="Select"
                  options={staticAgeRestrictionList}
                  setFieldValue={form.setFieldValue}
                  values={staticAgeRestrictionList}
              />
                            {form.touched.genre && form.errors.genre && (
                                <span className="error-message">{form.errors.genre}</span>
                            )}
            </span>

                        <div className="fourth-row-wrapper">
                            {/* <InputBox
                label="Event Description"
                name="eventDescription"
                width="1330px"
                placeholder="Write a short description about the event."
                setFieldValue={form.setFieldValue}
              /> */}
                            <Label className="mylabel">Event Description</Label>
                            <textarea
                                style={{width: "80%", marginTop: 10}}
                                placeholder="Write a short description about the event."
                                className="customTextare"
                                name="eventDescription"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            ></textarea>
                        </div>
                        {form.values.country !== selectedCountry &&
                        setSelectedCountry(form.values.country)}
                        {form.values.state !== selectedState &&
                        setSelectedState(form.values.state)}
                        {form.values.eventPhotoSameAsOrganizerPhoto !==
                        isVenuePhotoSameAsOrganizer &&
                        setIsVenuePhotoSameAsOrganizer(
                            form.values.eventPhotoSameAsOrganizerPhoto
                        )}
                        {form.values.organizer !== selectedOrganizerId &&
                        setSelectedOrganizerId(form.values.organizer)}

                        <EventManagmenPhotoScroller
                            setField={form.setFieldValue}
                            eventPhotoSameAsOrganizerPhoto={
                                form.values.eventPhotoSameAsOrganizerPhoto
                            }
                            previewVenuePhoto={previewVenuePhoto}
                            handleAdditionalPhoto={handleAdditionalPhoto}
                            previewVenuePhotoOfOrganizer={previewVenuePhotoOfOrganizer}
                            form={form}
                            onDeleteFile={onDeleteFile}
                        />
                        <input
                            type="submit"
                            value="Submit"
                            ref={submitRef}
                            style={{display: "none"}}
                            onClick={() => {
                            }}
                        />
                        <input
                            ref={additionalPhotoUpload}
                            type={"file"}
                            accept=".png, .jpg, .jpeg"
                            style={{display: "none"}}
                            onChange={(e) => handleAdditionalPhotoUpload(e, form)}
                            multiple
                        />
                    </Form>
                )}
            </Formik>
            {/* <EventManagmenPhotoScroller /> */}
        </SubmitEventStep1Style>
    );
};

export default SubmitEvent;

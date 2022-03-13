import React, { useEffect, useState } from "react";
import axios from "axios";
import { Form, Formik } from "formik";

import {
  InputBox,
  SelectBox,
  TimePickerModal,
  DatePickerModal,
} from "../../../components";
import { OutlineButtonStyle } from "../../../styles/Common.style";
import { EventManagmenPhotoScroller } from "../EventManagmenPhotoScroller";
import { SubmitEventStep1Style } from "./SubmitEventStep1.style";
import { DashboardHeader } from "..";
import { useHistory } from "react-router-dom";
import SelectSearch from "react-select-search";
import { EventFormValidationSchema } from "./validation";
import { useLoginContext } from "../../../context/authenticationContext";
import moment from "moment";
// import { initialValues } from "./initialvalues";
import { useEventContext } from "../../../context/eventContext";
type SubmitEventStep1Props = {
  setCurrentStep: any;
  setEventData: any;
  eventData: any;
};

const SubmitEvent = (props: SubmitEventStep1Props) => {
  const { setCurrentStep, setEventData, eventData } = props;
  const [value, onChange] = useState("10:00");
  const history = useHistory();
  const { state } = useLoginContext();
  const EventStateContext = useEventContext();
  const [cities, setcities] = useState([]);
  const [states, setStates] = useState([]);
  const [organizersForDropDown, setOrganizersForDropDown] = useState([]);
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
    date: EventStateContext.state.date,
    startingTime: EventStateContext.state.startingTime,
    endingTime: EventStateContext.state.endingTime,
    country: EventStateContext.state.country,
    state: EventStateContext.state.state,
    city: EventStateContext.state.city,
    venue: EventStateContext.state.venue,
    organizer: EventStateContext.state.organizer,
    eventDescription: EventStateContext.state.eventDescription,
    venuePhotoSameAsOrganizerPhoto:
      EventStateContext.state.venuePhotoSameAsOrganizerPhoto,
    additionalPhotos: EventStateContext.state.additionalPhotos,
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
          return { key: country.name, value: country.name };
        });
        setCountries(tempcountry);
      })
      .catch((error) => console.log("error", error));

    axios
      .get("/v1/organizer/All", {
        headers: { Authorization: `Bearer ${state.authToken}` },
      })
      .then((res) => {
        // setProfilesList(res.data);
        setOrganizers(res.data);
        const tempOrganizer = res.data.map((organizer: any) => {
          return { key: organizer.id, value: organizer.organizerName };
        });
        setOrganizersForDropDown(tempOrganizer);
      })
      .catch((error) => {
        console.log(error.response);
      });

    axios
      .get("/v1/venue/All", {
        headers: { Authorization: `Bearer ${state.authToken}` },
      })
      .then((res) => {
        // setProfilesList(res.data);
        const tempVenues = res.data.map((venue: any) => {
          return { key: venue.id, value: venue.location.address };
        });
        setVenues(tempVenues);
      })
      .catch((error) => {
        console.log(error.response);
      });

    // alert("Everytime ");
  }, []);

  useEffect(() => {
    if (selectedCountry) {
      const countryId = countries.findIndex(
        (item: any) => item.value === selectedCountry
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
              return { key: country.name, value: country.name };
            });
            setStates(tempState);
          })
          .catch((error) => console.log("error", error));
      }
    }
  }, [selectedCountry]);

  useEffect(() => {
    if (selectedState) {
      const stateObj: any = statesObj.find(
        (item: any) => item.name === selectedState
      );

      console.log(stateObj);
      if (stateObj) {
        const stateId = stateObj.iso2;

        fetch(
          `https://api.countrystatecity.in/v1/countries/${selectedCountryIndex}/states/${stateId}/cities`,
          requestOptions
        )
          .then((response) => response.json())
          .then((result) => {
            const tempCities = result.map((city: any) => {
              return { key: city.name, value: city.name };
            });
            setcities(tempCities);
          })
          .catch((error) => console.log("error", error));
      }
    }
  }, [selectedState]);

  useEffect(() => {
    if (isVenuePhotoSameAsOrganizer && selectedOrganizerId) {
      console.log(organizers);
      // alert(selectedOrganizerId);
      const singleorganizer: any = organizers.find(
        (item: any) => item.id === selectedOrganizerId
      );

      // const additionalPhoto = singleorganizer?.additionalPhotosUrls;
      const additionalPhoto: [] = singleorganizer?.additionalPhotosUrls.map(
        (photo: any) => process.env.REACT_APP_BASE_URL + "/" + photo
      );

      setPreviewVenuePhotosOfOrganizer(additionalPhoto);
    }
  }, [isVenuePhotoSameAsOrganizer, selectedOrganizerId]);

  const handleAdditionalPhoto = () => {
    additionalPhotoUpload.current.click();
  };
  //

  const handleAdditionalPhotoUpload = async (event: any, form: any) => {
    form.setFieldValue("additionalPhotos", event.target.files);
    if (event.target.files) {
      const files = Array.from(event.target.files);
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
  };

  const handleFormSubmit = (e: any) => {
    console.log(e);
    EventStateContext.dispatch({
      type: "SAVE_EVENT",
      payload: {
        data: e,
        selectedOrganizerId: selectedOrganizerId,
        organizersList: organizers,
        previewVenuePhoto: previewVenuePhoto,
      },
    });

    setEventData({ ...eventData, ...e });
    setCurrentStep(2);
  };
  console.log(EventStateContext.state);

  // const handleStartTime = (e: any, form: any) => {
  //   const timeForm = /^((1[0-2]|0?[1-9]):([0-5][0-9]) ?([AaPp][Mm]))$/;
  //   if (
  //     timeForm.test(form.values.endingTime) &&
  //     timeForm.test(e.target.value)
  //   ) {
  //     let beginningTime = moment(e.target.value, "h:mma");
  //     let endTime = moment(form.values.endingTime, "h:mma");

  //     console.log(beginningTime.isBefore(endTime));

  //     if (!beginningTime.isBefore(endTime)) {
  //       form.setFieldError(
  //         "endingTime",
  //         "End time should be greater than start time"
  //       );

  //       alert("Start");
  //     }
  //   }
  // };
  // const handleEndTime = (e: any, form: any) => {
  //   const timeForm = /^((1[0-2]|0?[1-9]):([0-5][0-9]) ?([AaPp][Mm]))$/;
  //   if (
  //     timeForm.test(form.values.startingTime) &&
  //     timeForm.test(e.target.value)
  //   ) {
  //     let beginningTime = moment(form.values.startingTime, "h:mma");
  //     let endTime = moment(e.target.value, "h:mma");

  //     console.log(beginningTime.isBefore(endTime));

  //     if (!beginningTime.isBefore(endTime)) {
  //       form.setFieldError(
  //         "endingTime",
  //         "End time should be greater than start time"
  //       );
  //     }
  //     alert("End");
  //   }
  // };
  // const isStartEndTimeValid = (
  //   startingTime: string,
  //   endingTime: string,
  //   form: any
  // ) => {
  //   console.log(startingTime, endingTime);
  //   var beginningTime = moment(startingTime, "h:mma");
  //   var endTime = moment(endingTime, "h:mma");
  //   console.log(beginningTime.isBefore(endTime));
  //   if (!beginningTime.isBefore(endTime)) {
  //     form.setErrors(
  //       "endingTime",
  //       "End time should be greater than start time"
  //     );
  //   }
  // };
  return (
    <SubmitEventStep1Style>
      <DashboardHeader
        heading="Submit An Event"
        backButtonText="Back To Events Management"
        handleSaveClick={() => {
          // setCurrentStep(2);
          submitRef.current.click();
        }}
        handleBackClick={() => {
          history.push("/admin/events-management");
        }}
        saveButtonText="Next Step(1/2)"
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
                placeholder="e.g. Eventbrite Music"
                name="title"
                width="640px"
              />
              {/* <InputBox label="Date" name="date" width="200px" /> */}
              {/* <DatePickerModal /> */}

              <span>
                <DatePickerModal
                  value={form.values.date}
                  onChange={(e: any) => {
                    console.log(typeof e);
                    form.setFieldValue("date", e);
                  }}
                  lable="Date"
                />
                {form.touched.date && form.errors.date && (
                  <span className="error-message">{form.errors.date}</span>
                )}
              </span>
              <span>
                <TimePickerModal
                  value={form.values.startingTime}
                  onChange={(e: any) => {
                    console.log(typeof e);
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

              <span>
                <TimePickerModal
                  value={form.values.endingTime}
                  onChange={(e: any) => {
                    console.log(typeof e);
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
              {/* <TimePicker onChange={(e: any) => onChange(e)} value={value} /> */}
            </div>
            <div className="dropdown-row-wrapper">
              <span>
                <SelectBox
                  width="350px"
                  name="country"
                  label="Country"
                  placeholder="Select Country"
                  options={countries}
                  defaultValue={form.values.country}
                  setFieldValue={form.setFieldValue}
                  // values={[{ key: "", value: "United States of America" }]}
                />
                {form.touched.country && form.errors.country && (
                  <span className="error-message">{form.errors.country}</span>
                )}
              </span>
              <span>
                <SelectBox
                  width="350px"
                  name="state"
                  label="State"
                  placeholder="Select State"
                  defaultValue={form.values.state}
                  options={states}
                  setFieldValue={form.setFieldValue}
                />
                {form.touched.state && form.errors.state && (
                  <span className="error-message">{form.errors.state}</span>
                )}
              </span>
              <span>
                <SelectBox
                  width="350px"
                  name="city"
                  label="City"
                  placeholder="Select City"
                  defaultValue={form.values.city}
                  options={cities}
                  setFieldValue={form.setFieldValue}
                />
                {form.touched.city && form.errors.city && (
                  <span className="error-message">{form.errors.city}</span>
                )}
              </span>
            </div>
            {/* <div className="error-row-wrapper">
              <span className="error-message">2</span>
              <span className="error-message">3</span>
            </div> */}
            <div className="thirdrow-wrapper">
              <span>
                <SelectBox
                  name="venue"
                  label="Venue"
                  width="large"
                  placeholder="Select a venue"
                  options={venues}
                  setFieldValue={form.setFieldValue}
                  // options={countries}
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
                height="53px"
                className="addvenue-btn"
                type="button"
                onClick={() => {
                  console.log(form.values);
                  // alert("add venue");
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
              >
                Add Venue
              </OutlineButtonStyle>
              <span>
                <SelectBox
                  name="organizer"
                  label="Organizer"
                  width="large"
                  placeholder="Select an organizer"
                  options={organizersForDropDown}
                  setFieldValue={form.setFieldValue}
                />
                {form.touched.organizer && form.errors.organizer && (
                  <span className="error-message">{form.errors.organizer}</span>
                )}
              </span>
            </div>
            <div className="fourth-row-wrapper">
              <InputBox
                label="Event Description"
                name="eventDescription"
                width="1330px"
                placeholder="Write a short description about the event."
                setFieldValue={form.setFieldValue}
              />
            </div>
            {form.values.country !== selectedCountry &&
              setSelectedCountry(form.values.country)}
            {form.values.state !== selectedState &&
              setSelectedState(form.values.state)}
            {form.values.venuePhotoSameAsOrganizerPhoto !==
              isVenuePhotoSameAsOrganizer &&
              setIsVenuePhotoSameAsOrganizer(
                form.values.venuePhotoSameAsOrganizerPhoto
              )}
            {form.values.organizer !== selectedOrganizerId &&
              setSelectedOrganizerId(form.values.organizer)}
            {console.log(form)}

            <EventManagmenPhotoScroller
              setField={form.setFieldValue}
              venuePhotoSameAsOrganizerPhoto={
                form.values.venuePhotoSameAsOrganizerPhoto
              }
              previewVenuePhoto={previewVenuePhoto}
              handleAdditionalPhoto={handleAdditionalPhoto}
              previewVenuePhotoOfOrganizer={previewVenuePhotoOfOrganizer}
            />
            <input
              type="submit"
              value="Submit"
              ref={submitRef}
              style={{ display: "none" }}
              onClick={() => {}}
            />
            <input
              ref={additionalPhotoUpload}
              type={"file"}
              style={{ display: "none" }}
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

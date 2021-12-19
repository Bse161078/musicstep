import React from "react";
import { SubmitEventStep1Style } from "./SubmitEventStep1.style";
import { Form, Formik } from "formik";
import { SubmitEvent1Header } from "..";
import { InputBox, SelectBox } from "../../../components";
import { OutlineButtonStyle } from "../../../styles/Common.style";
import { EventManagmenPhotoScroller } from "../EventManagmenPhotoScroller";

type SubmitEventStep1Props = { 
     setCurrentStep: any;
}

const SubmitEvent = (props: SubmitEventStep1Props ) => {
  const handleFormSubmit = (e: any) => {};
  return (
    <SubmitEventStep1Style>
      <SubmitEvent1Header setCurrentStep={props.setCurrentStep} />
      <Formik
        initialValues={{
          eventtitle: "",
        }}
        onSubmit={handleFormSubmit}
      >
        <Form className="form-wrapper">
          <div className="inputs-wrapper">
            <InputBox
              label="Event Title"
              placeholder="e.g. Eventbrite Music"
              name="eventtitle"
              width="640px"
            />
            <InputBox label="Date" name="Date" width="200px" />
            <InputBox
              label="Starting Time"
              name="Starting Time"
              width="200px"
            />
            <InputBox label="Ending Time" name="Ending Time" width="200px" />
          </div>
          <div className="dropdown-row-wrapper">
            <SelectBox
              width="350px"
              name="City"
              label="City"
              options={[{ key: "", value: "Miami" }]}
            />
            <SelectBox
              width="350px"
              name="State"
              label="State"
              options={[{ key: "", value: "Florida" }]}
            />
            <SelectBox
              width="350px"
              name="Country"
              label="Country"
              options={[{ key: "", value: "United States of America" }]}
            />
          </div>
          <div className="thirdrow-wrapper">
            <SelectBox
              name="venue"
              label="Status"
              width="large"
              options={[{ key: "", value: "United States of America" }]}
            />

            <OutlineButtonStyle
              buttonType="light"
              name="addvenue"
              value="Add venue"
              width="153px;"
              height="53px"
              className="addvenue-btn"
            >
              Add Venue
            </OutlineButtonStyle>
            <SelectBox
              name="Organizer"
              label="Organizer"
              width="large"
              options={[{ key: "", value: "Select an Organizer Profile" }]}
            />
          </div>
          <div className="fourth-row-wrapper">
            <InputBox
              label="Event Description"
              name="eventdescription"
              width="1330px"
              placeholder="Write a short description about the event."
            />
          </div>
        </Form>
      </Formik>
      <EventManagmenPhotoScroller />
    </SubmitEventStep1Style>
  );
};

export default SubmitEvent;

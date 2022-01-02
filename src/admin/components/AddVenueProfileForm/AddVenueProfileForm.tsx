import React, { useState } from "react";

import { Form, Formik } from "formik";

import { AddVenueProfileFormStyle } from "./AddVenueProfileForm.style";
import { Dashboard, UploadFile } from "..";
import { InputBox, InputCheckbox } from "../../../components";
import LabelWithTag from "../LabelWithTag/LabelWithTag";
import { MessageModal } from "../../../components";
import { policies } from "../../../mockData/policies";
import { amenties } from "../../../mockData/amenties";

import { DashboardHeader } from "..";
import { initialValues } from "./initialValues";

const AddVenueProfileForm = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const onSubmit = () => {};
  return (
    <>
      <Dashboard>
        <AddVenueProfileFormStyle>
          <DashboardHeader
            heading="Add Venue Profile"
            handleSaveClick={() => {
              setIsModalVisible(true);
            }}
            backButtonText="Back to Events Managment"
            handleBackClick={() => {
              // jump to event managment page
            }}
            handleCancelClick={() => {
              // jump to submit event step 1.
            }}
          />
          <div className="file-wrapper">
            <div className="child-Filewrapper">
              <div>
                <LabelWithTag label="Your logo" />
                <UploadFile />
              </div>
              <div>
                <LabelWithTag label="Your Cover Photo" />
                <UploadFile buttonType="large" />
              </div>
            </div>
            <div>
              <LabelWithTag
                label="Your Additinoal Photos"
                tagType="Recomended"
              />
              <UploadFile buttonType="large" />
            </div>
          </div>

          <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {() => (
              <Form className="form-wrapper">
                <div>
                  <LabelWithTag label="Category Tages" tagType="Recomended" />
                  <InputBox
                    radiusType="27px"
                    height="93px"
                    width="670px"
                    name="name"
                    placeholder="Enter Your name here"
                  />
                </div>
                <div>
                  <LabelWithTag
                    label="Venue Bio"
                    description="Describe who you are, the types of events you host, or your mission. The bio is displayed on your organizer profile."
                  />
                  <InputBox
                    radiusType="27px"
                    height="118px"
                    width="1380px"
                    name="name"
                    placeholder="Enter Your name here"
                  />
                </div>
                <div className="location-and-amenstiesWrapper">
                  <div className="location-wrapper">
                    <LabelWithTag
                      label="Location"
                      description="Guide attendees where the event is happening."
                    />
                    <InputBox
                      name="loaction"
                      placeholder="1020 NW 183rd St, Miami, Florida(FL), 33169"
                    />
                    <img
                      src="/images/explore-venue/map-2.png"
                      className="map"
                      alt="map"
                    />
                  </div>
                  <div className="amenties-wrapper">
                    <LabelWithTag
                      label="Amenities"
                      description="Help users know what to expect at your venue."
                      tagType="none"
                    />
                    <div className="list-wrapper">
                      {amenties.map((index) => {
                        return (
                          <InputCheckbox
                            name={index.name}
                            onClick={() => {}}
                            className=""
                            label={index.name}
                            isCorrectOption={true}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="saftey-policies-wrapper">
                  <LabelWithTag
                    label="Safety & Cleanliness"
                    description="Let members know what your Vaccination Policies are, if they need to bring proof, and how this impacts other measures (eg. if vaccinated members can attend without a mask)."
                    tagType="Recomended"
                  />
                  <div className="policy-list">
                    {policies.map((index) => {
                      return (
                        <InputCheckbox
                          name={index.name}
                          onClick={() => {}}
                          className=""
                          label={index.name}
                          isCorrectOption={true}
                        />
                      );
                    })}
                  </div>
                </div>
                <div className="socialMedia-wrapper">
                  <LabelWithTag
                    label="Social Media & Marketing Links"
                    description="Let attendees know how to connect with you."
                    tagType="Recomended"
                  />
                  <div className="socialLinks-wrapper">
                    <InputBox
                      name="social.phoneNumber"
                      placeholder="e.g. https://www.eventbritemusic.com/"
                      label="Phone Number"
                    />
                    <InputBox
                      name="social.facebook"
                      placeholder="e.g. https://www.eventbritemusic.com/"
                      label="FaceBook"
                    />
                    <InputBox
                      name="social.instagram"
                      placeholder="e.g. https://www.eventbritemusic.com/"
                      label="Instagram"
                    />
                    <InputBox
                      name="social.twitter"
                      placeholder="e.g. https://www.eventbritemusic.com/"
                      label="Twitter"
                    />
                    <InputBox
                      name="social.youtube"
                      label="Youtube"
                      placeholder="e.g. https://www.eventbritemusic.com/"
                    />
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </AddVenueProfileFormStyle>
      </Dashboard>
      <MessageModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        message="Venue profile has been added successfully."
      />
    </>
  );
};

export default AddVenueProfileForm;

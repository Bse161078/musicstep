import axios from "axios";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import { InputBox, InputCheckbox } from "../../../components";
import { useLoginContext } from "../../../context/authenticationContext";
import { OutlineButtonStyle } from "../../../styles/Common.style";
import { Switch } from "antd";
import { EditProfileFormStyle } from "./EditProfileForm.style";
import { PeopleWithMutualFreindsModal } from "../Modals";

const EditProfileForm = () => {
  const { state } = useLoginContext();
  const [isPublicProfileVisible, setPublicProfileVisible] = useState();
  const handleToggleChange = (checked: any) => {
    console.log(checked);
    setPublicProfileVisible(checked);
  };
  const handleEditProfile = (e: any) => {
    axios.put(
      "https://music-pass-backend.herokuapp.com/v1/users/updatePersonalInformation",
      {
        firstName: e.firstName,
        lastName: e.lastName,
        dob: e.dateOfBirth,
        email: e.email,
        phoneNumber: e.phone,
      },
      { headers: { Authorization: `Bearer ${state.authToken}` } }
    );
  };

  return (
    <>
      <EditProfileFormStyle>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            dateOfBirth: "",
            email: "",
            countryCode: "",
            phone: "",
            photo: "",
          }}
          onSubmit={handleEditProfile}
        >
          {() => (
            <Form className="form-wrapper">
              <div className="form-left">
                <div className="multi-column">
                  <InputBox label="First Name" name="firstName" />
                  <InputBox label="Last Name" name="lastName" />
                </div>

                <InputBox label="Date Of Birth" name="dateOfBirth" />
                <InputBox label="Email Address" name="email" />
                <div className="custom-columns">
                  <InputBox label="Country Code" name="countryCode" />
                  <InputBox label="Phone Number" name="phone" />
                </div>
                <InputCheckbox
                  name="phoneno"
                  className="dont-show-phone"
                  onClick={() => {}}
                  label="Don't show my phone number in public profile."
                  isCorrectOption={true}
                />
                <div className="public-info">
                  <h1>
                    Public Info
                    <Switch onChange={handleToggleChange} />
                  </h1>
                  <p className="red-text">
                    (Turning off this will not show your profile publicly in
                    "People With Mutual Events")
                  </p>
                  <p>
                    Your name, profile picture & phone number include in your
                    public info as well. Public info will be used for "People
                    With Mutual Events", where other people will able to see
                    your profile.
                  </p>
                </div>
                <div className="public-info">
                  <InputBox
                    label="Bio"
                    name="bio"
                    radiusType="27px"
                    height="74px"
                    placeholder="Dolor rem non inventore. Non rerum nostrum. Sit consectetur dolorem voluptatem sit dolorem. Deleniti vel sit dolorem illo sed culpa."
                  />
                </div>
                <div className="public-info column-3">
                  <InputBox
                    label="Instagram"
                    name="instagram"
                    placeholder="@instagram"
                  />
                  <InputBox
                    label="Facebook"
                    placeholder="@username"
                    name="facebook"
                  />
                  <InputBox
                    label="Twitter"
                    placeholder="@username"
                    name="twitter"
                  />
                </div>
                <div className="public-info">
                  <h1>
                    <InputCheckbox
                      name="phoneno"
                      onClick={() => {}}
                      className=""
                      label="Public My Next Reservation"
                      isCorrectOption={true}
                    />
                  </h1>
                  <p>
                    By checking this public will able see your next reservation
                    in People With Mutual Events. Also your name & picture will
                    be displayed in Guest List of that event.
                  </p>
                </div>
              </div>

              <div className="right-side">
                <div className="avatar-wrapper">
                  <img
                    src="/images/sample-image.webp"
                    alt="avatar"
                    className="avatar"
                  />
                  <OutlineButtonStyle width="250px" height="60px">
                    Change Photo
                  </OutlineButtonStyle>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </EditProfileFormStyle>
      <PeopleWithMutualFreindsModal
        isPublicProfileVisible={isPublicProfileVisible}
      />
    </>
  );
};

export default EditProfileForm;

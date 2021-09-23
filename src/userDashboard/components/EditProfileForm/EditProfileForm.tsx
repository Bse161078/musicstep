import { Form, Formik } from "formik";
import React from "react";
import { InputBox } from "../../../components";
import {
  FilledButtonStyle,
  OutlineButtonStyle,
} from "../../../styles/Common.style";
import { EditProfileFormStyle } from "./EditProfileForm.style";

const EditProfileForm = () => {
  return (
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
        onSubmit={() => {}}
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

            <FilledButtonStyle width="290px" height="60px" buttonType="dark">
              Save
            </FilledButtonStyle>
          </Form>
        )}
      </Formik>
    </EditProfileFormStyle>
  );
};

export default EditProfileForm;

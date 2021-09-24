import { Form, Formik } from "formik";
import React from "react";
import { InputBox } from "../../../components";
import { FilledButtonStyle } from "../../../styles/Common.style";

import { ChangePasswordFormStyle } from "./ChangePasswordForm.style";

const ChangePasswordForm = () => {
  return (
    <ChangePasswordFormStyle>
      <Formik
        initialValues={{
          currentPassword: "",
          newPassword: "",
          confirmPassword: "",
        }}
        onSubmit={()=>{}}
      >
        {() => (
          <Form className="form-wrapper">
            <InputBox label="Current Password" name="currentPassword" />
            <InputBox label="New Password" name="newPassword" />
            <InputBox label="Confirm Password" name="confirmPassword" />

            <FilledButtonStyle buttonType="dark" width="520px" height="60px">
              Change Password
            </FilledButtonStyle>
          </Form>
        )}
      </Formik>
    </ChangePasswordFormStyle>
  );
};

export default ChangePasswordForm;

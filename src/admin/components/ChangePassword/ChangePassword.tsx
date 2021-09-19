import { Form, Formik } from "formik";
import React from "react";
import { DashboardHeader } from "..";
import { InputBox } from "../../../components";
import { FilledButtonStyle } from "../../../styles/Common.style";

import { ChangePasswordStyle } from "./ChangePassword.style";

const ChangePassword = () => {
  const handleSubmit = () => {};

  return (
    <ChangePasswordStyle>
      <DashboardHeader heading="Change Password" />
      
      <Formik
        initialValues={{
          currentPassword: "",
          newPassword: "",
          confirmPassword: "",
        }}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className="change-password-form">
            <InputBox label="Current Password" name="currentPassword" />
            <InputBox label="New Password" name="newPassword" />
            <InputBox label="Confirm New Password" name="confirmPassword" />

            <FilledButtonStyle buttonType="dark">
              Change Password
            </FilledButtonStyle>
          </Form>
        )}
      </Formik>
    </ChangePasswordStyle>
  );
};

export default ChangePassword;

import { Form, Formik } from "formik";
import React from "react";
import { InputBox } from "..";
import {
  FilledButtonStyle,
  OutlineButtonStyle,
} from "../../styles/Common.style";

import { ResetPasswordFormStyle } from "./ResetPasswordForm.style";

type ResetPasswordFormProps = {
  setCurrentSection: any;
};

const ResetPasswordForm = (props: ResetPasswordFormProps) => {
  const { setCurrentSection } = props;
  return (
    <ResetPasswordFormStyle>
      <p className="description">Please enter and confirm your new password.</p>

      <Formik
        initialValues={{ newPassword: "", confirmPassword: "" }}
        onSubmit={() => {
          setCurrentSection("login");
        }}
      >
        {() => (
          <Form className="form-wrapper">
            <InputBox label="New Password" name="newPassword" />
            <InputBox
              label="Confirm New Password"
              name="Confirm New Password"
            />

            <FilledButtonStyle buttonType="dark" width="100%" height="60px">
              Reset Password
            </FilledButtonStyle>
          </Form>
        )}
      </Formik>

      <div className="form-footer">
        <p>Go back to</p>
        <OutlineButtonStyle width="100%" height="60px">
          Login Page
        </OutlineButtonStyle>
      </div>
    </ResetPasswordFormStyle>
  );
};

export default ResetPasswordForm;

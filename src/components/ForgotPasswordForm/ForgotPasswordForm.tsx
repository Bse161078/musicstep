import React, { useState } from "react";
import { Form, Formik } from "formik";

import { InputBox, MessageModal } from "..";
import { forgotPasswordInitialValues } from "./forgotInitialValues";
import {
  FilledButtonStyle,
  OutlineButtonStyle,
} from "../../styles/Common.style";
import { ForgotPasswordFormStyle } from "./ForgotPasswordForm.style";

type ForgotPasswordFormProps = {
  setCurrentSection: (data: string) => void;
};

const ForgotPasswordForm = (props: ForgotPasswordFormProps) => {
  const { setCurrentSection } = props;

  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleForgotSubmit = () => {
    setIsModalVisible(true);
  };

  const successModalClose = () => {
    setCurrentSection("reset-password");
    setIsModalVisible(false);
  };

  return (
    <ForgotPasswordFormStyle>
      <Formik
        enableReinitialize={true}
        initialValues={forgotPasswordInitialValues}
        onSubmit={handleForgotSubmit}
      >
        {({ values, setFieldValue }) => (
          <Form className="forgot-form-wrapper">
            <InputBox label="Email Address" name="email" />

            <FilledButtonStyle
              as="input"
              type="submit"
              value="Send Link"
              width="100%"
              height="60px"
            />
          </Form>
        )}
      </Formik>

      <p className="not-a-member">Go back to</p>
      <OutlineButtonStyle
        onClick={() => setCurrentSection("login")}
        width="100%"
        height="60px"
      >
        Login Page
      </OutlineButtonStyle>

      <a className="partner-login" href="/">
        Partner Dashboard Login
      </a>
      <MessageModal
        handleOkClick={successModalClose}
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        message="We have successfully sent your password reset link on your email address. Please open the link from your email to reset your password."
      />
    </ForgotPasswordFormStyle>
  );
};

export default ForgotPasswordForm;

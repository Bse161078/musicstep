import React, { useState } from "react";
import { Form, Formik } from "formik";
import axios from "axios";
import { InputBox, MessageModal, Loading } from "..";
import { forgotPasswordInitialValues } from "./forgotInitialValues";
import {
  FilledButtonStyle,
  OutlineButtonStyle,
} from "../../styles/Common.style";
import { ForgotPasswordFormStyle } from "./ForgotPasswordForm.style";
import { ForgotPasswordFormValidationSchema } from "./validation";
import { FormWrapper } from "../../components";
import { useHistory } from "react-router-dom";
type ForgotPasswordFormProps = {
  // setCurrentSection: (data: string) => void;
};

const ForgotPasswordForm = (props: ForgotPasswordFormProps) => {
  // const { setCurrentSection } = props;
  const history = useHistory();
  const [messageHeading, setMessageHeading] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [isModalVisible, setIsModalVisible] = useState(false);

  // const handleForgotSubmit = () => {
  //   setIsModalVisible(true);
  // };

  const successModalClose = () => {
    //   setCurrentSection("reset-password");

    messageHeading === "Success" && history.push("/");
    setIsModalVisible(false);
  };

  const handleForgotSubmit = (e: any) => {
    setLoading(true);
    axios
      .post("/v1/auth/forgot-password", {
        email: e.email,
      })
      .then((response) => {
        setLoading(false);
        setIsModalVisible(true);
        //  response.data.tokens.access.token
        // response.data.user
        setIsModalVisible(true);
        setMessageHeading("Success");
        setMessage(
          "We have successfully sent your password reset link on your email address. Please open the link from your email to reset your password."
        );
      })
      .catch((error) => {
        setMessage("Server Error. Please Try Again Later");
        setIsModalVisible(true);
        setMessageHeading("Error");
        console.log("errormessage",error)
        setLoading(false);
      });
  };

  return (
    <FormWrapper
      leftImage="/images/login/login-side.png"
      topHeading="Forgot Password?"
      formHeading="Request Password Reset"
    >
      {loading && <Loading />}
      <ForgotPasswordFormStyle>
        <p className="form-description">
          Enter the email address associated with your account and we'll send
          you a link to reset your password.
        </p>
        <Formik
          enableReinitialize={true}
          initialValues={forgotPasswordInitialValues}
          onSubmit={handleForgotSubmit}
          validationSchema={ForgotPasswordFormValidationSchema}
          validateOnChange={true}
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
          onClick={() => {
            history.push("/login");
          }}
          width="100%"
          height="60px"
        >
          Login Page
        </OutlineButtonStyle>

        <p
          className="partner-login"
          onClick={() => {
            history.push("/partner-login");
          }}
          style={{cursor:'pointer'}}
        >
          Partner Dashboard Login
        </p>
        <MessageModal
          handleOkClick={successModalClose}
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
          message={message}
          heading={messageHeading}
        />
      </ForgotPasswordFormStyle>
    </FormWrapper>
  );
};

export default ForgotPasswordForm;

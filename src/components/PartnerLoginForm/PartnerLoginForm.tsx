import { Form, Formik } from "formik";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { ForgotPasswordForm, InputBox,InputCheckbox, Loading } from "..";
import { FilledButtonStyle } from "../../styles/Common.style";

import { PartnerLoginFormStyle } from "./PartnerLoginForm.style";
import { PartnerLoginFormValidationSchema } from "./validation";
import { useLoginContext } from "../../context/authenticationContext";
import { addLoginInfoToStorage, getLoginInfoFromStorage } from "../../utils";
import axios from "axios";
import { LoginFormStyle } from "../LoginForm/LoginForm.style";

const PartnerLoginForm = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [forgotPass, setForgotPass] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");
  const [rememberPass,setRememberPass] = useState(false)
  const { state, dispatch } = useLoginContext();
  // if (state.authToken) {
  //   history.push("/admin/metrics");
  // }

  // if (
  //   state.data &&
  //   state.isLoggedIn &&
  //   // state.authToken &&
  //   state.data.role === "user" &&
  //   state.data.isOrganizer === false
  // ) {
  //   history.push("/explore-venue");
  // } else if (
  //   state.data &&
  //   state.isLoggedIn &&
  //   // state.authToken &&
  //   state.data.role === "admin" &&
  //   state.data.isOrganizer === false
  // ) {
  //   history.push("/admin/metrics");
  // }
  const handlePartnerLoginSubmit = (value: any) => {
    if (getLoginInfoFromStorage()) setLoading(true);
    axios
      .post("/v1/auth/partner-login", {
        email: value.userName,
        password: value.password,
      })
      .then((response) => {setLoading(false);
        if (value.rememberPassword) {
          addLoginInfoToStorage(
            value.userName,
            value.password,
            value.rememberPassword
          );
        }

        dispatch({
          type: "LOGIN_USER",
          payload: {
            isLoggedIn: true,
            token: response.data.tokens.access.token,
            data: response.data.partner,
          },
        });
        history.push("/admin/metrics");
      })
      .catch((error) => {
        setErrorMessage(error.response.data.message);
        setLoading(false);
      });
  };

  return (
    <LoginFormStyle>
    <PartnerLoginFormStyle>
      {loading && <Loading />}
      <h1 className="partner-login-heading">Welcome Back!</h1>

      <Formik
        initialValues={{ userName: "", password: "" }}
        onSubmit={(value) => handlePartnerLoginSubmit(value)}
        validationSchema={PartnerLoginFormValidationSchema}
        validateOnChange={true}
      >
        {({ values }) => (
          <Form className="partner-login-wrapper">
            <h2 className="partner-login-form-heading">
              Partner Dashboard Login
            </h2>
            <InputBox name="userName" label="Email" />
            <InputBox name="password" type="password" label="Password" />
            <div className="checkbox-wrapper">
              <InputCheckbox
                name="Remember Me"
                onClick={() =>{
                  setRememberPass(!rememberPass)
                }}
                 // setFieldValue("rememberPassword", !values.rememberPassword)
                
                className=""
                label="Remember Me"
              isCorrectOption={rememberPass}
              />

              <span
                className="forgot-password"
                onClick={() => {
                  history.push("/forgot-password");
                }}
              >
                Forgot Password?
              </span>
            </div>
            {errorMessage !== "" && (
              <p className="error-message">{errorMessage}</p>
            )}
            <FilledButtonStyle width="100%" height="60px">
              Login
            </FilledButtonStyle>
           
          </Form>
        )}
      </Formik>
    </PartnerLoginFormStyle>
    </LoginFormStyle>
  );
};

export default PartnerLoginForm;

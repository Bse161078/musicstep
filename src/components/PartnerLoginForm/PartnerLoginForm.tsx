import { Form, Formik } from "formik";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { InputBox, Loading } from "..";
import { FilledButtonStyle } from "../../styles/Common.style";

import { PartnerLoginFormStyle } from "./PartnerLoginForm.style";
import { PartnerLoginFormValidationSchema } from "./validation";
import { useLoginContext } from "../../context/authenticationContext";
import { addLoginInfoToStorage, getLoginInfoFromStorage } from "../../utils";
import axios from "axios";
const PartnerLoginForm = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const {
    state: { authToken },
    dispatch,
  } = useLoginContext();
  if (authToken) {
    history.push("/admin/metrics");
  }
  const handlePartnerLoginSubmit = (value: any) => {
    if (getLoginInfoFromStorage()) setLoading(true);
    axios
      .post("/auth/partner-login", {
        email: value.userName,
        password: value.password,
      })
      .then((response) => {
        console.log(response);
        setLoading(false);
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
          },
        });
        // history.push("/explore-venue")
        history.push("/admin/metrics");
      })
      .catch((error) => {
        setErrorMessage(error.response?.data.message);
        setLoading(false);
      });
  };

  return (
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
            <InputBox name="userName" label="Username" />
            <InputBox name="password" type="password" label="Password" />
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
  );
};

export default PartnerLoginForm;

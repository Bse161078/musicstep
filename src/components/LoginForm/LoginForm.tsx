import React, { useState } from "react";
import { Form, Formik } from "formik";
import axios from "axios";

import {
  FilledButtonStyle,
  OutlineButtonStyle,
} from "../../styles/Common.style";
import { InputBox, InputCheckbox, Loading } from "..";
import { Link, useHistory } from "react-router-dom";
import { useLoginContext } from "../../context/authenticationContext";
import { addLoginInfoToStorage, getLoginInfoFromStorage } from "../../utils";
import { LoginFormStyle } from "./LoginForm.style";

type LoginFormProps = {
  setCurrentSection: (data: string) => void;
};

const LoginForm = (props: LoginFormProps) => {
  const { setCurrentSection } = props;

  const [loading, setLoading] = useState(false)

  const history = useHistory();
  
  const {
    dispatch
  } = useLoginContext();

  const handleLoginSubmit = (e: any) => {
    setLoading(true);
    axios.post("https://music-pass-backend.herokuapp.com/v1/auth/login", {
      email: e.userName,
      password: e.password
    })
    .then((response) => {
      setLoading(false);
      if(e.rememberPassword) {
        addLoginInfoToStorage(e.userName, e.password, e.rememberPassword)
      }
      dispatch({
        type: "LOGIN_USER",
        payload: {
          isLoggedIn: true,
          token: response.data.tokens.access.token
        }
      })
      // history.push("/explore-venue")
      history.push("/dashboard/basic-info")
    })
    .catch((error) => {
      setLoading(false)
    })
    
  };
  console.log(getLoginInfoFromStorage().email)
  return (
    <LoginFormStyle>
      {
        loading && (
          <Loading />
        )
      }
      <Formik
        // enableReinitialize={true}
        initialValues={{
          userName: getLoginInfoFromStorage().email || "",
          password: getLoginInfoFromStorage().password || "",
          rememberPassword: getLoginInfoFromStorage().rememberPassword || false
      }}
        onSubmit={handleLoginSubmit}
      >
        {({ values, setFieldValue }) => (
          <Form className="login-form-wrapper">
            <InputBox label="Username" name="userName" />
            <InputBox type="password" label="Password" name="password" />

            <div className="checkbox-wrapper">
              <InputCheckbox
                name="rememberPassword"
                onClick={() => setFieldValue("rememberPassword", !values.rememberPassword)}
                className=""
                label="Remember Me"
                isCorrectOption={values.rememberPassword}
              />

              <span
                className="forgot-password"
                onClick={() => setCurrentSection("forgot-password")}
              >
                Forgot Password?
              </span>
            </div>

            <FilledButtonStyle width="100%" height="60px">
              Login
            </FilledButtonStyle>
          </Form>
        )}
      </Formik>

      <p className="not-a-member">Not a member yet?</p>

      <Link to="/free-trial">
        <OutlineButtonStyle width="100%" height="60px">
          Try For Free
        </OutlineButtonStyle>
      </Link>

      <a href="/partner-login" className="partner-login">
        Partner Dashboard Login
      </a>
    </LoginFormStyle>
  );
};

export default LoginForm;

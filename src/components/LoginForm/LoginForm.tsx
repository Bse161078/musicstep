import React from "react";
import { Form, Formik } from "formik";

import { LoginFormStyle } from "./LoginForm.style";
import {
  FilledButtonStyle,
  OutlineButtonStyle,
} from "../../styles/Common.style";
import { loginInitialValues } from "./intialValues";
import { InputBox, InputCheckbox } from "..";
import { Link, useHistory } from "react-router-dom";
import { useLoginContext } from "../../context/authenticationContext";
import axios from "axios";

type LoginFormProps = {
  setCurrentSection: (data: string) => void;
};

const LoginForm = (props: LoginFormProps) => {
  const { setCurrentSection } = props;

  const history = useHistory();
  
  const {
    state: { isLoggedIn },
    dispatch
  } = useLoginContext();

  const handleLoginSubmit = () => {
    axios.post("https://music-pass-backend.herokuapp.com/v1/auth/login", {
      email:"aqeeltest1@gmail.com",
      password: "Password@7722"
    })
    .then((response) => {
      console.log("RESPONSE: ", response)
      dispatch({
        type: "LOGIN_USER",
        payload: {
          isLoggedIn: true,
          token: response.data.tokens.access.token
        }
      })
      history.push("explore-venue")
    })
    .catch((error) => console.log("error: ", error))
    
  };
  return (
    <LoginFormStyle>
      <Formik
        // enableReinitialize={true}
        initialValues={loginInitialValues}
        onSubmit={handleLoginSubmit}
      >
        {({ values, setFieldValue }) => (
          <Form className="login-form-wrapper">
            <InputBox label="Username" name="userName" />
            <InputBox type="password" label="Password" name="password" />

            <div className="checkbox-wrapper">
              <InputCheckbox
                name="remember-password"
                onClick={() => {}}
                className=""
                label="Remember Me"
                isCorrectOption={false}
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

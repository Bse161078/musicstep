import React from "react";
import { Form, Formik } from "formik";

import { LoginFormStyle } from "./LoginForm.style";
import {
  FilledButtonStyle,
  OutlineButtonStyle,
} from "../../styles/Common.style";
import { loginInitialValues } from "./intialValues";
import { InputBox, InputCheckbox } from "..";
import { Link } from "react-router-dom";

type LoginFormProps = {
  setCurrentSection: (data: string) => void;
};

const LoginForm = (props: LoginFormProps) => {
  const { setCurrentSection } = props;

  const handleLoginSubmit = () => {
    console.log("Working");
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

            <Link to="/explore-venue">
              <FilledButtonStyle width="100%" height="60px">
                Login
              </FilledButtonStyle>
            </Link>
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

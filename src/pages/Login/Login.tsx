import React, { useMemo, useState } from "react";

import { ForgotPasswordForm, FormWrapper, LoginForm } from "../../components";
import { LoginStyle } from "./Login.style";

const LoginSection = ({ setCurrentSection }: any) => {
  return (
    <FormWrapper
      leftImage="/images/login/login-side.png"
      topHeading="Welcome Back!"
      formHeading="Login To Your Account"
    >
      <LoginForm setCurrentSection={setCurrentSection} />
    </FormWrapper>
  );
};

const ForgotPasswordSection = ({ setCurrentSection }: any) => {
  return (
    <FormWrapper
      leftImage="/images/login/login-side.png"
      topHeading="Forgot Password?"
      formHeading="Request Password Reset"
    >
      <ForgotPasswordForm setCurrentSection={setCurrentSection} />
    </FormWrapper>
  );
};

const ResetPasswordSection = ({ setCurrentSection }: any) => {
  return (
    <FormWrapper
      leftImage="/images/login/login-side.png"
      topHeading="Reset Password"
      formHeading="Hey John Doe!"
    >
      <LoginForm setCurrentSection={setCurrentSection} />
    </FormWrapper>
  );
};

export default function Login() {
  const [currentSection, setCurrentSection] = useState("login");

  const CurrentItem = useMemo(() => {
    switch (currentSection) {
      case "login":
        return <LoginSection setCurrentSection={setCurrentSection} />;
      case "forgot-password":
        return <ForgotPasswordSection setCurrentSection={setCurrentSection} />;
      case "reset-password":
        return <ResetPasswordSection setCurrentSection={setCurrentSection} />;
      default:
        return <LoginSection setCurrentSection={setCurrentSection} />;
    }
  }, [currentSection]);
  return (
    <LoginStyle>
      {CurrentItem}
    </LoginStyle>
  );
}

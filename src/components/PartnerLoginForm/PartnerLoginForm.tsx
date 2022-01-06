import { Form, Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import { InputBox } from "..";
import { FilledButtonStyle } from "../../styles/Common.style";

import { PartnerLoginFormStyle } from "./PartnerLoginForm.style";

const PartnerLoginForm = () => {
  const handlePartnerLoginSubmit = () => {};

  return (
    <PartnerLoginFormStyle>
      <h1 className="partner-login-heading">Welcome Back!</h1>

      <Formik
        initialValues={{ userName: "", password: "" }}
        onSubmit={handlePartnerLoginSubmit}
      >
        {({ values }) => (
          <Form className="partner-login-wrapper">
            <h2 className="partner-login-form-heading">
              Partner Dashboard Login
            </h2>
            <InputBox name="userName" label="Username" />
            <InputBox name="password" type="password" label="Password" />

            <Link to="/admin/metrics">
              <FilledButtonStyle width="100%" height="60px">
                Login
              </FilledButtonStyle>
            </Link>
          </Form>
        )}
      </Formik>
    </PartnerLoginFormStyle>
  );
};

export default PartnerLoginForm;

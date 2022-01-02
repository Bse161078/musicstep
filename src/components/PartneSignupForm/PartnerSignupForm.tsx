import React from "react";
import BecomePartnerLoginStyle from "./PartnerSignupForm.style";
import { InputBox } from "..";
import { Form, Formik } from "formik";
import { TrialFormWrapper } from "..";
import { FilledButtonStyle } from "../../styles/Common.style";
import { SelectBox } from "..";
import { Link, useHistory } from "react-router-dom";

const PartnerSignupForm = () => {
  const initialValues = {};
  const history = useHistory();

  const handlePartnerSignup = () => {
    history.push("/partner-detail");
  };

  return (
    <TrialFormWrapper heading="Become A Partner">
      <BecomePartnerLoginStyle>
        <Formik
          enableReinitialize={true}
          initialValues={{ initialValues }}
          onSubmit={handlePartnerSignup}
          validateOnChange={true}
        >
          {({ values }) => (
            <Form className="become-partner-login-form">
              <div className="inputbox-wrapper">
                <InputBox label="First Name" name="firstName" />
                <InputBox label="Last Name" name="lastName" />
              </div>
              <div>
                <InputBox
                  label="Email Address"
                  name="emailAddress"
                  placeholder="john.doe.34@gmail.com"
                />
              </div>
              <div className="selectbox-wrapper">
                <SelectBox
                  width="medium"
                  name="countryCode"
                  options={[{ key: "", value: "+44 (UK)" }]}
                  label="Country Code"
                />
                <InputBox
                  label="Phone Number"
                  placeholder="7700 779999"
                  name="phoneNumber"
                  width="330px"
                />
              </div>
              <FilledButtonStyle width="100%" height="60px">
                SignUp For Free
              </FilledButtonStyle>
              <div className="footer-wrapper">
                <h3 className="already-text">
                  Already have an account?{" "}
                  <span className="login-link-text">
                    <Link to="/partner-login  ">Login</Link>
                  </span>
                </h3>
                <p className="foooter-text">
                  We'll use the information you submit to tell you about
                  partnership opportunities and provide other updates. By
                  submitting this form, you agree to the{" "}
                  <span className="terms-text">
                    Terms of Use & Privacy Policy.
                  </span>
                </p>
              </div>
              <p className="Support">Support</p>
            </Form>
          )}
        </Formik>
      </BecomePartnerLoginStyle>
    </TrialFormWrapper>
  );
};

export default PartnerSignupForm;

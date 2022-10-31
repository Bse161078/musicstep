import React, { useState } from "react";
import BecomePartnerLoginStyle from "./PartnerSignupForm.style";
import { InputBox } from "..";
import { Form, Formik } from "formik";
import { TrialFormWrapper } from "..";
import { FilledButtonStyle } from "../../styles/Common.style";
import { SelectBox } from "..";
import { Link, useHistory } from "react-router-dom";
import { PartnerSignupFormValidationSchema } from "./validation";
import axios from "axios";
import { usePartnerContext } from "../../context/partnerContext ";
import PhoneInput from "react-phone-input-2";
const PartnerSignupForm = () => {
  const { state, dispatch } = usePartnerContext();
  const [errorMessage, setErrorMessage] = useState("");
  const initialValues = {
    firstName: state.firstName,
    lastName: state.lastName,
    emailAddress: state.emailAddress,
    countryCode: state.countryCod,
    phoneNumber: state.phoneNumber,
  };
  const history = useHistory();

  const handlePartnerSignup = (value: any) => {
    axios
      .post(`/v1/partners`, {
        email: value.emailAddress,
        firstName: value.firstName,
        lastName: value.lastName,
        phoneNumber: value.phoneNumber,
      })
      .then((res) => {
        // setContinueModal(true);
        dispatch({
          type: "SUBMIT_GENERAL_INFO",
          payload: {
            id: res.data.id,
            firstName: value.firstName,
            lastName: value.lastName,
            emailAddress: value.emailAddress,
            countryCode: value.countryCod,
            phoneNumber: value.phoneNumber,
          },
        });

        history.push(`/partner-detail/${res.data.id}`);
      })
      .catch((error) => {
        setErrorMessage(error.response?.data.message);
      });
  };

  return (
    <TrialFormWrapper heading="Become A Partner">
      <BecomePartnerLoginStyle>
        <Formik
          enableReinitialize={true}
          initialValues={initialValues}
          onSubmit={(value) => handlePartnerSignup(value)}
          validationSchema={PartnerSignupFormValidationSchema}
          validateOnChange={true}
        >
          {(form) => (
            <Form className="become-partner-login-form">
              <div className="inputbox-wrapper">
                <InputBox
                  label="First Name"
                  name="firstName"
                  value={form.values.firstName}
                />
                <InputBox
                  label="Last Name"
                  name="lastName"
                  value={form.values.lastName}
                />
              </div>
              <div>
                <InputBox
                  label="Email Address"
                  name="emailAddress"
                  placeholder="john.doe.34@gmail.com"
                  value={form.values.emailAddress}
                />
                {errorMessage !== "" && (
                  <p className="error-message">{errorMessage}</p>
                )}
              </div>
              {/* <div className="selectbox-wrapper">
                <SelectBox
                  width="medium"
                  name="countryCode"
                  options={[{ key: "+92", value: "+92" }]}
                  label="Country Code"
                  setFieldValue={form.setFieldValue}
                />
                <InputBox
                  label="Phone Number"
                  q
                  placeholder="7700 779999"
                  name="phoneNumber"
                  width="330px"
                  value={form.values.phoneNumber}
                />
              </div> */}

              <div className="input-wrapper">
                <div className="input-wrapper-headings">
                  <span className="countryCode">Country Code</span>{" "}
                  <span>Phone Number</span>
                </div>
                <div className="input-wrapper-phone">
                  <PhoneInput
                    country={"us"}
                    value={form.values.phoneNumber}
                    onChange={(phone) => {
                      form.setFieldValue("phoneNumber", phone.toString());
                    }}
                  />
                </div>
                <div className="input-wrapper-phone-error">
                  {form.errors.phoneNumber}
                </div>
              </div>
              <FilledButtonStyle width="100%" height="60px">
                Sign up For Free
              </FilledButtonStyle>
              <div className="footer-wrapper">
                <h3 className="already-text">
                  Already have an account?{" "}
                  <span className="login-link-text" style={{cursor:'pointer'}} onClick={()=>{
                    history.push('/partner-login')
                  }}>
                      Login
                  </span>
                </h3>
                <p className="foooter-text">
                  We'll use the information you submit to tell you about
                  partnership opportunities and provide other updates. By
                  submitting this form, you agree to the{" "}
                  <span className="terms-text">
                      <a href={"partner-terms"}>Partner Terms and Conditions</a>.
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

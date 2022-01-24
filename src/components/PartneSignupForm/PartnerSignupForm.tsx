import React from "react";
import BecomePartnerLoginStyle from "./PartnerSignupForm.style";
import { InputBox } from "..";
import { Form, Formik } from "formik";
import { TrialFormWrapper } from "..";
import { FilledButtonStyle } from "../../styles/Common.style";
import { SelectBox } from "..";
import { Link, useHistory } from "react-router-dom";
import { PartnerSignupFormValidationSchema } from "./validation";
import axios from "axios";

const PartnerSignupForm = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    emailAddress: "",
    countryCode: "",
    phoneNumber: "",
  };
  const history = useHistory();

  const handlePartnerSignup = (value: any) => {
    console.log(value);
    console.log(value.countryCode + parseInt(value.phoneNumber));

    axios
      .post(`/partners`, {
        email: value.emailAddress,
        firstName: value.firstName,
        lastName: value.lastName,
        phoneNumber: value.countryCode + parseInt(value.phoneNumber),
      })
      .then((res) => {
        // setContinueModal(true);
        // dispatch({
        //   type: "SUBMIT_GENERAL_INFO",
        //   payload: {
        //     firstName: e.firstName,
        //     lastName: e.lastName,
        //     dob: e.dob,
        //     phoneNumber: e.phoneNumber,
        //     email: e.email,
        //   },
        // });
        console.log(res);
        if (res.data.isVerified === true) {
          // setContinueModal(true);
        }
        history.push("/partner-detail");
      })
      .catch((error) => {
        // setErrorMessage(error.response?.data.message);
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
          {({ values, setFieldValue }) => (
            <Form className="become-partner-login-form">
              <div className="inputbox-wrapper">
                <InputBox
                  label="First Name"
                  name="firstName"
                  value={values.firstName}
                />
                <InputBox
                  label="Last Name"
                  name="lastName"
                  value={values.lastName}
                />
              </div>
              <div>
                <InputBox
                  label="Email Address"
                  name="emailAddress"
                  placeholder="john.doe.34@gmail.com"
                  value={values.emailAddress}
                />
              </div>
              {console.log(values)}
              <div className="selectbox-wrapper">
                <SelectBox
                  width="medium"
                  name="countryCode"
                  options={[{ key: "+92", value: "+92" }]}
                  label="Country Code"
                  setFieldValue={setFieldValue}
                />
                <InputBox
                  label="Phone Number"
                  q
                  placeholder="7700 779999"
                  name="phoneNumber"
                  width="330px"
                  value={values.phoneNumber}
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

import axios from "axios";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { InputBox, Loading, SelectBox, TrialFormWrapper } from "..";
import { useUserContext } from "../../context/userContext";
import { FilledButtonStyle } from "../../styles/Common.style";
import { RedeemOfferFormStyle } from "./RedeemOfferForm.style";

type TrailSetPasswordProps = {
  setCurrentForm: (data: string) => void;
};

const RedeemOfferForm = (props: TrailSetPasswordProps) => {
  const { setCurrentForm } = props;

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const {
    state: { id },
    dispatch,
  } = useUserContext();

  const handleSetPasswordSubmit = (e: any) => {
    setLoading(true);

    //d
    axios
      .patch(`/v1/users/createPhoneNumber/${id}`, {
        phoneNumber: `${e.phoneNumber}`,
      })
      .then((response) => {
        setLoading(false);
        dispatch({
          type: "SUBMIT_PHONE_NUMBER",
          payload: {
            phoneNumber: `${e.phoneNumber}`,
          },
        });
        setCurrentForm("redeem-offer-verify");
      })
      .catch((error) => {
        setErrorMessage(error.message);
        setLoading(false);
      });
  };
  return (
    <TrialFormWrapper heading="Redeem Your Offer">
      {loading && <Loading />}

      <RedeemOfferFormStyle>
        <h3 className="steps-count">Step 1 of 2</h3>

        <h4 className="verify-yourself">Verify Yourself</h4>
        <h3 className="form-wrapper-heading">
          Please enter your phone number and we'll send you a verification code
          to your account.
        </h3>
        <Formik
          initialValues={{
            countryCode: "",
            phoneNumber: "",
          }}
          onSubmit={handleSetPasswordSubmit}
        >
          {(form) => (
            <Form className="set-password-wrapper">
              {/* <div className="input-wrapper">
                <SelectBox
                  label="Country Code"
                  name="countryCode"
                  options={[{ key: "+92", value: "+92" }]}
                  setFieldValue={setFieldValue}
                />
            
                <InputBox label="Phone Number" name="phoneNumber" />
                {errorMessage !== "" && (
                  <p className="error-message">{errorMessage}</p>
                )}
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
                  {errorMessage !== "" && (
                    <p className="error-message">{errorMessage}</p>
                  )}
                </div>
              </div>

              <p className="standard-message">
                Standard message and data rates may apply.
              </p>

              <FilledButtonStyle width="100%" height="60px">
                Continue
              </FilledButtonStyle>
            </Form>
          )}
        </Formik>

        <p className="info-details">
          We need to verify using your phone number because we only allow one
          account per person
        </p>

        <p className="info-footer-heading">
            <a href={"help-center"}><span>Questions or Need Help?</span></a>
        </p>
      </RedeemOfferFormStyle>
    </TrialFormWrapper>
  );
};

export default RedeemOfferForm;

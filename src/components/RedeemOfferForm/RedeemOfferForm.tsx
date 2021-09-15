import { Form, Formik } from "formik";
import React from "react";

import { InputBox, TrialFormWrapper } from "..";
import { FilledButtonStyle } from "../../styles/Common.style";
import { RedeemOfferFormStyle } from "./RedeemOfferForm.style";

type TrailSetPasswordProps = {
  setCurrentForm: (data: string) => void;
};

const RedeemOfferForm = (props: TrailSetPasswordProps) => {
  const { setCurrentForm } = props;

  const handleSetPasswordSubmit = () => {
    setCurrentForm("redeem-offer-verify");
  };
  return (
    <TrialFormWrapper heading="Redeem Your Offer">
      <RedeemOfferFormStyle>
        <h3 className="steps-count">Step 1 of 2</h3>

        <h4 className="verify-yourself">Verify Yourself</h4>
        <h3 className="form-wrapper-heading">
          Please enter your phone number and we'll send you a verification code
          to your account.
        </h3>
        <Formik
          initialValues={{
            password: "",
            confirmPassword: "",
          }}
          onSubmit={handleSetPasswordSubmit}
        >
          {({ values }) => (
            <Form className="set-password-wrapper">
              <div className="input-wrapper">
                <InputBox label="Country Code" name="countryCode" />
                <InputBox label="Phone Number" name="phoneNumber" />
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
          <span>Questions or Need Help?</span>
        </p>
      </RedeemOfferFormStyle>
    </TrialFormWrapper>
  );
};

export default RedeemOfferForm;

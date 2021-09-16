import { Form, Formik } from "formik";
import React from "react";

import { InputBox, TrialFormWrapper } from "..";
import {
  FilledButtonStyle,
  OutlineButtonStyle,
} from "../../styles/Common.style";
import { RedeemOfferStep2FormStyle } from "./RedeemOfferStep2Form.style";

type TrailSetPasswordProps = {
  setCurrentForm: (data: string) => void;
};

const RedeemOfferStep2Form = (props: TrailSetPasswordProps) => {
  const { setCurrentForm } = props;

  const handleSetPasswordSubmit = () => {
    setCurrentForm("set-password");
  };

  const handleChangeButtonClick = () => {
    setCurrentForm("redeem-offer")
  }
  return (
    <TrialFormWrapper heading="Redeem Your Offer">
      <RedeemOfferStep2FormStyle>
        <h3 className="steps-count">Step 1 of 2</h3>

        <h4 className="verify-yourself">Verify Yourself</h4>
        <h3 className="form-wrapper-heading">
          Please enter the 4-digit code on your phone now.
          <br />
          Code sent on: +44 7700 900077
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
                <InputBox name="digit1" />
                <InputBox name="digit2" />
                <InputBox name="digit3" />
                <InputBox name="digit4" />
              </div>

              <FilledButtonStyle width="100%" height="60px">
                Continue
              </FilledButtonStyle>
            </Form>
          )}
        </Formik>

        <p className="info-details">Didn't receive a code?</p>
        <OutlineButtonStyle onClick={handleChangeButtonClick}>Change Number</OutlineButtonStyle>
        <OutlineButtonStyle>Resend Code</OutlineButtonStyle>
        <p className="info-details">
          We need to verify using your phone number because we only allow one
          account per person
        </p>
        <p className="info-footer-heading">
          <span>Questions or Need Help?</span>
        </p>
      </RedeemOfferStep2FormStyle>
    </TrialFormWrapper>
  );
};

export default RedeemOfferStep2Form;

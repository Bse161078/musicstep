import { Form, Formik } from "formik";
import React, { useState } from "react";

import { InputBox, MessageModal, TrialFormWrapper } from "..";
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

  const [isCodeSend, setCodeSend] = useState(false);
  const [isContinueModal, setContinueModal] = useState(false);

  const handleSetPasswordSubmit = () => {
    setContinueModal(true);
  };

  const handleChangeButtonClick = () => {
    setCurrentForm("redeem-offer");
  };
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

        <div className="buttons-wrapper">
          <OutlineButtonStyle
            width="250px"
            height="60px"
            onClick={handleChangeButtonClick}
          >
            Change Number
          </OutlineButtonStyle>
          <OutlineButtonStyle
            width="250px"
            height="60px"
            onClick={() => {
              setCodeSend(true);
            }}
          >
            Resend Code
          </OutlineButtonStyle>
        </div>
        <p className="info-details">
          We need to verify using your phone number because we only allow one
          account per person
        </p>
        <p className="info-footer-heading">
          <span>Questions or Need Help?</span>
        </p>
      </RedeemOfferStep2FormStyle>

      <MessageModal
        type="light"
        isModalVisible={isCodeSend}
        setIsModalVisible={setCodeSend}
        message="4-digit code has been successfully sent to your phone number again."
      />

      <MessageModal
        type="light"
        isModalVisible={isContinueModal}
        setIsModalVisible={setContinueModal}
        message="You have been verified successfully."
        handleOkClick={() => {
          setCurrentForm("trial-billing-information");
        }}
        buttonText="Continue"
      />
    </TrialFormWrapper>
  );
};

export default RedeemOfferStep2Form;

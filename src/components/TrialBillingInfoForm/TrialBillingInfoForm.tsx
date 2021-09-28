import { Form, Formik } from "formik";
import React, { useState } from "react";
import { CongratulationsModal, InputBox } from "..";
import { FilledButtonStyle } from "../../styles/Common.style";

import { TrialBillingInfoFormStyle } from "./TrialBillingInfoForm.style";

const TrialBillingInfoForm = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleFormSubmit = () => {
    setIsModalVisible(true);
  };

  return (
    <TrialBillingInfoFormStyle>
      <h3 className="form-heading">Save Your Billing Information</h3>
      <p className="form-info">Why do you need my billing info?</p>

      <Formik
        initialValues={{ nameOnCard: "", cardNumber: "", date: "", cvc: "" }}
        onSubmit={handleFormSubmit}
      >
        {() => (
          <Form className="form-wrapper">
            <InputBox label="Name On Card" name="nameOnCard" />
            <InputBox label="Card Number" name="cardNumber" />

            <div className="multi-column">
              <InputBox label="Date" name="date" />
              <InputBox label="CVC" name="cvc" />
            </div>

            <p className="gift-code">I have a gift code</p>

            <p className="description">
              By clicking the button below, you agree to the Terms, and your
              free 14 days 15-credit trial will begin. If you don't cancel
              before the trial ends, you'll automatically be charged for a
              full-priced monthly credit plan (currently $79 + any tax for 38
              credits per month), until you cancel or change your plan. Cancel
              anytime in Settings to avoid renewal. Fees apply for reservations
              missed or canceled late. No refunds. New members only. Inventory
              varies per location and may be limited during trial. Privacy
              Notice applies.
            </p>

            <FilledButtonStyle width="100%" height="60px">
              Redeem Now
            </FilledButtonStyle>
          </Form>
        )}
      </Formik>

      <CongratulationsModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
    </TrialBillingInfoFormStyle>
  );
};

export default TrialBillingInfoForm;

import { Form, Formik } from "formik";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { InputBox } from "..";
import { FilledButtonStyle } from "../../styles/Common.style";
import CongratulationsModals from "../CongratulationsModals/CongratulationsModals";

import { ProcessPaymentFormStyle } from "./ProcessPaymentForm.style";

const ProcessPaymentForm = () => {
  const [isCongratulationsVisible, setCongratulationsVisible] = useState(false);
  
  const history = useHistory();

  const handleCongratulationsButtonClick = () => {
    history.push('/explore-venue')
    setCongratulationsVisible(true)
  }

  return (
    <ProcessPaymentFormStyle>
      <h3 className="form-heading">Process Payment</h3>

      <Formik
        initialValues={{ nameOnCard: "", cardNumber: "", date: "", cvc: "" }}
        onSubmit={() => {setCongratulationsVisible(true)}}
      >
        {() => (
          <Form className="form-wrapper">
            <InputBox label="Name On Card" name="nameOnCard" />
            <InputBox label="Card Number" name="cardNumber" />
            <InputBox label="Date" name="date" />
            <InputBox label="CVC" name="cvc" />

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
              Proceed To Payment
            </FilledButtonStyle>
          </Form>
        )}
      </Formik>
      <CongratulationsModals
        isModalVisible={isCongratulationsVisible}
        setIsModalVisible={setCongratulationsVisible}
        message="You are now a member of MusicPass."
        handleButtonClick={handleCongratulationsButtonClick}
      />
    </ProcessPaymentFormStyle>
  );
};

export default ProcessPaymentForm;

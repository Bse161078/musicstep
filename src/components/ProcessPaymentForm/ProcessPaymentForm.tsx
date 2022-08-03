import { Form, Formik } from "formik";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { InputBox } from "..";
import { FilledButtonStyle } from "../../styles/Common.style";
import CongratulationsModals from "../CongratulationsModals/CongratulationsModals";

import { ProcessPaymentFormStyle } from "./ProcessPaymentForm.style";

const ProcessPaymentForm = () => {
  const [isCongratulationsVisible, setCongratulationsVisible] = useState(false);

    const selectedSubscription = localStorage.getItem("subscription") ?
        JSON.parse(localStorage.getItem("subscription") || "{}") :
        {credits: "48", eventsCount: "3-4", musicType: "Enthusiast", price: "$99"};


    const history = useHistory();

  const handleCongratulationsButtonClick = () => {
    history.push('/explore-venue')
    setCongratulationsVisible(true)
  }

    const Terms = <a href={"terms-conditions"}>Terms</a>;
    const FeesApply = <a href={"help-center"}>Fees apply</a>;
    const PrivacyNotice = <a href={"privacy-policy"}>Privacy Notice</a>;


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
            <InputBox label="Expiry Date" name="date" />
            <InputBox label="CVC" name="cvc" />

            <p className="gift-code">I have a gift code</p>

            <p className="description">
                {
                    `By clicking the button below, you agree to the `
                }
                {
                    Terms
                }
                {
                    ` and your
                            free 7 days ${selectedSubscription.credits}-credits trial will begin. If you don't cancel
                            before the trial ends, you'll automatically be charged for a
                            full-priced monthly credit plan (currently ${selectedSubscription.price} + any tax for ${selectedSubscription.credits}
                            credits per month), until you cancel or change your plan. Cancel
                            anytime in Settings to avoid renewal. `
                }
                {
                    FeesApply
                }
                {
                    ` for reservations
                            missed or cancelled late. No refunds. New members only. Inventory
                            varies per location and may be limited during trial. `
                }
                {
                    PrivacyNotice
                }
                {
                    `  applies.`
                }

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

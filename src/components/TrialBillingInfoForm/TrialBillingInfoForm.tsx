import axios from "axios";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { CongratulationsModal, InputBox, Loading } from "..";
import { useUserContext } from "../../context/userContext";
import { FilledButtonStyle } from "../../styles/Common.style";

import { TrialBillingInfoFormStyle } from "./TrialBillingInfoForm.style";

const TrialBillingInfoForm = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const history = useHistory();

  const handleCongratulationsButtonClick = () => {
    history.push("/explore-venue");
    setIsModalVisible(false);
  };

  const {
    state: { id },
    dispatch,
  } = useUserContext();

  const handleFormSubmit = (e: any) => {
    setLoading(true);

    axios
      .patch(
        `https://music-pass-backend.herokuapp.com/v1/users/createBillingInformation/${id}`,
        {
          fullName: e.nameOnCard,
          cardNumber: e.cardNumber,
          expiryDate: e.date,
          cvc: e.cvc,
        }
      )
      .then((response) => {
        setLoading(false);
        console.log(response);
        dispatch({
          type: "SUBMIT_TRIAL_BILLING",
          payload: {
            email: e.email,
          },
        });
        setIsModalVisible(true);
      })
      .catch((error) => {
        setErrorMessage("Email already exist!");
        setLoading(false);
        console.log("error");
      });
  };

  return (
    <TrialBillingInfoFormStyle>
      {loading && <Loading />}
      
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

            {errorMessage !== "" && (
              <p className="error-message">{errorMessage}</p>
            )}
            <FilledButtonStyle width="100%" height="60px">
              Redeem Now
            </FilledButtonStyle>
          </Form>
        )}
      </Formik>

      <CongratulationsModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        message="You have redeemed your trial successfully."
        handleButtonClick={handleCongratulationsButtonClick}
      />
    </TrialBillingInfoFormStyle>
  );
};

export default TrialBillingInfoForm;

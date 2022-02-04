import axios from "axios";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import { InputBox, MessageModal } from "../../../components";
import { useLoginContext } from "../../../context/authenticationContext";
import { FilledButtonStyle } from "../../../styles/Common.style";

import { BillingInformationFormStyle } from "./BillingInformationForm.style";

const BillingInformationForm = () => {
  const [isSuccessModalVisible, setSuccessModalVisible] = useState(false);
  const { state, dispatch } = useLoginContext();

  console.log(state);
  const { billingInformation } = state.data;
  console.log(billingInformation);
  const handleBillingFormSubmit = (e: any) => {
    //na
    axios
      .put(
        "/v1/users/updateBillingInformation",
        {
          fullName: e.nameOnCard,
          cardNumber: e.cardNumber,
          expiryDate: e.cardMonth,
          cvc: e.cvc,
        },
        { headers: { Authorization: `Bearer ${state.authToken}` } }
      )
      .then((res) => {
        setSuccessModalVisible(true);
        console.log(res.data);
        dispatch({ type: "UPDATE_USER", payload: { data: res.data } });
      })
      .catch(() => alert("Error while submitting data"));
  };

  return (
    <BillingInformationFormStyle>
      <Formik
        initialValues={{
          nameOnCard: billingInformation.fullName || "",
          cardNumber: billingInformation.cardNumber || "",
          cardMonth: billingInformation.expiryDate || "",
          cvc: billingInformation.cvc || "",
        }}
        onSubmit={handleBillingFormSubmit}
      >
        {() => (
          <Form className="form-wrapper">
            <InputBox label="Name On Card" name="nameOnCard" />
            <InputBox label="Card Number" name="cardNumber" />

            <div className="multi-column">
              <InputBox label="Month" name="cardMonth" />
              <InputBox label="CVC" name="cvc" />
            </div>

            <FilledButtonStyle width="100%" height="60px" buttonType="dark">
              Update Billing Information
            </FilledButtonStyle>
          </Form>
        )}
      </Formik>

      <MessageModal
        isModalVisible={isSuccessModalVisible}
        setIsModalVisible={setSuccessModalVisible}
        heading="Success"
        message="Billing information updated"
      />
    </BillingInformationFormStyle>
  );
};

export default BillingInformationForm;

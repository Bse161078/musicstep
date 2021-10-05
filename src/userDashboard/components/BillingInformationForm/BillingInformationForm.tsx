import { Form, Formik } from "formik";
import React, { useState } from "react";
import { InputBox, MessageModal } from "../../../components";
import { FilledButtonStyle } from "../../../styles/Common.style";

import { BillingInformationFormStyle } from "./BillingInformationForm.style";

const BillingInformationForm = () => {
  const [isSuccessModalVisible, setSuccessModalVisible] = useState(false);

  return (
    <BillingInformationFormStyle>
      <Formik
        initialValues={{
          nameOnCard: "",
          cardNumber: "",
          cardMonth: "",
          cvc: "",
        }}
        onSubmit={() => {
          setSuccessModalVisible(true);
        }}
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

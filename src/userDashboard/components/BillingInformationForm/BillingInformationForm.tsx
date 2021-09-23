import { Form, Formik } from "formik";
import React from "react";
import { InputBox } from "../../../components";
import { FilledButtonStyle } from "../../../styles/Common.style";

import { BillingInformationFormStyle } from "./BillingInformationForm.style";

const BillingInformationForm = () => {
  return (
    <BillingInformationFormStyle>
      <Formik
        initialValues={{
          nameOnCard: "",
          cardNumber: "",
          cardMonth: "",
          cvc: "",
        }}
        onSubmit={() => {}}
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
    </BillingInformationFormStyle>
  );
};

export default BillingInformationForm;

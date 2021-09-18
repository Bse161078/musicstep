import { Form, Formik } from "formik";
import React from "react";
import { ContentHeader, DashboardHeader } from "..";
import { InputBox } from "../../../components";
import { FilledButtonStyle } from "../../../styles/Common.style";

import { NewPaymentMethodStyle } from "./NewPaymentMethod.style";

type NewPaymentMethodProps = {
  setCurrentPage: (data: string) => void;
};

const NewPaymentMethod = (props: NewPaymentMethodProps) => {
  const { setCurrentPage } = props;

  const handlePaymentMethodSubmit = () => {};
  return (
    <NewPaymentMethodStyle>
      <DashboardHeader
        heading="Add New Payment Method"
        backButtonText="Back to Payout Method"
        handleBackClick={() => setCurrentPage("payment-method")}
      />

      <ContentHeader heading="Account Information For ABC Organization" />

      <Formik
        initialValues={{
          benifieciaryName: "",
          routingNumber: "",
          accountNumber: "",
          currency: "",
          taxId: "",
        }}
        onSubmit={handlePaymentMethodSubmit}
      >
        {() => (
          <Form className="payment-method-form">
            <InputBox label="Beneficiary's Name" name="benifieciaryName" />
            <InputBox label="Routing Number" name="routingNumber" />
            <InputBox label="Account Number or IBAN" name="accountNumber" />
            <InputBox label="Currency" name="currency" />
            <InputBox label="Tax ID Number" name="taxId" />

            <div className="disclaimer-wrapper">
              <p>Disclaimer:</p>
              <p>
                If you do not fill out all of your tax and accounting
                information properly, the payment of your complete ticket
                revenue may not be possible.
              </p>
            </div>

            <FilledButtonStyle
              onClick={() => setCurrentPage("payment-method")}
              buttonType="dark"
              width="250px"
              height="60px"
            >
              Add New Payment Method
            </FilledButtonStyle>
          </Form>
        )}
      </Formik>
    </NewPaymentMethodStyle>
  );
};

export default NewPaymentMethod;

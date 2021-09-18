import { Form, Formik } from "formik";
import React from "react";
import { ContentHeader, DashboardHeader } from "..";
import { InputBox } from "../../../components";
import { FilledButtonStyle } from "../../../styles/Common.style";

import { PaymentMethodStyle } from "./PaymentMethod.style";

type PaymentMethodProps = {
  setCurrentPage: (data: string) => void;
};

const PaymentMethod = (props: PaymentMethodProps) => {
  const { setCurrentPage } = props;

  const handleSubmit = () => {};

  return (
    <PaymentMethodStyle>
      <DashboardHeader
        heading="Payout Method"
        description="You are using MusicPass Processing, our default payment process."
        backButtonText="Back To Payment Information"
        handleBackClick={() => setCurrentPage("info-content")}
      />

      <ContentHeader heading="Send Payouts To" />
      <Formik initialValues={{ sendTo: "" }} onSubmit={handleSubmit}>
        {() => (
          <Form className="send-payment-form">
            <InputBox name="sendTo" />
            <FilledButtonStyle buttonType="dark" width="270px" height="60px">
              Add New Payment Method
            </FilledButtonStyle>
          </Form>
        )}
      </Formik>

      <ContentHeader
        heading="Payout Schedule"
        description="Manage when you get paid for your events. MusicPass typically issues payouts after each event ends, but you can apply receive scheduled payouts instead. Changes to your schedule apply to all current and future events."
      />
    </PaymentMethodStyle>
  );
};

export default PaymentMethod;

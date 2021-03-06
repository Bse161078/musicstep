import { Form, Formik } from "formik";
import React from "react";

import { CheckboxWithIcon, ContentHeader, DashboardHeader } from "..";
import { SelectBox } from "../../../components";
import { FilledButtonStyle } from "../../../styles/Common.style";
import { PaymentMethodStyle } from "./PaymentMethod.style";

type PaymentMethodProps = {
  setCurrentPage: (data: string) => void;
};

const PaymentMethod = (props: PaymentMethodProps) => {
  const { setCurrentPage } = props;

  const handleSubmit = () => {
    setCurrentPage("new-payment-method");
  };

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
            <SelectBox
              width="fill"
              options={[{ key: "", value: "" }]}
              name="sendTo"
            />
            <FilledButtonStyle
              onClick={() => setCurrentPage("new-payment-method")}
              buttonType="dark"
              width="270px"
              height="60px"
            >
              Add New Payment Method
            </FilledButtonStyle>
          </Form>
        )}
      </Formik>

      <ContentHeader
        heading="Payout Schedule"
        description="Manage when you get paid for your events. MusicPass typically issues payouts after each event ends, but you can apply receive scheduled payouts instead. Changes to your schedule apply to all current and future events."
      />

      <div className="schedule-checks-wrapper">
        <CheckboxWithIcon />
        <CheckboxWithIcon />
        <CheckboxWithIcon />
      </div>
    </PaymentMethodStyle>
  );
};

export default PaymentMethod;

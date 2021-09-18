import { Form, Formik } from "formik";
import React from "react";
import { DashboardHeader } from "..";
import { InputBox } from "../../../components";

import { PaymentInfoContentStyle } from "./PaymentInfoContent.style";
import { PaymentInfoListItem } from "./PaymentInfoListItem";

type PaymentInfoContentProps = {
  setCurrentPage: (data: string) => void;
};

const PaymentInfoContent = (props: PaymentInfoContentProps) => {
  const { setCurrentPage } = props;

  const handleFilterSubmit = () => {};

  return (
    <PaymentInfoContentStyle>
      <DashboardHeader
        heading="Payment Information"
        description="The money you make from your events will issued to you as a payout."
      />

      <div className="filter">
        Filter By Type
        <Formik initialValues={{ type: "" }} onSubmit={handleFilterSubmit}>
          {() => (
            <Form>
              <InputBox name="type" />
            </Form>
          )}
        </Formik>
      </div>

      <div className="table-header">
        <h3 className="header-title">Payment Methods</h3>
        <h3 className="header-title">Type</h3>
        <h3 className="header-title">Events</h3>
      </div>

      <PaymentInfoListItem setCurrentPage={setCurrentPage} />
      <PaymentInfoListItem setCurrentPage={setCurrentPage} />
      <PaymentInfoListItem setCurrentPage={setCurrentPage} />
    </PaymentInfoContentStyle>
  );
};

export default PaymentInfoContent;

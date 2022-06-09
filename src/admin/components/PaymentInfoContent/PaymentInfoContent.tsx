import { Form, Formik } from "formik";
import React, { useState } from "react";
import { DashboardHeader } from "..";
import { Loading, SelectBox } from "../../../components";
import { FilledButtonStyle } from "../../../styles/Common.style";

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
              <SelectBox options={[{key: "", value: "All"}]} name="type" />
             
            </Form>
            
          )}
           
        </Formik>
        <FilledButtonStyle
              onClick={() => setCurrentPage("payment-method")}
              buttonType="dark"
              width="250px"
              height="60px"
              className="button"
            >
              Add New Payment Method
            </FilledButtonStyle>
      </div>

      <div className="table-wrapper">
        <div className="table-header">
          <h3 className="header-title">Payment Methods</h3>
          <h3 className="header-title">Type</h3>
          <h3 className="header-title">Events</h3>
        </div>

        <PaymentInfoListItem setCurrentPage={setCurrentPage} />
      </div>
    </PaymentInfoContentStyle>
  );
};

export default PaymentInfoContent;

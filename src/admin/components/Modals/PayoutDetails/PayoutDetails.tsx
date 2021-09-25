import React, { useState } from "react";
import { PayoutDetailsStyle } from "./PayoutDetails.style";
import { ModalWrapper } from "../ModalWrapper";
import { FilledButtonStyle } from "../../../../styles/Common.style";

type PayoutDetailsProps = {
  isModalVisible?: boolean;
  setIsModalVisible?: any;
};
const PayoutDetails = (props: PayoutDetailsProps) => {
  const { isModalVisible, setIsModalVisible } = props;
  return (
    <ModalWrapper
      heading="Payout Details"
      width="920px"
      button={<FilledButtonStyle width="500px">Okay</FilledButtonStyle>}
      isModalVisible={isModalVisible}
      setIsModalVisible={setIsModalVisible}
    >
      <PayoutDetailsStyle>
        <div className="left-section">
          <div>
            <h3>Event Name</h3>
            <p>Sun Goddess Pool Party</p>
          </div>
          <div>
            <h3>Event Date</h3>
            <p>Sun Goddess Pool Party</p>
          </div>
          <div>
            <h3>Payment Method</h3>
            <p>
              DIRECT DEPOSIT: XXXXXX6664,Sunrise Sessions, LLC (Checking, USD$,
              United States)
            </p>
          </div>
          <div>
            <h3>Bank Account Nickname</h3>
            <p>xxxxxxxxx</p>
          </div>
          <div>
            <h3>Currency</h3>
            <p>U.S.Dollars$USD</p>
          </div>
          <div>
            <h3>Payout ID</h3>
            <p>LPO12334322</p>
          </div>
          <div>
            <h3>Trace ID</h3>
            <p>08212434434112100</p>
          </div>
          <div>
            <h3>Payout Type</h3>
            <p>Final</p>
          </div>
          <div>
            <h3>Event Status</h3>
            <p>Completed</p>
          </div>
        </div>
        <div className="right-section">
          <div>
          <h3>Sent date</h3>
          <p>03 Mar 2020</p>
          </div>
          <div>
          <h3>Expected arrival date</h3>
          <p>08 Jun 2020</p>
          </div>
          <div>
          <h3>Payout period</h3>
          <p>03 Mar 2020 - 08 Jun 2020</p>
          </div>
          <div className="payments-wrapper" id="bottom-top-borders">
            <div>
              <h3>Gross online sales</h3>
              <p>Eventbrite Payment Processing</p>
              <p>Eventbrite Service Fee (Incl. Sales Tax)</p>
            </div>
            <div>
              <h3>$35.10</h3>
              <p>($0.86)</p>
              <p>($4.24)</p>
            </div>
          </div>
          <div className="payments-wrapper" id="bottom-border">
            <h3>Net ticket sales</h3>
            <h3>$30.00</h3>
          </div>
          <div className="payments-wrapper">
            <h3>Payout amount</h3>
            <h3>$30.00</h3>
          </div>
          <div className="exportfile-wrapper">
            <p>Export Itemization: Excel | CSV | TEXT | PDF</p>
          </div>
        </div>
      </PayoutDetailsStyle>
    </ModalWrapper>
  );
};

export default PayoutDetails;

import React, { useState } from "react";
import { PayoutsListStyle } from "./PayoutsList.style";
import { PayoutsListItem } from "./PayoutsListItem";
import { PayoutDetails } from "..";
const PayoutsList = () => {
  const [showPayoutDetailModal, setShowPayoutDetailModal ]  = useState(false)
  return (
    <PayoutsListStyle>
      <div className="table-header">
        <h3 className="header-title">Date</h3>
        <h3 className="header-title">Event</h3>
        <h3 className="header-title">Payout</h3>
       </div>
      <span onClick={() => setShowPayoutDetailModal(true)}>
        <PayoutsListItem />
      </span>
      <PayoutDetails isModalVisible={showPayoutDetailModal} setIsModalVisible={setShowPayoutDetailModal} />
    </PayoutsListStyle>
  );
};

export default PayoutsList;

import React, { useState } from "react";
import { PayoutsListStyle } from "./PayoutsList.style";
import { PayoutsListItem } from "./PayoutsListItem";
import { PayoutDetails } from "..";
const PayoutsList = (props:any) => {
  const [showPayoutDetailModal, setShowPayoutDetailModal ]  = useState(false)
  
  return (
    <PayoutsListStyle>
      <div className="table-header">
        <h3 className="header-title">Date</h3>
        <h3 className="header-title">Event</h3>
        <h3 className="header-title">Payout</h3>
       </div>
      <span onClick={() => setShowPayoutDetailModal(true)}>
        <PayoutsListItem  reserveEvent={props.reserveEvent} search={props.search} from={props.from} to={props.to} />
      </span>
      <PayoutDetails reserveEvent={props.reserveEvent} isModalVisible={showPayoutDetailModal} setIsModalVisible={setShowPayoutDetailModal} />
    </PayoutsListStyle>
  );
};

export default PayoutsList;

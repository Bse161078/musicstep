import React from "react";
import { PayoutsListStyle } from "./PayoutsList.style";
import { PayoutsListItem } from "./PayoutsListItem";

const PayoutsList = () => {
  return (
    <PayoutsListStyle>
      <div className="table-header">
        <h3 className="header-title">Date</h3>
        <h3 className="header-title">Event</h3>
        <h3 className="header-title">Payout</h3>
      </div>

      <PayoutsListItem />
      <PayoutsListItem />
      <PayoutsListItem />
    </PayoutsListStyle>
  );
};

export default PayoutsList;

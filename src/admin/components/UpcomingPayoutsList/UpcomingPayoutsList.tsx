import React from "react";

import { UpcomingPayoutsListItem } from "./UpcomingPayoutsListItem";
import { UpcomingPayoutsListStyle } from "./UpcomingPayoutsList.style";

const PayoutsList = () => {
  return (
    <UpcomingPayoutsListStyle>
      <div className="table-header">
        <h3 className="header-title">Scheduled</h3>
        <h3 className="header-title">Event</h3>
        <h3 className="header-title">Payout</h3>
      </div>

      <UpcomingPayoutsListItem />
      <UpcomingPayoutsListItem />
      <UpcomingPayoutsListItem />
    </UpcomingPayoutsListStyle>
  );
};

export default PayoutsList;
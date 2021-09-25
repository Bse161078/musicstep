import React from "react";

import { UpcomingPayoutsListItemStyle } from "./UpcomingPayoutsList.style";

export const UpcomingPayoutsListItem = () => {
  return (
    <UpcomingPayoutsListItemStyle>
      <h3 className="description">August 6, 2021</h3>
      <div className="content-wrapper">
        <p className="description">Robel Inc</p>
        <h4 className="heading">66945337</h4>
      </div>
      <div className="payout-detail">
        <p className="payout-value">$46.11</p>
        <p className="payout-status">SENT</p>
      </div>
    </UpcomingPayoutsListItemStyle>
  );
};

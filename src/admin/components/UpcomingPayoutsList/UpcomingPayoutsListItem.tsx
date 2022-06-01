import React from "react";

import { UpcomingPayoutsListItemStyle } from "./UpcomingPayoutsList.style";
import moment from "moment";
export const UpcomingPayoutsListItem = (props:any) => {
  const {reserveEvent} = props
  console.log('events :',reserveEvent?.reservations)
  return (
    reserveEvent?reserveEvent.reservations.map((event:any)=>
    <UpcomingPayoutsListItemStyle>
      <h3 className="description">{moment(event.date).format("MMM Do YYYY")}</h3>
      <div className="content-wrapper">
        <p className="description">{event.eventDescription}</p>
        <h4 className="heading">{event._id}</h4>
      </div>
      <div className="payout-detail">
        <p className="payout-value">${event.allReservationCredit}</p>
        <p className="payout-status">SENT</p>
      </div>
    </UpcomingPayoutsListItemStyle>
    ):''
  );
};

import React from "react";

import { PayoutsListItemStyle } from "./PayoutsList.style";
import moment from "moment";
type PayoutListItemProps = {
  reserveEvent?:any;
};
export const PayoutsListItem = (props:PayoutListItemProps) => {
  const {reserveEvent} = props
  
  // console.log('event : ',props,moment(reserveEvent.date).format("MMM Do YYYY"))
  return (
    reserveEvent? reserveEvent.reservations.map((event:any)=>
    <PayoutsListItemStyle>
      <h3 className="description">{moment(event.date).format("MMM Do YYYY")}</h3>
      <div className="content-wrapper">
        <p className="description">{event.eventDescription}</p>
        <h4 className="heading">{event._id}</h4>
      </div>
      <div className="payout-detail">
        <p className="payout-value">${event.allReservationCredit}</p>
        <p className="payout-status">SENT</p>
      </div>
     
    </PayoutsListItemStyle>
    ):''
    )
}

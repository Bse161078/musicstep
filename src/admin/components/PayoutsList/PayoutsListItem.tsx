import React from "react";

import { PayoutsListItemStyle } from "./PayoutsList.style";
import moment from "moment";
type PayoutListItemProps = {
  reserveEvent?:any;
  from?:any;
  to?:any;
  search?:string;
};
export const PayoutsListItem = (props:PayoutListItemProps) => {
  const {reserveEvent,from,to,search} = props
  const venueFilter = reserveEvent?.reservations && reserveEvent.reservations.filter((reservation: any) => reservation.title.toLowerCase().includes(search))
  // console.log('event : ',props,moment(reserveEvent.date).format("MMM Do YYYY"))
  return (
    reserveEvent?.reservations? reserveEvent.reservations.filter((reservation: any) => (new Date(reservation.createdAt)>=from&&new Date(reservation.createdAt)<=to)&&reservation.title.toLowerCase().includes(search)).map((event:any)=>
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

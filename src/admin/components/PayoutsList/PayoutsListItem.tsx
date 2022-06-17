import React from "react";

import {PayoutsListItemStyle} from "./PayoutsList.style";
import moment from "moment";

type PayoutListItemProps = {
    reserveEvent?: any;
    from?: any;
    to?: any;
    search?: string;
    handleShowDetails?:(event:any)=>void;
};
export const PayoutsListItem = (props: PayoutListItemProps) => {
    const {reserveEvent, from, to, search,handleShowDetails} = props
    // console.log('event : ',props,moment(reserveEvent.date).format("MMM Do YYYY"))
    return (
        reserveEvent?.reservations ? reserveEvent.reservations.filter((event: any) => (new Date(event.date) >= new Date(from) && new Date(event.date) <= new Date(to)) && event.title.toLowerCase().includes(search)).map((event: any) =>
            <PayoutsListItemStyle onClick={(e)=>{
                if(handleShowDetails) handleShowDetails(event)
            }}>
                <h3 className="description">{moment(event.date).format("MMM Do YYYY")}</h3>
                <div className="content-wrapper">
                    <p className="description">{event.title}</p>
                    <h4 className="heading">{event._id.slice(-7)}</h4>
                </div>
                <div className="payout-detail">
                    <p className="payout-value">${event.allReservationCredit}</p>
                    <p className="payout-status">SENT</p>
                </div>

            </PayoutsListItemStyle>
        ) : ''
    )
}

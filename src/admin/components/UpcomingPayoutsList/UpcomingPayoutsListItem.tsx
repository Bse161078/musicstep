import React from "react";

import {UpcomingPayoutsListItemStyle} from "./UpcomingPayoutsList.style";
import moment from "moment";
import {PayoutsListItemStyle} from "../PayoutsList/PayoutsList.style";

export const UpcomingPayoutsListItem = (props: any) => {
    const {reserveEvent, from, to, search, handleShowDetails} = props

    return (
        reserveEvent?.reservations ? reserveEvent.reservations.filter((event: any) => (new Date(event.date) >= new Date(from) && new Date(event.date) <= new Date(to)) && event.title.toLowerCase().includes(search)).map((event: any) =>
            <PayoutsListItemStyle onClick={(e) => {
                if (handleShowDetails) handleShowDetails(event)
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
};

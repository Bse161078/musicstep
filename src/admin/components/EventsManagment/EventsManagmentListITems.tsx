import moment from "moment";
import React from "react";
import { EventsManagmentListItemStyle } from "./EventsManagment.style";

type EventsManagmentListItemProps = {
  event: any;
};
const EventsManagmentListItem = ({ event }: EventsManagmentListItemProps) => {
  const week = ["Sun", "Mon", "Thu", "Wed", "Thr", "Fri", "Sat"];
  return (
    <EventsManagmentListItemStyle>
      <div className="content-wrapper">
        <div className="event-details">
          <div className="event-date-name">
            <span className="event-date">
              {week[moment(event.date).day()]}, {moment(event.date).date()} /
            </span>
            <span className="event-name">{event?.title}</span>
          </div>

          <div>
            <span className="event-address">
              {" "}
              {event?.venueInfo[0]?.location.address}
            </span>
          </div>
        </div>
        <div className="engagments">
          <span>560 Views</span>
          <span>360 Reservations Made</span>
        </div>
        <div className="Organizer">
          <span className="org-name">
            {event.organizerInfo[0] && event.organizerInfo[0].organizerName}
          </span>
        </div>
      </div>
    </EventsManagmentListItemStyle>
  );
};
export default EventsManagmentListItem;

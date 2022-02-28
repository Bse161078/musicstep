import React from "react";
import { EventsManagmentListItemStyle } from "./EventsManagment.style";

type EventsManagmentListItemProps = {
  event: any;
};
const EventsManagmentListItem = ({ event }: EventsManagmentListItemProps) => {
  return (
    <EventsManagmentListItemStyle>
      <div className="content-wrapper">
        <div className="event-details">
          <div>
            <span className="event-date">
              {event.date} / {event.time}{" "}
            </span>
            <span className="event-name">{event.title}</span>
          </div>

          <div>
            <span className="event-address">
              {" "}
              {event.venue.location.address}
            </span>
          </div>
        </div>
        <div className="engagments">
          <span>560 Views</span>
          <span>360 Reservations Made</span>
        </div>
        <div className="Organizer">
          <span className="org-name">{event.organizer.organizerName}</span>
        </div>
      </div>
    </EventsManagmentListItemStyle>
  );
};
export default EventsManagmentListItem;

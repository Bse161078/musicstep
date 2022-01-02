import React from "react";
import { EventsManagmentListItemStyle } from "./EventsManagment.style";
const EventsManagmentListItem = () => {
  return (
    <EventsManagmentListItemStyle>
      <div className="content-wrapper">
        <div className="event-details">
          <div>
            <span className="event-date">Sat, 16 / </span>
            <span className="event-name">Necessitatibus Dolore Concert</span>
          </div>

          <div>
            <span className="event-address">
              {" "}
              at 39224 Mann Trafficway, North Carmella
            </span>
          </div>
        </div>
        <div className="engagments">
          <span>560 Views</span>
          <span>360 Reservations Made</span>
        </div>
        <div className="Organizer">
            <span className="org-name">
                Acassmus Versatile
            </span>
        </div>
      </div>
    </EventsManagmentListItemStyle>
  );
};
export default EventsManagmentListItem;

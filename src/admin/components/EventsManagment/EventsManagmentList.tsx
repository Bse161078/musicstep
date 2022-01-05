import React from "react";
import { EventsManagmentListStyle } from "./EventsManagment.style";
import EventsManagmentListItem from "./EventsManagmentListITems";

const EventsManagmentList = () => {
  return (
    <EventsManagmentListStyle>
      <div className="table-header">
        <h3 className="header-title">Event Details</h3>
        <h3 className="header-title">Engagements</h3>
        <h3 className="header-title">Organizer</h3>
      </div>

      <div className="event-date">
        October 2021 <span className="date-border" />
      </div>
      <EventsManagmentListItem />
      <EventsManagmentListItem />
      <EventsManagmentListItem />
      <EventsManagmentListItem />

      <div className="event-date">
        November 2021 <span className="date-border" />
      </div>
      <EventsManagmentListItem />
      <EventsManagmentListItem />
      <EventsManagmentListItem />
    </EventsManagmentListStyle>
  );
};

export default EventsManagmentList;

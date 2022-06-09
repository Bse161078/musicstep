import React from "react";
import { EventsManagmentListStyle } from "./EventsManagment.style";
import EventsManagmentListItem from "./EventsManagmentListITems";
import { Loading } from "../../../components/Loading";
import moment from "moment";

type EventsManagmentListProps = {
  events: any;
};
const EventsManagmentList = ({ events }: EventsManagmentListProps) => {
  return (
    <EventsManagmentListStyle>
      <div className="table-header">
        <h3 className="header-title">Event Details</h3>
        <h3 className="header-title">Engagements</h3>
        <h3 className="header-title">Organizer</h3>
      </div>

      {
        // events.length > 0 && <span>{events[0]._id.month}</span>
        events.length > 0 &&
          events.map((element: any) => {
            const eventData = element;
            return (
              <span>
                <div className="event-date event-date-bold">
                {" "}
                  {element["date"]} <span className="date-border" />
                </div>
                
                  <EventsManagmentListItem event={element} />
              </span>
            );
          })
      }
    </EventsManagmentListStyle>
  );
};

export default EventsManagmentList;

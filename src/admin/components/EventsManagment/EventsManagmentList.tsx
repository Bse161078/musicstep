import React from "react";
import {EventsManagmentListStyle} from "./EventsManagment.style";
import EventsManagmentListItem from "./EventsManagmentListITems";
import {Loading} from "../../../components/Loading";
import moment from "moment";

type EventsManagmentListProps = {
    events: any;
};
const EventsManagmentList = ({events}: EventsManagmentListProps) => {
    const sortEvents=()=>{
        return events.sort((a:any,b:any)=>{
            const c:any = new Date(a.date);
            const d:any = new Date(b.date);

            return d-c;
        });

    }
    const sortedEvents=sortEvents();

    return (
        <EventsManagmentListStyle>
            <div className="table-header">
                <h3 className="header-title">Event Details</h3>
                <h3 className="header-title">Engagements</h3>
                <h3 className="header-title">Organizer</h3>
            </div>

            {
                // events.length > 0 && <span>{events[0]._id.month}</span>
                sortedEvents.length > 0 &&
                sortedEvents.map((element: any) => {
                    const eventData = element;
                    return (
                        <span>
                <div className="event-date event-date-bold">
                    {moment(element["date"]).format("MMM Do YYYY")}
                    <span className="date-border"/>
                </div>
                
                  <EventsManagmentListItem event={element}/>
              </span>
                    );
                })
            }
        </EventsManagmentListStyle>
    );
};

export default EventsManagmentList;

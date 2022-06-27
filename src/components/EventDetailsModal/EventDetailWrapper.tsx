import React from "react";
import moment from "moment";
import { useHistory } from "react-router-dom";

type EventDetailWrapperProps = {
  event?: any;
  venue?:any
};
export const EventDetailWrapper = ({ event,venue }: EventDetailWrapperProps) => {
  const history = useHistory();
  const eventImage =event.additionalPhotos.length>0 &&
    (event.eventPhotoSameAsOrganizerPhoto || event.additionalPhotos.length === 0
      ? event.organizerInfo[0]?.coverPhotoUrl
      : event.additionalPhotos[0]?event.additionalPhotos[0]:'')

  const week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const handleViewOrganizer = () => {
    history.push({
      pathname: `/explore-venue/organizer-profile`,

      state: { organizerDetail: venue },
    });
  };
  
  const handleViewVenue = () => {
    history.push({
      pathname: `/dashboard/home/venue-details`,

      state: { venueDetail: venue },
    });
  };
  return (
    <div className="first-row-wrapper">
      <img
        // src="/images/crystal2.png"
        // src={process.env.REACT_APP_BASE_URL}
        src={process.env.REACT_APP_BASE_URL + "/images/" + eventImage}
        alt="crystal"
        width="480px"
        height="270px"
        style={{ borderRadius: "10px" }}
      />

      <div className="description-wrapper">
        <div className="concert-name">
          <h3>{event && event.title}</h3>
          <p>{venue.categoryTags.join(",")}</p>
        </div>

        <div className="description">
          <p>{event && event.eventDescription}</p>
        </div>

        <div className="date-time">
          <p>
            {week[moment(event.date).day()]},
            {moment(event.date).format("MMMM") +
              " " +
              moment(event.date).date()}
          </p>
          <p>
            {moment(event.startingTime, ["hh:mm"]).format("hh:mm a")} -
            {moment(event.endingTime, ["hh:mm"]).format("hh:mm a")}
          </p>
        </div>

        <div>
          <p>Venue : {venue?.name}</p>
          <p>
            {" "}
            <img src="/images/icons/location-icon.svg" alt="location" />
            {venue.location?.address}
          </p>
        </div>

        <div className="organizedBy-text">
          <p>
            Organized by:{" "}
            <span className="link"
            onClick={()=>
              {
                handleViewOrganizer()
              }
            }
            >{venue.organizerInfo[0]?.organizerName}</span>
          </p>
          <p>
            Available Tickets :{" "}
            <span className="link">{event.tickets[0]?.availableTickets}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default EventDetailWrapper;

import React from "react";
import moment from "moment";
import { useHistory } from "react-router-dom";

type VenueDetailWrapperProps = {
  event?: any;
  venue?:any
};
export const VenueDetailWrapper = ({ event,venue }: VenueDetailWrapperProps) => {
  const history = useHistory();
  const eventImage =event.venuesInfo[0].coverPhotoUrl || event.venuesInfo[0].logoUrl;

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
      pathname: `/dashboard/home/organizer-profile`,

      state: { organizerDetail: event },
    });
  };

  console.log("events = ",event);

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
          <p>{event && event.description}</p>
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
            onClick={()=>{
              handleViewOrganizer()
            }}
            >{event.organizerInfo[0]?.organizerName}</span>
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
export default VenueDetailWrapper;

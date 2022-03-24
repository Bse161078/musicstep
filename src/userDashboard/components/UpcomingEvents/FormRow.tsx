import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { EventDetailsModal } from "../../../components";
import { OutlineButtonStyle } from "../../../styles/Common.style";

import { FormRowStyle } from "./UpcomingEvents.style";
import moment from "moment";
type FormRowProps = {
  event?: any;
};
const FormRow = ({ event }: FormRowProps) => {
  const [isEventDetailsModalVisibel, setIsEventDetailsModalVisibel] = useState(
    false
  );
  const history = useHistory();
  const handleViewVenue = () => {
    history.push({
      pathname: `/explore-venue/venue-details`,

      state: { venueDetail: event.venueInfo[0] },
    });
  };
  let startTime = moment(event.startingTime, "hh:mm");
  let endTime = moment(event.endingTime, "hh:mm");

  let hours = endTime.diff(startTime, "hours")
    ? endTime.diff(startTime, "hours") + "hr"
    : null;
  let minutes =
    endTime.diff(startTime, "minutes") % 60
      ? (endTime.diff(startTime, "minutes") % 60) + "mint"
      : null;
  return (
    <>
      <FormRowStyle>
        <img
          //  src="/images/sample.png"
          src={
            process.env.REACT_APP_BASE_URL +
            "/" +
            event.organizerInfo[0].logoUrl
          }
          className="thumbnail"
          alt="thumbnail"
        />

        <div className="table-cell">
          <h2 className="heading">
            {moment(event.startingTime, ["hh:mm"]).format("hh:mm a")}
          </h2>
          <span className="description">
            {" "}
            {hours} {minutes}
          </span>
        </div>

        <div className="table-cell">
          <h2 className="heading">{event.title}</h2>
          <span className="description">Alternative, Classical</span>
        </div>
        <div className="table-cell">
          <p className="event-name">{event.venueInfo[0].name}</p>
        </div>
        <div className="tabel-cell">
          <div className="button-wrapper">
            <OutlineButtonStyle
              width="150px"
              height="44px"
              onClick={handleViewVenue}
            >
              View Venue
            </OutlineButtonStyle>
            <OutlineButtonStyle
              width="150px"
              height="44px"
              onClick={() => {
                setIsEventDetailsModalVisibel(true);
              }}
            >
              {event.tickets.length > 0 && event.tickets[0].credits} Credits
            </OutlineButtonStyle>
          </div>
        </div>
      </FormRowStyle>
      <EventDetailsModal
        isModalVisible={isEventDetailsModalVisibel}
        setIsModalVisible={setIsEventDetailsModalVisibel}
        isTicketsAvailable={true}
      />
    </>
  );
};

export default FormRow;

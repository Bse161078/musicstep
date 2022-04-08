import { Collapse } from "antd";
import axios from "axios";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { UpcomingEvents } from "..";

import { SafetySheildIcon, StarIcon } from "../../assets";
import { CollapseStyle, VenueCardStyle } from "./VenueCard.style";
import { useLoginContext } from "../../context/authenticationContext";
import { Spinner } from "../../components/Spinner";
const { Panel } = Collapse;

const VenueCard = ({ venue }: any) => {
  const history = useHistory();
  const { state, dispatch } = useLoginContext();
  const [events, setEvents] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleClick = () => {
    history.push({
      pathname: `/explore-venue/venue-details`,

      state: { venueDetail: venue.venueInfo[0] },
    });
  };

  function callback(key: any) {
    if (events) {
      setEvents(null);
      return;
    }
    setIsLoading(true);
    axios
      .get(`/v1/users/allEventsOfVenue?venueId=${venue._id}`, {
        headers: { Authorization: `Bearer ${state.authToken}` },
      })
      .then((res) => {
        console.log(res.data);
        setEvents(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  return (
    <>
      <VenueCardStyle onClick={handleClick}>
        <img
          className="venue-thumbnail"
          src={
            process.env.REACT_APP_BASE_URL +
            "/" +
            venue.venueInfo[0].coverPhotoUrl
          }
          alt="venue thumb"
        />
        {/* "/images/explore-venue/image1.png" */}
        <div className="venue-details">
          {/* <h3 className="top-heading">DOLORES POUROS</h3> */}
          <h4 className="heading">{venue.venueInfo[0].name}</h4>
          <p className="address">{venue.venueInfo[0]["location"].address}</p>

          <div className="row">
            <div className="star-wrapper">
              <StarIcon /> 4.7 <span>(2022 Reviews)</span>
            </div>

            <div className="guidelines-wrapper">
              <SafetySheildIcon /> Safety Guidelines
            </div>
          </div>
        </div>
      </VenueCardStyle>
      <CollapseStyle>
        <Collapse onChange={callback}>
          <Panel header={`${venue.eventsCount} upcoming events`} key="1">
            {isLoading && <Spinner />}
            {events && <UpcomingEvents events={events} />}
          </Panel>
        </Collapse>
      </CollapseStyle>
    </>
  );
};

export default VenueCard;

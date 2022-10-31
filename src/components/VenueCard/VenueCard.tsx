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

const VenueCard = ({ venue, subscribtionCredit }: any) => {
  const history = useHistory();
  const { state, dispatch } = useLoginContext();
  const [events, setEvents] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  useEffect(() => {
    setEvents(null);
  }, []);

  const handleClick = () => {
    history.push({
      pathname: `/explore-venue/venue-details`,

      state: { venueDetail: venue, subscribtionCredit },
    });
  };

  const getRating = (rating: any) => {
    return rating > 0 ? ((rating / 100) * 5).toFixed(1) : 0;
  };

  function callback() {
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
        setEvents(res.data.event);
        setIsLoading(false);
      })
      .catch((error) => {});
  }

  return venue ? (
    <>
      <VenueCardStyle onClick={handleClick}>
        <img
          className="venue-thumbnail"
          src={
            process.env.REACT_APP_BASE_URL + "/images/" + venue.coverPhotoUrl
          }
          alt="venue thumb"
        />
        <div className="venue-details">
          {/* <h3 className="top-heading">DOLORES POUROS</h3> */}
          <h4 className="heading">{venue.name}</h4>
          <p className="address">{venue["location"].address}</p>

          <div className="row">
            <div className="star-wrapper">
              <StarIcon /> {getRating(venue.averageRating)}{" "}
              <span>({`${venue.reviewCount} Reviews`})</span>
            </div>

            <div className="guidelines-wrapper">
                <span style={{marginLeft:5}}><img src="/images/SafetyIcon.png" alt="profile" /></span> <span style={{marginLeft:5}}>Safety Guidelines</span>
            </div>
          </div>
        </div>
      </VenueCardStyle>
      <CollapseStyle>
        <Collapse onChange={() => setEvents(venue.events)}>
          <Panel header={`${venue.events.length} upcoming events `} key="1">
            {isLoading && <Spinner />}
            {events && (
              <UpcomingEvents
                subscribtionCredit={subscribtionCredit}
                events={events}
                venue={venue}
                handleClick={handleClick}
              />
            )}
          </Panel>
        </Collapse>
      </CollapseStyle>
    </>
  ) : (
    <div>
      <h1
        style={{
          width: "100%",
          margin: "0px auto",
          fontSize: "40px",
          textAlign: "center",
        }}
      >
        No Event to explore
      </h1>
    </div>
  );
};

export default VenueCard;

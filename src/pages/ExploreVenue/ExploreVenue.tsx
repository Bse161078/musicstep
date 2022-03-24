import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavbarWithSearch, VenueCard } from "../../components";
import { DropdownsList } from "./DropdownsList";
import { ExploreVenueStyle } from "./ExploreVenue.style";
import { useLoginContext } from "../../context/authenticationContext";

export default function ExploreVenue() {
  const { state, dispatch } = useLoginContext();
  const [venues, setVenues] = useState([]);
  useEffect(() => {
    axios
      .get("/v1/users/allEventsByVenues", {
        headers: { Authorization: `Bearer ${state.authToken}` },
      })
      .then((res) => {
        console.log(res.data);
        setVenues(res.data);
        // setEvents(res.data);
        // setEvents(res.data);
        // setProfilesList(res.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);

  return (
    <>
      <NavbarWithSearch />
      <ExploreVenueStyle>
        <DropdownsList />
        <div />

        <section className="venues-list">
          {venues.length > 0 &&
            venues.map((venue: any) => <VenueCard venue={venue} />)}
          {/* <VenueCard pageUrl="/explore-venue/organizer-profile" />

          <VenueCard pageUrl="/explore-venue/organizer-profile" />

          <VenueCard pageUrl="/explore-venue/organizer-profile" />

          <VenueCard pageUrl="/explore-venue/organizer-profile" />

          <VenueCard pageUrl="/explore-venue/organizer-profile" /> */}
        </section>

        <section>
          <img
            className="maps-wrapper"
            src="/images/explore-venue/map.png"
            alt="map"
          />
        </section>
      </ExploreVenueStyle>
    </>
  );
}

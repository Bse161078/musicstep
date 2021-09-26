import React from "react";
import { Link } from "react-router-dom";

import { NavbarWithSearch, VenueCard } from "../../components";
import { DropdownsList } from "./DropdownsList";
import { ExploreVenueStyle } from "./ExploreVenue.style";

export default function ExploreVenue() {
  return (
    <>
      <NavbarWithSearch />
      <ExploreVenueStyle>
        <DropdownsList />
        <div />

        <section className="venues-list">
          <Link to="/explore-venue/venue-details">
            <VenueCard />
          </Link>
          <Link to="/explore-venue/venue-details">
            <VenueCard />
          </Link>
          <Link to="/explore-venue/venue-details">
            <VenueCard />
          </Link>
          <Link to="/explore-venue/venue-details">
            <VenueCard />
          </Link>
          <Link to="/explore-venue/venue-details">
            <VenueCard />
          </Link>
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

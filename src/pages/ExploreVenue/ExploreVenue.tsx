import React from "react";
import { Link } from "react-router-dom";

import { VenueCard } from "../../components";
import { ExploreVenueStyle } from "./ExploreVenue.style";

export default function ExploreVenue() {
  return (
    <ExploreVenueStyle>
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
  );
}

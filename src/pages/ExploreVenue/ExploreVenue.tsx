import React from "react";

import { VenueCard } from "../../components";
import { ExploreVenueStyle } from "./ExploreVenue.style";

export default function ExploreVenue() {
  return (
    <ExploreVenueStyle>
      <section className="venues-list">
        <VenueCard />
        <VenueCard />
        <VenueCard />
        <VenueCard />
        <VenueCard />
      </section>

      <section>
        <img className="maps-wrapper" src="/images/explore-venue/map.png" alt="map" />
      </section>
    </ExploreVenueStyle>
  );
}

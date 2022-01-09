import React from "react";

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
          <VenueCard pageUrl="/explore-venue/organizer-profile" />

          <VenueCard pageUrl="/explore-venue/organizer-profile" />

          <VenueCard pageUrl="/explore-venue/organizer-profile" />

          <VenueCard pageUrl="/explore-venue/organizer-profile" />

          <VenueCard pageUrl="/explore-venue/organizer-profile" />
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

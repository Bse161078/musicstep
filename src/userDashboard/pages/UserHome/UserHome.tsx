import React from "react";
import { NavbarWithSearch } from "../../../components";

import {
  CardWithContent,
  SectionHeading,
  UpcomingEvents,
  UserSidebar,
} from "../../components";
import { EventReservationStyle, UserHomeStyle } from "./UserHome.style";

const EventReservation = () => {
  return (
    <SectionHeading heading="Events In Reservation">
      <EventReservationStyle>
        <CardWithContent />
        <CardWithContent />
      </EventReservationStyle>
    </SectionHeading>
  );
};

export default function UserHome() {
  return (
    <>
      <NavbarWithSearch />
      <UserHomeStyle>
        <UserSidebar />

        <div>
          <EventReservation />
          <div className="divider" />

          <UpcomingEvents />
          <UpcomingEvents />
        </div>
      </UserHomeStyle>
    </>
  );
}

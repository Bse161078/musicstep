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
        <CardWithContent
          heading="Franklin Kub's concert"
          time="10:51 AM"
          footerText="Cancelation Time Left: 22:32:09"
          buttonType="filled"
        />
        <CardWithContent
          buttonText="Reserved"
          heading="Franklin Kub's Concert"
          time="10:51 AM"
          footerText="Cannot Be Canceled."
        />
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

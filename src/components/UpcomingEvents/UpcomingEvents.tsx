import React, { useState } from "react";

import { TabRow } from "./TabRow";

import { UpcomingEventsStyle } from "./UpcomingEvents.style";

const UpcomingEvents = ({ events,venue,subscribtionCredit }: any) => {
  const [reservation, setReservation] = useState(0);
  let tempresrvatoin = 0;



  return (
    <UpcomingEventsStyle>
      {/* <div className="list-header">
        <span>Today, 1 September</span>

        <span>Availability</span>
      </div> */}
      {events &&
        events.map((event: any, index: number) => {

          return event.tickets[0].availableTickets === 0 ? (
            <TabRow
              event={event}
              buttonType="filled"
              buttonText={"Reservation Full"}
              reservation={event.tickets[0].bookedTickets}
            />
          ) : (
            <TabRow
              event={event}
              subscribtionCredit={subscribtionCredit}
              buttonText={`${
                event.tickets && event.tickets[0].credits
              } Credits`}
              reservation={event.tickets[0].bookedTickets}
            />
          );

          // return <h1>yoo</h1>;
        })}

      {/* <TabRow buttonText="11 Credits" />
      <TabRow buttonType="filled" buttonText="Reservation Full" />
      <TabRow buttonText="11 Credits" />
      <TabRow buttonType="filled" buttonText="Reservation Full" />
      <TabRow buttonText="11 Credits" />
      <TabRow buttonText="13 Credits" />
      <TabRow buttonText="11 Credits" />
      <TabRow buttonText="11 Credits" /> */}
    </UpcomingEventsStyle>
  );
};

export default UpcomingEvents;

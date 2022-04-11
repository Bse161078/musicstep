import React, { useState } from "react";

import { TabRow } from "./TabRow";

import { UpcomingEventsStyle } from "./UpcomingEvents.style";

const UpcomingEvents = ({ events }: any) => {
  const [reservation, setReservation] = useState(0);
  let tempresrvatoin = 0;

  console.log(events);
  return (
    <UpcomingEventsStyle>
      {/* <div className="list-header">
        <span>Today, 1 September</span>

        <span>Availability</span>
      </div> */}
      {events &&
        events.map((event: any, index: number) => {
          const ticketNotAvailable = event.tickets.every((ticket: any) => {
            tempresrvatoin += ticket.bookedTickets;
            return ticket.availableTickets === 0;
          });
          // setReservation(tempresrvatoin);
          return ticketNotAvailable === true ? (
            <TabRow
              event={event}
              buttonType="filled"
              buttonText={"Reservation Full"}
              reservation={tempresrvatoin}
            />
          ) : (
            <TabRow
              event={event}
              buttonText={`${
                event.tickets && event.tickets[0].credits
              } Credits`}
              reservation={tempresrvatoin}
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

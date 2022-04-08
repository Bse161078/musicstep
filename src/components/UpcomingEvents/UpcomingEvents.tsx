import React from "react";

import { TabRow } from "./TabRow";

import { UpcomingEventsStyle } from "./UpcomingEvents.style";

const UpcomingEvents = ({ events }: any) => {
  console.log(events);
  return (
    <UpcomingEventsStyle>
      {/* <div className="list-header">
        <span>Today, 1 September</span>

        <span>Availability</span>
      </div> */}
      {events &&
        events.map((event: any, index: number) =>
          index === 2 ? (
            <TabRow
              event={event}
              buttonType="filled"
              buttonText={"Reservation Full"}
            />
          ) : (
            <TabRow event={event} buttonText="11 Credits" />
          )
        )}

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

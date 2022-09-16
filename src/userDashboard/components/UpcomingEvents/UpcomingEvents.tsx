import React from "react";

import { SectionHeading } from "..";
import FormRow from "./FormRow";
import { FormHeaderStyle, UpcomingEventsStyle } from "./UpcomingEvents.style";

type UpcomingEventsProps = {
  events?: any;
};
const UpcomingEvents = ({ events }: UpcomingEventsProps) => {
  return (
    <SectionHeading heading="Suggested Upcoming Events">
      <UpcomingEventsStyle>
        <FormHeaderStyle>
          <span>Time & Duration</span>
          <span>Event Name & Genre</span>
          <span>Event Venue</span>
        </FormHeaderStyle>

        {events && events.map((event: any) => <FormRow event={event} />)}
        {/* <FormRow /> */}
        {/* <FormRow />
        <FormRow />
        <FormRow /> */}
      </UpcomingEventsStyle>
    </SectionHeading>
  );
};

export default UpcomingEvents;

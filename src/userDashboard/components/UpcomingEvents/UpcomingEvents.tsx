import React from "react";

import { SectionHeading } from "..";
import FormRow from "./FormRow";
import { FormHeaderStyle, UpcomingEventsStyle } from "./UpcomingEvents.style";

const UpcomingEvents = () => {
  return (
    <SectionHeading heading="Suggested Upcoming Events">
      <UpcomingEventsStyle>
          <FormHeaderStyle>
              <span>Time & Duration</span>
              <span>Event Name & Genre</span>
              <span>Event Venue</span>
          </FormHeaderStyle>

          <FormRow />
          <FormRow />
          <FormRow />
          <FormRow />
      </UpcomingEventsStyle>
    </SectionHeading>
  );
};

export default UpcomingEvents;

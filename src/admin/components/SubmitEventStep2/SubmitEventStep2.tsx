import React from "react";
import { SubmitEventStep2Style } from "./SubmitEventStep2.style";
import { CreateTicket, TicketInfoDiv } from "..";

const SubmitEventStep2 = () => {
  return (
    <SubmitEventStep2Style>
      <CreateTicket />
      <TicketInfoDiv
        heading="Premium Ticket"
        creditNo="15"
        availableTickets={44}
        description="Possimus Sunt Vitae Aut Ut Eaque Earum. Est At Cum. Qui Sit Quia Omnis Enim Ex Quos."
      />
          <TicketInfoDiv
        heading="Golden Ticket"
        creditNo="15"
        availableTickets={44}
        description="Possimus Sunt Vitae Aut Ut Eaque Earum. Est At Cum. Qui Sit Quia Omnis Enim Ex Quos."
      />
          <TicketInfoDiv
        heading="Basic Ticket"
        creditNo="15"
        availableTickets={44}
        description="Possimus Sunt Vitae Aut Ut Eaque Earum. Est At Cum. Qui Sit Quia Omnis Enim Ex Quos."
      />
    </SubmitEventStep2Style>
  );
};
export default SubmitEventStep2;

import React from "react";
import { SubmitEventStep2Style } from "./SubmitEventStep2.style";
import { CreateTicket, TicketInfoDiv, DashboardHeader } from "..";
import SubmitEventStep2Header from "../EventManagmentHeaders/SubmitEventStep2Header";
type SubmitEventStep2Props = { 
     setCurrentStep: any;
}
const SubmitEventStep2 = (props: SubmitEventStep2Props) => {
  return (
    <>
      <SubmitEventStep2Header setCurrentStep={props.setCurrentStep} />
      <SubmitEventStep2Style>
        <div className="text-wrapper">
          <h3>Events Tickets</h3>
          <p>
            Create different type of tickets for your event. You must have to
            create at least one ticket to get reservations on your event.
          </p>
        </div>
        <div className="tickets-wrapper">
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
        </div>
      </SubmitEventStep2Style>
    </>
  );
};
export default SubmitEventStep2;

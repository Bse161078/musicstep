import React, { useState } from "react";
import { SubmitEventStep2Style } from "./SubmitEventStep2.style";
import { CreateTicket, TicketInfoCard, DashboardHeader } from "..";
import { MessageModal } from "../../../components";

type SubmitEventStep2Props = {
  setCurrentStep: any;
};

const SubmitEventStep2 = (props: SubmitEventStep2Props) => {

  const { setCurrentStep } = props;
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <>
      <DashboardHeader
        heading="Submit An Event"
        backButtonText="Back To Step 1"
        handleSaveClick={() => {
          setIsModalVisible(true);
        }}
        handleCancelClick={() => {
          setCurrentStep(1);
        }}
        handleBackClick={() => {
          setCurrentStep(1);
        }}
        saveButtonText="Submit Event"
        cancelButtonText="Back"
        saveButtonWidth="190px"
      />

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

          <TicketInfoCard
            heading="Premium Ticket"
            creditNo="15"
            availableTickets={44}
            description="Possimus Sunt Vitae Aut Ut Eaque Earum. Est At Cum. Qui Sit Quia Omnis Enim Ex Quos."
          />
          <TicketInfoCard
            heading="Golden Ticket"
            creditNo="15"
            availableTickets={44}
            description="Possimus Sunt Vitae Aut Ut Eaque Earum. Est At Cum. Qui Sit Quia Omnis Enim Ex Quos."
          />
          <TicketInfoCard
            heading="Basic Ticket"
            creditNo="15"
            availableTickets={44}
            description="Possimus Sunt Vitae Aut Ut Eaque Earum. Est At Cum. Qui Sit Quia Omnis Enim Ex Quos."
          />
        </div>
      </SubmitEventStep2Style>

      <MessageModal
        heading="success"
        message="Your event is now live!"
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />

    </>
  );
};
export default SubmitEventStep2;

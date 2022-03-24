import React from "react";
import { TicketInfoCard } from "../../admin/components";
import { ModalWrapper } from "../../admin/components/Modals/ModalWrapper";
import { OutlineButtonStyle } from "../../styles/Common.style";
import EventDetailsModalStyle from "./EventDetailsModal.style";
import EventDetailWrapper from "./EventDetailWrapper";

type EventDetailsModalProps = {
  isModalVisible?: boolean;
  setIsModalVisible?: any;
  isTicketsAvailable?: boolean;
  event?: any;
};
const EventDetailsModal = (props: EventDetailsModalProps) => {
  const {
    isModalVisible,
    setIsModalVisible,
    isTicketsAvailable,
    event,
  } = props;
  console.log("Events", event);
  return (
    <>
      {isTicketsAvailable ? (
        <ModalWrapper
          heading="Event Details"
          isFooter={false}
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
          width="1050px"
        >
          <EventDetailsModalStyle>
            <EventDetailWrapper event={event} />
            <div className="ticket-container">
              {event &&
                event.tickets.map((ticket: any, index: number) => (
                  <TicketInfoCard
                    disableTicketsAvailbilty={true}
                    outlineButton={true}
                    heading={ticket.title}
                    creditNo={ticket.credits}
                    description={ticket.description}
                    ticketIndex={index}
                    event={event}
                  />
                ))}
              {/* <TicketInfoCard
                disableTicketsAvailbilty={true}
                outlineButton={true}
                heading="Premium Ticket"
                creditNo="15"
                description="Possimus Sunt Vitae Aut Ut Eaque Earum. Est At Cum. Qui Sit Quia Omnis Enim Ex Quos."
              /> */}
            </div>
          </EventDetailsModalStyle>
        </ModalWrapper>
      ) : (
        <ModalWrapper
          heading="Event Details"
          isFooter={true}
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
          width="1050px"
          button={[
            <OutlineButtonStyle
              width="100%"
              height="60px"
              onClick={() => setIsModalVisible(false)}
            >
              Explore Events
            </OutlineButtonStyle>,
            <OutlineButtonStyle
              width="100%"
              height="60px"
              onClick={() => setIsModalVisible(false)}
            >
              Explore Venue
            </OutlineButtonStyle>,
          ]}
        >
          <EventDetailsModalStyle>
            <EventDetailWrapper event={event} />
          </EventDetailsModalStyle>
        </ModalWrapper>
      )}
    </>
  );
};
export default EventDetailsModal;

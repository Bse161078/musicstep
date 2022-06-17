import React from "react";
import {useHistory} from "react-router-dom";
import {TicketInfoCard} from "../../admin/components";
import {ModalWrapper} from "../../admin/components/Modals/ModalWrapper";
import {OutlineButtonStyle} from "../../styles/Common.style";
import EventDetailsModalStyle from "./EventDetailsModal.style";
import EventDetailWrapper from "./EventDetailWrapper";

type EventDetailsModalProps = {
    isModalVisible?: boolean;
    setIsModalVisible?: any;
    isTicketsAvailable?: boolean;
    event?: any;
    subscribtionCredit?: any;
    venue?: any
};
const EventDetailsModal = (props: EventDetailsModalProps) => {
    const {
        isModalVisible,
        setIsModalVisible,
        isTicketsAvailable,
        event,
        subscribtionCredit,
        venue
    } = props;
    const history = useHistory();
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
                        <EventDetailWrapper event={event} venue={venue}/>
                        <div className="ticket-container">
                            {event &&
                            event.tickets.map((ticket: any, index: number) => (
                                <TicketInfoCard
                                    disableTicketsAvailbilty={true}
                                    outlineButton={true}
                                    heading={ticket.title}
                                    eventCredit={ticket.credits}
                                    description={ticket.description}
                                    ticketIndex={index}
                                    event={event}
                                    subscribtionCredit={subscribtionCredit}
                                    venue={venue}
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
                            onClick={() => {
                                setIsModalVisible(false);
                                history.push("/dashboard/home");
                            }}
                        >
                            Explore Events
                        </OutlineButtonStyle>,
                        <OutlineButtonStyle
                            width="100%"
                            height="60px"
                            onClick={() => {
                                setIsModalVisible(false);
                                history.push("/dashboard/home");
                            }}
                        >
                            Explore Venue
                        </OutlineButtonStyle>,
                    ]}
                >
                    <EventDetailsModalStyle>
                        <EventDetailWrapper event={event} venue={venue}/>
                    </EventDetailsModalStyle>
                </ModalWrapper>
            )}
        </>
    );
};
export default EventDetailsModal;

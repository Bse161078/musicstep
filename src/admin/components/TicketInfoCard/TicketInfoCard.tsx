import React, { useState } from "react";
import TicketInfoCardStyle from "./TicketInfoCardstyle";
import { DeleteIcon, EditButtonIcon } from "../../../assets";
import { DeleteRoleModal } from "..";
import { CreateTicketModal } from "../../../components";
import { OutlineButtonStyle } from "../../../styles/Common.style";
import { TicketModal } from "../../../components/TicketModal";

type TicketInfoCardProps = {
  heading?: string;
  eventCredit?: number;
  availableTickets?: number;
  description?: string;
  outlineButton?: boolean;
  disableTicketsAvailbilty?: boolean;
  index?: number;
  handleDeleteTicket?: any;
  ticket?: any;
  handleEditTicket?: any;
  ticketIndex?: number;
  event?: any;
  subscribtionCredit?:number;
  venue?:any
};

const TicketInfoCard = (props: TicketInfoCardProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [
    isCricketTicketModalVisible,
    setIsCricketTicketModalVisible,
  ] = useState(false);
  const [isTicketModalVisible, setTicketModalVisible] = useState(false);

  const handleDeleteModal = () => {
    setIsModalVisible(true);
  };
  const handleEditTicketModal = () => {
    setIsCricketTicketModalVisible(true);
  };
  return (
    <>
      {props.event && (
        <TicketModal
          isModalVisible={isTicketModalVisible}
          setIsModalVisible={setTicketModalVisible}
          eventCredit={props.eventCredit}
          subscribtionCredit={props.subscribtionCredit}
          ticketIndex={props.ticketIndex ? props.ticketIndex : 0}
          event={props.event}
          venue={props.venue}
        />
      )}

      <TicketInfoCardStyle disableTicketsAvailbilty>
        <h2>{props.heading}</h2>
        <p className="credits">Credits: {props.eventCredit}</p>
        {props.disableTicketsAvailbilty ? null : (
          <p className="tickets">Tickets Available: {props.availableTickets}</p>
        )}
        <p className="description">{props.description}</p>
        <div className="button-wrapper">
          {props.outlineButton ? (
            <OutlineButtonStyle
              height="53px"
              onClick={() => {
                setTicketModalVisible(true);
              }}
            >
              Reserve
            </OutlineButtonStyle>
          ) : (
            <>
              <div onClick={handleDeleteModal}>
                <DeleteIcon />
              </div>
              <div onClick={handleEditTicketModal}>
                <EditButtonIcon />
              </div>
            </>
          )}
        </div>
      </TicketInfoCardStyle>
      <DeleteRoleModal
        header={"Delete Ticket?"}
        message="Are you sure you want to delete this type of tickets?"
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        handleOkClick={() => {
          props.handleDeleteTicket(props.index);
          setIsModalVisible(false);
        }}
      />
      <CreateTicketModal
        isModalVisible={isCricketTicketModalVisible}
        setIsModalVisible={setIsCricketTicketModalVisible}
        ticket={props.ticket}
        handleEditTicket={props.handleEditTicket}
        index={props.index}
      />
    </>
  );
};

export default TicketInfoCard;

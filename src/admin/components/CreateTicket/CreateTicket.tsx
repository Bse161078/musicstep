import React, { useState } from "react";
import { CreateTicketStyle } from "./CreateTicket.style";
import { CreateTicketModal } from "../../../components/CreateTicketModal";

type CreateTicketProps = {
  setTickets?: any;
  tickets?: any;
};

const CreateTicket = ({ setTickets, tickets }: CreateTicketProps) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const handleModalVisiblity = () => {
    setModalVisible(true);
  };
  return (
    <>
      <CreateTicketStyle
        onClick={handleModalVisiblity}
        className="create-ticket-wrapper"
      >
        <p className="add-icon">+</p>
        <p className="create-ticket">Create Reservations</p>
      </CreateTicketStyle>
      <CreateTicketModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setModalVisible}
        setTickets={setTickets}
        tickets={tickets}
      />
    </>
  );
};

export default CreateTicket;

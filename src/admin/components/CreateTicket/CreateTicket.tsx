import React, { useState } from "react";
import { CreateTicketStyle } from "./CreateTicket.style";
import { CreateTicketModal } from "../../../components/CreateTicketModal";
const CreateTicket = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const handleModalVisiblity = () => {
    setModalVisible(true)
  }
  return (
    <>
      <CreateTicketStyle onClick={handleModalVisiblity} className="create-ticket-wrapper">
        <p className="add-icon">+</p>
        <p className="create-ticket">Create a Ticket</p>
      </CreateTicketStyle>
      <CreateTicketModal isModalVisible={isModalVisible} setIsModalVisible={setModalVisible} />
    </>
  );
};

export default CreateTicket;

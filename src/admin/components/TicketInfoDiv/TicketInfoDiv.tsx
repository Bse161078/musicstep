import React from "react";
import TicketInfoDivStyle from "./TicketInfoDiv.style";
import { DeleteIcon, EditButtonIcon } from "../../../assets";

type TicketInfoDivProps = {
  heading: string;
  creditNo: string;
  availableTickets: number;
  description: string;
};

const TicketInfoDiv = (props: TicketInfoDivProps) => {
  return (
    <TicketInfoDivStyle>
      <h2>{props.heading}</h2>
      <p className="credits">Credits: {props.creditNo}</p>
      <p className="tickets">Tickets Available: {props.availableTickets}</p>
      <p className="description">{props.description}</p>
      <div className="button-wrapper">
        <DeleteIcon />
        <EditButtonIcon />
      </div>
    </TicketInfoDivStyle>
  );
};

export default TicketInfoDiv

import React, { useState } from "react";
import { CheckingAvailablityModal } from "../../admin/components";
import { ModalWrapper } from "../../admin/components/Modals/ModalWrapper";
import { FilledButtonStyle } from "../../styles/Common.style";
import TicketModalStyle from "./TicketModal.style";
import moment from "moment";

type TicketModalProps = {
  isModalVisible?: boolean;
  setIsModalVisible?: any;
  ticketIndex: number;
  event?: any;
};
const TicketModal = (props: TicketModalProps) => {
  const [
    isCheckingAvailablityModalVisible,
    setIsCheckingAvailablityModalVisible,
  ] = useState(false);
  const { isModalVisible, setIsModalVisible } = props;
  const week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <ModalWrapper
      heading="Ticket"
      isFooter={false}
      isModalVisible={isModalVisible}
      setIsModalVisible={setIsModalVisible}
    >
      <TicketModalStyle>
        <div className="text-wrapper">
          <div>
            <p>Verify Details & Reserve Your Ticket</p>
          </div>

          <div className="first-wrapper">
            <span>
              <h1 id="event-name">{props.event.title}</h1>
              <p id="below-eventname">Alternative, Classical</p>
            </span>
            <span id="event-datetime">
              <p>
                {" "}
                {week[moment(props.event.date).day()]},{" "}
                {moment(props.event.date).format("MMMM") +
                  " " +
                  moment(props.event.date).date()}
              </p>
              <p>
                {moment(props.event.startingTime, ["hh:mm"]).format("hh:mm a")}{" "}
                -{moment(props.event.endingTime, ["hh:mm"]).format("hh:mm a")}
              </p>
            </span>
            <span className="location-text">
              <span>
                <p>{props.event.venueInfo[0].name}</p>
                <p> {props.event.venueInfo[0].location.address}</p>
              </span>
            </span>
            <p>Organized By: {props.event.organizerInfo[0].organizerName}</p>
          </div>

          <div className="second-wrapper">
            <h1>{props.event.tickets[props.ticketIndex].title}</h1>
            <p className="credit-text">
              Credits:{props.event.tickets[props.ticketIndex].credits}
            </p>
            <p>{props.event && props.event.eventDescription}</p>
          </div>
        </div>

        <FilledButtonStyle
          width="480px"
          height="60px"
          onClick={() => {
            setIsCheckingAvailablityModalVisible(true);
          }}
        >
          Reserved
        </FilledButtonStyle>
        <div>
          <p id="cancel-text">
            Cancel Up To 24 Hours In Advance.
            <br />
            QR Code For Entry Will Be Issued Within 24 Hours Of Event.
          </p>
        </div>
      </TicketModalStyle>
      <CheckingAvailablityModal
        isModalVisible={isCheckingAvailablityModalVisible}
        setIsModalVisible={setIsCheckingAvailablityModalVisible}
      />
    </ModalWrapper>
  );
};
export default TicketModal;

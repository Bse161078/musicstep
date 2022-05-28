import React, { useState } from "react";
import { CheckingAvailablityModal } from "../../admin/components";
import { ModalWrapper } from "../../admin/components/Modals/ModalWrapper";
import { FilledButtonStyle } from "../../styles/Common.style";
import TicketModalStyle from "./TicketModal.style";
import moment from "moment";
import axios from "axios";
import { useLoginContext } from "../../context/authenticationContext";

type TicketModalProps = {
  isModalVisible?: boolean;
  setIsModalVisible?: any;
  ticketIndex: number;
  event?: any;
};
const TicketModal = (props: TicketModalProps) => {
  console.log("propsticketmodal",props)
  const [
    isCheckingAvailablityModalVisible,
    setIsCheckingAvailablityModalVisible,
  ] = useState(false);
  const [
    isReservationConfirmedModalVisible,
    setIsReservationConfirmedModalVisible,
  ] = useState(false);
  const [message, setMessage] = useState(
    "Checking Availability, Please Wait..."
  );
  const { state, dispatch } = useLoginContext();
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
  const handlereservation = async () => {
    const bodyData = {
      event: props.event._id,
      venue: props.event.venue,
     ticketId: props.event.tickets[props.ticketIndex]._id,
      credits: props.event.tickets[props.ticketIndex].credits,
    };

    const res = await axios
      .post("/v1/reservation", bodyData, {
        headers: { Authorization: `Bearer ${state.authToken}` },
      })
      .catch((error) => {
        console.log(error.response,'errormessage');
        setMessage(error.response.data.message);
      });

    if (res) {
      setIsCheckingAvailablityModalVisible(false);
      setIsReservationConfirmedModalVisible(true);

      const response = await axios
        .get(`/v1/users/${state.data.id}`, {
          headers: { Authorization: `Bearer ${state.authToken}` },
        })
        .catch((error) => {
          console.log(error.response);
          alert(error.response.data.message);
        });
      if (response) {
        console.log(response);

        dispatch({
          type: "UPDATE_USER_CREDITS",
          payload: {
            data: response.data.credits,
          },
        });
      }
    }
  };

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
              <h1 id="event-name">{props.event && props.event.title}</h1>
              <p id="below-eventname">Alternative, Classical</p>
            </span>
            <span id="event-datetime">
              <p>
                {" "}
                {week[moment(props.event && props.event.date).day()]},{" "}
                {moment(props.event && props.event.date).format("MMMM") +
                  " " +
                  moment(props.event && props.event.date).date()}
              </p>
              <p>
                {moment(props.event && props.event.startingTime, [
                  "hh:mm",
                ]).format("hh:mm a")}{" "}
                -
                {moment(props.event && props.event.endingTime, [
                  "hh:mm",
                ]).format("hh:mm a")}
              </p>
            </span>
            <span className="location-text">
              <span>
                <p>{props.event && props.event?.name}</p>
                <p>
                  {" "}
                  {props.event && props.event?.location?.address}
                </p>
              </span>
            </span>
            <p>
              Organized By:{" "}
              {props.event && props.event?.organizerInfo?.organizerName}
            </p>
          </div>

          <div className="second-wrapper">
            <h1>
              {props.event && props.event.tickets[props.ticketIndex].title}
            </h1>
            <p className="credit-text">
              Credits:
              {props.event && props.event.tickets[props.ticketIndex].credits}
            </p>
            <p>{props.event && props.event.eventDescription}</p>
          </div>
        </div>

        <FilledButtonStyle
          width="480px"
          height="60px"
          onClick={() => {
            handlereservation();
            setIsCheckingAvailablityModalVisible(true);
          }}
        >
          Reserve Ticket
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
        message={message}
        setIsModalVisible={setIsCheckingAvailablityModalVisible}
        isReservationConfirmedModalVisible={isReservationConfirmedModalVisible}
        setIsReservationConfirmedModalVisible={
          setIsReservationConfirmedModalVisible
        }
        event={props.event}
        ticketIndex={props.ticketIndex}
      />
      {/* <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      /> */}
    </ModalWrapper>
  );
};
export default TicketModal;

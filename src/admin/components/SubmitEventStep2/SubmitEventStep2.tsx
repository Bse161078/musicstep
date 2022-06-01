import React, { useState } from "react";
import axios from "axios";
import { SubmitEventStep2Style } from "./SubmitEventStep2.style";
import { CreateTicket, TicketInfoCard, DashboardHeader } from "..";
import { MessageModal, Loading } from "../../../components";
import { useLoginContext } from "../../../context/authenticationContext";
import { useHistory } from "react-router-dom";
import { useEventContext } from "../../../context/eventContext";

type SubmitEventStep2Props = {
  setCurrentStep: any;
  setEventData: any;
  eventData: any;
};

const SubmitEventStep2 = (props: SubmitEventStep2Props) => {
  const EventStateContext = useEventContext();
  console.log(EventStateContext.state);
  const history = useHistory();
  const { setCurrentStep, eventData } = props;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [tickets, setTickets] = useState(EventStateContext.state.tickets);
  const { state } = useLoginContext();
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [isLoading, setLoading] = useState(false);

  const handleDeleteTicket = (index: number) => {
    const newTickets = [...tickets];
    newTickets.splice(index, 1);
    setTickets(newTickets);
  };
  const handleEditTicket = (index: number, data: any) => {
    const newTickets: any = [...tickets];
    newTickets[index] = data;
    setTickets(newTickets);
  };
  const createEventHandlet = async () => {
    const formatedTickets = tickets.map((ticket: any) => {
      return {
        ...ticket,
        availableTickets: ticket.numberOfTickets,
        bookedTickets: 0,
      };
    });
    // setTickets(tempTickets);
    // debugger;
    const bodyData = new FormData();

    bodyData.append("title", eventData.title);
    setLoading(true)
    bodyData.append("date", eventData.date);
    bodyData.append("startingTime", eventData.startingTime);
    bodyData.append("endingTime", eventData.endingTime);
    bodyData.append("state", eventData.state);
    bodyData.append("city", eventData.city);
    bodyData.append("country", eventData.country);
    bodyData.append("venue", eventData.venue_id);
    bodyData.append(
      "eventPhotoSameAsOrganizerPhoto",
      eventData.eventPhotoSameAsOrganizerPhoto
    );
    bodyData.append("organizer", eventData.organizer_id);
    bodyData.append("tickets", JSON.stringify(formatedTickets));
    bodyData.append("eventDescription", eventData.eventDescription);

    if (eventData.additionalPhotos) {
      const files = eventData.additionalPhotos;
      for (let i = 0; i < files.length; i++) {
        bodyData.append("additionalPhotos", files[i]);
      }
    }
    const res = await axios
      .post("/v1/event", bodyData, {
        headers: { Authorization: `Bearer ${state.authToken}`,"Content-Type": "multipart/form-data"  },
      })
      .catch((error) => {
        console.log(error,'error1111');
        //  setSuccessModalVisible(true);
        setIsModalVisible(true);
        setLoading(false)
        //setMessage(error);
        setMessageType("error");
        //  setMessage(error.response.data.error);
        //  setHeading("Error");
      });
    if (res) {
      //  setSuccessModalVisible(true);
      //  setMessage("Organizer created Successfully");
      //  setHeading("Success");
      setLoading(false)
      setMessage("Event created Successfully");
      setMessageType("success");
      setIsModalVisible(true);
      //  console.log(res.data);
      EventStateContext.dispatch({
        type: "REMOVE_EVENT_INFO",
        payload: {},
      });
    }
  };

  return (
    <>
      <DashboardHeader
        heading="Submit An Event"
        backButtonText="Back To Step 1"
        handleSaveClick={() => {
          createEventHandlet();
        }}
        handleCancelClick={() => {
          EventStateContext.dispatch({
            type: "SAVE_TICKET",
            payload: {
              tickets: tickets,
            },
          });
          setCurrentStep(1);
        }}
        handleBackClick={() => {
          setCurrentStep(1);
        }}
        saveButtonText="Submit Event"
        cancelButtonText="Back"
        saveButtonWidth="190px"
      />
      {isLoading&&<Loading/>}
      <SubmitEventStep2Style>
        <div className="text-wrapper">
          <h3>Events Tickets</h3>
          <p>
            Create different type of tickets for your event. You must have to
            create at least one ticket to get reservations on your event.
          </p>
        </div>
        <div className="tickets-wrapper">
          <CreateTicket setTickets={setTickets} tickets={tickets} />

          {tickets.map((ticket: any, index: any) => (
            <TicketInfoCard
              heading={ticket.title}
              eventCredit={ticket.credits}
              availableTickets={ticket.numberOfTickets}
              description={ticket.description}
              index={index}
              handleDeleteTicket={handleDeleteTicket}
              ticket={ticket}
              handleEditTicket={handleEditTicket}
            />
          ))}
        </div>
      </SubmitEventStep2Style>

      <MessageModal
        heading={messageType}
        message={message}
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        handleOkClick={() => {
          if (messageType === "success") {
            console.log('done')
            history.push("/admin/events-management");
          }
        }}
      />
    </>
  );
};
export default SubmitEventStep2;

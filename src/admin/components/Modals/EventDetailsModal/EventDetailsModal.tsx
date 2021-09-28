import React, { useState } from "react";
import { CheckingAvailablityModal } from "..";
import { FilledButtonStyle } from "../../../../styles/Common.style";
import { ModalWrapper } from "../ModalWrapper";
import { EventDetailsModalStyle } from "./EventDetailsModal.style";

type EventDetailsModalProps = {
  isModalVisible?: boolean;
  setIsModalVisible?: any;
};
const EventDetailsModal = (props: EventDetailsModalProps) => {
  const { isModalVisible, setIsModalVisible } = props;
  const [
    isCheckingAvailablityModalVisible,
    setIsCheckingAvailablityModalVisible,
  ] = useState(false);
  const handleCheckingAvailablityModalVisible = () => {
    setIsModalVisible(false);
    setIsCheckingAvailablityModalVisible(true);
  };
  return (
    <>
      <ModalWrapper
        heading="Event Details"
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        width="540px"
        isFooter={false}
      >
        <EventDetailsModalStyle>
          <div className="image-wrapper">
            <img alt="thumb" src="/images/NoPath - Copy (5).png" />
          </div>
          <div className="text-wrapper">
            <div>
              <h1 id="event-name">Franklin Kub's Concert</h1>
              <p id="below-eventname">Alternative, Classical</p>
            </div>
            <p id="location-text">E11EVEN Miami Nightclub</p>
            <p id="event-dateTime">Friday, August 27 7:00 PM - 7:45 Pm</p>
            <p id="credits">6 Credits</p>
          </div>
          <FilledButtonStyle
            onClick={handleCheckingAvailablityModalVisible}
            width="480px"
          >
            Reserve Event
          </FilledButtonStyle>
          <div>
            <p id="cancel-text">Cancel Up To 24 Hours In Advance.</p>
            <p id="cancel-text">
              QR Code For Entry Will Be Issued Within 24 Hours Of Event.
            </p>
          </div>
        </EventDetailsModalStyle>
      </ModalWrapper>
      <CheckingAvailablityModal isModalVisible={isCheckingAvailablityModalVisible} setIsModalVisible={setIsCheckingAvailablityModalVisible} />
    </>
  );
};
export default EventDetailsModal;

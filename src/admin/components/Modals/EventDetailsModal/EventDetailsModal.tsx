import react from "react";
import { FilledButtonStyle } from "../../../../styles/Common.style";
import { ModalWrapper } from "../ModalWrapper";
import { EventDetailsModalStyle } from "./EventDetailsModal.style";

type EventDetailsModalProps = {
  isModalVisible?: boolean;
  setIsModalVisible?: any;
};
const EventDetailsModal = (props: EventDetailsModalProps) => {
  const { isModalVisible, setIsModalVisible } = props;
  return (
    <ModalWrapper
      heading="Event Details"
      isModalVisible={isModalVisible}
      setIsModalVisible={setIsModalVisible}
      width="540px"
      button={<FilledButtonStyle width="500px">Okay</FilledButtonStyle>}
    >
      <EventDetailsModalStyle>
        <div className="image-wrapper">
          <img src="/images/NoPath - Copy (5).png" />
        </div>
        <div className="text-wrapper">
          <h1 id="event-name">Franklin Kub's Concert</h1>
          <p id="below-eventname">Alternative, Classical</p>
          <p id="location-text">E11EVEN Miami Nightclub</p>
          <p id="event-dateTime">Friday, August 27 7:00 PM - 7:45 Pm</p>
          <p id="credits">6 Credits</p>
        </div>
        {/* <p>Cancel Up To 24 Hours In Advance. QR Code For Entry Will Be Issued Within 24 Hours Of Event.</p> */}
      </EventDetailsModalStyle>
    </ModalWrapper>
  );
};
export default EventDetailsModal;

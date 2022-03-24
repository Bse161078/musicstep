import React, { useEffect, useState } from "react";
import { MessageModal, NavbarWithSearch } from "../../../components";
import {
  FilledButtonStyle,
  OutlineButtonStyle,
} from "../../../styles/Common.style";

import {
  CardWithContent,
  SectionHeading,
  UpcomingEvents,
  UserSidebar,
} from "../../components";
import { GuestListModal } from "../../Modals";
import { EventReservationStyle, UserHomeStyle } from "./UserHome.style";
import axios from "axios";

import { useHistory } from "react-router-dom";

import { useLoginContext } from "../../../context/authenticationContext";
import { Spinner } from "../../../components/Spinner";

const EventReservation = () => {
  const [isCancelModalVisible, setCancelModalVisible] = useState(false);
  const [isSuccessModalVisible, setSuccessModalVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <>
      <SectionHeading heading="Events In Reservation">
        <EventReservationStyle>
          <CardWithContent
            heading="Franklin Kub's concert"
            time="10:51 AM"
            footerText="Cancelation Time Left: 22:32:09"
            buttonType="filled"
            handleButtonClick={() => setCancelModalVisible(true)}
          />
          <CardWithContent
            buttonText="Reserved"
            heading="Franklin Kub's Concert"
            time="10:51 AM"
            footerText="(Click to View Guest List)"
            handleButtonClick={() => {
              setIsModalVisible(true);
            }}
          />
        </EventReservationStyle>

        <MessageModal
          isModalVisible={isCancelModalVisible}
          setIsModalVisible={setCancelModalVisible}
          icon={<img src="/images/icons/cancel-icon.svg" alt="icon" />}
          heading="Cancel Reservation?"
          message="Are you sure you want to cancel this reservation?"
          buttons={[
            <OutlineButtonStyle
              width="100%"
              height="60px"
              onClick={() => setCancelModalVisible(false)}
            >
              No
            </OutlineButtonStyle>,
            <FilledButtonStyle
              width="100%"
              height="60px"
              onClick={() => {
                setCancelModalVisible(false);
                setSuccessModalVisible(true);
              }}
            >
              Cancel
            </FilledButtonStyle>,
          ]}
        />

        <MessageModal
          isModalVisible={isSuccessModalVisible}
          setIsModalVisible={setSuccessModalVisible}
          heading="Success"
          message="Reservation canceled successfully."
        />
      </SectionHeading>
      <GuestListModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
    </>
  );
};

export default function UserHome() {
  const history = useHistory();
  const { state, dispatch } = useLoginContext();
  const [events, setEvents] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleClick = () => {
    history.push({
      pathname: `/explore-venue/venue-details`,

      // state: { venueDetail: venue.venueInfo[0] },
    });
  };

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`/v1/users/allEventsOfVenue`, {
        headers: { Authorization: `Bearer ${state.authToken}` },
      })
      .then((res) => {
        console.log(res.data);
        setEvents(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);

  return (
    <>
      <NavbarWithSearch />
      <UserHomeStyle>
        <UserSidebar />
        <div>
          <EventReservation />
          <div className="divider" />
          {!isLoading ? (
            events.length > 0 ? (
              <UpcomingEvents events={events} />
            ) : null
          ) : (
            <Spinner />
          )}
        </div>
      </UserHomeStyle>
    </>
  );
}

import React, { useState } from 'react'
import { MessageModal, NavbarWithSearch } from '../../../components'
import {
  FilledButtonStyle,
  OutlineButtonStyle,
} from '../../../styles/Common.style'

import {
  CardWithContent,
  SectionHeading,
  UpcomingEvents,
  UserSidebar,
} from '../../components'
import { GuestListModal } from '../../Modals'
import { EventReservationStyle, UserHomeStyle } from './UserHome.style'

const EventReservation = () => {
  const [isCancelModalVisible, setCancelModalVisible] = useState(false)
  const [isSuccessModalVisible, setSuccessModalVisible] = useState(false)
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
          handleButtonClick={() => {setIsModalVisible(true)}}
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
              setCancelModalVisible(false)
              setSuccessModalVisible(true)
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
  )
}

export default function UserHome() {
  return (
    <>
      <NavbarWithSearch />
      <UserHomeStyle>
        <UserSidebar />
        <div>
          <EventReservation />
          <div className="divider" />
          <UpcomingEvents />
          <UpcomingEvents />
        </div>
      </UserHomeStyle>
    </>
  )
}

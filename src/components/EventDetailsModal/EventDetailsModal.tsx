import React from 'react'
import { TicketInfoCard } from '../../admin/components'
import { ModalWrapper } from '../../admin/components/Modals/ModalWrapper'
import {
  OutlineButtonStyle
} from '../../styles/Common.style'
import EventDetailsModalStyle from './EventDetailsModal.style'
import EventDetailWrapper from './EventDetailWrapper'

type EventDetailsModalProps = {
  isModalVisible?: boolean
  setIsModalVisible?: any
  isTicketsAvailable?: boolean
}
const EventDetailsModal = (props: EventDetailsModalProps) => {
  const { isModalVisible, setIsModalVisible, isTicketsAvailable } = props
  return (
    <>
      {isTicketsAvailable ? (
        <ModalWrapper
          heading="Event Details"
          isFooter={false}
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
          width="1050px"
        >
          <EventDetailsModalStyle>
            <EventDetailWrapper />
            <div className="ticket-container">
              <TicketInfoCard
                disableTicketsAvailbilty={true}
                outlineButton={true}
                heading="Premium Ticket"
                creditNo="15"
                description="Possimus Sunt Vitae Aut Ut Eaque Earum. Est At Cum. Qui Sit Quia Omnis Enim Ex Quos."
              />
              <TicketInfoCard
                disableTicketsAvailbilty={true}
                outlineButton={true}
                heading="Golden Ticket"
                creditNo="15"
                description="Possimus Sunt Vitae Aut Ut Eaque Earum. Est At Cum. Qui Sit Quia Omnis Enim Ex Quos."
              />
              <TicketInfoCard
                disableTicketsAvailbilty={true}
                outlineButton={true}
                heading="Basic Ticket"
                description="Possimus Sunt Vitae Aut Ut Eaque Earum. Est At Cum. Qui Sit Quia Omnis Enim Ex Quos."
              />
              
            </div>
          </EventDetailsModalStyle>
        </ModalWrapper>
      ) : (
        <ModalWrapper
          heading="Event Details"
          isFooter={true}
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
          width="1050px"
          button={[
            <OutlineButtonStyle width="100%" height="60px">
              Explore Events
            </OutlineButtonStyle>,
            <OutlineButtonStyle width="100%" height="60px">
              Explore Venue
            </OutlineButtonStyle>,
          ]}
        >
          <EventDetailsModalStyle>
            <EventDetailWrapper />
          </EventDetailsModalStyle>
        </ModalWrapper>
      )}
    </>
  )
}
export default EventDetailsModal

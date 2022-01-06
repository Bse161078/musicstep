import React from 'react'
import { TicketInfoCard } from '../../admin/components'
import { ModalWrapper } from '../../admin/components/Modals/ModalWrapper'
import EventDetailsModalStyle from './EventDetailsModal.style'

type EventDetailsModalProps = {
  isModalVisible?: boolean
  setIsModalVisible?: any
}
const EventDetailsModal = (props: EventDetailsModalProps) => {
  const { isModalVisible, setIsModalVisible } = props
  return (
    <>
      <ModalWrapper
        heading="Event Details"
        isFooter={false}
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        width="1050px"
      >
        <EventDetailsModalStyle>
          <div className="ticket-container">
            <TicketInfoCard
              outlineButton={true}
              heading="Premium Ticket"
              availableTickets={15}
              creditNo="15"
              description="Possimus Sunt Vitae Aut Ut Eaque Earum. Est At Cum. Qui Sit Quia Omnis Enim Ex Quos."
            />
            <TicketInfoCard
              outlineButton={true}
              heading="Golden Ticket"
              availableTickets={15}
              creditNo="15"
              description="Possimus Sunt Vitae Aut Ut Eaque Earum. Est At Cum. Qui Sit Quia Omnis Enim Ex Quos."
            />
            <TicketInfoCard
              outlineButton={true}
              heading="Basic Ticket"
              availableTickets={15}
              creditNo="15"
              description="Possimus Sunt Vitae Aut Ut Eaque Earum. Est At Cum. Qui Sit Quia Omnis Enim Ex Quos."
            />
          </div>
        </EventDetailsModalStyle>
      </ModalWrapper>
    </>
  )
}
export default EventDetailsModal

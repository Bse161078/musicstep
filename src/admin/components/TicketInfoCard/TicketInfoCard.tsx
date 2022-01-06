import React, { useState } from 'react'
import TicketInfoCardStyle from './TicketInfoCardstyle'
import { DeleteIcon, EditButtonIcon } from '../../../assets'
import { DeleteRoleModal } from '..'
import { CreateTicketModal } from '../../../components'
import { OutlineButtonStyle } from '../../../styles/Common.style'
import { TicketModal } from '../../../components/TicketModal'

type TicketInfoCardProps = {
  heading?: string
  creditNo?: string
  availableTickets?: number
  description?: string
  outlineButton?: boolean
  disableTicketsAvailbilty?: boolean
}

const TicketInfoCard = (props: TicketInfoCardProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [
    isCricketTicketModalVisible,
    setIsCricketTicketModalVisible,
  ] = useState(false)
  const [isTicketModalVisible, setTicketModalVisible] = useState(false)

  const handleDeleteModal = () => {
    setIsModalVisible(true)
  }
  const handleEditTicketModal = () => {
    setIsCricketTicketModalVisible(true)
  }
  return (
    <>
      <TicketModal
        isModalVisible={isTicketModalVisible}
        setIsModalVisible={setTicketModalVisible}
      />
      <TicketInfoCardStyle disableTicketsAvailbilty>
        <h2>{props.heading}</h2>
        <p className="credits">Credits: {props.creditNo}</p>
        {props.disableTicketsAvailbilty ? null : (
          <p className="tickets">Tickets Available: {props.availableTickets}</p>
        )}
        <p className="description">{props.description}</p>
        <div className="button-wrapper">
          {props.outlineButton ? (
            <OutlineButtonStyle
              height="53px"
              onClick={() => {
                setTicketModalVisible(true)
              }}
            >
              Reserve
            </OutlineButtonStyle>
          ) : (
            <>
              <div onClick={handleDeleteModal}>
                <DeleteIcon />
              </div>
              <div onClick={handleEditTicketModal}>
                <EditButtonIcon />
              </div>
            </>
          )}
        </div>
      </TicketInfoCardStyle>
      <DeleteRoleModal
        message="Are you sure you want to delete this type of tickets?"
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
      <CreateTicketModal
        isModalVisible={isCricketTicketModalVisible}
        setIsModalVisible={setIsCricketTicketModalVisible}
      />
    </>
  )
}

export default TicketInfoCard

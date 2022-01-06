import React, { useState } from 'react'
import TicketInfoCardStyle from './TicketInfoCardstyle'
import { DeleteIcon, EditButtonIcon } from '../../../assets'
import { DeleteRoleModal } from '..'
import { CreateTicketModal } from '../../../components'
import { OutlineButtonStyle } from '../../../styles/Common.style'
type TicketInfoCardProps = {
  heading?: string
  creditNo?: string
  availableTickets?: number
  description?: string
  outlineButton?: boolean
}

const TicketInfoCard = (props: TicketInfoCardProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isTicketModalVisible, setIsTicketModalVisible] = useState(false)

  const handleDeleteModal = () => {
    setIsModalVisible(true)
  }
  const handleEditTicketModal = () => {
    setIsTicketModalVisible(true)
  }
  return (
    <>
      <TicketInfoCardStyle>
        <h2>{props.heading}</h2>
        <p className="credits">Credits: {props.creditNo}</p>
        <p className="tickets">Tickets Available: {props.availableTickets}</p>
        <p className="description">{props.description}</p>
        <div className="button-wrapper">
          {props.outlineButton ? (
            <OutlineButtonStyle height='53px'>Reserve</OutlineButtonStyle>
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
        isModalVisible={isTicketModalVisible}
        setIsModalVisible={setIsTicketModalVisible}
      />
    </>
  )
}

export default TicketInfoCard

import React, { useState } from 'react'
import NotificationModalStyle from './NotificationsModal.style'
import { ModalWrapper } from '../../../../admin/components/Modals/ModalWrapper'
import { ShareYourExperinceModal, ProfileModal } from '../../Modals'

type NotificationModalProps = {
  isModalVisible: boolean
  setIsModalVisible: (data: boolean) => void
}
const NotificationModal = (props: NotificationModalProps) => {
  const { isModalVisible, setIsModalVisible } = props
  const [
    isShareYourExperinceModalVisible,
    setIsShareYourExperinceModalVisible,
  ] = useState(false)
  const [isProfileModalVisible, setIsProfileModalVisible] = useState(false)
  return (
    <>
      <ModalWrapper
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        isFooter={false}
        heading="Notifications"
        width="610px"
      >
        <NotificationModalStyle>
          <div
            className="content-wrapper"
            onClick={() => {
              setIsShareYourExperinceModalVisible(true)
            }}
          >
            <span className="notification-text">
              How was your event? Let the community know by posting a review
              about the event, venue and event organizers.
            </span>
            <p className="date-text">20 Days Ago</p>
          </div>
          
          {/* profile modal form notification  */}

          <div className="content-wrapper">
            <span
              className="notification-text"
              onClick={() => {
                setIsProfileModalVisible(true)
              }}
            >
              You have 12 new people with mutual events history.
            </span>
            <p className="date-text">20 Days Ago</p>
          </div>

          <div className="content-wrapper">
            <span
              className="notification-text"
              onClick={() => {
                setIsProfileModalVisible(true)
              }}
            >
              You have 12 new people with mutual events history.
            </span>
            <p className="date-text">20 Days Ago</p>
          </div>

          <div className="content-wrapper">
            <span className="notification-text">
              You have 12 new people with mutual events history.
            </span>
            <p className="date-text">20 Days Ago</p>
          </div>
          <div className="content-wrapper">
            <span className="notification-text">
              You have 12 new people with mutual events history.
            </span>
            <p className="date-text">20 Days Ago</p>
          </div>
          <div className="content-wrapper">
            <span className="notification-text">
              How was your event? Let the community know by posting a review
              about the event, venue and event organizers.
            </span>
            <p className="date-text">20 Days Ago</p>
          </div>
        </NotificationModalStyle>
      </ModalWrapper>
      <ShareYourExperinceModal
        isModalVisible={isShareYourExperinceModalVisible}
        setIsModalVisible={setIsShareYourExperinceModalVisible}
      />
      <ProfileModal
        isModalVisible={isProfileModalVisible}
        setIsModalVisible={setIsProfileModalVisible}
        nextEventDisable={true}
      />
    </>
  )
}
export default NotificationModal

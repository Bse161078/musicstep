import React, { useState } from 'react'
import { CheckingAvailablityModal } from '../../admin/components'
import { ModalWrapper } from '../../admin/components/Modals/ModalWrapper'
import { FilledButtonStyle } from '../../styles/Common.style'
import TicketModalStyle from './TicketModal.style'

type TicketModalProps = {
  isModalVisible?: boolean
  setIsModalVisible?: any
}
const TicketModal = (props: TicketModalProps) => {
  const [
    isCheckingAvailablityModalVisible,
    setIsCheckingAvailablityModalVisible,
  ] = useState(false)
  const { isModalVisible, setIsModalVisible } = props

  return (
    <ModalWrapper
      heading="Ticket"
      isFooter={false}
      isModalVisible={isModalVisible}
      setIsModalVisible={setIsModalVisible}
    >
      <TicketModalStyle>
        <div className="text-wrapper">
          <div>
            <p>Verify Details & Reserve Your Ticket</p>
          </div>

          <div className="first-wrapper">
            <span>
              <h1 id="event-name">Franklin Kub's Concert</h1>
              <p id="below-eventname">Alternative, Classical</p>
            </span>
            <span id="event-datetime">
              <p>Friday, August 27</p> <p> 7:00 PM - 7:45 PM</p>{' '}
            </span>
            <span className="location-text">
              <span>
                <p>E11EVEN Miami Nightclub</p>
                <p>1020 NW 183rd St, Miami, Florida(FL), 33169</p>
              </span>
            </span>
            <p>Organized By: Sunrise Events</p>
          </div>

          <div className="second-wrapper">
            <h1>Golden Ticket</h1>
            <p className="credit-text">Credits: 11</p>
            <p>
              Possimus Sunt Vitae Aut Ut Eaque Earum. Est At Cum. Qui Sit Quia
              Omnis Enim Ex Quos.
            </p>
          </div>
        </div>

        <FilledButtonStyle
          width="480px"
          height="60px"
          onClick={() => {
            setIsCheckingAvailablityModalVisible(true)
          }}
        >
          Reserved
        </FilledButtonStyle>
        <div>
          <p id="cancel-text">
            Cancel Up To 24 Hours In Advance.
            <br />
            QR Code For Entry Will Be Issued Within 24 Hours Of Event.
          </p>
        </div>
      </TicketModalStyle>
      <CheckingAvailablityModal
        isModalVisible={isCheckingAvailablityModalVisible}
        setIsModalVisible={setIsCheckingAvailablityModalVisible}
      />
    </ModalWrapper>
  )
}
export default TicketModal

import React, { useState } from 'react'

import {
  FilledButtonStyle,
  OutlineButtonStyle,
} from '../../styles/Common.style'
import { EventDetailsModal } from '../EventDetailsModal'
import { TabRowStyle } from './UpcomingEvents.style'

type TabRowProps = {
  buttonType?: string
  buttonText?: string
  buttonClick?: any
}

export const TabRow = (props: TabRowProps) => {
  const { buttonType, buttonText } = props
  const [isEventDetailsModalVisibel, setIsEventDetailsModalVisibel] = useState(false)
  const [isTicketsAvailabe, setIsTicketsAvailabe] =  useState(true)

  return (
    <>
      <TabRowStyle>
        <div className="time">
          <span>10:51AM</span>
          <span className="hour">1 Hour</span>
        </div>
        <div className="time">
          <span>Franklin Kub's Concert</span>
          <span className="hour">Alternative, Classical</span>
        </div>
        <div>
          <p className="person-number">338</p>
        </div>

        {buttonType === 'filled' ? (
          <FilledButtonStyle
            buttonType="dark"
            width="150px"
            height="43px"
             onClick={() => {
                setIsEventDetailsModalVisibel(true)
                setIsTicketsAvailabe(false)
              }}
            className="pricing"
          >
            {buttonText}
          </FilledButtonStyle>
        ) : (
          <div>
            <OutlineButtonStyle
              width="150px"
              height="43px"
              className="pricing"
              onClick={() => {
                setIsEventDetailsModalVisibel(true)
                 setIsTicketsAvailabe(true)
              }}
            >
              {buttonText}
            </OutlineButtonStyle>
          </div>
        )}
      </TabRowStyle>
      <EventDetailsModal
        isModalVisible={isEventDetailsModalVisibel}
        setIsModalVisible={setIsEventDetailsModalVisibel}
        isTicketsAvailable={isTicketsAvailabe}
      />
    </>
  )
}

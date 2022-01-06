import React, { useState } from 'react'
import { EventDetailsModal } from '..'
import {
  FilledButtonStyle,
  OutlineButtonStyle,
} from '../../styles/Common.style'
import { TabRowStyle } from './UpcomingEvents.style'

type TabRowProps = {
  buttonType?: string
  buttonText?: string
  buttonClick?: any
}

export const TabRow = (props: TabRowProps) => {
  const { buttonType, buttonText, buttonClick } = props
  const [isEventDetailsModalVisibel, setIsEventDetailsModalVisibel] = useState(false)

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
            onClick={buttonClick}
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
      />
    </>
  )
}

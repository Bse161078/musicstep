import React from 'react'

import { TabRow } from './TabRow'
import { UpcomingEventsStyle } from './UpcomingEvents.style'

const UpcomingEvents = () => {
  return (
    <UpcomingEventsStyle>
      <div className="list-header">
        <span>Today, 1 September</span>

        <span>Availability</span>
      </div>
      <TabRow buttonType="filled" buttonText="Reservation Full" />
      <TabRow buttonText="11 Credits" />
      <TabRow buttonType="filled" buttonText="Reservation Full" />
      <TabRow buttonText="11 Credits" />
      <TabRow buttonType="filled" buttonText="Reservation Full" />
      <TabRow buttonText="11 Credits" />
      <TabRow buttonText="13 Credits" />
      <TabRow buttonText="11 Credits" />
      <TabRow buttonText="11 Credits" />
    </UpcomingEventsStyle>
  )
}

export default UpcomingEvents

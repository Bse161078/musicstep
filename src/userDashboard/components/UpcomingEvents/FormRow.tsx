import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { EventDetailsModal } from '../../../components'
import { OutlineButtonStyle } from '../../../styles/Common.style'

import { FormRowStyle } from './UpcomingEvents.style'

const FormRow = () => {
  const [isEventDetailsModalVisibel, setIsEventDetailsModalVisibel] = useState(
    false,
  )
  const history = useHistory()
  const handleViewVenue = () => {
    history.push('/explore-venue/venue-details')
  }
  return (
    <>
      <FormRowStyle>
        <img src="/images/sample.png" className="thumbnail" alt="thumbnail" />

        <div className="table-cell">
          <h2 className="heading">10:51 AM</h2>
          <span className="description">1 Hour</span>
        </div>

        <div className="table-cell">
          <h2 className="heading">Franklin Kub's Concert</h2>
          <span className="description">Alternative, Classical</span>
        </div>
        <div className="table-cell">
          <p className='event-name'>Kreiger - Herman Club</p>
        </div>
        <div className="tabel-cell">
          <div className="button-wrapper">
            <OutlineButtonStyle
              width="150px"
              height="44px"
              onClick={handleViewVenue}
            >
              View Venue
            </OutlineButtonStyle>
            <OutlineButtonStyle
              width="150px"
              height="44px"
              onClick={() => {
                setIsEventDetailsModalVisibel(true)
              }}
            >
              10 Credits
            </OutlineButtonStyle>
          </div>
        </div>
      </FormRowStyle>
      <EventDetailsModal
        isModalVisible={isEventDetailsModalVisibel}
        setIsModalVisible={setIsEventDetailsModalVisibel}
        isTicketsAvailable={true}
      />
    </>
  )
}

export default FormRow

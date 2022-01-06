import React from 'react'

export const EventDetailWrapper = () => {
  return (
    <div className="first-row-wrapper">
      <img
        src="/images/crystal2.png"
        alt="crystal"
        width="480px"
        height="270px"
      />

      <div className="description-wrapper">
        <div className="concert-name">
          <h3>Franklin Kub's Concert</h3>
          <p>Alternative, Classical</p>
        </div>

        <div className="description">
          <p>
            Earum Dolorem Eius Et Corrupti Fugit Expedita. Facilis Expedita
            Voluptatibus. Possimus Repudiandae Delectus. Excepturi Ipsum Iure
            Saepe Ipsa Voluptatibus Corrupti.
          </p>
        </div>

        <div className="date-time">
          <p>Friday, August 27 </p>
          <p>7:00 PM - 7:45 Pm</p>
        </div>

        <div>
          <p>E11EVEN Miami Nightclub</p>
          <p>
            {' '}
            <img src="/images/icons/location-icon.svg" alt="location" />
            1020 NW 183rd St, Miami, Florida(FL), 33169
          </p>
        </div>

        <div className="organizedBy-text">
          <p>
            Organized by: <span className="link">SunriseEvents</span>
          </p>
        </div>
      </div>
    </div>
  )
}
export default EventDetailWrapper

import styled from 'styled-components'

const EventDetailsModalStyle = styled.div`
  .ticket-container {
    border-top: 2px solid #ccc;
    padding-top: 40px;
    margin-top: 40px;
    display: flex;
    justify-content: center;
    gap: 20px;
  }
  .first-row-wrapper {
    display: flex;
    gap: 20px;
    font-weight: normal;
  }

  .description-wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: start;

    .concert-name {
      h3 {
        font-size: 24px;
        font-weight: bold;
      }

      p {
        font-size: 14px;
      }
    }
    .description {
      font-size: 14px;
      font-weight:350;
    }

    .date-time {
      font-weight: 600;
      font-size: 20px;
    }

    .organizedBy-text {
      color: #100840;
      .link {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
`

export default EventDetailsModalStyle

import styled from "styled-components";

export const SubscriptionDetailsModalStyle = styled.div`
  gap: 20px;
  display: flex;
  flex-direction: column;

  .detail-wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px 30px;
    background: #f7f7f7;
    border-radius: 32px;

    .title-wrapper {
      .heading {
        font-size: 40px;

        span {
          color: #ff33cc;
          font-family: "Covered By Your Grace", cursive;
        }
      }
    }
  }

  .button-wrapper {
    display: flex;
    grid-gap: 20px;
  }

  .event-per-months-wraper {
  }

  .credits {
    font-size: 20px;
    font-weight: 300;
    margin: 0px;
  }
`;

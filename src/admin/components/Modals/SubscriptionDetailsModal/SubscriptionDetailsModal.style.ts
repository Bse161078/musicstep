import styled from "styled-components";

export const SubscriptionDetailsModalStyle = styled.div`
  gap: 20px;
  display: flex;
  flex-direction: column;
  .detail-wrapper {
    gap: 20px;
    display: flex;
    flex-direction: column;
    padding:20px 30px ;
    background: #f7f7f7;
    border-radius: 32px;
    height: 254px;
    .title-wrapper {
      h1 {
        font-size: 40px;
      }
      .eth-title {
        color: #ff33cc;
        font-size: 40px;
      }
    }
  }
  .button-wrapper {
    display: flex;
    justify-content: space-between;
  }
  .event-per-months-wraper {
  }
  p {
    font-size: 20px;
    font-weight: 300;
    margin: 0px;
  }
`;

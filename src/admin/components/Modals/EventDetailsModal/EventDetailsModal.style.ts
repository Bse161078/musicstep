import styled from "styled-components";

export const EventDetailsModalStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  .image-wrapper {
    img {
      max-width: 480px;
      width: 100%;
      border-radius: 16px;
    }
  }
  .text-wrapper {
    text-align: start;
  }
  #event-name {
     font-size: 24px;
     font-weight: 800;
     margin-left: 0px;
  }
  #below-eventname {
     font-size:19px;
     opacity: 0.5;
     margin-bottom: 20px;
  }
  #location-text{
     font-size: 16px;
     font-weight: 500;
     margin-bottom: 20px;
  }
  #event-dateTime {
     font-size: 24px;
     width: 240px;
     font-weight: 500;
     margin-bottom: 20px;
  }
  #credits{
     font-size: 19px;
  }
  #cancel-text{
     font-size: 15px;
     opacity: 0.5;
      margin-top: 20px;
  }

`;

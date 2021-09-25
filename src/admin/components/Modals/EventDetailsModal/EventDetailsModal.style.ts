import styled from "styled-components";

export const EventDetailsModalStyle = styled.div`
  display: grid;
  width: 480px;
  padding-right: 38px;
  gap: 30px;
  .image-wrapper {
    margin-right: 50px;
    width: 480px;
    img {
      width: 480px;
      border-radius: 16px;
    }
  }
  .text-wrapper {
    text-align: start;
  }
  #event-name {
     font-size: 24px;
     font-weight: 800;
  }
  #below-eventname {
     font-size:19px;
     opacity: 0.5;
  }
  #location-text{
     font-size: 19px;
     font-weight: 500;
  }
  #event-dateTime {
     font-size: 24px;
     width: 240pxv;
  }
  #credits{
     font-size: 19px;
  }
`;

import styled from "styled-components";

const NotificationModalStyle = styled.div`  
  .content-wrapper {
     border-top: 1px solid #CCC;
     display: flex;
     flex-direction: column;
     text-align: start;
     gap: 5px;
     width: 100%;
     padding: 15px 0px;
    
  }
   .notification-text {
      font-size: 16px;
      cursor: pointer;
   }
   .date-text{
      font-size: 13px;
      font-weight: normal;
   }
`

export default NotificationModalStyle

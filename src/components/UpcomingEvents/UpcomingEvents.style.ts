import { rgba } from "polished";
import styled from "styled-components";
import { OutlineButtonStyle } from "../../styles/Common.style";

export const UpcomingEventsStyle = styled.div`
  .list-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 60px;
    border-radius: 24px;
    border: solid 1px rgba(12, 12, 12, 0.3);
    font-size: 16px;
    font-weight: bold;
    color: #0c0c0c;
    @media (max-width: 767px) {
      display: grid;
      grid-template-columns: 210px 1fr;
    }
  }
`;

// grid-template-columns: auto 1fr 0.3fr auto;
// grid-template-areas: 'myArea myArea . . .';
export const TabRowStyle = styled.div`
  display: grid;
  grid-template: auto / 13% 12% 10% 9% 20%;
  grid-gap: 30px;
  padding: 15px 0;
  margin: 0 30px;
  overflow:auto;
  margin-right: 5px;
  border-bottom: solid 1px ${rgba("#0c0c0c", 0.3)};
  &:last-child {
    border-bottom: none;
}
  
  align-items: center;

  @media (max-width: 1760px) {
    display: grid;
    grid-template: auto / 13% 12% 10% 10% 25%;
  }
  @media (max-width: 1500px) {
    display: grid;
    grid-template: auto / 17% 15% 10% 10% 21%;
  }
  @media (max-width: 1250px) {
    display: grid;
    grid-template-columns: 17% 17% 10% auto auto;
  }
  @media (max-width: 767px) {
    display: grid;
    padding-right:10px;
    grid-template-columns: 20% 20% 10% auto auto;
  }

  .time {
    font-size: 16px;
    font-weight: bold;
    color: #0c0c0c;
    display: grid;

    .hour {
      font-size: 15px;
      color: #0c0c0c;
      opacity: 0.5;
    }
  }
  .fillButton {
    font-size: 20px;
    font-weight: bold;
    color: #0c0c0c;
    display: flex;

 
  }
  .name {
    font-size: 16px;
    font-weight: bold;
    color: #0c0c0c;
    display: grid;


    .genre {
      font-size: 15px;
      color: #0c0c0c;
      opacity: 0.5;
    }
  }
  .pricing {
    margin-left: auto;

    ${OutlineButtonStyle} {
    }
  }
  .person-number {
    color:#100840;
    font-size: 16px;
    font-weight: 700;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

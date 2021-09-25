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
  }

  .row-wrapper {
    display: flex;
    grid-template-columns: auto auto 1fr;
    grid-gap: 30px;
    padding: 15px 0;
    margin: 0 30px;
    border-bottom: solid 1px ${rgba("#0c0c0c", 0.3)};

    .time {
      font-size: 20px;
      font-weight: bold;
      color: #0c0c0c;
      display: grid;

      .hour {
        font-size: 16px;
        color: #0c0c0c;
        opacity: 0.5;
      }
    }

    ${OutlineButtonStyle} {
      margin-left: auto;
    }
  }
`;
import { rgba } from "polished";
import styled from "styled-components";

export const UpcomingEventsStyle = styled.div`
  @media (max-width: 950px) {
    overflow: auto;
    width: 54vw;
    display: grid;
  }

  @media (max-width: 767px) {
    width: 90vw;
  }
`;

export const FormHeaderStyle = styled.div`
  color: #0c0c0c;
  font-size: 14px;
  font-weight: bold;
  background-color: #f7f7f7;
  border-radius: 24px;
  padding: 15px 85px;
  display: grid;
  grid-template-columns:0.2fr 0.5fr 1fr;
  grid-gap: 30px;
`;

export const FormRowStyle = styled.div`
  display: flex;
  grid-template-columns: 1fr 1fr 2fr 1fr;
  align-items: center;
  grid-gap: 30px;
  padding: 20px 0;
  border-bottom: 1px solid ${rgba("#0c0c0c", 0.3)};

  .thumbnail {
    max-width: 56px;
  }
  .button-wrapper {
    display: flex;
    gap:20px;
  }
  .event-name {
    font-size: 20px;
    font-weight: 500;
  }
`;

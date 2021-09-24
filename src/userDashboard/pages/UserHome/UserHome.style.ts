import styled from "styled-components";

export const UserHomeStyle = styled.main`
  margin-top: 110px;
  display: grid;
  grid-template-columns: 360px 1fr;
  grid-gap: 60px;

  .divider {
    height: 1px;
    width: 90%;
    margin: 10px auto;
    background: #0c0c0c;
    opacity: 0.1;
    display: block;
  }
`;

export const EventReservationStyle = styled.div`
  display: flex;
  grid-gap: 20px;
`;

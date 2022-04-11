import styled from "styled-components";

export const UserHomeStyle = styled.main`
  margin-top: 110px;
  display: grid;
  grid-template-columns: 360px 1fr;
  grid-gap: 60px;
  padding: 0 60px 60px;

  @media (max-width: 1024px) {
    padding: 0 20px 20px;
    grid-template-columns: 250px 1fr;
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    padding: 0 20px 20px;
    margin-top: 30px;
  }

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
  flex-direction: row;
  flex-wrap: wrap;
  grid-gap: 20px;

  @media (max-width: 1440px) {
    flex-direction: column;
  }
`;

import styled from "styled-components";

export const DashboardStyle = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 60px;
  margin-top: 110px;
  margin-left: 60px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    margin: 20px;
  }

  .back-button {
    color: #100840;
    display: flex;
    align-items: center;
    grid-gap: 5px;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 70px;

    @media (max-width: 767px) {
      margin-bottom: 20px;
    }
  }
`;

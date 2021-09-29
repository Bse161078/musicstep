import styled from "styled-components";

export const DashboardHeaderStyle = styled.header`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 5px 0 30px 0;
  border-bottom: 1px solid #c0c0c0;
  margin-bottom: 30px;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
    grid-gap: 20px;
  }

  @media (max-width: 767px) {
    padding: 5px 0 0 0;
  }

  .heading-wrapper {
    font-size: 48px;
    color: #0c0c0c;
  }

  .heading {
    font-size: 48px;

    @media (max-width: 767px) {
      font-size: 38px;
    }
  }

  .description {
    color: #0c0c0c;
    font-size: 14px;
    margin-top: 5px;
  }

  .back-button {
    font-size: 16px;
    display: flex;
    align-items: center;
    cursor: pointer;

    svg {
      margin-right: 5px;
    }
  }

  .header-buttons-wrapper {
    display: flex;
    justify-content: flex-end;
    grid-column-gap: 20px;

    @media (max-width: 767px) {
      width: 100%;
    }
  }
`;

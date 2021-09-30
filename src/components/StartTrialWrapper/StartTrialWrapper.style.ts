import styled from "styled-components";

export const StartTrialWrapperStyle = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 30px;
  align-items: flex-start;
  padding: 30px;
  background: #f7f7f7;
  margin: 100px 50px;
  border-radius: 32px;

  @media ( max-width: 1024px ) {
    grid-template-columns: 0.5fr 1fr;
    align-items: flex-start;
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    margin: 100px 15px;
    padding: 15px;
  }

  .left-section {
    display: grid;
    grid-row-gap: 30px;

    /* @media (max-width: 767px) {
      display: none;
    } */

    .left-thumb {
      max-width: 100%;
    }

    .trial-heading {
      font-size: 48px;
      color: #0c0c0c;

      @media (max-width: 1024px) {
        font-size: 28px;
      }
    }

    .trail-description {
      font-size: 20px;
      color: #0c0c0c;

      @media (max-width: 1024px) {
        font-size: 14px;
      }
    }
  }
`;

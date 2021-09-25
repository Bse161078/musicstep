import styled from "styled-components";

export const SectionWithButtonsStyle = styled.section`
  padding: 90px 15px;

  .section-with-button-wrapper {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 50px;

    @media (max-width: 767px) {
      grid-template-columns: 1fr;
    }
  }

  .left-side {
    display: grid;
    grid-gap: 20px;
  }

  .heading {
    font-size: 48px;
    font-weight: bold;
    color: #0c0c0c;
    margin-bottom: 15px;

    @media (max-width: 767px) {
      font-size: 28px;
    }
  }

  .description {
    font-size: 36px;
    color: #0c0c0c;
    margin-bottom: 40px;

    @media (max-width: 767px) {
      font-size: 20px;
    }
  }

  .image {
    max-width: 410px;
    width: 100%;
  }
`;

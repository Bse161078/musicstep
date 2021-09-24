import styled from "styled-components";

export const SectionWithButtonsStyle = styled.section`
  padding: 90px 15px;

  .section-with-button-wrapper {
    display: grid;
    grid-template-columns: 1fr auto;
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
  }

  .description {
    font-size: 36px;
    color: #0c0c0c;
    margin-bottom: 40px;
  }
`;

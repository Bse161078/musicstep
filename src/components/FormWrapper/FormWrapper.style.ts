import styled from "styled-components";

export const FormWrapperStyle = styled.section`
  margin-top: 96px;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  grid-column-gap: 100px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }

  .side-image {
    max-width: 860px;
    width: 100%;

    @media (max-width: 800px) {
      display: none;
    }
  }
  .top-heading {
    font-size: 80px;
    color: #0c0c0c;
    margin-bottom: 30px;

    @media (max-width: 1200px) {
      font-size: 30px;
      text-align: center;
    }
  }

  .form-wrapper {
    background: #f7f7f7;
    border-radius: 32px;
    padding: 30px;
    max-width: 560px;

    .form-heading {
      font-size: 36px;
      color: #0c0c0c;
      margin-bottom: 30px;

      @media (max-width: 1200px) {
        font-size: 22px;
        text-align: center;
      }
    }
  }
`;

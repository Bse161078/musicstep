import styled from "styled-components";

export const EditProfileFormStyle = styled.div`
  .form-wrapper {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 125px;
    margin-right: 20px;

    @media (max-width: 1024px) {
      display: flex;
      flex-direction: column;
      grid-template-columns: 1fr;
      grid-gap: 50px;
    }

    .form-left {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 30px;

      @media (max-width: 1024px) {
        grid-template-columns: 1fr;
      }
    }

    .multi-column {
      display: grid;

      grid-template-columns: 1fr 1fr;
      grid-gap: 20px;

      @media (max-width: 767px) {
        grid-template-columns: 1fr;
      }
    }

    .custom-columns {
      display: grid;
      grid-template-columns: 170px 1fr;
      grid-column: 1/3;
      grid-gap: 20px;

      @media (max-width: 767px) {
        grid-template-columns: 1fr;
        grid-column: unset;
      }
    }

    .public-info {
      grid-column: 1/-1;
    }

    .column-3 {
      display: grid;
      grid-gap: 30px;
      grid-template-columns: 1fr 1fr 1fr;

      @media (max-width: 767px) {
        grid-template-columns: 1fr;
      }
    }

    .dont-show-phone {
      grid-column: 1/-1;
    }

    .red-text {
      color: red;
    }

    .avatar-wrapper {
      display: grid;
      justify-content: center;
      grid-gap: 30px;
      max-height: 450px;
      height: 100%;

      .avatar {
        margin: auto;
        max-width: 220px;
        width: 100%;
        height: 100%;
        max-height: 250px;
        border-radius: 50%;
      }
    }
  }
`;

import styled from 'styled-components'

export const EditProfileFormStyle = styled.div`
  .form-wrapper {
    display: grid;
    grid-template-columns: 1fr auto;
    max-width: 840px;
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
      grid-gap: 30px;
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
      grid-gap: 20px;

      @media (max-width: 767px) {
        grid-template-columns: 1fr;
      }
    }
    .red-text {
      color: red;
    }

    .avatar-wrapper {
      display: grid;
      justify-content: center;
      grid-gap: 30px;

      .avatar {
        margin: auto;
        max-width: 250px;
        width: 100%;
      }
    }
  }
`

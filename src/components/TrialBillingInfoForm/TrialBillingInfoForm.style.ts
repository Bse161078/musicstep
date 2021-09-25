import styled from "styled-components";

export const TrialBillingInfoFormStyle = styled.div`
  padding: 30px;
  border-radius: 32px;
  background-color: #fff;

  @media ( max-width: 767px ) {
      padding: 20px 15px;
  }

  .form-heading {
    color: #0c0c0c;
    font-size: 24px;
    margin-bottom: 10px;
  }

  .form-info {
      font-size: 20px;
      color: #1981FC;
      margin-bottom: 30px;

      @media ( max-width: 767px ) {
          font-size: 11px;
      }
  }

  .form-wrapper {
    display: grid;
    grid-row-gap: 30px;
  }

  .multi-column {
      display: flex;
      grid-gap: 20px;

      @media ( max-width: 767px ) {
          flex-direction: column;
      }
  }

  .gift-code {
      text-align: center;
      color: #1981FC;
      font-size: 20px;
  }

  .description {
    opacity: 0.7;
    font-size: 14px;

  }
`;

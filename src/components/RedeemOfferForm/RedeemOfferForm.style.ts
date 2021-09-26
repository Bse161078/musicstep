import styled from "styled-components";
import { FilledButtonStyle } from "../../styles/Common.style";

export const RedeemOfferFormStyle = styled.article`
  .steps-count {
    color: #0c0c0c;
    font-size: 20px;
    opacity: 0.5;
    padding: 20px 20px 40px;
    text-align: center;
  }

  .verify-yourself {
    color: #0c0c0c;
    font-size: 20px;
    margin-bottom: 5px;
    text-align: center;
  }

  .form-wrapper-heading {
    font-size: 20px;
    font-weight: normal;
    margin-bottom: 40px;
    text-align: center;
  }

  .standard-message {
    font-size: 14px;
    color: #0c0c0c;
    opacity: 0.5;
    padding: 20px 20px 30px;
    text-align: center;
  }

  .info-details {
    padding: 50px 20px;
    text-align: center;
    font-size: 20px;
    color: #0c0c0c;
    opacity: 0.7;
  }

  .set-password-wrapper {
    padding-bottom: 50px;
    border-bottom: 1px solid lightgray;
  }

  .info-footer-heading {
    text-align: center;

    span {
      color: #1981fc;
      font-size: 20px;
      border-bottom: 1px solid #1981fc;
      text-align: center;
      font-weight: bold;
    }
  }

  .input-wrapper {
    display: flex;
    grid-template-columns: 120px 1fr;
    grid-gap: 20px;

    @media (max-width: 767px) {
      flex-direction: column;
    }
  }

  ${FilledButtonStyle} {
    background: #1981fc;
  }
`;

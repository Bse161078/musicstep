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
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 5px;
    .input-wrapper-headings {
      display: flex;
      justify-content: flex-start;
      width: 100%;
      span {
        font-size: 14px;
        color: #0c0c0c;
        font-weight: 500;
        margin-left: 15px;
      }
      .countryCode {
        width: 30%;
      }
    }
    @media (max-width: 767px) {
      flex-direction: column;
    }
    .input-wrapper-phone {
      width: 100%;
      input {
        margin-left: 41%;
        height: 53px;
        border-radius: 50px;
        border: 1px solid #0c0c0c;
        outline: 0;
        padding: 15px 25px;
        font-size: 18px;
        width: 59%;
        max-width: unset;
      }
      .flag-dropdown {
        background-color: white;
        height: 53px;
        border-radius: 50px;
        border: 1px solid #0c0c0c;
        outline: 0;
        padding: 15px 25px;
        font-size: 18px;
        width: 40%;
        max-width: unset;
      }
    }
    .input-wrapper-phone-error {
      color: #dc3545;
      line-height: 1.5;
      padding-left: 30%;
    }
  }

  ${FilledButtonStyle} {
    background: #1981fc;
  }
`;

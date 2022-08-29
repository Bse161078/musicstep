import styled from "styled-components";

const PartnerSignupFormStyle = styled.div`
  .become-partner-login-form {
    display: flex;
    flex-direction: column;
    gap: 30px;
    .inputbox-wrapper {
      display: flex;
      gap: 20px;
    }
    .selectbox-wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }
    .footer-wrapper {
      display: flex;
      flex-direction: column;
      gap: 30px;
      border-top: 2px solid #00000029;
      border-bottom: 2px solid #00000029;
      text-align: center;
      padding: 30px 0px;
    }
    .login-link-text {
      color: #1981fc;
      font-size: 20px;
      text-decoration: underline;
    }
    .already-text {
      font-size: 20px;
    }
    .foooter-text {
      font-size: 14px;
    }
    .terms-text {
      color: #1981fc;
      text-decoration: underline;
    }
    .Support {
      font-size: 20px;
      text-align: center;
      font-weight: 700;
      color: #1981fc;
    }
    .feild-wrapper {
      display: grid;
      gap: 20px;
      grid-template-columns: 1fr 1fr;
    }
    .error-message {
      font-size: 12px;
      color: #ff5151;
      margin-top: 15px;
      margin-left: 25px;
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
          margin-left: 35%;
          height: 53px;
          border-radius: 50px;
          border: 1px solid #0c0c0c;
          outline: 0;
          padding: 15px 25px;
          font-size: 18px;
          width: 65%;
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
          width: 30%;
          max-width: unset;
        }
      }
      .input-wrapper-phone-error {
        color: #dc3545;
        line-height: 1.5;
        padding-left: 30%;
      }
    }
  }
`;

export default PartnerSignupFormStyle;

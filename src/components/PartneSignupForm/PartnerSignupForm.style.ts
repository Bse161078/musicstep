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
  }
`;

export default PartnerSignupFormStyle;

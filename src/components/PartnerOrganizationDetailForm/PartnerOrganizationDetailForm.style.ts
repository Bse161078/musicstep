import styled from "styled-components";
import BecomePartnerLoginFormStyle from "../PartneSignupForm/PartnerSignupForm.style";

const PartnerOrganizationDetailFormStyle = styled.div`
  .form-wrapper {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  .feild-wrapper {
    display: flex;
    gap: 20px;
  }
  .footer-wrapper {
    border-top: 2px solid #00000029;
    padding: 20px;
    text-align: center;
    opacity: 1;
  }
  .terms-text {
      color: #1981fc;
      text-decoration: underline;
      cursor: pointer;
    }
`;

export default PartnerOrganizationDetailFormStyle;

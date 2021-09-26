import styled from "styled-components";
import { FilledButtonStyle } from "../../styles/Common.style";

export const PartnerLoginFormStyle = styled.article`
  margin: 15px;

  .partner-login-heading {
    font-size: 80px;
    color: #fff;
    text-align: center;
    margin-bottom: 30px;

    @media (max-width: 767px) {
      font-size: 40px;
    }
  }

  .partner-login-wrapper {
    background: #f7f7f7;
    border-radius: 32px;
    padding: 30px;
    display: grid;
    grid-row-gap: 30px;
    max-width: 560px;
    margin: auto;

    .partner-login-form-heading {
      color: #0c0c0c;
      font-size: 36px;
      margin-bottom: 20px;
    }

    ${FilledButtonStyle} {
      background-color: #100840;
    }
  }
`;

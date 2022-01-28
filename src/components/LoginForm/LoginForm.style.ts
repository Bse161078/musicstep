import { darken } from "polished";
import styled from "styled-components";
import {
  FilledButtonStyle,
  OutlineButtonStyle,
} from "../../styles/Common.style";

export const LoginFormStyle = styled.article`
  .login-form-wrapper {
    display: grid;
    grid-gap: 30px;
    padding-bottom: 40px;
    border-bottom: 1px solid lightgray;
    border-radius: 0;
    margin-bottom: 40px;
  }

  ${FilledButtonStyle} {
    background: #100840;
  }

  ${OutlineButtonStyle} {
    margin-bottom: 40px;
  }

  .partner-login {
    display: block;
    text-align: center;
    font-size: 14px;
    color: #100840;
    font-weight: 400;
  }

  .not-a-member {
    text-align: center;
    margin-bottom: 10px;
    font-size: 14px;
    color: #0c0c0c;
  }

  .checkbox-wrapper {
    display: flex;
    justify-content: space-between;
  }

  .forgot-password {
    font-size: 16px;
    cursor: pointer;
    color: #0c0c0c;
    transition: all 200ms linear;

    &:hover {
      color: ${darken(0.2, "#0c0c0c")};
    }
  }

  .error-message {
    font-size: 12px;
    color: #ff5151;
    margin-top: 15px;
    margin-left: 25px;
  }
`;

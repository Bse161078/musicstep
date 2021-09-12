import styled from "styled-components"
import { FilledButtonStyle, OutlineButtonStyle } from "../../styles/Common.style"

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
        color: #0C0C0C;
    }
`
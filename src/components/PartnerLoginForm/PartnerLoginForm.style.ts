import styled from "styled-components";
import { FilledButtonStyle } from "../../styles/Common.style";

export const PartnerLoginFormStyle = styled.article`
    .partner-login-heading {
        font-size: 80px;
        color: #fff;
        text-align: center;
        margin-bottom: 30px;
    }

    .partner-login-wrapper {
        background: #F7F7F7;
        border-radius: 32px;
        padding: 30px;
        display: grid;
        grid-row-gap: 30px;
        max-width: 560px;
        margin: auto;

        .partner-login-form-heading {
            color: #0C0C0C;
            font-size: 36px;
            margin-bottom: 20px;
        }

        ${FilledButtonStyle} {
            background-color: #100840;
        }
    }
`
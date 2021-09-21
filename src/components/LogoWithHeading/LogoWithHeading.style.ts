import styled from "styled-components";

export const LogoWithHeadingStyle = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 20px;

    .heading {
        color: #0C0C0C;
        font-size: 48px;
        margin-bottom: 10px;
        line-height: 1;
    }

    .content {
        display: flex;
        color: #0C0C0C;
        font-size: 20px;
        grid-gap: 5px;
        align-items: center;

        span {
            opacity: 0.5;
        }
    }
`
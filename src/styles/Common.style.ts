import { darken } from "polished"
import styled from "styled-components"

type FilledButtonStyleProps = {
    width?: string;
    height?: string;
    fontSize?: string;
}

export const FilledButtonStyle = styled.button<FilledButtonStyleProps>`
    background: #f3c;
    outline: none;
    border: 0;
    color: #fff;
    font-size: 14px;
    font-weight: 700;
    border-radius: 100px;
    width: ${({width}) => width ? width : "190px"};
    height: ${({height}) => height ? height : "40px"};
    cursor: pointer;
    transition: all 200ms linear;

    @media ( max-width: 600px) {
        width: 100%;
        padding: 0 20px;
    }

    &:hover {
        background: ${darken(0.2, "#f3c")};
    }
`
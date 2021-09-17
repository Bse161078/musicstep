import { darken } from "polished"
import styled from "styled-components"

type FilledButtonStyleProps = {
    width?: string;
    height?: string;
    fontSize?: string;
    buttonType?: "dark" | "light"
}

export const FilledButtonStyle = styled.button<FilledButtonStyleProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props => props.buttonType === "dark" ? "#100840" : "#f3c"};
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
        background: ${props => darken(0.2, props.buttonType === "dark"  ? "#100840" : "#f3c")};
    }
`

export const OutlineButtonStyle = styled.button<FilledButtonStyleProps>`
    background: transparent;
    outline: none;
    border: 2px solid #100840;
    color: #100840;
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
        background: #100840;
        color: #fff;
    }
`
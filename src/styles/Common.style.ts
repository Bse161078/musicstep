import { darken, rgba } from "polished";
import styled, { css } from "styled-components";

export const ContainerStyle = css`
  margin-top: 80px;
`;

type FilledButtonStyleProps = {
  width?: string;
  height?: string;
  fontSize?: string;
  buttonType?: "dark" | "light";
};

export const FilledButtonStyle = styled.button<FilledButtonStyleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => (props.buttonType === "dark" ? "#100840" : "#f3c")};
  outline: none;
  border: 0;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  border-radius: 100px;
  width: ${({ width }) => (width ? width : "190px")};
  height: ${({ height }) => (height ? height : "40px")};
  cursor: pointer;
  transition: all 200ms linear;

  @media (max-width: 600px) {
    width: 100%;
    padding: 0 20px;
  }

  &:hover {
    background: ${(props) =>
      darken(0.2, props.buttonType === "dark" ? "#100840" : "#f3c")};
  }
`;

export const OutlineButtonStyle = styled.button<FilledButtonStyleProps>`
  background: transparent;
  outline: none;
  border: 2px solid
    ${(props) => (props.buttonType === "dark" ? "#f3c" : "#100840")};
  color: ${(props) => (props.buttonType === "dark" ? "#f3c" : "#100840")};
  font-size: 14px;
  font-weight: 700;
  border-radius: 100px;
  width: ${({ width }) => (width ? width : "190px")};
  height: ${({ height }) => (height ? height : "40px")};
  cursor: pointer;
  transition: all 200ms linear;

  @media (max-width: 600px) {
    width: 100%;
    padding: 0 20px;
  }

  &:hover {
    background: ${(props) =>
      props.buttonType === "dark" ? "#f3c" : "#100840"};
    color: #fff;
  }
`;

export const TableHeaderStyle = css`
  padding: 20px 30px;
  background: ${rgba("#100840", 0.1)};
  border-radius: 16px;

  .header-title {
    font-size: 16px;
    color: #0c0c0c;
    opacity: 0.7; 
  }
`;

export const TableRowStyle = css`
  background: #f7f7f7;
  border-radius: 16px;
  padding: 20px 30px;

  .thumb-with-content {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 20px;

    @media ( max-width: 1024px ) {
      grid-template-columns: 1fr;
    }
  }

  .profile-thumanail {
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 100%;
  }

  .heading {
    color: #0c0c0c;
    font-size: 20px;
    margin-bottom: 5px;
  }

  .description {
    color: #0c0c0c;
    opacity: 0.5;
    font-size: 14px;
  }

  .action-buttons-wrapper {
    display: flex;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 10px;
  }


`;

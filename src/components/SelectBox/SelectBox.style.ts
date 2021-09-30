import styled from "styled-components";
import { Select } from "antd";

type SelectBoxStyleProps = {
  name: string;
  width?: string;
  error?: boolean;
};

const getInputWidth = (width: string) => {
  switch (width) {
    case "xs":
      return "width: 170px";
    case "small":
      return "width: 238px";
    case "medium":
      return "width: 266px";
    case "fill":
      return "width: 100%";
    default:
      return "width: 266px";
  }
};

export const SelectBoxStyle = styled(Select)<SelectBoxStyleProps>`
  &.ant-select {
    ${(props) => getInputWidth((props.width && props.width) || "xs")};
    margin: 5px 0;
    font-size: 1.3rem;
    color: #5d5d5d;

    .ant-select-arrow {
      right: 25px;
    }

    .ant-select-selection-item {
      font-size: 18px;
      color: #0c0c0c;
    }

    .ant-select-selector {
      height: 53px;
      border-radius: 50px;
      display: flex;
      align-items: center;
      grid-gap: 20px;
      border: solid 1px ${(props) => (props.error ? "#ff4d4f" : "#0C0C0C")} !important;
      ${(props) =>
        props.width && props.width === "small" && "height: 26px !important;"}
    }
  }
`;
export const SelectHoverInputStyle = styled(Select)<any>`
  &.ant-select {
    font-size: 1.3rem;
    color: #3ba0d6;
    max-height: 2.3rem;
    width: 100%;
    margin-top: -2rem;
    .ant-select-arrow {
      color: #3ba0d6;
    }
    div.ant-select-selector {
      border: none;
      background-color: transparent;
      color: #3ba0d6;
      max-height: 2.3rem;
      padding-left: 0;
    }
  }
`;

type SelectInputStyleProps = {
  type?: string;
};

export const SelectInputStyle = styled.div<SelectInputStyleProps>`
  display: grid;
  grid-gap: 5px;
  grid-template-columns: ${(props) =>
    props.type === "horizontal" ? "auto auto" : "1fr"};
  align-items: center;
  justify-content: flex-start;

  .select-label {
    font-size: 14px;
    color: #0c0c0c;
    font-weight: 500;
    margin-left: 15px;
  }
`;

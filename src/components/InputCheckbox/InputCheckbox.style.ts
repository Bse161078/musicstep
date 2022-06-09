import { Checkbox } from "antd";
import styled from "styled-components";

export const CheckboxWrapperStyle = styled(Checkbox)`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 10px;
  align-items: center;
  .checkbox-label {
    font-size: 14px;
    color: red;
  }

  .ant-checkbox {
    &:hover {
      .ant-checkbox-inner {
        border-color: black;
      }
    }
  }

  .ant-checkbox-inner {
    border-radius: 100%;
    width: 24px;
    height: 24px;
  }

  .ant-checkbox-input {
    &:focus {
      + .ant-checkbox-inner {
        border-color: black;
      }
    }
  }

  .ant-checkbox-checked {
    &:after {
      border-color: transparent;
    }
    .ant-checkbox-input {
      &:focus {
        border-color: black;
      }
    }
    
    .ant-checkbox-inner {
      background: #100840;
      border-color: lightgray;

      &:after {
        left: 30%;
      }
    }
  }
`;

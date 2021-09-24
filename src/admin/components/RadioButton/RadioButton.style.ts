import { rgba } from "polished";
import styled from "styled-components";

export const RadioButtonStyle = styled.div`
  .heading {
    font-size: 14px;
    color: #0c0c0c;
    margin-bottom: 20px;
  }

  .ant-radio-group {
    display: grid;

    .ant-radio-inner {
        border-color: ${rgba("#0C0C0C", 0.2)};

        &:after {
            background-color: #100840;
        }
    }

    .radio-description {
      font-size: 14px;
      color: #0c0c0c;
    }
  }
`;

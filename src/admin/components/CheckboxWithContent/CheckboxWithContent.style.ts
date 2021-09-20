import { rgba } from "polished";
import styled from "styled-components";

type CheckboxWithContentStyleProps = {
  checked?: boolean;
};

export const CheckboxWithContentStyle = styled.div<CheckboxWithContentStyleProps>`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 10px;
  align-items: flex-start;
  padding: 20px;
  cursor: pointer;
  border-radius: 32px;
  background-color: ${(props) =>
    props.checked ? rgba("#1981FC", 0.1) : "#f7f7f7"};

  svg {
    path {
      fill: ${(props) => (props.checked ? "#100840" : rgba("#0c0c0c", 0.1))};
    }
  }

  .checkbox-heading {
    font-size: 16px;
    font-weight: bold;
    color: #0c0c0c;
    margin-bottom: 10px;
  }

  .checkbox-description {
    font-size: 16px;
    color: #0c0c0c;
  }
`;

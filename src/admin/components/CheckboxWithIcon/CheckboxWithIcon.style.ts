import { rgba } from "polished";
import styled from "styled-components";

type CheckboxWithIconStyleProps = {
  checked?: boolean;
};

export const CheckboxWithIconStyle = styled.div<CheckboxWithIconStyleProps>`
  text-align: center;
  padding: 30px;
  border-radius: 32px;
  background: ${(props) => (props.checked ? rgba("#1981fc", 0.1) : "#f7f7f7")};
  position: relative;
  cursor: pointer;

  .tick-wrapper {
    position: absolute;
    top: 20px;
    right: 20px;
    display: ${(props) => (props.checked ? "inline" : "none")};
  }

  .checkbox-icon {
    margin-bottom: 30px;
  }

  .checkbox-title {
    font-size: 16px;
    font-weight: bold;
    color: #0c0c0c;
    margin-bottom: 5px;
  }

  .checkbox-description {
    opacity: 0.5;
    font-size: 16px;
    color: #0c0c0c;
  }
`;

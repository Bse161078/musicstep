import styled from "styled-components";
import { FilledButtonStyle } from "../../styles/Common.style";

export const ValueWithButtonStyle = styled.div`
  text-align: center;
  margin-top: 60px;

  .value {
    font-size: 200px;
    font-weight: 800;
    line-height: 1.22;
    color: #0c0c0c;
  }

  .value-description {
    font-size: 20px;
    color: #0c0c0c;
    margin-bottom: 30px;
    display: block;
  }

  .description {
    font-size: 20px;
    color: #0c0c0c;
    margin-bottom: 60px;
  }

  ${FilledButtonStyle} {
      margin: auto;
  }
`;

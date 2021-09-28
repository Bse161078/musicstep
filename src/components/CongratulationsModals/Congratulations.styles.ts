import styled from "styled-components";
import { FilledButtonStyle } from "../../styles/Common.style";

export const CongratulationsModalStyle = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: 500;

  .description {
    margin: 30px;
  }

  ${FilledButtonStyle} {
    background-color: #f3c !important;
  }
`;

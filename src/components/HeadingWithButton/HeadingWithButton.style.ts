import styled from "styled-components";
import { OutlineButtonStyle } from "../../styles/Common.style";

export const HeadingWithButtonStyle = styled.section`
  text-align: center;

  .description {
    margin: 20px 15px 60px;
    font-size: 20px;
    color: #0c0c0c;

    span {
      font-weight: bold;
    }
  }

  ${OutlineButtonStyle} {
    margin: auto;
  }
`;

import { rgba } from "polished";
import styled from "styled-components";

export const HeadingTabStyle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  margin-top:10px;
  border-radius: 16px;
  background-color: ${rgba("#100840", 0.1)};
  align-items: center;

  .heading-wrapper {
    display: flex;
    grid-gap: 10px;

    .title {
      font-size: 14px;
      font-weight: bold;
      color: #0c0c0c;
    }

    .description {
      font-size: 14px;
      color: #0c0c0c;
      opacity: 0.5;
    }
  }

  .count {
    font-size: 14px;
    font-weight: bold;
    color: #0c0c0c;
  }
`;

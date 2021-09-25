import { rgba } from "polished";
import styled from "styled-components";

type ImageWithContentCardStyleProps = {
  type?: "left" | "right";
};

export const ImageWithContentCardStyle = styled.div<ImageWithContentCardStyleProps>`
  display: flex;
  flex-direction: ${({ type }) => (type === "right" ? "row-reverse" : "row")};
  background-color: ${rgba("#f3c", 0.1)};
  grid-gap: 60px;
  border-radius: ${({ type }) =>
    type === "right" ? "16px 0 0 16px" : "0 16px 16px 0"};
  padding: 30px;

  @media (max-width: 767px) {
    flex-direction: column;
    grid-gap: 20px;
  }

  .icon-wrapper {
    margin-top: ${({ type }) => (type === "right" ? "0" : "auto")};

    img {
      @media (max-width: 767px) {
        width: 50px;
        height: 50px;
      }
    }
  }

  .image {
    max-width: 650px;
    width: 100%;
    margin-bottom: ${({ type }) => (type === "right" ? "0" : "20px")};
  }

  .heading {
    font-size: 20px;
    font-weight: bold;
    color: #0c0c0c;
    margin-bottom: 10px;
  }

  .description {
    font-size: 20px;
    color: #0c0c0c;
    margin-bottom: ${({ type }) => (type === "right" ? "20px" : "0")};
  }

  .visual-wrapper {
    display: flex;
    flex-direction: ${({ type }) =>
      type === "right" ? "column-reverse" : "column"};
  }
`;

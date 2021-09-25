import { rgba } from "polished";
import styled from "styled-components";

export const PriceCardStyle = styled.div`
  border-radius: 32px;
  background-color: #f7f7f7;
  text-align: center;
  padding: 30px;
  max-width: 340px;
  width: 100%;
  margin: auto;
  transition: all 200ms linear;

  &:hover {
    background-color: ${rgba("#1981FC", 0.2)};
  }

  .price {
    font-size: 100px;
    color: #0c0c0c;
    margin-bottom: 20px;

    @media (max-width: 1600px) {
      font-size: 60px;
    }
  }

  .music-type {
    font-size: 30px;
    margin-bottom: 22px;
    color: #0c0c0c;

    @media (max-width: 1600px) {
      font-size: 20px;
    }

    span {
      color: #ff33cc;
      font-size: 40px;
      font-weight: normal;
      font-family: 'Covered By Your Grace', cursive;

      @media (max-width: 1600px) {
        font-size: 20px;
      }
    }
  }

  .credits {
    font-size: 20px;
    color: #0c0c0c;
    margin-bottom: 30px;

    @media (max-width: 1600px) {
      font-size: 14px;
    }
  }

  .events-info {
    font-size: 20px;
    color: #0c0c0c;

    @media (max-width: 1600px) {
      font-size: 14px;
    }
  }

  .additional-info {
    font-size: 12px;
    color: #0c0c0c;
    margin-bottom: 30px;
  }
`;

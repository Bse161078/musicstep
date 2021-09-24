import styled from "styled-components";

export const PriceCardStyle = styled.div`
  border-radius: 32px;
  background-color: #f7f7f7;
  text-align: center;
  padding: 30px;
  max-width: 340px;
  width: 100%;
  margin: auto;

  .price {
    font-size: 100px;
    color: #0c0c0c;
    margin-bottom: 20px;
  }

  .music-type {
    font-size: 30px;
    margin-bottom: 22px;
    color: #0c0c0c;

    span {
      color: #ff33cc;
      font-size: 40px;
      font-weight: normal;
    }
  }

  .credits {
    font-size: 20px;
    color: #0c0c0c;
    margin-bottom: 30px;
  }

  .events-info {
    font-size: 20px;
    color: #0c0c0c;
  }

  .additional-info {
    font-size: 12px;
    color: #0c0c0c;
    margin-bottom: 30px;
  }
`;

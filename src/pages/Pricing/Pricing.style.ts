import { rgba } from "polished";
import styled from "styled-components";
import { ContainerStyle } from "../../styles/Common.style";

export const PricingStyle = styled.main`
  ${ContainerStyle};

  font-size: 80px;
  padding: 60px 15px;

  .prices-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 25px;
    padding-bottom: 60px;

    @media (max-width: 1600px) {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }

  .divider {
    background-color: ${rgba("#0c0c0c", 0.5)};
    width: 80%;
    height: 1px;
    margin: auto;
  }

  .pricing-heading {
    font-size: 80px;
    font-weight: bold;
    text-align: center;
    color: #0c0c0c;
    margin-bottom: 60px;

    @media (max-width: 767px) {
      font-size: 39px;
      margin-bottom: 30px;
    }
  }

  .subscribed-heading {
    padding-top: 60px;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    color: #0c0c0c;
    margin-bottom: 30px;
  }
`;

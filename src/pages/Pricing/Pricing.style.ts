import { rgba } from "polished";
import styled from "styled-components";

export const PricingStyle = styled.main`
  font-size: 80px;
  padding: 60px 15px;
  margin-top: 96px;

  .prices-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 25px;
    padding-bottom: 60px;
    border-bottom: 1px solid ${rgba("#0c0c0c", 0.5)};
    margin-bottom: 60px;
  }

  .pricing-heading {
    font-size: 80px;
    font-weight: bold;
    text-align: center;
    color: #0c0c0c;
    margin-bottom: 60px;
  }

  .subscribed-heading {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    color: #0c0c0c;
    margin-bottom: 30px;
  }
`;

import { rgba } from "polished";
import styled from "styled-components";

export const BillingInformationStyle = styled.div`
  padding: 30px;
  border-radius: 32px;
  background-color: #fff;

  .heading {
    font-size: 48px;
    color: #0c0c0c;
    margin-bottom: 40px;

    span {
      color: #f3c;
      font-family: "Covered By Your Grace", cursive;
    }

    @media (max-width: 1280px) {
      font-size: 28px;
    }
  }

  .icon-with-description {
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    @media (max-width: 767px) {
      flex-direction: column;
      align-items: flex-start;
      grid-gap: 30px;
    }

    .description {
      margin-left: 30px;
      font-size: 20px;
      color: #0c0c0c;

      @media (max-width: 1280px) {
        font-size: 18px;
      }

      @media (max-width: 767px) {
        margin-left: 0;
      }
    }
  }

  .billing-footer {
    border-top: solid 1px ${rgba("#0c0c0c", 0.5)};
    padding-top: 30px;
    display: flex;
    justify-content: space-between;
    margin-top: 30px;

    .footer-info {
      font-size: 20px;
      color: #0c0c0c;
    }

    .footer-title {
      font-size: 20px;
      font-weight: bold;
      color: #0c0c0c;
      margin-top: 5px;
    }
  }
`;

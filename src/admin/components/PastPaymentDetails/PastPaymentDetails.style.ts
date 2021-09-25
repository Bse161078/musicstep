import styled from "styled-components";

export const PastPaymentDetailsStyle = styled.div`
  display: grid;
  gap: 30px;
  padding: 30px 0px;
  .payment-title {
    font-size: 16px;
    font-weight: 700;
    opacity: 1;
    color: #0c0c0c;
  }
  .payment-timeDate {
    font-size: 16px;
    font-weight: 200;
    opacity: 0.5;
    color: #0c0c0c;
  }
  .title-date {
    display: grid;
    text-align: left;
    margin-top: 0px;
  }
  .payment-wrapper {
    display: flex;
    justify-content: space-between;
  }
`;

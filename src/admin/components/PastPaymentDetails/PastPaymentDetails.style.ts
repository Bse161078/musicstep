import { FilledButtonStyle } from './../../../styles/Common.style';
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
    font-weight: 290;
    opacity: 1;
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
  ${FilledButtonStyle} {
    background: #F7F7F7;
    border: none;
    color: black;
  }
`;

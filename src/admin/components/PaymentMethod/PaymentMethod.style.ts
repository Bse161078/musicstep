import styled from "styled-components";

export const PaymentMethodStyle = styled.div`
  .send-payment-form {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-column-gap: 30px;
    margin-bottom: 30px;

    @media ( max-width: 900px ) {
        grid-template-columns: 1fr;
    }
  }

  .schedule-checks-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px;
    margin-top: 30px;

    @media ( max-width: 1024px ) {
        display: flex;
        flex-wrap: wrap;
    }
  }
`;

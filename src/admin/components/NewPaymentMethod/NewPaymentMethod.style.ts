import styled from "styled-components";

export const NewPaymentMethodStyle = styled.div`
  .payment-method-form {
    display: grid;
    grid-template-columns: 450px 450px;
    grid-gap: 30px;

    @media ( max-width: 1024px ) {
      grid-template-columns: 1fr;
    }

    .disclaimer-wrapper {
      font-size: 14px;
      color: #0c0c0c;
      opacity: 0.5;
    }
  }
`;

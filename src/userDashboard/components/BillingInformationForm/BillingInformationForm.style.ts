import styled from "styled-components";

export const BillingInformationFormStyle = styled.div`
  max-width: 520px;

  .form-wrapper {
    display: grid;
    grid-gap: 30px;
  }

  .multi-column {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 20px;
  }
`;

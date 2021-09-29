import styled from "styled-components";

export const TaxpayerFormStyle = styled.div`
  .taxpayer-form-wrapper {
    display: grid;
    grid-row-gap: 30px;
  }

  .description-code {
    font-size: 14px;
    color: #0c0c0c;
    margin-top: 10px;
  }

  .inputs-wrapper {
    display: grid;
    grid-template-columns: 700px 1fr 1fr;
    grid-gap: 20px;

    @media ( max-width: 767px ) {
      grid-template-columns: 1fr;
    }
  }
`;

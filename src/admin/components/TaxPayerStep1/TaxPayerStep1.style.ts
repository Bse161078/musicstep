import styled from "styled-components";

export const TaxPayerStep1Style = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  margin-top: 30px;

  @media ( max-width: 1024px ) {
    display: flex;
    flex-wrap: wrap;
  }
`;

import styled from "styled-components";
import { ContainerStyle } from "../../styles/Common.style";

export const ProcessPaymentStyle = styled.main`
  ${ContainerStyle};

  padding: 30px;
  border-radius: 32px;
  background-color: #f7f7f7;
  display: grid;
  grid-template-columns: 2.1fr 1fr;
  align-items: flex-start;
  grid-gap: 30px;
  margin-left: 60px;
  margin-right: 60px;

  @media (max-width: 1440px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin-left: 15px;
    margin-right: 15px;
  }
`;

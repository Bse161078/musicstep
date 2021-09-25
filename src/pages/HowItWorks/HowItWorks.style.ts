import styled from "styled-components";
import { ContainerStyle } from "../../styles/Common.style";

export const HowItWorksStyle = styled.main`
  ${ContainerStyle};

  padding: 60px;

  @media ( max-width: 767px ) {
    padding: 40px 20px;
  }
`;

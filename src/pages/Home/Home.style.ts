import styled from "styled-components";
import { ContainerStyle } from "../../styles/Common.style";

export const HomeStyle = styled.main`
  ${ContainerStyle};

  .icons-content-wrapper {
    display: flex;
    grid-gap: 90px;
    margin-top: 60px;

    @media (max-width: 1024px) and (min-width: 767px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 767px) {
      flex-direction: column;
    }
  }

  .cards-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
    margin-top: 60px;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
`;

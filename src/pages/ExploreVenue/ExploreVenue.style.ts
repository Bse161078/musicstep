import styled from "styled-components";
import { ContainerStyle } from "../../styles/Common.style";

export const ExploreVenueStyle = styled.main`
  ${ContainerStyle};

  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 30px;
  padding: 60px;

  @media (max-width: 1028px) {
    grid-gap: 70px;
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    padding: 40px 20px;
  }

  .venues-list {
    display: grid;
    grid-gap: 30px;

    @media (max-width: 767px) {
      grid-gap: 50px;
    }
  }

  .maps-wrapper {
    max-width: 570px;
    width: 100%;
    position: sticky;
    top: 80px;
  }
`;

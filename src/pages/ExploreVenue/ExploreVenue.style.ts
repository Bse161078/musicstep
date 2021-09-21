import styled from "styled-components";

export const ExploreVenueStyle = styled.main`
  margin-top: 100px;

  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 30px;

  .venues-list {
      display: grid;
      grid-gap: 30px;
  }

  .maps-wrapper {
      max-width: 570px;
      width: 100%;
  }
`;

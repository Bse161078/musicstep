import styled from "styled-components";

export const ImagesBannerStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(auto, 320px);
  grid-gap: 15px;
  margin-top: 20px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }

  .main-image {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 8px;
    }
  }

  .images-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;

    @media (max-width: 600px) {
      grid-template-columns: 1fr;
    }

    img {
      width: 100%;
      border-radius: 8px;
    }
  }
`;

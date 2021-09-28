import { rgba } from "polished";
import Flickity from "react-flickity-component";
import styled from "styled-components";

export const CustomCarouselStyle = styled(Flickity)`
  max-width: 880px;
  padding: 0 78px;
  margin-bottom: 30px;
  outline: none;
  margin-left: -70px;

  @media ( max-width: 768px ) {
    margin-left: 0;
    padding: 0 30px;
  }

  img {
    width: 100%;
    max-width: 880px;
    border-radius: 16px;
  }

  .flickity-prev-next-button {
    @media ( max-width: 767px ) {
      width: 20px;
      height: 20px;
    }
  }

  .flickity-button {
    background-color: #100840;
    &:disabled {
      opacity: 1;
      background-color: ${rgba("#0C0C0C", 0.2)};
    }

    svg {
      fill: #fff;
    }
  }
`;

import { rgba } from "polished";
import Flickity from "react-flickity-component";
import styled from "styled-components";

export const CustomCarouselStyle = styled(Flickity)`
  max-width: 880px;
  padding: 0 78px;

  img {
    width: 100%;
    max-width: 880px;
    border-radius: 16px;
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
import React from "react";

import "flickity/dist/flickity.min.css";
import { CustomCarouselStyle } from "./CustomCarousel.style";

const CustomCarousel = () => {
  const flickityOptions = {
    initialIndex: 2,
    pageDots: false,
  };

  return (
    <CustomCarouselStyle options={flickityOptions}>
      <img alt="carousel tab" src="/images/partner-login-background.png" />
      <img alt="carousel tab" src="/images/partner-login-background.png" />
      <img alt="carousel tab" src="/images/partner-login-background.png" />
    </CustomCarouselStyle>
  );
};

export default CustomCarousel;

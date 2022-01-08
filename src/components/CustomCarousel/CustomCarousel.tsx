import React from "react";

import "flickity/dist/flickity.min.css";
import { CustomCarouselStyle } from "./CustomCarousel.style";
import { UploadFile } from "../../admin/components";

const CustomCarousel = ({ options = {} }: any) => {
  const flickityOptions = {
    initialIndex: 2,
    pageDots: false,
    ...options
  };

  return (
    <CustomCarouselStyle options={flickityOptions}>
      <UploadFile buttonType="large" />
      <img alt="carousel tab" src="/images/partner-login-background.png" />
      <img alt="carousel tab" src="/images/partner-login-background.png" />
      <img alt="carousel tab" src="/images/partner-login-background.png" />
    </CustomCarouselStyle>
  );
};

export default CustomCarousel;

import React from "react";

import "flickity/dist/flickity.min.css";
import { CustomCarouselStyle } from "./CustomCarousel.style";

type CustomCarouselProps = {
  options?: any;
  images?: string[];
};

const CustomCarousel = ({ options = {}, images }: CustomCarouselProps) => {
  const flickityOptions = {
    initialIndex: 2,
    pageDots: false,
    ...options,
  };
  console.log(images);
  return (
    <CustomCarouselStyle options={flickityOptions}>
      {images?.map((image: any) => (
        <img
          alt="carousel tab"
          src={`${process.env.REACT_APP_BASE_URL}/${image}`}
        />
      ))}
      {/* <img alt="carousel tab" src="/images/partner-login-background.png" />
      <img alt="carousel tab" src="/images/partner-login-background.png" />
      <img alt="carousel tab" src="/images/partner-login-background.png" /> */}
    </CustomCarouselStyle>
  );
};

export default CustomCarousel;

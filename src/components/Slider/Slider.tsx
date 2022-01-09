import React from "react";

import { UploadFile } from "../../admin/components";
import { SliderStyle } from "./Slider.style";

const Slider = () => {
  return (
    <SliderStyle>
      <UploadFile buttonType="large" />
      <img className="carousel-image" alt="carousel tab" src="/images/partner-login-background.png" />
      <img className="carousel-image" alt="carousel tab" src="/images/partner-login-background.png" />
      <img className="carousel-image" alt="carousel tab" src="/images/partner-login-background.png" />
    </SliderStyle>
  );
};

export default Slider;

import React from "react";

import { UploadFile } from "../../admin/components";
import { SliderStyle } from "./Slider.style";

type SliderProps = {
  handleAdditionalPhoto?: () => void;
  previewAdditionalImage?: any;
};
const Slider = (props: SliderProps) => {
  return (
    <SliderStyle>
      <UploadFile
        buttonType="large"
        handleClick={props.handleAdditionalPhoto}
      />
      {/* <img
        className="carousel-image"
        alt="carousel tab"
        src="/images/partner-login-background.png"
      /> */}
      {props.previewAdditionalImage.map((imageurl: any, index: any) => {
        return (
          <img
            key={index}
            className="carousel-image"
            alt="carousel tab"
            src={imageurl}
          />
        );
      })}
      {/* <img
        className="carousel-image"
        alt="carousel tab"
        src="/images/partner-login-background.png"
      />
      <img
        className="carousel-image"
        alt="carousel tab"
        src="/images/partner-login-background.png"
      /> */}
    </SliderStyle>
  );
};

export default Slider;

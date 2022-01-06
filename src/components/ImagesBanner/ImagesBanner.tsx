import React from "react";

import { ImagesBannerStyle } from "./ImagesBanner.style";

type ImagesBannerProps = {
  imagesList: any;
};

const ImagesBanner = (props: ImagesBannerProps) => {
  const { imagesList } = props;

  return (
    <ImagesBannerStyle>
      <div className="main-image">
        <img src={imagesList[0]} alt="banner" />
      </div>

      <div className="images-list">
        {imagesList.map((data: any, index: number) => {
          return <img src={data} className="small-image" alt="banner" key={`image-${index}`} />;
        })}
      </div>
    </ImagesBannerStyle>
  );
};

export default ImagesBanner;

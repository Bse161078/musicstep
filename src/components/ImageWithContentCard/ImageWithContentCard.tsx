import React from "react";

import { ImageWithContentCardStyle } from "./ImageWithContentCard.style";

type ImageWithContentCardProps = {
  image: string;
  heading: string;
  description: string;
  icon: string;
  type?: "left" | "right";
};

const ImageWithContentCard = (props: ImageWithContentCardProps) => {
  const { heading, description, icon, type, image } = props;

  return (
    <ImageWithContentCardStyle type={type}>
      <span className="icon-wrapper"><img src={icon} alt="icon" /></span>

      <div className="visual-wrapper">
        <img src={image} className="image" alt="card visual" />
        <div>
          <h4 className="heading">{heading}</h4>
          <p className="description">{description}</p>
        </div>
      </div>
    </ImageWithContentCardStyle>
  );
};

export default ImageWithContentCard;

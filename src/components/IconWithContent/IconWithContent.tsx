import React from "react";
import { IconWithContentStyle } from "./IconWithContent.style";

type IconWithContentProps = {
  heading: string;
  description: string;
  icon: string;
};

const IconWithContent = (props: IconWithContentProps) => {
  const { heading, description, icon } = props;

  return (
    <IconWithContentStyle>
      <span className="icon-wrapper">
        <img src={icon} alt="icon" />
      </span>

      <h5 className="heading">{heading}</h5>
      <p className="description">{description}</p>
    </IconWithContentStyle>
  );
};

export default IconWithContent;

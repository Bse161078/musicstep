import React from "react";

import { IconWithHeadingStyle } from "./IconWithHeading.style";

type IconWithHeadingProps = {
  icon: React.ReactNode;
  heading: string;
  onClick?: any;
};

const IconWithHeading = (props: IconWithHeadingProps) => {
  const { icon, heading, onClick } = props;

  return (
    <IconWithHeadingStyle onClick={onClick}>
      {icon}
      <h3 className="heading">{heading}</h3>
    </IconWithHeadingStyle>
  );
};

export default IconWithHeading;

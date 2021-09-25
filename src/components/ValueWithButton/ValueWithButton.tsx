import React from "react";
import { Link } from "react-router-dom";
import { FilledButtonStyle } from "../../styles/Common.style";

import { ValueWithButtonStyle } from "./ValueWithButton.style";

type ValueWithButtonProps = {
  value?: string;
  description?: string;
  buttonLink: string;
};
const ValueWithButton = (props: ValueWithButtonProps) => {
  const { value, description, buttonLink } = props;

  return (
    <ValueWithButtonStyle>
      <h1 className="value">{value}</h1>
      <span className="value-description">Per Month</span>

      <p className="description">{description}</p>

      <Link to={buttonLink}>
        <FilledButtonStyle width="380px" height="60px">
          Try For free
        </FilledButtonStyle>
      </Link>
    </ValueWithButtonStyle>
  );
};

export default ValueWithButton;

import React, { useState } from "react";
import { FilledTickIcon } from "../../../assets";

import { CheckboxWithContentStyle } from "./CheckboxWithContent.style";

const CheckboxWithContent = () => {
  const [checked, setChecked] = useState(false);

  const toggleClick = () => {
    setChecked(!checked);
  };
  return (
    <CheckboxWithContentStyle checked={checked} onClick={toggleClick}>
      <FilledTickIcon />

      <div className="checkbox-content-wrapper">
        <h4 className="checkbox-heading">U.S. Person</h4>
        <p className="checkbox-description">
          I am U.S. individual or entity with a U.S. taxpayer identification
          number (TIN) and want to fill out a form W-9.
        </p>
      </div>
    </CheckboxWithContentStyle>
  );
};

export default CheckboxWithContent;

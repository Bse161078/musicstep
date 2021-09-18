import React, { useState } from "react";

import { EventIcon, FilledTickIcon } from "../../../assets";
import { CheckboxWithIconStyle } from "./CheckboxWithIcon.style";

const CheckboxWithIcon = () => {
  const [checked, setChecked] = useState(false);

  const toggleChecked = () => {
    setChecked(!checked);
  };
  return (
    <CheckboxWithIconStyle checked={checked} onClick={toggleChecked}>
      <span className="tick-wrapper">
        <FilledTickIcon />
      </span>

      <div className="checkbox-icon">
        <EventIcon />
      </div>

      <h4 className="checkbox-title">After Each Event</h4>
      <h4 className="checkbox-description">
        Payouts are sent 5 days after your event ends.
      </h4>
    </CheckboxWithIconStyle>
  );
};

export default CheckboxWithIcon;

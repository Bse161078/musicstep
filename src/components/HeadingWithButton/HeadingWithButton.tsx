import React from "react";
import { OutlineButtonStyle } from "../../styles/Common.style";

import { HeadingWithButtonStyle } from "./HeadingWithButton.style";

const HeadingWithButton = () => {
  return (
    <HeadingWithButtonStyle>
      <p className="description">
        Introducing <span>Music</span>Pass. <br />
        Tap into the dance nation participating across the United States.
      </p>

      <OutlineButtonStyle width="380px" height="60px">
        Explore Music Events Near Me
      </OutlineButtonStyle>
    </HeadingWithButtonStyle>
  );
};

export default HeadingWithButton;

import React from "react";
import { Link } from "react-router-dom";
import { OutlineButtonStyle } from "../../styles/Common.style";

import { HeadingWithButtonStyle } from "./HeadingWithButton.style";

const HeadingWithButton = () => {
  return (
    <HeadingWithButtonStyle>
      <p className="description">
        Introducing <span>Music</span>Pass. <br />
        Tap into the dance nation participating across the United States.
      </p>

      <Link to="/explore-venue">
        <OutlineButtonStyle width="380px" height="60px">
          Explore Music Events Near Me
        </OutlineButtonStyle>
      </Link>
    </HeadingWithButtonStyle>
  );
};

export default HeadingWithButton;

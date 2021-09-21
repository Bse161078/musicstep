import React from "react";
import { StarIcon } from "../../assets";
import { LogoWithHeadingStyle } from "./LogoWithHeading.style";

const LogoWithHeading = () => {
  return (
    <LogoWithHeadingStyle>
      <img src="/images/explore-venue/venue-detail.png" className="logo" alt="logo" />
      <div className="content-wrapper">
        <h1 className="heading">E11EVEN Miami Nightclub</h1>

        <div className="content">
          <StarIcon />
          4.7 <span>(2022 Reviews)</span>
        </div>
      </div>
    </LogoWithHeadingStyle>
  );
};

export default LogoWithHeading;

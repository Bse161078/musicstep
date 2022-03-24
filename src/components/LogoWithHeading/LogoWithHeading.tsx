import React from "react";
import { StarIcon } from "../../assets";
import { LogoWithHeadingStyle } from "./LogoWithHeading.style";

type LogoWithHeadingProps = {
  heading?: string;
  logo?: string;
};
const LogoWithHeading = ({
  heading = "Event Name",
  logo,
}: LogoWithHeadingProps) => {
  return (
    <LogoWithHeadingStyle>
      <img
        style={{
          width: "160px",
          height: "150px",
          borderRadius: "10px",
        }}
        src={`${process.env.REACT_APP_BASE_URL}/${logo}`}
        className="logo"
        alt="logo"
      />
      <div className="content-wrapper">
        <h1 className="heading">{heading}</h1>

        <div className="content">
          <StarIcon />
          4.7 <span>(2022 Reviews)</span>
        </div>
      </div>
    </LogoWithHeadingStyle>
  );
};

export default LogoWithHeading;

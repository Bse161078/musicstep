import React from "react";
import { SpinnerStyle } from "./Spinner.style";

const Loading = () => {
  return (
    <SpinnerStyle>
      <div className="loader"></div>
    </SpinnerStyle>
  );
};

export default Loading;

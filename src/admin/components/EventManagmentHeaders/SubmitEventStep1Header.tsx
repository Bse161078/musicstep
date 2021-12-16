import React from "react";
import { FilledButtonStyle } from "../../../styles/Common.style";
import { SubmitEventStep2HeaderStyle } from "./SubmitEventHeader.style";
import { SubmitEventStep1HeaderStyle } from "./SubmitEventHeader.style";

const SubmitEventStep1Header = () => {
  var backtick = "<";
  return (
    <SubmitEventStep1HeaderStyle>
      <h3 className="prev-text">{backtick} Back to Events Managment</h3>
      <div className="heading-button-wrapper">
        <h1 className="header">Submit An Event</h1>
        <FilledButtonStyle className="nxtstep-btn" height="53px" buttonType="dark">
          Next Step(1/2)
        </FilledButtonStyle>
      </div>
    </SubmitEventStep1HeaderStyle>
  );
};

export default SubmitEventStep1Header;

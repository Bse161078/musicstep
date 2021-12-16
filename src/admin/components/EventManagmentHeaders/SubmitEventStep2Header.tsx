import React from "react";
import {
  FilledButtonStyle,
  OutlineButtonStyle,
} from "../../../styles/Common.style";
import { SubmitEventStep1HeaderStyle } from "./SubmitEventHeader.style";

const SubmitEventStep2Header = () => {
  var backtick = "<";

  const handleBackClick = () => {};
  const handleSubmitClick = () => {};
  return (
    <SubmitEventStep1HeaderStyle>
      <h3 className="prev-text">{backtick} Back to Step 1</h3>
      <div className="heading-button-wrapper">
        <h1 className="header">Submit An Event</h1>
        <div className="btn-wrapper">
          <OutlineButtonStyle onClick={handleBackClick} height="53px">
            Back
          </OutlineButtonStyle>
          <FilledButtonStyle
            onClick={handleSubmitClick}
            height="53px"
            buttonType="dark"
          >
            Submit Event
          </FilledButtonStyle>
        </div>
      </div>
    </SubmitEventStep1HeaderStyle>
  );
};

export default SubmitEventStep2Header;

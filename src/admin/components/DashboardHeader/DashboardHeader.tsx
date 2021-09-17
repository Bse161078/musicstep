import React from "react";
import { LeftChevronIcon } from "../../../assets";
import {
  FilledButtonStyle,
  OutlineButtonStyle,
} from "../../../styles/Common.style";

import { DashboardHeaderStyle } from "./DashboardHeader.style";

type DashboardHeaderProps = {
  handleCancelClick?: () => void;
  handleSaveClick?: () => void;
  handleBackClick?: () => void;
  heading: string;
};

const DashboardHeader = (props: DashboardHeaderProps) => {
  const { handleCancelClick, handleSaveClick, handleBackClick, heading } =
    props;
  return (
    <DashboardHeaderStyle>
      <div className="heading-wrapper">
        {handleBackClick && (
          <h3 className="back-button" onClick={handleBackClick}>
            <LeftChevronIcon /> Back To Basic Info
          </h3>
        )}
        <h1>{heading}</h1>
      </div>

      <div className="header-buttons-wrapper">
        {handleCancelClick && (
          <OutlineButtonStyle onClick={handleCancelClick} width="150px" height="60px">
            Cancel
          </OutlineButtonStyle>
        )}

        {handleSaveClick && (
          <FilledButtonStyle onClick={handleSaveClick} buttonType="dark" width="150px" height="60px">
            Save
          </FilledButtonStyle>
        )}
      </div>
    </DashboardHeaderStyle>
  );
};

export default DashboardHeader;

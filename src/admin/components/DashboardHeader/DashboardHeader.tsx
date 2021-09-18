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
  description?: string;
  backButtonText?: string;
};

const DashboardHeader = (props: DashboardHeaderProps) => {
  const {
    handleCancelClick,
    handleSaveClick,
    handleBackClick,
    heading,
    description,
    backButtonText
  } = props;
  return (
    <DashboardHeaderStyle>
      <div className="heading-wrapper">
        {handleBackClick && (
          <h3 className="back-button" onClick={handleBackClick}>
            <LeftChevronIcon /> {backButtonText}
          </h3>
        )}
        <h1 className="heading">{heading}</h1>
        <p className="description">{description}</p>
      </div>

      <div className="header-buttons-wrapper">
        {handleCancelClick && (
          <OutlineButtonStyle
            onClick={handleCancelClick}
            width="150px"
            height="60px"
          >
            Cancel
          </OutlineButtonStyle>
        )}

        {handleSaveClick && (
          <FilledButtonStyle
            onClick={handleSaveClick}
            buttonType="dark"
            width="150px"
            height="60px"
          >
            Save
          </FilledButtonStyle>
        )}
      </div>
    </DashboardHeaderStyle>
  );
};

export default DashboardHeader;

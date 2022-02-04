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
  saveButtonText?: string;
  cancelButtonText?: string;
  saveButtonWidth?: string;
  cancelButtonWidth?: string;
  submitButton?: any;
};

const DashboardHeader = (props: DashboardHeaderProps) => {
  const {
    handleCancelClick,
    handleSaveClick,
    handleBackClick,
    heading,
    description,
    backButtonText,
    saveButtonText,
    cancelButtonText,
    saveButtonWidth,
    cancelButtonWidth,
  } = props;

  return (
    <DashboardHeaderStyle>
      {handleBackClick && (
        <div>
          <h3 className="back-button" onClick={handleBackClick}>
            <LeftChevronIcon /> {backButtonText}
          </h3>
        </div>
      )}

      <div className="header-buttons-wrapper">
        <div>
          <h1 className="heading">{heading}</h1>
          <p className="description">{description}</p>
        </div>
        <div className="button-wrapper">
          {handleCancelClick && (
            <OutlineButtonStyle
              onClick={handleCancelClick}
              width={cancelButtonWidth ? cancelButtonWidth : "150px"}
              height="60px"
            >
              {cancelButtonText ? cancelButtonText : "Cancel"}
            </OutlineButtonStyle>
          )}

          {handleSaveClick && (
            <FilledButtonStyle
              onClick={handleSaveClick}
              buttonType="dark"
              width={saveButtonWidth ? saveButtonWidth : "150px"}
              height="60px"
              type="submit"
            >
              {saveButtonText ? saveButtonText : "Save"}
            </FilledButtonStyle>
          )}
        </div>
      </div>
    </DashboardHeaderStyle>
  );
};

export default DashboardHeader;

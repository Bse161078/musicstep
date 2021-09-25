import React from "react";
import { OutlineButtonStyle } from "../../../styles/Common.style";

import { ContentHeaderStyle } from "./ContentHeader.style";

type ContentHeaderProps = {
  heading: string;
  description?: string;
  handleButtonClick?: () => void;
  actionButtons?: React.ReactNode;
};

const ContentHeader = (props: ContentHeaderProps) => {
  const { heading, description, handleButtonClick, actionButtons } = props;

  return (
    <ContentHeaderStyle>
      <div className="content-heading-wrapper">
        <h2 className="content-heading">{heading}</h2>
        <p className="content-description">{description}</p>
      </div>

      <div className="buttons-wrapper">
        {handleButtonClick && (
          <OutlineButtonStyle
            onClick={handleButtonClick}
            width="250px"
            height="60px"
          >
            Add Organization Profile
          </OutlineButtonStyle>
        )}

        {actionButtons && actionButtons}
      </div>
    </ContentHeaderStyle>
  );
};

export default ContentHeader;

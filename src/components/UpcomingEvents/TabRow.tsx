import React from "react";
import { Link } from "react-router-dom";
import {
  FilledButtonStyle,
  OutlineButtonStyle,
} from "../../styles/Common.style";
import { TabRowStyle } from "./UpcomingEvents.style";

type TabRowProps = {
  buttonType?: string;
  buttonText?: string;
  buttonClick?: any;
};

export const TabRow = (props: TabRowProps) => {
  const { buttonType, buttonText, buttonClick } = props;

  return (
    <TabRowStyle>
      <div className="time">
        <span>10:51AM</span>
        <span className="hour">1 Hour</span>
      </div>
      <div className="time">
        <span>Franklin Kub's Concert</span>
        <span className="hour">Alternative, Classical</span>
      </div>

      {buttonType === "filled" ? (
        <FilledButtonStyle
          buttonType="dark"
          width="150px"
          height="43px"
          onClick={buttonClick}
        >
          {buttonText}
        </FilledButtonStyle>
      ) : (
        <Link className="pricing" to="/pricing">
          <OutlineButtonStyle width="150px" height="43px">
            See Pricing
          </OutlineButtonStyle>
        </Link>
      )}
    </TabRowStyle>
  );
};

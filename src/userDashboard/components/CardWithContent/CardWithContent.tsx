import React from "react";
import {
  FilledButtonStyle,
  OutlineButtonStyle,
} from "../../../styles/Common.style";
import { CardWithContentStyle } from "./CardWithContent.style";

type CardWithContentProps = {
  heading: string;
  time: string;
  footerText: string;
  buttonType?: "filled" | "outlined";
  buttonText?: string;
  onButtonClick?: any;
};

const CardWithContent = (props: CardWithContentProps) => {
  const { heading, time, footerText, buttonType, buttonText } = props;

  return (
    <CardWithContentStyle>
      <img
        src="/images/sample.png"
        className="card-thumbnail"
        alt="thumbnail"
      />

      <div>
        <div className="row-wrapper">
          <div>
            <h4 className="heading">{heading}</h4>
            <p className="description">Alternative, Classical</p>
          </div>
          {buttonType === "filled" ? (
            <FilledButtonStyle buttonType="dark" width="100px" height="54px">
              {buttonText ? buttonText : "Cancel"}
            </FilledButtonStyle>
          ) : (
            <OutlineButtonStyle width="100px" height="54px">
              {buttonText ? buttonText : "Cancel"}
            </OutlineButtonStyle>
          )}
        </div>

        <div className="row-wrapper">
          <div>
            <h4 className="heading">{time}</h4>
            <p className="description">1 Hour</p>
          </div>

          <span className="content">{footerText}</span>
        </div>
      </div>
    </CardWithContentStyle>
  );
};

export default CardWithContent;

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
  handleButtonClick?: any;
};

const CardWithContent = (props: CardWithContentProps) => {
  const { heading, time, footerText, buttonType, buttonText, handleButtonClick } = props;

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
            <FilledButtonStyle onClick={handleButtonClick} buttonType="dark" width="100px" height="54px">
              {buttonText ? buttonText : "Cancel"}
            </FilledButtonStyle>
          ) : (
            <OutlineButtonStyle onClick={handleButtonClick} width="100px" height="54px">
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

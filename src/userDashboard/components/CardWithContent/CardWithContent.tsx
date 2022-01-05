import React, { useState } from "react";
import {
  FilledButtonStyle,
  OutlineButtonStyle,
} from "../../../styles/Common.style";
import { GuestListModal } from "../../Modals";
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
  const [isModalVisible, setIsModalVisible] = useState(false);
  const {
    heading,
    time,
    footerText,
    buttonType,
    buttonText,
    handleButtonClick,
  } = props;

  return (
    <>
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
              <FilledButtonStyle
                onClick={handleButtonClick}
                buttonType="dark"
                width="100px"
                height="54px"
              >
                {buttonText ? buttonText : "Cancel"}
              </FilledButtonStyle>
            ) : (
              <OutlineButtonStyle
                onClick={handleButtonClick}
                width="100px"
                height="54px"
              >
                {buttonText ? buttonText : "Cancel"}
              </OutlineButtonStyle>
            )}
          </div>

          <div className="row-wrapper">
            <div>
              <h4 className="heading">{time}</h4>
              <p className="description">1 Hour</p>
            </div>
            {footerText === "(Click to View Guest List)" ? (
              <span onClick={() => {
                setIsModalVisible(true);
              }}><p className="view-guest-list-text">{footerText}</p></span>
            ) : (
              <span><p className="cancel-text">{footerText}</p></span>
            )}
          </div>
        </div>
      </CardWithContentStyle>
      <GuestListModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
       
      />
    </>
  );
};

export default CardWithContent;

import React, {useState} from "react";
import {
  FilledButtonStyle,
  OutlineButtonStyle,
} from "../../../styles/Common.style";
import { SubmitEventStep1HeaderStyle } from "./SubmitEventHeader.style";
import { MessageModal } from "../../../components";

type SubmitEventStep2Props = {
  setCurrentStep: any;
};
const SubmitEventStep2Header = (props: SubmitEventStep2Props) => {
  const [isModalVisible,setIsModalVisible] = useState(false)
  var backtick = "<";
  const handleBackClick = () => {
    props.setCurrentStep(1);
  };
  const handleSubmitClick = () => {
      setIsModalVisible(true);
  };
  return (
    <>
      <SubmitEventStep1HeaderStyle>
        <h3 className="prev-text" onClick={handleBackClick}>
          {backtick} Back to Step 1
        </h3>
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
      <MessageModal
        heading="Success"
        message="Your event is now live!"
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
    </>
  );
};

export default SubmitEventStep2Header;

import React, { useState } from "react";
import { ChangePasswordPromptStyle } from "./ChangePasswordPrompt.style";
import { ModalWrapper } from "../ModalWrapper";
import { MessageModal } from "../../../../components";

type ChangePasswordPromptProps = {
  isModalVisible?: boolean;
  setIsModalVisible?: any;
};

const ChangePasswordPrompt = (props: ChangePasswordPromptProps) => {
  const { isModalVisible, setIsModalVisible } = props;
  const  [ isMessageModalVisible, setMessageModalVisible ] = useState(false)
   const handleOkClick = () => {
    setMessageModalVisible(true)
    setIsModalVisible(false)
   } 
  return (
    <>
      <ModalWrapper
        heading="Change Password?"
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        leftButtonTitle="Cancel"
        rightButtonTitle="Change Password"
        handleOkClick={handleOkClick}
      >
        <ChangePasswordPromptStyle>
          <img src="/images/changepasswordpromt.svg" alt="change passowrd" />
          <p>Are you sure you want to change your password?</p> 
        </ChangePasswordPromptStyle>
      </ModalWrapper>
      <MessageModal message="Your password has been reset successfully. You can now login with your new password." isModalVisible={isMessageModalVisible} setIsModalVisible={setMessageModalVisible} />
    
    </>
  );
};

export default ChangePasswordPrompt;

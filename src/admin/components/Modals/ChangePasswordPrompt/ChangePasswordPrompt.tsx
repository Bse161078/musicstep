import react from "react";
import { ChangePasswordPromptStyle } from "./ChangePasswordPrompt.style";
import { ModalWrapper } from "../ModalWrapper";
import { MessageModal } from "../../../../components";

type ChangePasswordPromptProps = {
  isModalVisible?: boolean;
  setIsModalVisible?: any;
};
const ChangePasswordPrompt = (props: ChangePasswordPromptProps) => {
  const { isModalVisible, setIsModalVisible } = props;

  return (
    <>
      <ModalWrapper
        heading="Change Password?"
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        leftButtonTitle="Cancel"
        rightButtonTitle="Change Password"
      >
        <ChangePasswordPromptStyle>
          <img src="/images/changepasswordpromt.svg" alt="change passowrd" />
          <p>Are you sure you want to change your password?</p>
        </ChangePasswordPromptStyle>
      </ModalWrapper>
    
    </>
  );
};

export default ChangePasswordPrompt;

import React from "react";
import { MessageModalStyle } from "./MessageModal.style";
import { SuccessIcon } from "../../assets";
import { FilledButtonStyle } from "../../styles/Common.style";
import { ModalWrapper } from "../../admin/components/Modals/ModalWrapper";

type MessageModalProps = {
  isModalVisible: boolean;
  setIsModalVisible: (data: boolean) => void;
  message?: string;
  heading?: string;
  icon?: React.ReactNode;
  type?: "light" | "dark";
  handleOkClick?: any;
  buttonText?: string;
  buttons?: any;
};

const MessageModal = (props: MessageModalProps) => {
  const {
    isModalVisible,
    handleOkClick,
    setIsModalVisible,
    message,
    icon,
    heading,
    type = "dark",
    buttonText = "Okay",
    buttons,
  } = props;

  const handleOk = () => {
    setIsModalVisible(false);
  };

  // const handleCancel = () => {
  //   setIsModalVisible(false);
  // };
  return (
    <ModalWrapper
      heading={heading ? heading : "Success"}
      isModalVisible={isModalVisible}
      setIsModalVisible={setIsModalVisible}
      button={
        buttons
          ? buttons
          : [
              <FilledButtonStyle
                width="100%"
                height="60px"
                onClick={handleOkClick || handleOk}
              >
                {buttonText}
              </FilledButtonStyle>,
            ]
      }
    >
      <MessageModalStyle type={type}>
        {icon ? icon : <SuccessIcon />}
        <p className="modal-message">{message}</p>
      </MessageModalStyle>
    </ModalWrapper>
  );
};

export default MessageModal;

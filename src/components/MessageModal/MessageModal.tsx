import React from "react";
import { MessageModalStyle } from "./MessageModal.style";
import { SuccessIcon } from "../../assets";
import { FilledButtonStyle } from "../../styles/Common.style";

type MessageModalProps = {
  isModalVisible: boolean;
  setIsModalVisible: (data: boolean) => void;
  message?: string;
  type?: "light" | "dark";
  handleOkClick?: any;
  buttonText?: string;
};

const MessageModal = (props: MessageModalProps) => {
  const {
    isModalVisible,
    handleOkClick,
    setIsModalVisible,
    message,
    type = "dark",
    buttonText="Okay"
  } = props;

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <MessageModalStyle
      type={type}
      title="Success"
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[
        <FilledButtonStyle
          width="100%"
          height="60px"
          onClick={handleOkClick || handleOk}
        >
          {buttonText}
        </FilledButtonStyle>,
      ]}
    >
      <SuccessIcon />
      <p className="modal-message">{message}</p>
    </MessageModalStyle>
  );
};

export default MessageModal;

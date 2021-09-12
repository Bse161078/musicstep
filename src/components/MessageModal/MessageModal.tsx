import React from "react";
import { MessageModalStyle } from "./MessageModal.style";
import { SuccessIcon } from "../../assets";
import { FilledButtonStyle } from "../../styles/Common.style";

type MessageModalProps = {
  isModalVisible: boolean;
  setIsModalVisible: (data: boolean) => void;
  message?: string;
};

const MessageModal = (props: MessageModalProps) => {
  const { isModalVisible, setIsModalVisible, message } = props;

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <MessageModalStyle
      title="Success"
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[
        <FilledButtonStyle width="100%" height="60px" onClick={handleOk}>
          Okay
        </FilledButtonStyle>
      ]}
    >
      <SuccessIcon />
      <p className="modal-message">{message}</p>
    </MessageModalStyle>
  );
};

export default MessageModal;

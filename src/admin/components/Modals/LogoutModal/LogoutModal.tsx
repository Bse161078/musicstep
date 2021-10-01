import React from "react";

import { ModalWrapper } from "../ModalWrapper";
import { LogoutStyle } from "./LogoutModal.style";

type LogoutModalProps = {
  isModalVisible?: boolean;
  setIsModalVisible?: any;
  handleOk?: any;
};

const LogoutModal = (props: LogoutModalProps) => {
  const { isModalVisible, setIsModalVisible, handleOk } = props;
  return (
    <ModalWrapper
      heading="Logout?"
      leftButtonTitle="No"
      rightButtonTitle="Logout"
      isModalVisible={isModalVisible}
      setIsModalVisible={setIsModalVisible}
      handleOkClick={handleOk}
    >
      <LogoutStyle>
        <img src="/images/logout.svg" alt="logout" />
        <p>Are you sure you want to logout your account?</p>
      </LogoutStyle>
    </ModalWrapper>
  );
};

export default LogoutModal;

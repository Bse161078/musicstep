import react from "react";

import { ModalWrapper } from "../ModalWrapper";
import { LogoutStyle } from "./LogoutModal.style";
type LogoutModalProps = {
  isModalVisible?: boolean;
  setIsModalVisible?: any;
};

const LogoutModal = (props: LogoutModalProps) => {
  const { isModalVisible, setIsModalVisible } = props;
  return (
    <ModalWrapper
      heading="Logout?"
      leftButtonTitle="No"
      rightButtonTitle="Logout"
      isModalVisible={isModalVisible}
      setIsModalVisible={setIsModalVisible}
    >
      <LogoutStyle>
        <img src="/images/logout.svg" alt="logout" />
        <p>Are you sure you want to logout your account?</p>
      </LogoutStyle>
    </ModalWrapper>
  );
};

export default LogoutModal;

import React from "react";

import { ModalWrapper } from "../../../admin/components/Modals/ModalWrapper";
import { BlockUserStyle } from "./BlockUserModal.style";

type LogoutModalProps = {
  isModalVisible?: boolean;
  setIsModalVisible?: any;
  handleOk?: any;
};

const BlockUserModal = (props: LogoutModalProps) => {
  const { isModalVisible, setIsModalVisible, handleOk } = props;
  return (
    <ModalWrapper
      heading="Are You Sure?"
      leftButtonTitle="Cancel"
      rightButtonTitle="Yes, Don't Show"
      isModalVisible={isModalVisible}
      setIsModalVisible={setIsModalVisible}
      handleOkClick={handleOk}
    >
      <BlockUserStyle>
        <img src="/images/info.svg" alt="info" />
        <p>Are you sure you want to remove this person? By clicking yes, this person will also not be able to see you in their suggestions.</p>
      </BlockUserStyle>
    </ModalWrapper>
  );
};

export default BlockUserModal;

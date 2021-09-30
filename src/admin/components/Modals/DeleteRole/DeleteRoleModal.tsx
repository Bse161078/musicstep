import React from "react";
import { ModalWrapper } from "../ModalWrapper";
import { DeleteRoleModalStyle } from "./DeleteRole.style";
type DeleteRoleModalProps = {
  isModalVisible?: boolean;
  setIsModalVisible?: any;
};
const DeleteRoleModal = (props: DeleteRoleModalProps) => {
  const { isModalVisible, setIsModalVisible } = props;
  return (
    <ModalWrapper
      heading="Delete Role?"
      leftButtonTitle="No"
      rightButtonTitle="Delete Role"
      isModalVisible={isModalVisible}
      setIsModalVisible={setIsModalVisible}
    >
      <DeleteRoleModalStyle>
        <img
          alt="delete role"
          className="delete-role"
          src="/images/DeleteRole.svg"
        />
        <p>Are you sure you want to delete this role?</p>
      </DeleteRoleModalStyle>
    </ModalWrapper>
  );
};
export default DeleteRoleModal;
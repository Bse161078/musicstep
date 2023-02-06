import React from "react";
import { ModalWrapper } from "../ModalWrapper";
import { DeleteRoleModalStyle } from "./DeleteRole.style";
type DeleteRoleModalProps = {
  isModalVisible?: boolean;
  setIsModalVisible?: any;
  message?: any;
  handleOkClick?: any;
  header?:any
};
const DeleteRoleModal = (props: DeleteRoleModalProps) => {
  const { isModalVisible, setIsModalVisible, message, handleOkClick,header } = props;
  return (
    <ModalWrapper
      heading={header?header:"Delete Role?"}
      leftButtonTitle="No"
      rightButtonTitle="Delete"
      isModalVisible={isModalVisible}
      setIsModalVisible={setIsModalVisible}
      handleOkClick={handleOkClick}
    >
      <DeleteRoleModalStyle>
        <img
          alt="delete role"
          className="delete-role"
          src="/images/DeleteRole.svg"
        />
        {message ? (
          <p>{message}</p>
        ) : (
          <p>
            {message ? message : "Are you sure you want to delete this role?"}
          </p>
        )}
      </DeleteRoleModalStyle>
    </ModalWrapper>
  );
};
export default DeleteRoleModal;

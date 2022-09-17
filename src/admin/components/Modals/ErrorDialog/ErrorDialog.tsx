import React from "react";
import { ModalWrapper } from "../ModalWrapper";
import { ErrorDialogModalStyle } from "./ErrorDialog.style";
import {FilledButtonStyle} from "../../../../styles/Common.style";
type ErrorDialogModalProps = {
  isModalVisible?: boolean;
  setIsModalVisible?: any;
  message?: any;
  handleOkClick?: any;
  header?:any
};
const ErrorModal = (props: ErrorDialogModalProps) => {
  const { isModalVisible, setIsModalVisible, message, handleOkClick,header } = props;
  return (
    <ModalWrapper
      heading={header?header:"Error"}
      button={
          <FilledButtonStyle
              buttonType="dark"
              width="290px"
              height="60px"
              onClick={() => {
                  setIsModalVisible(false)
              }}
          >
              OK
          </FilledButtonStyle>
      }
      isModalVisible={isModalVisible}
      setIsModalVisible={setIsModalVisible}
    >
      <ErrorDialogModalStyle>
        <img
          alt="error"
          className="delete-role"
          src="/images/icons/cancel-icon.svg"
        />
        {message ? (
          <p>{message}</p>
        ) : (
          <p>
            {message ? message : "Something went wrong?"}
          </p>
        )}
      </ErrorDialogModalStyle>
    </ModalWrapper>
  );
};
export default ErrorModal;

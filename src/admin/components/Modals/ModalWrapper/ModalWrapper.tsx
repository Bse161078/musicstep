import React, { useState } from "react";
import { ModalWrapperStyle } from "./ModalWrapper.style";

import {
  FilledButtonStyle,
  OutlineButtonStyle,
} from "../../../../styles/Common.style";

type ModalWrapperProps = {
  children: any;
  heading: string;
  leftButtonTitle?: string;
  rightButtonTitle?: string;
  button?: React.ReactNode;
  width?:string
  isModalVisible?: boolean
  setIsModalVisible?: any
  height?:string
};
const ModalWrapper = (props: ModalWrapperProps) => {
  const {
    children,
    heading,
    leftButtonTitle,
    rightButtonTitle,
    button,
    width,
    isModalVisible,
    setIsModalVisible,

  } = props;



  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>

      <ModalWrapperStyle
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        className="target"
        title={heading}
        width={width ? width : '660px'}
     

        footer={
          button
            ? button
            : [
                <OutlineButtonStyle
                  width="290px"
                  height="60px"
                  onClick={handleOk}
                >
                  {leftButtonTitle}
                </OutlineButtonStyle>,
                <FilledButtonStyle
                  width="290px"
                  height="60px"
                  onClick={handleOk}
                >
                  {rightButtonTitle}
                </FilledButtonStyle>,
              ]
            
        }
      >
        {children}
      </ModalWrapperStyle>
    </>
  );
};
export default ModalWrapper;

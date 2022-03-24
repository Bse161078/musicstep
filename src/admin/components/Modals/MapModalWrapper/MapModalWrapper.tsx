import React from "react";
import { MapModalWrapperStyle } from "./MapModalWrapper.style";

import {
  FilledButtonStyle,
  OutlineButtonStyle,
} from "../../../../styles/Common.style";

type MapModalWrapperProps = {
  children: any;
  heading?: string;
  description?: string;
  leftButtonTitle?: string;
  rightButtonTitle?: string;
  button?: React.ReactNode;
  width?: string;
  isModalVisible?: boolean;
  setIsModalVisible?: any;
  height?: string;
  handleOkClick?: any;
  isFooter?: boolean;
  boldDescription?: string;
  handleDescriptionClick?: () => void;
};
const MapModalWrapper = (props: MapModalWrapperProps) => {
  const {
    children,
    heading,
    leftButtonTitle,
    rightButtonTitle,
    button,
    width,
    isModalVisible,
    setIsModalVisible,
    handleOkClick,
    description,
    boldDescription,
    handleDescriptionClick,
    isFooter = true,
  } = props;

  // const showModal = () => {
  //   setIsModalVisible(true);
  // };

  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <MapModalWrapperStyle
        visible={isModalVisible}
        centered
        onOk={handleOk}
        onCancel={handleCancel}
        className="target"
        title={heading}
        width={width ? width : "660px"}
        footer={null}
      >
        {/* {description ? (
          <p className="description">{description}</p>
        ) : (
          <p className="bold-description" onClick={handleDescriptionClick}>
            {boldDescription}
          </p>
        )} */}

        {children}
      </MapModalWrapperStyle>
    </>
  );
};
export default MapModalWrapper;

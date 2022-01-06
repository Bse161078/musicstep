import React from 'react'
import { ModalWrapperStyle } from './ModalWrapper.style'

import {
  FilledButtonStyle,
  OutlineButtonStyle,
} from '../../../../styles/Common.style'

type ModalWrapperProps = {
  children: any
  heading?: string
  description?: string
  leftButtonTitle?: string
  rightButtonTitle?: string
  button?: React.ReactNode
  width?: string
  isModalVisible?: boolean
  setIsModalVisible?: any
  height?: string
  handleOkClick?: any
  isFooter?: boolean
  boldDescription?: string
  handleDescriptionClick?: () => void
}
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
    handleOkClick,
    description,
    boldDescription,
    handleDescriptionClick,
    isFooter,
  } = props

  // const showModal = () => {
  //   setIsModalVisible(true);
  // };

  const handleOk = () => {
    setIsModalVisible(false)
  }
  const handleCancel = () => {
    setIsModalVisible(false)
  }
  return (
    <>
      <ModalWrapperStyle
        visible={isModalVisible}
        centered
        onOk={handleOk}
        onCancel={handleCancel}
        className="target"
        title={heading}
        width={width ? width : '660px'}
        footer={
          isFooter
            ? button
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
                    onClick={handleOkClick ? handleOkClick : handleOk}
                  >
                    {rightButtonTitle}
                  </FilledButtonStyle>,
                ]
            : null
        }
      >
        {description ? (
          <p className="description">{description}</p>
        ) : (
          <p className="bold-description" onClick={handleDescriptionClick}>
            {boldDescription}
          </p>
        )}

        {children}
      </ModalWrapperStyle>
    </>
  )
}
export default ModalWrapper

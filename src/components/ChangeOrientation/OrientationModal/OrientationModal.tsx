import React from 'react'
import { ModalWrapper } from '../../../admin/components/Modals/ModalWrapper'

type InviteModalProps = {
  isModalVisible?: boolean
  setIsModalVisible?: any
}

const OrientationModal = (props: InviteModalProps) => {
  const { isModalVisible, setIsModalVisible } = props
  return (
    <>
      <ModalWrapper
        heading="Change Orientation"
        isFooter={false}
        isModalVisible={true}
        setIsModalVisible={(visible:any)=>{}}
      >
          <img alt="icon" src="/images/orientation.png"/>
          <p className="bold-description" style={{marginTop:50,color:"black",fontSize:22}} >
              Please switch orientation to landscape
          </p>
      </ModalWrapper>
    </>
  )
}

export default OrientationModal

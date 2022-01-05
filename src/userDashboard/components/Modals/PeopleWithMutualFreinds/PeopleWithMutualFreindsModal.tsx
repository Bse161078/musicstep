import React, { useState } from 'react'
import PeopleWithMutualFreindsModalStyle from './PeopleWithMutualFreindsModal.style'
import { ModalWrapper } from '../../../../admin/components/Modals/ModalWrapper'
import { ProfileModal } from '..'

type PeopleWithMutualFreindsModalProps = {
  isModalVisible: boolean
  setIsModalVisible: (data: boolean) => void
}
const PeopleWithMutualFreindsModal = (
  props: PeopleWithMutualFreindsModalProps,
) => {
  const { isModalVisible, setIsModalVisible } = props
  const [isProfileModalVisible, setIsProfileModalVisible] = useState(false)
  return (
    <>
      <ModalWrapper
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        isFooter={false}
        heading="People With Mutual Freinds"
        width="875px"
        height="710px"
      >
        <PeopleWithMutualFreindsModalStyle>
          <PublicProfileOff />
          {/* <PublicProfileON /> */}
        </PeopleWithMutualFreindsModalStyle>
      </ModalWrapper>
      <ProfileModal
        isModalVisible={isProfileModalVisible}
        setIsModalVisible={setIsProfileModalVisible}
      />
    </>
  )
}

export default PeopleWithMutualFreindsModal

const PublicProfileOff = () => {
  return (
    <div className="text-wrapper">
      <p className="center-text">
        Public Profile Display must be On to match others.
        <p>
          <span className="link">Click here</span> to change settings
        </p>
      </p>
    </div>
  )
}


const PublicProfileON = () => {
  return (
      <div>
        nothing
      </div>
  )
}

import React from 'react'
import ProfileModalStyle from './ProfileModal.style'
import { ModalWrapper } from '../../../../admin/components/Modals/ModalWrapper'
import { OutlineButtonStyle } from '../../../../styles/Common.style'

type ProfileModalProps = {
  isModalVisible: boolean
  setIsModalVisible: (data: boolean) => void
  nextEventDisable?: boolean
}
const ProfileModal = (props: ProfileModalProps) => {
  const { isModalVisible, setIsModalVisible, nextEventDisable } = props
  return (
    <ModalWrapper
      isModalVisible={isModalVisible}
      setIsModalVisible={setIsModalVisible}
      isFooter={true}
      width="450px"
      height="648px"
      button={
        <>
          <OutlineButtonStyle buttonType="light" width="270px" height="60px"
          onClick={()=>{
            props.setIsModalVisible(false)
          }}
          >
            Dont Show This Person Again
          </OutlineButtonStyle>
          <OutlineButtonStyle buttonType="light" width="110px" height="60px"
          
          >
            Close
          </OutlineButtonStyle>
        </>
      }
    >
      <ProfileModalStyle>
        <div className="image-wrapper">
          <img src="/images/profile.png" alt="profile" />
        </div>
        <p className="person-name">Lynda Gusikowski</p>
        <p className="description">
          Dolor rem non inventore. Non rerum nostrum. Sit consectetur dolorem
          voluptatem sit dolorem. Deleniti vel sit dolorem illo sed culpa.
        </p>
        <div className="recent-event-wrapper">
          <span className="text-wrapper">
            <p className="title">Recent Event: </p>
            <p>Voluptas Enim Concert</p>
          </span>
          {nextEventDisable ? null : (
            <>
              <span className="text-wrapper">
                <p className="title">Next Event: </p>
                <p>Voluptas Enim Concert</p>
              </span>
            </>
          )}
        </div>

        <div className="icon-with-content">
          <img alt="icon" src="/images/icons/phone-icon.svg" />
          <span>+1 305 705 2747</span>
        </div>

        <div className="icon-with-content">
          <img alt="icon" src="/images/icons/instagram-icon.svg" />
          <span> @instagram</span>
        </div>

        <div className="icon-with-content">
          <img alt="icon" src="/images/icons/facebook-icon.svg" />
          <span> @facebook</span>
        </div>

        <div className="icon-with-content">
          <img alt="icon" src="/images/icons/twitter-icon.svg" />
          <span> @twitter</span>
        </div>
      </ProfileModalStyle>
    </ModalWrapper>
  )
}
export default ProfileModal

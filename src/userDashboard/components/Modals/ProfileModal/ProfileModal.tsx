import React from 'react'
import ProfileModalStyle from './ProfileModal.style'
import {ModalWrapper} from '../../../../admin/components/Modals/ModalWrapper'
import {OutlineButtonStyle} from '../../../../styles/Common.style'

type ProfileModalProps = {
    isModalVisible: boolean
    setIsModalVisible: (data: boolean) => void
    nextEventDisable?: boolean
    user?: any
}
const ProfileModal = (props: ProfileModalProps) => {
    const {isModalVisible, setIsModalVisible, nextEventDisable,user} = props
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
                                        onClick={() => {
                                            props.setIsModalVisible(false)
                                        }}
                    >
                        Dont Show This Person Again
                    </OutlineButtonStyle>
                    <OutlineButtonStyle buttonType="light" width="110px" height="60px"
                                        onClick={() => {
                                            props.setIsModalVisible(false)
                                        }}
                    >
                        Close
                    </OutlineButtonStyle>
                </>
            }
        >
            <ProfileModalStyle>
                <div className="image-wrapper">
                    <img src={user && user.imageUrl? process.env.REACT_APP_BASE_URL + "/images/" + user.imageUrl : "/images/person.svg"} alt="profile"/>
                </div>
                <p className="person-name">{user && `${user.firstName} ${user.lastName}`}</p>
                {/*<p className="description">*/}
                    {/*Dolor rem non inventore. Non rerum nostrum. Sit consectetur dolorem*/}
                    {/*voluptatem sit dolorem. Deleniti vel sit dolorem illo sed culpa.*/}
                {/*</p>*/}
                <div className="recent-event-wrapper">
          <span className="text-wrapper">
            <p className="title">Recent Event: </p>
            <p>{user && user.recentEvent?user.recentEvent:"Not found"}</p>
          </span>
                    {nextEventDisable ? null : (
                        <>
                            <span className="text-wrapper">
                <p className="title">Next Event: </p>
                <p>{user && user.publicNextReservation && user.nextEvent ? user.nextEvent:"Not found"}</p>
              </span>
                        </>
                    )}
                </div>

                <div className="icon-with-content">
                    <img alt="icon" src="/images/icons/phone-icon.svg"/>
                    <span style={{marginLeft:"10px"}}>{user && user.phoneNumber}</span>
                </div>

                <div className="icon-with-content">
                    <img alt="icon" src="/images/icons/instagram-icon.svg"/>
                    <span style={{marginLeft:"10px"}}>{user && user.publicInfo && user.publicInfo.instagram?user.publicInfo.instagram:"Not found"}</span>
                </div>

                <div className="icon-with-content">
                    <img alt="icon" src="/images/icons/facebook-icon.svg"/>
                    <span style={{marginLeft:"10px"}}>{user && user.publicInfo && user.publicInfo.facebook?user.publicInfo.facebook:"Not found"}</span>
                </div>

                <div className="icon-with-content">
                    <img alt="icon" src="/images/icons/twitter-icon.svg"/>
                    <span style={{marginLeft:"10px"}}>{user && user.publicInfo && user.publicInfo.twitter?user.publicInfo.twitter:"Not found"}</span>
                </div>
            </ProfileModalStyle>
        </ModalWrapper>
    )
}
export default ProfileModal

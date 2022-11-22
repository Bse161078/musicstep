import React, {useState} from 'react'
import PeopleWithMutualFreindsModalStyle from './PeopleWithMutualFreindsModal.style'
import {ModalWrapper} from '../../../../admin/components/Modals/ModalWrapper'
import {ProfileModal} from '..'
import {PeopleList} from './PeopleList'
import {useHistory} from 'react-router-dom'

type PeopleWithMutualFreindsModalProps = {
    isModalVisible?: boolean
    setIsModalVisible?: (data: boolean) => void
    isPublicProfileVisible?: boolean
}
const PeopleWithMutualFreindsModal = (
    props: PeopleWithMutualFreindsModalProps,
) => {
    const history = useHistory()
    const {isModalVisible, setIsModalVisible, isPublicProfileVisible} = props
    const [isProfileModalVisible, setIsProfileModalVisible] = useState(false)




    return (
        <>
            <ModalWrapper
                isModalVisible={isModalVisible}
                setIsModalVisible={setIsModalVisible}
                isFooter={false}
                heading="People with mutual music event history"
                width="875px"
                height="710px"
                boldDescription="Manage My Public Profile"
                handleDescriptionClick={() => {
                    history.push('/dashboard/basic-info')
                }}
            >
                <PeopleWithMutualFreindsModalStyle>
                    {isPublicProfileVisible || true ? <PeopleList/> : <PublicProfileOff/>}
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
    const history = useHistory()
    return (
        <div className="text-wrapper">
            <p className="center-text">
                Public Profile Display must be On to match others.
                <p>
          <span
              className="link"
              onClick={() => {
                  history.push('/dashboard/basic-info')
              }}
          >
            Click here
          </span>{' '}
                    to change settings
                </p>
            </p>
        </div>
    )
}

import React, { useState } from 'react'
import PersonListItemStyle from './PersonListItem.style'
import { ProfileModal } from '../Modals'
type PersonListItemProps = {
  personName?: string
  imageLink?: string
  nextEventName?: string
  recentEventName?: string
  listType?: string
  nextEventDisable?: boolean
}

const PersonListItem = (props: PersonListItemProps) => {
  const [isProfileModalVisible, setIsProfileModalVisible] = useState(false)
  const {
    personName,
    imageLink,
    nextEventName,
    recentEventName,
    listType,
    nextEventDisable
  } = props

  return (
    <>
      <PersonListItemStyle>
        {listType === 'normal' ? (
          <div className="simple-list-wrapper">
            <img src={imageLink} alt="" className="person-image" />
            <p className="person-name">{personName}</p>
          </div>
        ) : (
          <div className="image-list-wrapper">
            <img src={imageLink} alt="" className="person-image" />
            <div className="name-wrapper">
              <p className="person-name">{personName}</p>
              <span className="nameChild-wrapper">
                <p>
                  Recent Event:
                  <span className="title">{recentEventName}</span>
                </p>
                {nextEventDisable ? null : (
                  <>
                    <p>
                      Next Event:<span className="title">{nextEventName}</span>
                    </p>
                  </>
                )}
              </span>
            </div>
            <span
              onClick={() => {
                setIsProfileModalVisible(true)
              }}
            >
              <img
                src="/images/icons/arrow-icon.svg"
                alt="drag drop"
                className="arrow-img"
              />
            </span>
          </div>
        )}
      </PersonListItemStyle>
      <ProfileModal
        isModalVisible={isProfileModalVisible}
        setIsModalVisible={setIsProfileModalVisible}
      />
    </>
  )
}

export default PersonListItem

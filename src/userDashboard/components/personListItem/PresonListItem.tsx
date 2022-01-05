import React from 'react'
import PersonListItemStyle from './PersonListItem.style'
type PersonListItemProps = {
  personName?: string
  imageLink?: string
  nextEventName?: string
  recentEventName?: string
  listType?: string
}
const PersonListItem = (props: PersonListItemProps) => {
  const {
    personName,
    imageLink,
    nextEventName,
    recentEventName,
    listType,
  } = props
  return (
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
              <p>Recent Event:{recentEventName}</p>
              <p>Next Event:{nextEventName}</p>
            </span>
          </div>
          <img
            src="/images/icons/arrow-icon.svg"
            alt="drag drop"
            className="arrow-img"
          />
        </div>
      )}
    </PersonListItemStyle>
  )
}

export default PersonListItem

import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { HeadingTab } from "..";
import {
  CreditHistoryModal,
  EventHistoryModal,
  LogoutModal,
  SubscriptionDetailsModal,
} from "../../../admin/components";
import { MessageModal } from "../../../components";
import {
  FilledButtonStyle,
  OutlineButtonStyle,
} from "../../../styles/Common.style";

import { UserSidebarStyle } from "./UserSidebar.style";

const UserSidebar = () => {
  const [isLogoutVisible, setLogoutVisible] = useState(false);
  const [isSubscriptionVisible, setSubscriptionVisible] = useState(false);
  const [isCreditModalVisible, setCreditModalVisible] = useState(false);
  const [isEventsModalVisible, setEventsModalVisible] = useState(false);
  const [isCancelSubscriptionVisible, setCancelSubscriptionVisible] = useState(
    false
  );
  const [isSuccessModalVisible, setSuccessModalVisible] = useState(false);

  const history = useHistory();

  const handleModalCancelClick = () => {
    setCancelSubscriptionVisible(false);
  };

  const handleModalOkClick = () => {
    setSuccessModalVisible(true);
    setCancelSubscriptionVisible(false);
  };

  const subscriptionCancelClick = () => {
    setSubscriptionVisible(false);
    setCancelSubscriptionVisible(true);
  };

  return (
    <UserSidebarStyle>
      <figure className="person-info-wrapper">
        <div className="avatar-wrapper">
          <img
            src="/images/sample-image.webp"
            className="avatar"
            alt="avatar"
          />

          <div className="action-buttons-wrapper">
            <Link to="/dashboard/basic-info">
              <img alt="profile" src="/images/icons/edit-profile-icon.svg" />
            </Link>
            <span onClick={() => setLogoutVisible(true)}>
              <img alt="logout" src="/images/icons/logout-icon.svg" />
            </span>
          </div>
        </div>
        <figcaption className="person-name">John Doe</figcaption>
      </figure>

      <h4 className="heading">Subscription Details</h4>

      <div className="cards-wrapper">
        <span onClick={() => setSubscriptionVisible(true)}>
          <HeadingTab
            heading="Music Enthusiast"
            description="Expires in 21 days."
          />
        </span>

        <div className="divider" />

        <span onClick={() => setCreditModalVisible(true)}>
          <HeadingTab
            icon={
              <img src="/images/icons/credit-history-icon.svg" alt="icon" />
            }
            heading="Credits History"
          />
        </span>

        <span onClick={() => setEventsModalVisible(true)}>
          <HeadingTab
            icon={<img src="/images/icons/event-history-icon.svg" alt="icon" />}
            heading="Events History"
          />
        </span>

        <div className="divider" />
        <HeadingTab heading="Events in Resevation" count={14} />
        <HeadingTab heading="Total Events Attended" count={14} />

        <HeadingTab heading="Total Canceled Events" count={1} />
      </div>

      <LogoutModal
        isModalVisible={isLogoutVisible}
        setIsModalVisible={setLogoutVisible}
        handleOk={() => {
          history.push("/login");
          setLogoutVisible(false);
        }}
      />

      <SubscriptionDetailsModal
        isModalVisible={isSubscriptionVisible}
        setIsModalVisible={setSubscriptionVisible}
        handleCancelClick={subscriptionCancelClick}
        handleChangeClick={() => history.push("/pricing")}
      />

      <CreditHistoryModal
        isModalVisible={isCreditModalVisible}
        setIsModalVisible={setCreditModalVisible}
      />

      <EventHistoryModal
        isModalVisible={isEventsModalVisible}
        setIsModalVisible={setEventsModalVisible}
      />

      <MessageModal
        isModalVisible={isCancelSubscriptionVisible}
        setIsModalVisible={setCancelSubscriptionVisible}
        heading="Cancel Subscription?"
        message="Are you sure you want to cancel this subscription?"
        buttons={[
          <OutlineButtonStyle
            width="100%"
            height="60px"
            onClick={handleModalCancelClick}
          >
            No
          </OutlineButtonStyle>,
          <FilledButtonStyle
            width="100%"
            height="60px"
            onClick={handleModalOkClick}
          >
            Cancel Subscription
          </FilledButtonStyle>,
        ]}
      />

      <MessageModal
        isModalVisible={isSuccessModalVisible}
        setIsModalVisible={setSuccessModalVisible}
        heading="Success"
        message="Subscription canceled successfully."
        handleOkClick={()=>{history.push("/")}}
      />
    </UserSidebarStyle>
  );
};

export default UserSidebar;

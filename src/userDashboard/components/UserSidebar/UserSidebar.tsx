import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HeadingTab } from "..";
import {
  CreditHistoryModal,
  EventHistoryModal,
  LogoutModal,
  SubscriptionDetailsModal,
} from "../../../admin/components";

import { UserSidebarStyle } from "./UserSidebar.style";

const UserSidebar = () => {
  const [isLogoutVisible, setLogoutVisible] = useState(false);
  const [isSubscriptionVisible, setSubscriptionVisible] = useState(false);
  const [isCreditModalVisible, setCreditModalVisible] = useState(false);
  const [isEventsModalVisible, setEventsModalVisible] = useState(false);

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
          <HeadingTab icon={"Icon"} heading="Credits History" />
        </span>

        <span onClick={() => setEventsModalVisible(true)}>
          <HeadingTab icon={"Icon"} heading="Events History" />
        </span>

        <div className="divider" />
        <HeadingTab heading="Events in Resevation" count={14} />
        <HeadingTab heading="Total Events Attended" count={14} />

        <HeadingTab heading="Total Canceled Events" count={1} />
      </div>

      <LogoutModal
        isModalVisible={isLogoutVisible}
        setIsModalVisible={setLogoutVisible}
      />

      <SubscriptionDetailsModal
        isModalVisible={isSubscriptionVisible}
        setIsModalVisible={setSubscriptionVisible}
      />

      <CreditHistoryModal
        isModalVisible={isCreditModalVisible}
        setIsModalVisible={setCreditModalVisible}
      />

      <EventHistoryModal
        isModalVisible={isEventsModalVisible}
        setIsModalVisible={setEventsModalVisible}
      />
    </UserSidebarStyle>
  );
};

export default UserSidebar;

import React from "react";
import { Link } from "react-router-dom";
import { HeadingTab } from "..";
import { EditButtonIcon } from "../../../assets";

import { UserSidebarStyle } from "./UserSidebar.style";

const UserSidebar = () => {
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
              <EditButtonIcon />
            </Link>
            <span>
              <EditButtonIcon />
            </span>
          </div>
        </div>
        <figcaption className="person-name">John Doe</figcaption>
      </figure>

      <h4 className="heading">Subscription Details</h4>

      <div className="cards-wrapper">
        <HeadingTab
          heading="Music Enthusiast"
          description="Expires in 21 days."
        />

        <div className="divider" />
        <HeadingTab icon={"Icon"} heading="Credits History" />
        <HeadingTab icon={"Icon"} heading="Events History" />

        <div className="divider" />
        <HeadingTab heading="Events in Resevation" count={14} />
        <HeadingTab heading="Total Events Attended" count={14} />

        <HeadingTab heading="Total Canceled Events" count={1} />
      </div>
    </UserSidebarStyle>
  );
};

export default UserSidebar;

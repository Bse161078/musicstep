import React from "react";
import { EditButtonIcon } from "../../../assets";

import { TeamUsersListItemStyle } from "./TeamUsersList.style";

export const TeamUsersListItem = () => {
  return (
    <TeamUsersListItemStyle>
      <div className="thumb-with-content">
        <img
          alt="profile thumbnail"
          className="profile-thumanail"
          src="/images/logo.png"
        />

        <div className="content-wrapper">
          <h4 className="heading">Dolores Pouros</h4>
          <p className="description">Wava.Simonis45@hotmail.com</p>
        </div>
      </div>

      <div className="team-role">Regional Directives Analyst</div>

      <div className="action-buttons-wrapper">
        <EditButtonIcon />
      </div>
    </TeamUsersListItemStyle>
  );
};

import React from "react";
import { EditButtonIcon } from "../../../assets";

import { TeamRoleListItemStyle } from "./TeamRolesList.style";

export const TeamRoleListItem = () => {
  return (
    <TeamRoleListItemStyle>
      <div className="team-role">1.</div>

      <div className="team-role">Manager</div>

      <div className="team-role">24-Mar-2021</div>

      <div className="action-buttons-wrapper">
        <EditButtonIcon />
        <EditButtonIcon />
      </div>
    </TeamRoleListItemStyle>
  );
};

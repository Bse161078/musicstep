import React from "react";
import { TeamRoleListItem } from "./TeamRoleListItem";
import { TeamRolesListStyle } from "./TeamRolesList.style";

const TeamRolesList = () => {
  return (
    <TeamRolesListStyle>
      <div className="table-header">
        <h3 className="header-title">Sr#</h3>
        <h3 className="header-title">Roles</h3>
        <h3 className="header-title">Adde On Date</h3>
      </div>

      <TeamRoleListItem />
      <TeamRoleListItem />
      <TeamRoleListItem />
      <TeamRoleListItem />
    </TeamRolesListStyle>
  );
};

export default TeamRolesList;

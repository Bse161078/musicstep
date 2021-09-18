import React from "react"

import { TeamUsersListStyle } from "./TeamUsersList.style";
import { TeamUsersListItem } from "./TeamUsersListItem";

const TeamUsersList = () => {
    return (
        <TeamUsersListStyle>
            <div className="table-header">
                <h3 className="header-title">Name</h3>
                <h3 className="header-title">Roles</h3>
            </div>

            <TeamUsersListItem />
            <TeamUsersListItem />
            <TeamUsersListItem />
            <TeamUsersListItem />
        </TeamUsersListStyle>
    )
}

export default TeamUsersList;
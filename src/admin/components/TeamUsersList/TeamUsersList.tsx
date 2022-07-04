import React from "react"

import {TeamUsersListStyle} from "./TeamUsersList.style";
import {TeamUsersListItem} from "./TeamUsersListItem";
import {TeamRoleListItem} from "../TeamRolesList/TeamRoleListItem";

const TeamUsersList = (props: any) => {

    const teamsContainer = props.teams && (props.teams).map((team: any, index: number) =>
        <TeamUsersListItem team={team} index={index} updateTeam={props.updateTeam} roles={props.roles}/>
    )
    return (
        <TeamUsersListStyle>
            <div className="table-header">
                <h3 className="header-title">Name</h3>
                <h3 className="header-title">Roles</h3>
            </div>

            {teamsContainer}
        </TeamUsersListStyle>
    )
}

export default TeamUsersList;
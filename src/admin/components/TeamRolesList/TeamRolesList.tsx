import React from "react";
import {TeamRoleListItem} from "./TeamRoleListItem";
import {TeamRolesListStyle} from "./TeamRolesList.style";
import {AddRole} from "../Modals/AddRole";

const TeamRolesList = (props: any) => {
    console.log(props.roles);
    const rolesContainer = (props.roles).map((role: any,index:number) =>
        <TeamRoleListItem role={role} index={index}
                          updateRole={props.updateRole}
                          removeRole={props.removeRole}
        />
    )


    return (
        <TeamRolesListStyle>
            <div className="table-header">
                <h3 className="header-title">Sr#</h3>
                <h3 className="header-title">Roles</h3>
                <h3 className="header-title">Adde On Date</h3>
            </div>

            {rolesContainer}
        </TeamRolesListStyle>
    );
};

export default TeamRolesList;

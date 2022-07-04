import React, {useState} from "react";

import {EditUserModal} from "..";


import {TeamUsersListItemStyle} from "./TeamUsersList.style";

export const TeamUsersListItem = (props: any) => {
    const [showEditUserModal, setShowEditUserModal] = useState(false);
    const [show, setShow] = useState(true);
    const handleSubmit = (role:any,email:any) => {
        //setShow(false)
        setShowEditUserModal(false);
        props.updateTeam(role,email,props.index)
    }



    return (
        <TeamUsersListItemStyle>
            <div className="thumb-with-content">
                <img
                    alt="profile thumbnail"
                    className="profile-thumanail"
                    src="/images/logo.png"
                />
                <div className="content-wrapper">
                    <h4 className="heading">{(props.team).name}</h4>
                    <p className="description">{(props.team).email}</p>
                </div>
            </div>
            <div className="team-role">{(props.team).role}</div>

            <div className="action-buttons-wrapper">
                <img src="/images/icons/edit-profile-icon.svg" alt="edit" onClick={(e) => {
                    setShowEditUserModal(true)
                }}/>
                {showEditUserModal === true && <EditUserModal
                    showEditUserModal={showEditUserModal}
                    handleSubmit={handleSubmit}
                    roles={props.roles}
                    updateTeam={props.updateTeam}
                />}
            </div>

        </TeamUsersListItemStyle>
    );
};

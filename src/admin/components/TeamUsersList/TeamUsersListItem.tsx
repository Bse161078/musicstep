import React ,{useState} from "react";
import { EditButtonIcon } from "../../../assets";
import { EditUserModal } from "..";


import { TeamUsersListItemStyle } from "./TeamUsersList.style";

export const TeamUsersListItem = () => {
  const [showEditUserModal, setShowEditUserModal] = useState(false);
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

      <div className="action-buttons-wrapper" onClick={()=>{setShowEditUserModal(true)}}>
        <EditButtonIcon />
        <EditUserModal
          isModalVisible={showEditUserModal}
          setIsModalVisible={setShowEditUserModal}
        />
      </div>
      
    </TeamUsersListItemStyle>
  );
};

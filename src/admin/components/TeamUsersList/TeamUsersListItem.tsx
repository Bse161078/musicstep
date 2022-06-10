import React ,{useState} from "react";

import { EditUserModal } from "..";


import { TeamUsersListItemStyle } from "./TeamUsersList.style";

export const TeamUsersListItem = () => {
  const [showEditUserModal, setShowEditUserModal] = useState(false);
  const [show,setShow]=useState(true);
  const handleSubmit = ()=>{
    //setShow(false)
    setShowEditUserModal(false);
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
          <h4 className="heading">Dolores Pouros</h4>
          <p className="description">Wava.Simonis45@hotmail.com</p>
        </div>
      </div>
      <div className="team-role">Regional Directives Analyst</div>

     <div className="action-buttons-wrapper">
        <img src="/images/icons/edit-profile-icon.svg" alt="edit" onClick={(e)=>{
       setShowEditUserModal(true)
       }}/>
        {showEditUserModal===true&&<EditUserModal
          showEditUserModal={showEditUserModal}
          handleSubmit={handleSubmit}
          />}
      </div>
      
    </TeamUsersListItemStyle>
  );
};

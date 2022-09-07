import React, { useState } from "react";
import { DeleteIcon, EditButtonIcon } from "../../../assets";
import { EditRole, DeleteRoleModal } from "..";
import { TeamRoleListItemStyle } from "./TeamRolesList.style";
import moment from "moment";

export const TeamRoleListItem = (props:any) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  return (
    <TeamRoleListItemStyle>
      <div className="team-role">{props.index}</div>

      <div className="team-role">{props.role.name}</div>

      <div className="team-role">{moment(props.role.date).format("YYYY-MM-DD")}</div>

      <div className="action-buttons-wrapper">
        <div onClick={() => setShowDeleteModal(true)}>
          <DeleteIcon />
        </div>
        <div onClick={() => setShowEditModal(true)}>
          <EditButtonIcon />
        </div>

        <DeleteRoleModal
          isModalVisible={showDeleteModal}
          setIsModalVisible={setShowDeleteModal}
          handleOkClick={(e:any)=>{
              setShowDeleteModal(false)
              props.removeRole(props.index);
          }}
        />
        <EditRole
          isModalVisible={showEditModal}
          setIsModalVisible={setShowEditModal}
          role={props.role}
          handleOkClick={(e:any)=>{
              setShowEditModal(false)
              props.updateRole(e,props.index);
          }}
        />
      </div>
    </TeamRoleListItemStyle>
  );
};

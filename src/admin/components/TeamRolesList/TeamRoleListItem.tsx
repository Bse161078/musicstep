import React, { useState } from "react";
import { DeleteIcon, EditButtonIcon } from "../../../assets";
import { EditRole, DeleteRoleModal } from "..";
import { TeamRoleListItemStyle } from "./TeamRolesList.style";

export const TeamRoleListItem = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  return (
    <TeamRoleListItemStyle>
      <div className="team-role">1.</div>

      <div className="team-role">Manager</div>

      <div className="team-role">24-Mar-2021</div>

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
        />
        <EditRole
          isModalVisible={showEditModal}
          setIsModalVisible={setShowEditModal}
        />
      </div>
    </TeamRoleListItemStyle>
  );
};

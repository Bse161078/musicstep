import React, { useState } from "react";
import { TabPaneStyle, TabsStyle } from "../../../styles/Fields.style";
import { InviteModal, AddRole } from "../../components";

import {
  Dashboard,
  DashboardHeader,
  SearchInputWithButton,
  TeamRolesList,
  TeamUsersList,
} from "../../components";

import { TeamManagementStyle } from "./TeamManagement.style";

export default function TeamManagement() {
  const [isUserVisible, setUserVisible] = useState(false);
  const [isRoleVisible, setRoleVisible] = useState(false);

  return (
    <Dashboard>
      <TeamManagementStyle>
        <DashboardHeader
          heading="Team Management"
          description="Easily manage your team by inviting team members into default or customized roles."
        />
        <TabsStyle defaultActiveKey="1">
          <TabPaneStyle tab="Users" key="1">
            <SearchInputWithButton
              handleButtonClick={() => {
                setUserVisible(true);
              }}
              buttonTitle="Invite"
            />

            <div className="table-wrapper">
              <TeamUsersList />
            </div>
          </TabPaneStyle>

          <TabPaneStyle tab="Roles" key="2">
            <SearchInputWithButton
              handleButtonClick={() => setRoleVisible(true)}
              buttonTitle="Add Role"
            />

            <div className="table-wrapper">
              <TeamRolesList />
            </div>
          </TabPaneStyle>
        </TabsStyle>
      </TeamManagementStyle>

      <InviteModal
        isModalVisible={isUserVisible}
        setIsModalVisible={setUserVisible}
      />
      <AddRole
        isModalVisible={isRoleVisible}
        setIsModalVisible={setRoleVisible}
      />
    </Dashboard>
  );
}

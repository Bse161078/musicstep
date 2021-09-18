import React from "react";
import { TabPaneStyle, TabsStyle } from "../../../styles/Fields.style";

import {
  Dashboard,
  DashboardHeader,
  SearchInputWithButton,
  TeamRolesList,
  TeamUsersList,
} from "../../components";
import { TeamManagementStyle } from "./TeamManagement.style";

export default function TeamManagement() {
  return (
    <Dashboard>
      <TeamManagementStyle>
        <DashboardHeader
          heading="Team Management"
          description="Easily manage your team by inviting team members into default or customized roles."
        />

        <TabsStyle defaultActiveKey="1">
          <TabPaneStyle tab="Users" key="1">
            <SearchInputWithButton />
            <TeamUsersList />
          </TabPaneStyle>

          <TabPaneStyle tab="Roles" key="2">
            <SearchInputWithButton />

            <TeamRolesList />
          </TabPaneStyle>
        </TabsStyle>
      </TeamManagementStyle>
    </Dashboard>
  );
}

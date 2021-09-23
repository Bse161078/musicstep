import React from "react";
import { DashboardHeader, SideBar } from "../../../admin/components";
import { LeftChevronIcon } from "../../../assets";
import { userSidebarItems } from "../../../mockData/userSidebarItems";

import { DashboardStyle } from "./Dashboard.style";

type DashboardProps = {
  children: any;
};

const Dashboard = (props: DashboardProps) => {
  const { children } = props;

  return (
    <DashboardStyle>
      <div className="left-side">
        <span className="back-button">
          <LeftChevronIcon /> Back To Profile
        </span>

        <SideBar sidebarItems={userSidebarItems} />
      </div>

      <div className="right-side">
        <DashboardHeader heading="Edit Profile" />

        <div>{children}</div>
      </div>
    </DashboardStyle>
  );
};

export default Dashboard;

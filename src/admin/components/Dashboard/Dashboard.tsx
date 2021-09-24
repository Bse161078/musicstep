import React from "react";

import { AdminNavBar, SideBar } from "..";
import { sidebarItems } from "../../../mockData/sideBarItems";
import { DashboardStyle } from "./Dashboard.style";

type DashboardProps = {
  children?: any;
};

const Dashboard = (props: DashboardProps) => {
  const { children } = props;

  return (
    <DashboardStyle>
      <AdminNavBar />
      <div className="dashboard-section-wrapper">
        <SideBar sidebarItems={sidebarItems} />
        <>{children}</>
      </div>
    </DashboardStyle>
  );
};
export default Dashboard;

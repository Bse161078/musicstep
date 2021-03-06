import React from "react";

import { AdminNavBar, SideBar } from "..";
import { sidebarItems } from "../../../mockData/sideBarItems";
import { DashboardStyle } from "./Dashboard.style";

type DashboardProps = {
  children?: any;
};

const Dashboard = (props: DashboardProps) => {
  const { children } = props;
  let submitRef: any = React.createRef();
  return (
    <DashboardStyle>
      <AdminNavBar />
      <div className="dashboard-section-wrapper">
        <SideBar sidebarItems={sidebarItems} />
        <div style={{background:"white",zIndex:2}}>{children}</div>
      </div>
    </DashboardStyle>
  );
};
export default Dashboard;

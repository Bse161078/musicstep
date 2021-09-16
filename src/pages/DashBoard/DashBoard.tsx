import React from "react";

import { SideBar, AdminNavBar } from "../../components";
import { BasicInfo } from "../BasicInfo";

import { DashBoardStyle } from "./DashBoard.style";

const Dashboard = () => {
  return (
    <DashBoardStyle>
      <AdminNavBar />
      <div className="dashboard-section-wrapper">
        <SideBar />
        <BasicInfo />
      </div>
    </DashBoardStyle>
  );
};
export default Dashboard;

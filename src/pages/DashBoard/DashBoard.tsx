import React from "react";
import { DashBoardStyle } from "./DashBoard.style";
import { SideBar, AdminNavBar } from "../../components";
import { BasicInfo } from "../BasicInfo";

const DashBoard = () => {
  return (
    <DashBoardStyle>
      <AdminNavBar />
      <div className="wrapper">
        <SideBar />
        <BasicInfo />
      </div>
    </DashBoardStyle>
  );
};
export default DashBoard;

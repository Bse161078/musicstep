import React from "react";
import { Link } from "react-router-dom";
import { DashboardHeader, SideBar } from "../../../admin/components";
import { LeftChevronIcon } from "../../../assets";
import { NavbarWithSearch } from "../../../components";
import { userSidebarItems } from "../../../mockData/userSidebarItems";

import { DashboardStyle } from "./Dashboard.style";

type DashboardProps = {
  children: any;
  handleSubmit: any;
};

const Dashboard = (props: DashboardProps) => {
  const { children, handleSubmit } = props;

  return (
    <>
      <NavbarWithSearch />
      <DashboardStyle>
        <div className="left-side">
          <Link to="/dashboard/home" className="back-button">
            <LeftChevronIcon /> Back To Profile
          </Link>

          <SideBar sidebarItems={userSidebarItems} />
        </div>

        <div className="right-side">
          <DashboardHeader
            heading="Edit Profile"
            handleSaveClick={handleSubmit}
          />

          <div>{children}</div>
        </div>
      </DashboardStyle>
    </>
  );
};

export default Dashboard;

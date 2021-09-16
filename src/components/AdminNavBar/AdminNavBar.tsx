import React from "react";
import { OutlineButtonStyle } from "../../styles/Common.style";
import { AdminNavBarStyle } from "./AdminNavBar.style";

const AdminNavBar = () => {
  return (
    <AdminNavBarStyle>
        <img className="navbar-logo" src="/images/AdminNavBar/Group 506.png" alt="Group 506@2x" />
        <OutlineButtonStyle width="114px" height="40px" >Logout</OutlineButtonStyle>
    </AdminNavBarStyle>
  );
};
export default AdminNavBar;
 
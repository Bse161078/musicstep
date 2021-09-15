import React from "react";
import { AdminNavBarStyle } from "./AdminNavBar.style";

const AdminNavBar = () => {
  return (
    <AdminNavBarStyle>
        <img className="navbar-logo" src="/images/AdminNavBar/Group 506.png" alt="Group 506@2x" />
         <button className="logout-button">Logout</button>
    </AdminNavBarStyle>
  );
};
export default AdminNavBar;
 
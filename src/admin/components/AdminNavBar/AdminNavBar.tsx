import React, { useState } from "react";
import { OutlineButtonStyle } from "../../../styles/Common.style";
import { LogoutModal } from "..";
import { AdminNavBarStyle } from "./AdminNavBar.style";


const AdminNavBar = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <>
      <AdminNavBarStyle>
        <img
          className="navbar-logo"
          src="/images/AdminNavBar/Group 506.png"
          alt="Group 506@2x"
        />
        <OutlineButtonStyle width="114px" height="40px" onClick={() => setIsModalVisible(true)}>
          Logout
        </OutlineButtonStyle>
      </AdminNavBarStyle>
      <LogoutModal isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} />
    </>
  );
};
export default AdminNavBar;

import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { OutlineButtonStyle } from "../../../styles/Common.style";
import { LogoutModal } from "..";
import { AdminNavBarStyle } from "./AdminNavBar.style";

const AdminNavBar = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const history = useHistory();

  return (
    <>
      <AdminNavBarStyle>
        <Link to="/admin/metrics">
          <img
            className="navbar-logo"
            src="/images/AdminNavBar/Group 506.png"
            alt="Group 506@2x"
          />
        </Link>
        <OutlineButtonStyle
          width="114px"
          height="40px"
          onClick={() => setIsModalVisible(true)}
        >
          Logout
        </OutlineButtonStyle>
      </AdminNavBarStyle>
      <LogoutModal
        handleOk={() => {
          history.push("/partner-login");
          setIsModalVisible(false);
        }}
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
    </>
  );
};
export default AdminNavBar;

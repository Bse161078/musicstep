import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { OutlineButtonStyle } from "../../../styles/Common.style";
import { LogoutModal } from "..";
import { AdminNavBarStyle } from "./AdminNavBar.style";
import { useLoginContext } from "../../../context/authenticationContext";
const AdminNavBar = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const history = useHistory();

  const {dispatch} =useLoginContext()
const logOut=()=>{
  dispatch({
    type: "LOGOUT",
    payload: {
     
    },
  });
  history.push("/partner-login");
}

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
          setIsModalVisible(false);
          logOut();
        }}
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
    </>
  );
};
export default AdminNavBar;

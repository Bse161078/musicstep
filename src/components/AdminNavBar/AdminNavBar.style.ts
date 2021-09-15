import styled from "styled-components";

export const AdminNavBarStyle = styled.nav`
  top: 0px;
  left: 0px;
  width: 1920px;
  height: 80px;
  .navbar-logo {
    margin-top: 30px;
    margin-left: 60px;
    width: 233px;
    height: 24px;
  }
  .logout-button {
    margin-top: 28px;
    float: right;
    width: 114px;
    margin-right: 91px;
    height: 40px;
    background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
    border: 2px solid var(--unnamed-color-100840);
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 2px solid #100840;
    border-radius: 30px;
    opacity: 1;
    font: normal normal bold 14px/18px Montserrat;
    font-family: 'Montserrat', sans-serif;
  }
  .logout-button:hover {
    cursor: pointer;
  }
`;

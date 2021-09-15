import styled from "styled-components";

export const SideBarStyle = styled.aside`
  .sideBar-container {
    margin-top: 60px;
    margin-left: 60px;
    width: 360px;
    height: 523px;
    background: #f7f7f7 0% 0% no-repeat padding-box;
    border-radius: 32px;
    opacity: 1;
    padding-top: 60px;
  }
  .sideBar-container ul li {
    width:330px;
    padding: 15px 30px;
    height: 49px;
    color:black;
    opacity: 50%;
    margin-left:15px;
    font-size: 16px/19px;
    font-weight: bold;
   font-family: 'Montserrat', sans-serif;
  }
  .sideBar-container ul li:hover{ 
    background: white;
    color: #100840;
    font-type: bold;
    border-radius: 25px;
    opacity:1;
  }
`;

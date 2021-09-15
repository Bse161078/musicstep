import styled from "styled-components";

export const SideBarStyle = styled.aside`
  .sideBar-container {
    margin-top: 60px;
    margin-left: 60px;
    height: 523px;
    background: #f7f7f7 0% 0% no-repeat padding-box;
    border-radius: 32px;
    opacity: 1;
    padding: 60px 15px;
  }
  .sideBar-container ul li {
    padding: 15px 30px;
    height: 49px;
    color:black;
    opacity: 50%;
    font-size: 16px/19px;
    font-weight: bold;
   font-family: 'Montserrat', sans-serif;
  }
  .sideBar-container ul li:hover{ 
    background: white;
    color: #100840;
    border-radius: 25px;
    opacity:1;
  }
`;

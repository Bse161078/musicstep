import styled from "styled-components";

export const SideBarStyle = styled.aside`
  
    margin-top: 60px;
    margin-left: 60px;
    background-color: #f7f7f7;
    border-radius: 32px;
    opacity: 1;
    padding: 60px 15px;
  
   ul li {
    padding: 15px 30px;
    color: black;
    opacity: 50%;
    font-size: 16px/19px;
    font-weight: bold;
    font-family: "Montserrat", sans-serif;
  }
 
    ul {
      li {
        &:hover {
          background: #fff;
          color: #100840;
          border-radius: 25px;
          opacity: 1;
        }
      }
    }
`

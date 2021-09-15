import React from "react";
import { SideBarStyle } from "./SideBar.style";
import { sidebaritems } from "../../mockData/sideBarItems";
import { Link } from "react-router-dom";

const SideBar = () => {
    return (
        <SideBarStyle>
              <div className="sideBar-container"> 
                  <ul>
                      {
                          sidebaritems.map((item,index) => {
                              return(
                                 <Link to="#"><li className="list">{item.name}</li></Link>
                              )
                          })
                      }
                  </ul>
              </div>
        </SideBarStyle>
    )
}

export default SideBar;
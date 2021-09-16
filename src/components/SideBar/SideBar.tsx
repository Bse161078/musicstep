import React from "react";
import { Link } from "react-router-dom";

import { sidebarItems } from "../../mockData/sideBarItems";

import { SideBarStyle } from "./SideBar.style";

const SideBar = () => {
    return (
        <SideBarStyle>
              <div className="sidebar-container"> 
                  <ul>
                      {
                          sidebarItems.map((item,index) => {
                              return(
                                 <Link to="#"><li>{item.name}</li></Link>
                              )
                          })
                      }
                  </ul>
              </div>
        </SideBarStyle>
    )
}

export default SideBar;
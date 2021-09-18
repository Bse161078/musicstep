import React from "react";
import { NavLink } from "react-router-dom";

import { sidebarItems } from "../../../mockData/sideBarItems";

import { SideBarStyle } from "./SideBar.style";

const SideBar = () => {
  return (
    <SideBarStyle>
      <div className="sidebar-container">
        <ul className="sidebar-items">
          {sidebarItems.map((item, index) => {
            return (
              <NavLink
                key={`sidebar-item-${index}`}
                to={item.url}
                className="side-bar-item"
              >
                <li>{item.name}</li>
              </NavLink>
            );
          })}
        </ul>
      </div>
    </SideBarStyle>
  );
};

export default SideBar;

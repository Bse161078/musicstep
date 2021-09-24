import React from "react";
import { NavLink } from "react-router-dom";

import { SideBarStyle } from "./SideBar.style";

type SideBarProps = {
  sidebarItems: any;
}

const SideBar = (props: SideBarProps) => {
  const { sidebarItems } = props;
  return (
    <SideBarStyle>
      <div className="sidebar-container">
        <ul className="sidebar-items">
          {sidebarItems.map((item: any, index: number) => {
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

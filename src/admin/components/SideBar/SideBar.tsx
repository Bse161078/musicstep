import React from "react";
import { NavLink, useLocation } from "react-router-dom";

import { SideBarStyle } from "./SideBar.style";

type SideBarProps = {
  sidebarItems: any;
};

const SideBar = (props: SideBarProps) => {
  const { sidebarItems } = props;

  const location = useLocation();
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
                <li className={location.pathname === item.url ? "active" : ""}>
                  {item.name}
                </li>
              </NavLink>
            );
          })}
        </ul>
      </div>
    </SideBarStyle>
  );
};

export default SideBar;

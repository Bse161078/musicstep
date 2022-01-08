import React from "react";
import { Link } from "react-router-dom";

import { SelectWithInput } from "..";
import { NavbarWithSearchStyle } from "./NavbarWithSearch.style";

const NavbarWithSearch = () => {
  return (
    <NavbarWithSearchStyle>
      <Link className="logo-wrapper" to="/">
        <img src="/images/logo.png" alt="logo" />
      </Link>

      <SelectWithInput placeholder="Find a venue or event 24/7" />

      <div className="links-wrapper">
        <span>Upcoming Itinerary</span>
        <span>15 Credits</span>
        <Link to="/dashboard/home">
          <span><img alt="profile" src="/images/icons/profile-icon.svg" /></span>
        </Link>
      </div>
    </NavbarWithSearchStyle>
  );
};

export default NavbarWithSearch;

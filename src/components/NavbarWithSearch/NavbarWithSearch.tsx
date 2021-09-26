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

      <SelectWithInput />

      <div className="links-wrapper">
        <span>Upcoming Itinerary</span>
        <span>15 Credits</span>
        <span>Icon</span>
      </div>
    </NavbarWithSearchStyle>
  );
};

export default NavbarWithSearch;

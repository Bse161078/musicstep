import React, { useEffect, useState } from "react"

import { navItems, NavItemType } from "../../mockData/navItems";
import { FilledButtonStyle } from "../../styles/Common.style";
import { NavbarStyle } from "./Navbar.style";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggle = () => {
    if (window.innerWidth < 768) {
      setShowDropdown(!showDropdown);
    }
  };
  const [isNavSticky, setStickyNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector("nav");
      const navTop = nav?.offsetTop || 30;
      setStickyNav(window.scrollY > navTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, []);

  return (
    <NavbarStyle
      isNavSticky={isNavSticky}
      className={showDropdown ? "show-dropdown" : ""}
    >
      <section className="navbar-wrapper ">
        <article className="branding-wrapper">
          <a href="/">
            <img loading="lazy" alt="loading" className="logo" src="/images/logo.png" />
          </a>

          <button className="menu-toggle-button " onClick={toggle}>
            <span className="toggle-menu-bar" />
            <span className="toggle-menu-bar" />
            <span className="toggle-menu-bar" />
          </button>
        </article>

        <ul className="nav-items">
          {navItems.map((data: NavItemType, index: number) => {
            const { name, url, type } = data;

            return (
                  <li key={`nav-item-${index}`}>
                    <a
                      target={type ? "_blank" : ""}
                      rel="noreferrer"
                      href={url}
                      onClick={toggle}
                    >
                      {name}
                    </a>
                  </li>
            );
          })}

          <li>
              <FilledButtonStyle>
                  Get Musicpass
              </FilledButtonStyle>
          </li>
        </ul>
      </section>
    </NavbarStyle>
  )
}

export default Navbar;
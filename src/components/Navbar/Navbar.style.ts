import { rgba } from "polished"
import styled from "styled-components"

type NavbarStyleProps = {
    isNavSticky?: boolean;
}

export const NavbarStyle = styled.nav<NavbarStyleProps>`
    box-shadow: ${props =>
        props.isNavSticky ? "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px" : "unset"};
  background: ${props =>
        props.isNavSticky ? "rgba(255, 255, 255, 0.9)" : "#fff"};
  position: fixed;
  top: 0;
  width: 100%;
  transition: all 200ms linear;
  z-index: 100;

  &.show-dropdown {
    background: rgba(255, 255, 255, 1);

    .navbar-wrapper {
      .nav-items {
        height: 100vh;
        visibility: visible;
        opacity: 1;
      }
    }

    .toggle-menu-bar {
      &:first-child {
        transform: translate(0px, 1px) rotate(45deg);
      }

      &:nth-child(2) {
        display: none;
      }

      &:last-child {
        transform: translateY(-0.55rem) rotate(-45deg);
      }
    }
  }

  .navbar-wrapper {

    display: flex;
    justify-content: space-between;
    padding: ${props => (props.isNavSticky ? "15px 60px" : "20px 60px")};
    transition: all 0.3s ease-in-out;

    @media (max-width: 767px) {
      padding: 20px 50px;
    }

    @media (max-width: 425px) {
      padding: 15px 25px;
    }
  }

  .logo {
    align-self: center;
  }

  .nav-items {
    list-style: none;
    display: flex;
    transition: all 0.3s ease-in-out;
    margin-bottom: 0;
    justify-content: flex-end;
    padding-left: 0;

    li {
      display: flex;
      margin: 0 17.5px;

      &:last-child {
        margin-right: 0;
      }

      @media (max-width: 1023px) {
        margin: 0 8px;
      }
      @media (max-width: 767px) {
        margin: 0;
      }

      a {
        display: flex;
        align-items: center;
        padding: 0;
        color: #5c6774;
        transition: all 200ms linear;
        border-radius: 8px;
        font-size: 16px;

        @media ( max-width: 900px) and (min-width: 768px ) {
          font-size: 10px;
        }

        &:last-child {
          &:hover {
            background-color: transparent;
          }
        }
        
        &:hover {
          background: ${rgba("#f3c", 0.1)};
          color: #f3c;
          border-radius: 4px;
        }

        @media (max-width: 767px) {
          color: #100837;
          padding: 0;
        }
      }

      @media (max-width: 425px) {
        margin: 0;
      }
    }

    @media (max-width: 767px) {
      display: grid;
      justify-content: flex-start;
      visibility: hidden;
      opacity: 0;
      height: 0;
      position: absolute;
      background: #fff;
      width: 100%;
      right: 0;
      left: 0;
      top: 18px;
      margin-top: 2.2rem;
      grid-template-rows: repeat(6, 80px);
      border-top: 2px solid #ededed;
      padding-left: 50px;
      padding-top: 10px;
    }

    @media (max-width: 425px) {
      padding-left: 25px;
    }

    .buy-now-button {
      border-radius: 6px;
      box-shadow: 0 4px 10px 0 #06a0ff3d;
      background-color: #06a0ff;
      border: none;
      transition: all 0.4s linear;
      text-transform: uppercase;

      &:hover {
        background-color: #06a0ffb8;
        transition: all 0.4s linear;
      }

      @media (max-width: 767px) {
        position: absolute;
        top: 30px;
        right: 58px;
      }

      @media (max-width: 425px) {
        right: 33px;
      }

      > a {
        padding: 10px 20px;
        font-size: 16px;
        font-weight: 500;
        color: #ffffff;

        &:hover {
          background: none;
          color: #fff;
          border-radius: none;
        }

        @media (max-width: 767px) {
          font-size: 15px;
          padding: 8px 13px;
        }
      }
    }
  }

  .branding-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 767px) {
      width: 100%;
    }
  }

  .menu-toggle-button {
    background: none;
    border: 0;
    margin: 0;
    display: inline-flex;
    flex-direction: column;
    outline: none;

    .toggle-menu-bar {
      transition: all 300ms linear;
      width: 30px;
      height: 3px;
      border-radius: 1.6px;
      margin-top: 6.4px;
      background: #f3c;

      &:first-child {
        margin-top: 0;
      }
    }

    @media (min-width: 768px) {
      display: none;
    }
  }

`
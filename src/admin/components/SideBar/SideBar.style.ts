import styled from "styled-components";

export const SideBarStyle = styled.aside`
  background-color: #f7f7f7;
  border-radius: 32px;
  padding: 60px 15px;

  @media ( max-width: 767px ) {
    padding: 20px 15px;
  }

  .sidebar-items {
    li {
      padding: 15px 30px;
      color: #000;
      opacity: 50%;
      font-size: 16px/19px;
      font-weight: bold;
      transition: all 200ms linear;

      &:hover {
        background: #fff;
        color: #100840;
        border-radius: 25px;
        opacity: 1;
      }
    }
  }
`;

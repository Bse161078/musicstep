import styled from "styled-components";

export const AdminNavBarStyle = styled.nav`

  display: flex;
  justify-content: space-between;
  padding: 20px 60px;
  position: sticky;
  top: 0;
  background: #fff;
  z-index: 100;

  @media ( max-width: 767px ) {
    flex-direction: column;
    justify-content: center;
    grid-gap: 30px;
  }

  .navbar-logo {
    width: 233px;
    height: 24px;
  }
`;

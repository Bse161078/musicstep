import styled from "styled-components";

export const NavbarWithSearchStyle = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  grid-column-gap: 60px;
  padding: 16px 60px;
  background: #fff;
  position: sticky;
  top: 0;
  z-index: 100;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  padding: 16px 20px;
  }

  .links-wrapper {
    display: flex;
    grid-gap: 60px;
    margin-left: auto;
    justify-self: flex-end;

    @media (max-width: 1024px) {
      margin-right: auto;
    }

    @media ( max-width: 767px ) {
        flex-direction: column;
        grid-row-gap: 20px;
        text-align: center;
    }
  }
`;
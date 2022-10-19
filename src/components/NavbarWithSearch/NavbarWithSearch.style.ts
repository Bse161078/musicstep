import styled from "styled-components";

export const NavbarWithSearchStyle = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  grid-column-gap: 30px;
  padding: 16px 60px;
  background: #fff;
  position: sticky;
  top: 0;
  z-index: 100;
  .image {
    width: 48px;
    height:48px;
    border-radius: 50%;
  }
  @media (max-width: 1024px) {
    align-items: center;
    padding: 16px 20px;
  }
  
   @media ( max-width: 800px ) {
   display:content;
   justify-content: space-between;
    }

  

  .links-wrapper {
    display: flex;
    grid-gap: 30px;
    
    // margin-left: auto;
    justify-self: flex-end;
    align-items: center;

    @media (max-width: 1024px) {
      margin-right: auto;
    }

    @media ( max-width: 800px ) {
        flex-direction: row;
    }

    span, a {
      font-size: 17px;
      color: #100837;
    }
  }
`;

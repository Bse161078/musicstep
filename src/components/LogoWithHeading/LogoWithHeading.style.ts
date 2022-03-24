import styled from "styled-components";

export const LogoWithHeadingStyle = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 20px;

  logo{
    width: 100px !important;
    height: 100px !important;
    border-radius: 10% !important;
  }
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }

  .heading {
    color: #0c0c0c;
    font-size: 48px;
    margin-bottom: 10px;
    line-height: 1;

    @media (max-width: 767px) {
      font-size: 18px;
    }
  }

  .content {
    display: flex;
    color: #0c0c0c;
    font-size: 20px;
    grid-gap: 5px;
    align-items: center;

    @media (max-width: 767px) {
      font-size: 14px;
    }

    span {
      opacity: 0.5;
    }
  }

 
`;

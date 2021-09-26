import styled from "styled-components";

export const FooterStyle = styled.footer`
  padding: 50px 60px;
  background: #000;
  color: #fff;

  @media (max-width: 1024px) {
    padding: 30px;
  }

  @media (max-width: 767px) {
    padding: 30px 20px;
  }

  .footer-top {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
    grid-row-gap: 40px;
    max-width: 1366px;
    width: 100%;
    margin: auto;
    margin-bottom: 10%;

    @media (max-width: 767px) {
      grid-template-columns: 1fr;
    }
  }

  .footer-bottom {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    grid-row-gap: 40px;
    max-width: 1366px;
    width: 100%;
    margin: auto;

    @media (max-width: 767px) {
      grid-template-columns: 1fr;
    }
  }

  .store-items {
    display: flex;
    grid-gap: 10px;
  }

  .social-links-wrapper {
    display: flex;
    grid-gap: 20px;
  }
`;

export const HeadingWithListStyle = styled.div`
  .heading {
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    margin-bottom: 20px;
  }

  .footer-items {
    display: grid;
    grid-gap: 15px;

    .footer-item {
      a {
        opacity: 0.7;
        font-size: 16px;
        color: #fff;
      }
    }
  }
`;

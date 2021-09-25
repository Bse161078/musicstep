import styled from "styled-components";
import { FilledButtonStyle } from "../../styles/Common.style";

export const HeroSectionStyle = styled.header`
  background-image: url(/images/hero/hero-background.png);
  min-height: 70vh;
  background-size: cover;
  padding: 120px 20px;

  ${FilledButtonStyle} {
    margin: auto;
  }

  .hero-logo {
    max-width: 400px;
    width: 100%;
    margin: auto;
    display: block;
    margin-bottom: 90px;
  }

  .header-content-wrapper {
    /* background: transparent url(/images/hero/blured-background.svg) 0% 0% no-repeat padding-box; */
    backdrop-filter: blur(15px);
    padding: 30px;
    text-align: center;
    color: #fff;

    @media (max-width: 767px) {
      padding: 18px;
    }

    .hero-heading {
      font-size: 48px;
      margin-bottom: 20px;
      color: #fff;

      @media (max-width: 767px) {
        font-size: 28px;
      }
    }

    .hero-description {
      font-size: 20px;
      font-weight: bold;
      max-width: 520px;
      margin: auto;
      margin-bottom: 60px;

      @media (max-width: 767px) {
        font-size: 14px;
      }
    }
  }
`;

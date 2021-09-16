import styled from "styled-components"

export const HeroSectionStyle = styled.header`
    background-image: url(/images/hero/hero-background.png);
    min-height: 70vh;
    background-size: cover;
    padding: 120px 0;
    margin-top: 96px;

    .hero-logo {
        width: 400px;
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

        .hero-heading {
            font-size: 48px;
            margin-bottom: 20px;
            color: #fff;
        }

        .hero-description {
            font-size: 20px;
            font-weight: bold;
            max-width: 520px;
            margin: auto;
            margin-bottom: 60px;
        }
    }
`
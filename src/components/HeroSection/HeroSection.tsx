import React from "react"

import { FilledButtonStyle } from "../../styles/Common.style";
import { HeroSectionStyle } from "./HeroSection.style"

const HeroSection = () => {
    return (
        <HeroSectionStyle>
            <img alt="hero logo" className="hero-logo" src="/images/hero/header-logo.png" />

            <article className="header-content-wrapper">
                <h3 className="hero-heading">The App For All Things Music & Dance.</h3>
                <p className="hero-description">Try MusicPass for free and book everything from clubbing to live music events.</p>

                <FilledButtonStyle width="380px" height="60px" className="hero-button">
                    Join With 7-Day Free Trial
                </FilledButtonStyle>
            </article>
        </HeroSectionStyle>
    )
}

export default HeroSection;
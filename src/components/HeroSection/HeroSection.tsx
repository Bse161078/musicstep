import React from "react";
import {Link, useHistory} from "react-router-dom";

import {FilledButtonStyle} from "../../styles/Common.style";
import {HeroSectionStyle} from "./HeroSection.style";

const HeroSection = () => {
    const history = useHistory();

    return (
        <HeroSectionStyle>
            <img
                alt="hero logo"
                className="hero-logo"
                src="/images/hero/header-logo.png"
            />

            <article className="header-content-wrapper">
                <h3 className="hero-heading">The App For All Things Music & Dance.</h3>
                <p className="hero-description">
                    Try MusicPass for free and book everything from clubbing to live music
                    events.
                </p>
                <Link to="/free-trial">
                    <FilledButtonStyle
                        width="380px"
                        height="60px"
                        className="hero-button"
                        onClick={(e) => {
                            localStorage.clear();
                            history.push("/free-trial")
                        }}>
                        Join With 7-Day Free Trial
                    </FilledButtonStyle>
                </Link>
            </article>
        </HeroSectionStyle>
    );
};

export default HeroSection;

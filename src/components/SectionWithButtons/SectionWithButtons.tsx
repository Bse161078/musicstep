import React from "react";
import { Link } from "react-router-dom";
import {
  FilledButtonStyle,
  OutlineButtonStyle,
} from "../../styles/Common.style";

import { SectionWithButtonsStyle } from "./SectionWithButtons.style";

const SectionWithButtons = () => {
  return (
    <SectionWithButtonsStyle>
      <div className="section-with-button-wrapper">
        <article className="left-side">
          <h3 className="heading">Save up to 50% off with membership rates.</h3>
          <p className="description">
            Enjoy discounted rates without committing to just one music brand or
            venue.
          </p>

          <article>
            <Link to="/free-trial">
              <FilledButtonStyle width="380px" height="60px">
                Sign Up Now
              </FilledButtonStyle>
            </Link>
          </article>

          <article>
            <Link to="/pricing">
              <OutlineButtonStyle buttonType="dark" width="380px" height="60px">
                View Packages
              </OutlineButtonStyle>
            </Link>
          </article>
        </article>

        <article>
          <img
            src="/images/hero/membership-visual.png"
            className="image"
            alt="section visual"
          />
        </article>
      </div>
    </SectionWithButtonsStyle>
  );
};

export default SectionWithButtons;

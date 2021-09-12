import React from "react";

import { StartTrialWrapperStyle } from "./StartTrialWrapper.style";

type StartTrialWrapperProps = {
    children?: any;
}

const StartTrialWrapper = (props: StartTrialWrapperProps) => {
    const { children } = props;

  return (
    <StartTrialWrapperStyle>
      <article className="left-section">
        <h2 className="trial-heading">Start Your Free Trial</h2>
        <p className="trail-description">
          Search, book, and experiment with music events in your neighborhood
          and across the nation. Create your account today to unlock access to
          events at discounted rates with MusicPass.
        </p>

        <img className="left-thumb" src="/images/free-trial/free-trial-illustration.png" alt="left thumb" />
      </article>

      <article className="right-section">
          {children}
      </article>
    </StartTrialWrapperStyle>
  );
};

export default StartTrialWrapper;

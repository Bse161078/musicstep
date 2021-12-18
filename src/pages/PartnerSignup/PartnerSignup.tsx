import React from "react";
import { StartTrialWrapper } from "../../components";
import {
  PartnerSignupForm,
  PartnerOrganizationDetailForm,
} from "../../components";
const PartnerSignup = () => {
  return (
    <StartTrialWrapper
      leftContent={
        <>
          <h2 className="trial-heading">Do You Create Events</h2>
          <p className="trail-description">
            Are you looking to get more attendees and earn more revenue? Sign up
            with MusicPass for free and list your live events.
          </p>
          <img className="image" src='/images/Group 492.png'/>
        </>
      }
    >
      <PartnerSignupForm/>
    </StartTrialWrapper>
  );
};
export default PartnerSignup;

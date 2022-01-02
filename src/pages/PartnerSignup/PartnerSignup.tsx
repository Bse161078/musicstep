import React from "react";
import { useHistory } from "react-router-dom";
import { PartnerOrganizationDetailForm, StartTrialWrapper } from "../../components";
import { PartnerSignupForm } from "../../components";
const PartnerSignup = () => {
  const history = useHistory();
  console.log(history.location.pathname);
  
  return (
    <StartTrialWrapper
      leftContent={
        <>
          <h2 className="trial-heading">Do You Create Events</h2>
          <p className="trail-description">
            Are you looking to get more attendees and earn more revenue? Sign up
            with MusicPass for free and list your live events.
          </p>
          <img
            className="image"
            src="/images/Group 492.png"
            alt="left visual"
          />
        </>
      }
    >
      {
        history.location.pathname === "/partner-signup" ? (
          <PartnerSignupForm />
        ) : (
          <PartnerOrganizationDetailForm />
        )
      }
    </StartTrialWrapper>
  );
};
export default PartnerSignup;

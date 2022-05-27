import React from "react";
import { ContentHeader, DashboardHeader } from "..";
import { TickFilledIcon } from "../../../assets";
import { FilledButtonStyle } from "../../../styles/Common.style";

import { EmailPreferenceStyle } from "./EmailPreference.style";

type EmailPreferenceProps = {
  setCurrentPage: any;
};

const EmailPreference = (props: EmailPreferenceProps) => {
  const { setCurrentPage } = props;
  const handleBackClick =()=>{
    props.setCurrentPage("account-settings")
  }
  return (
    <EmailPreferenceStyle>
      <DashboardHeader heading="Email Preference" handleBackClick={handleBackClick} />

      <ContentHeader
        heading="Organizing Events"
        description="Helpful updates and tips for organizing events on MusicPass."
      />

      <div>
        <div className="preferences-wrapper">
          <TickFilledIcon />

          <span className="preference">Event Sales Recap.</span>
        </div>

        <div className="preferences-wrapper">
          <TickFilledIcon />

          <span className="preference">
            Unsubscribe from all MusicPass newsletters and updates for event
            organizers.
          </span>
        </div>
      </div>

      <FilledButtonStyle
        onClick={() => setCurrentPage("account-settings")}
        buttonType="dark"
        width="290px"
        height="60px"
      >
        Save Preferences
      </FilledButtonStyle>
    </EmailPreferenceStyle>
  );
};

export default EmailPreference;

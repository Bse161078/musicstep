import React from "react";

import { ContentHeader, DashboardHeader, OrganizationDetailsForm, OrganizationProfilesList } from "..";
import { PreviewOrganizationInfoStyle } from "./PreviewOrganizationInfo.style";

type PreviewOrganizationInfoProps = {
  setCurrentPage: (data: string) => void;
};

const PreviewOrganizationInfo = (props: PreviewOrganizationInfoProps) => {
  const { setCurrentPage } = props;

  return (
    <PreviewOrganizationInfoStyle>
      <DashboardHeader
        heading="Basic Info"
        handleCancelClick={() => {}}
        handleSaveClick={() => {}}
      />

      <ContentHeader
        heading="Organization"
        description="Details that apply across your events and venues."
      />

      <OrganizationDetailsForm />

      <ContentHeader
        heading="Organizer Profiles"
        description="Each profile describes a unique organizer and shows all of their events on one page. Having a complete profile can encourage attendees to follow you."
        handleButtonClick={() => setCurrentPage("add-organization")}
      />

      <OrganizationProfilesList profilesList={[{}, {}]} />
    </PreviewOrganizationInfoStyle>
  );
};

export default PreviewOrganizationInfo;

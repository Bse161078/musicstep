import React from "react";
import { OrganizationListItem } from "./OrganizationListItem";
import { OrganizationProfilesListStyle } from "./OrganizationProfilesList.style";

type OrganizationProfilesListProps = {
  profilesList?: any;
};

const OrganizationProfilesList = (props: OrganizationProfilesListProps) => {
  const { profilesList } = props;

  return (
    <OrganizationProfilesListStyle>
      {profilesList?.length === 0 ? (
        <p className="no-data-message">No organizer profile added yet.</p>
      ) : (
        profilesList.map((data: any, index: number) => {
          return <OrganizationListItem />;
        })
      )}
    </OrganizationProfilesListStyle>
  );
};

export default OrganizationProfilesList;

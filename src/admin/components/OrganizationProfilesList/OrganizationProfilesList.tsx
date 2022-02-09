import React from "react";
import { OrganizationListItem } from "./OrganizationListItem";
import { OrganizationProfilesListStyle } from "./OrganizationProfilesList.style";

type OrganizationProfilesListProps = {
  profilesList?: any;
  setOrganizerProfile?: (data: any) => void;
  setCurrentPage?: (data: any) => void;
};

const OrganizationProfilesList = (props: OrganizationProfilesListProps) => {
  const { profilesList, setOrganizerProfile, setCurrentPage } = props;

  return (
    <OrganizationProfilesListStyle>
      {profilesList?.length === 0 ? (
        <p className="no-data-message">No organizer profile added yet.</p>
      ) : (
        profilesList &&
        profilesList.map((data: any, index: number) => {
          return (
            <OrganizationListItem
              setOrganizerProfile={setOrganizerProfile}
              organizer={data}
              setCurrentPage={setCurrentPage}
            />
          );
        })
      )}
    </OrganizationProfilesListStyle>
  );
};

export default OrganizationProfilesList;

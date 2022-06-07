import React, { useMemo, useState } from "react";
import { Loading } from "../../../components";

import {
  Dashboard,
  OrganizationProfileForm,
  PreviewOrganizationInfo,
} from "../../components";

import { BasicInfoStyle } from "./BasicInfo.style";
const BasicInfo = () => {
  const [currentPage, setCurrentPage] = useState("preview");
  const [organizerProfile, setOrganizerProfile] = useState(null);
  const CurrentPage = useMemo(() => {
    switch (currentPage) {
      case "preview":
        return (
          <div>
        
          <PreviewOrganizationInfo
            setOrganizerProfile={setOrganizerProfile}
            setCurrentPage={setCurrentPage}
          />
          </div>
        );

      case "add-organization":
        return (
          <OrganizationProfileForm
            setCurrentPage={setCurrentPage}
          />
        );

      case "edit-organization":
        return <OrganizationProfileForm   organizerProfile={organizerProfile} setCurrentPage={setCurrentPage} />;

      default:
        return <PreviewOrganizationInfo setCurrentPage={setCurrentPage} />;
    }
  }, [currentPage]);
  return (
    <Dashboard>
      <BasicInfoStyle>{CurrentPage}</BasicInfoStyle>
    </Dashboard>
  );
};

export default BasicInfo;

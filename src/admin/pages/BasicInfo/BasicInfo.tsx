import React, { useMemo, useState } from "react";

import {
  Dashboard,
  OrganizationProfileForm,
  PreviewOrganizationInfo,
} from "../../components";

import { BasicInfoStyle } from "./BasicInfo.style";
const BasicInfo = () => {
  const [currentPage, setCurrentPage] = useState("preview");

  const CurrentPage = useMemo(() => {
    switch (currentPage) {
      case "preview":
        return <PreviewOrganizationInfo setCurrentPage={setCurrentPage} />;

      case "add-organization":
        return <OrganizationProfileForm setCurrentPage={setCurrentPage} />;

      case "edit-organization":
        return <PreviewOrganizationInfo setCurrentPage={setCurrentPage} />;

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
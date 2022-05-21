import React, { createRef, useEffect, useState } from "react";
import axios from "axios";
import {
  ContentHeader,
  DashboardHeader,
  OrganizationDetailsForm,
  OrganizationProfilesList,
} from "..";
import { PreviewOrganizationInfoStyle } from "./PreviewOrganizationInfo.style";
import { useLoginContext } from "../../../context/authenticationContext";
import Loading from "../../../components/Loading/Loading"
type PreviewOrganizationInfoProps = {
  setCurrentPage: (data: string) => void;
  setOrganizerProfile?: (data: any) => void;
};

const PreviewOrganizationInfo = (props: PreviewOrganizationInfoProps) => {
  const { setCurrentPage, setOrganizerProfile } = props;
  const { state } = useLoginContext();
  const [profilesList, setProfilesList] = useState(null);
  const [isLoading,setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    axios
      .get("/v1/organizer/All", {
        headers: { Authorization: `Bearer ${state.authToken}` },
      })
      .then((res) => {
        console.log(res.data);
        setProfilesList(res.data);
        setLoading(false)
      })
      .catch((error) => {
        console.log(error.response);
        setLoading(false)
      });
  }, []);

  const submitBasicInfoRef: any = createRef();
  return (
    <PreviewOrganizationInfoStyle>
      {isLoading&&<Loading/>}
      <DashboardHeader
        heading="Basic Info"
        handleCancelClick={() => {}}
        handleSaveClick={() => {
          submitBasicInfoRef.current.click();
          setLoading(false)
        }}
        setLoading={setLoading}
      />

      <ContentHeader
        heading="Organization"
        description="Details that apply across your events and venues."
      />

      <OrganizationDetailsForm ref={submitBasicInfoRef} />

      <ContentHeader
        heading="Organizer Profiles"
        description="Each profile describes a unique organizer and shows all of their events on one page. Having a complete profile can encourage attendees to follow you."
        handleButtonClick={() => setCurrentPage("add-organization")}
      />

      <OrganizationProfilesList
        setOrganizerProfile={setOrganizerProfile}
        profilesList={profilesList}
        setCurrentPage={setCurrentPage}
      />
    </PreviewOrganizationInfoStyle>
  );
};

export default PreviewOrganizationInfo;

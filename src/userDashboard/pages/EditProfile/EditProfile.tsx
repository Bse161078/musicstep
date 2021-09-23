import React from "react";

import { Dashboard, EditProfileForm, SectionHeading } from "../../components";

import { EditProfileStyle } from "./EditProfile.style";

const EditProfile = () => {
  return (
    <Dashboard>
      <EditProfileStyle>
        <SectionHeading heading="Basic Info">
          <EditProfileForm />
        </SectionHeading>
      </EditProfileStyle>
    </Dashboard>
  );
};

export default EditProfile;

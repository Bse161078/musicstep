import React, { useRef } from "react";

import { Dashboard, EditProfileForm, SectionHeading } from "../../components";

import { EditProfileStyle } from "./EditProfile.style";

const EditProfile = () => {
  let submitButton: any = React.createRef();
  const handleSubmit = (e: any) => {
    submitButton.current.click();
  };

  return (
    <Dashboard handleSubmit={handleSubmit}>
      <EditProfileStyle>
        <SectionHeading heading="Basic Info">
          <EditProfileForm ref={submitButton} />
        </SectionHeading>
      </EditProfileStyle>
    </Dashboard>
  );
};

export default EditProfile;

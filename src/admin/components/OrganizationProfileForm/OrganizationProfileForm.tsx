import { Form, Formik } from "formik";
import React from "react";
import { ContentHeader, DashboardHeader, OrganizationDetailsForm } from "..";
import { InputBox } from "../../../components";

import { OrganizationProfileFormStyle } from "./OrganizationProfileForm.style";

type OrganizationProfileFormProps = {
  setCurrentPage: (data: string) => void;
};
const OrganizationProfileForm = (props: OrganizationProfileFormProps) => {
  const { setCurrentPage } = props;

  const handleProfileForm = () => {};

  return (
    <OrganizationProfileFormStyle>
      <DashboardHeader
        handleBackClick={() => setCurrentPage("preview")}
        heading="Add Organizer Profile"
        handleCancelClick={() => setCurrentPage("preview")}
      />

      <ContentHeader
        heading="About Organizer"
        description="Let attendees know who is hosting events. Your profile picture is the first image that attendees will see at the top of your profile, please use a high quality square image."
      />

      <OrganizationDetailsForm />

      <Formik
        initialValues={{
          organizerBio: "",
          organizerDescription: "",
          facebookLink: "",
          twitterLink: "",
          instagramLink: "",
          youtubeLink: "",
        }}
        onSubmit={handleProfileForm}
      >
        {() => (
          <Form>
            <div className="bio-wrapper">
              <InputBox label="Organizer Bio" name="organizerBio" />
              <InputBox
                label="Organizer Description (for event pages)"
                name="organizerDescription"
              />
            </div>

            <div className="social-media-wrapper">
              <ContentHeader
                heading="Social Media & Marketing Link"
                description="Let attendees know how to connect with you"
              />

              <div className="inputs-wrapper">
                <InputBox name="facebookLink" label="Facebook" />
                <InputBox name="twitterLink" label="Twitter" />
                <InputBox name="instagramLink" label="Instagram" />
                <InputBox name="youtubeLink" label="Youtube" />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </OrganizationProfileFormStyle>
  );
};

export default OrganizationProfileForm;

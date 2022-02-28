import { useEffect, useState } from "@storybook/addons";
import React from "react";
import { EditButtonIcon } from "../../../assets";
import { OrganizationListItemStyle } from "./OrganizationProfilesList.style";

type OrganizationListItemProps = {
  organizer: any;
  setOrganizerProfile?: (data: any) => void;
  setCurrentPage?: (data: any) => void;
};

export const OrganizationListItem = (props: OrganizationListItemProps) => {
  const { organizer, setOrganizerProfile, setCurrentPage } = props;
  // const [imgUrl, setImgurl] = useState(
  //   process.env.REACT_APP_BASE_URL + "/" + organizer.logoUrl
  // );
  // useEffect(() => {
  //   // setImgurl();
  // }, []);

  return (
    <OrganizationListItemStyle>
      <div className="thumb-with-content">
        <img
          alt="profile thumbnail"
          className="profile-thumanail"
          src={
            organizer.logoUrl
              ? process.env.REACT_APP_BASE_URL + "/" + organizer.logoUrl
              : "/images/logo.png"
          }
        />

        <div className="content-wrapper">
          <h4 className="heading">{organizer && organizer.organizerName}</h4>
          <p className="description">{organizer && organizer.organizerBio}</p>
        </div>
      </div>

      <div className="action-buttons-wrapper">
        <img src="/images/icons/preview-icon.svg" alt="preview" />
        <span
          onClick={() => {
            setOrganizerProfile && setOrganizerProfile(organizer);
            setCurrentPage && setCurrentPage("add-organization");
          }}
        >
          {" "}
          <EditButtonIcon />
        </span>
      </div>
    </OrganizationListItemStyle>
  );
};

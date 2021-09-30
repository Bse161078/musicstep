import React from "react";
import { EditButtonIcon } from "../../../assets";
import { OrganizationListItemStyle } from "./OrganizationProfilesList.style";

export const OrganizationListItem = () => {
  return (
    <OrganizationListItemStyle>
      <div className="thumb-with-content">
        <img alt="profile thumbnail" className="profile-thumanail" src="/images/logo.png" />

        <div className="content-wrapper">
          <h4 className="heading">Sed Ut Accusamus</h4>
          <p className="description">
            Et minima est sunt blanditiis. Aperiam aliquam dolores quidem
            incidunt. Consequatur quis ex. Odit deserunt ut. Impedit aliquid
            dolore impedit numquam eius dolore illum qui. Magnam qui culpa
            repellat est qui est fugit est.
          </p>
        </div>
      </div>

      <div className="action-buttons-wrapper">
        <img src="/images/icons/preview-icon.svg" alt="preview" />
        <EditButtonIcon />
      </div>
    </OrganizationListItemStyle>
  );
};

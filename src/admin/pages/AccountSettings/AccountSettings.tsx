import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  AccountIcon,
  ContactIcon,
  EmailIcon,
  OrganizationIcon,
  PasswordLockIcon,
} from "../../../assets";
import {
  ChangePassword,
  CloseAccount,
  ContactInfoForm,
  Dashboard,
  DashboardHeader,
  EmailPreference,
  IconWithHeading,
} from "../../components";

import { AccountSettingsStyle } from "./AccountSettings.style";

type AccountSettingInitialProps = {
  setCurrentPage: any;
};

const AccountSettingInitial = (props: AccountSettingInitialProps) => {
  const { setCurrentPage } = props;
  return (
    <div>
      <DashboardHeader heading="Account Settings" />
      <AccountSettingsStyle>
        <IconWithHeading
          onClick={() => setCurrentPage("contact-info")}
          icon={<ContactIcon />}
          heading="Contact Info"
        />

        <IconWithHeading
          onClick={() => setCurrentPage("change-password")}
          icon={<PasswordLockIcon />}
          heading="Change Password"
        />
        <IconWithHeading
          onClick={() => setCurrentPage("email-preferences")}
          icon={<EmailIcon />}
          heading="Email Preference"
        />

        <Link to="/admin/basic-info">
          <IconWithHeading
            icon={<OrganizationIcon />}
            heading="Organization Settings"
          />
        </Link>

        <IconWithHeading
          onClick={() => setCurrentPage("close-account")}
          icon={<AccountIcon />}
          heading="Close Account"
        />
      </AccountSettingsStyle>
    </div>
  );
};

export default function AccountSettings() {
  const [currentPage, setCurrentPage] = useState("account-settings");

  const CurrentPage = useMemo(() => {
    switch (currentPage) {
      case "contact-info":
        return <ContactInfoForm />;
      case "account-settings":
        return <AccountSettingInitial setCurrentPage={setCurrentPage} />;

      case "change-password":
        return <ChangePassword />;

      case "email-preferences":
        return <EmailPreference setCurrentPage={setCurrentPage} />;

      case "close-account":
        return <CloseAccount />;
      default:
        return <AccountSettingInitial setCurrentPage={setCurrentPage} />;
    }
  }, [currentPage]);
  return <Dashboard>{CurrentPage}</Dashboard>;
}

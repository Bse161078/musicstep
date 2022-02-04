import React from "react";
import {
  ChangePasswordForm,
  Dashboard,
  SectionHeading,
} from "../../components";

import { ChangePasswordStyle } from "./ChangePassword.style";

export default function ChangePassword() {
  return (
    <Dashboard handleSubmit={null}>
      <ChangePasswordStyle>
        <SectionHeading heading="Change Password">
          <ChangePasswordForm />
        </SectionHeading>
      </ChangePasswordStyle>
    </Dashboard>
  );
}

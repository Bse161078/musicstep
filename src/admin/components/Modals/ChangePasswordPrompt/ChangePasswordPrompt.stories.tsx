
import React from "react";
import { storiesOf } from "@storybook/react";
import ChangePassword from "./ChangePasswordPrompt";

storiesOf("ChangePassword Modal", module).add("Modal", () => {
  return (
  <ChangePassword />
  )
});

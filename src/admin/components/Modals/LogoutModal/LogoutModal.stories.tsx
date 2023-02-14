import React from "react";
import { storiesOf } from "@storybook/react";
import LogoutModal from "./LogoutModal";

storiesOf("Logout Modal", module).add("Modal", () => {
  return <LogoutModal />;
});

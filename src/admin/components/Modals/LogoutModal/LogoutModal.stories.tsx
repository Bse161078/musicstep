import React from "react";
import { storiesOf } from "@storybook/react";
import "antd/dist/antd.css";
import LogoutModal from "./LogoutModal";

storiesOf("Logout Modal", module).add("Modal", () => {
  return <LogoutModal />;
});

import React from "react";
import { storiesOf } from "@storybook/react";
import "antd/dist/antd.css";
import CongratulationsModal from './CongratulationsModals'

storiesOf("Congratulations Modal", module).add("Modal", () => {
  return <CongratulationsModal />;
});

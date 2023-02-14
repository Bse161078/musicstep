import React from "react";
import { storiesOf } from "@storybook/react";
import CongratulationsModal from './CongratulationsModals'

storiesOf("Congratulations Modal", module).add("Modal", () => {
  return <CongratulationsModal message="test" />;
});

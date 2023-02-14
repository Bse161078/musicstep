import React from "react";
import { storiesOf } from "@storybook/react";
import PayoutDetails from "./PayoutDetails";

storiesOf("PaymentMethodDetails Modal", module).add("Modal", () => {
  return <PayoutDetails />;
});

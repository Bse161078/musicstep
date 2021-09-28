import React from "react";
import { storiesOf } from "@storybook/react";
import "antd/dist/antd.css";
import PayoutDetails from "./PayoutDetails";

storiesOf("PaymentMethodDetails Modal", module).add("Modal", () => {
  return <PayoutDetails />;
});

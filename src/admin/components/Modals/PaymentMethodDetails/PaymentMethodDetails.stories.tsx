import React from "react";
import { storiesOf } from "@storybook/react";
import "antd/dist/antd.css";
import PaymentMethodDetails from "./PaymentMethodDetails";

storiesOf("PaymentMethodDetails Modal", module).add("Modal", () => {
  return <PaymentMethodDetails setCurrentPage={() => {}} />;
});

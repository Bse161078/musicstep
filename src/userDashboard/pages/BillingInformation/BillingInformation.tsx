import React from "react";
import {
  BillingInformationForm,
  Dashboard,
  SectionHeading,
} from "../../components";

import { BillingInformationStyle } from "./BillingInformation.style";

export default function BillingInformation() {
  return (
    <Dashboard handleSubmit={null}>
      <BillingInformationStyle>
        <SectionHeading heading="Billing Information">
          <BillingInformationForm />
        </SectionHeading>
      </BillingInformationStyle>
    </Dashboard>
  );
}

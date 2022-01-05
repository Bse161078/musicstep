import React, { useState } from "react";

import { TaxPayerAfterSubmission } from "../../components/TaxpayerAfterSubmission";
import {
  Dashboard,
  DashboardHeader,
  TaxpayerInfoSteps,
} from "../../components";
import { TaxPayerInfoStyle } from "./TaxPayerInfo.style";

export default function TaxPayerInfo() {
  const [currentPage, setCurrentPage] = useState("taxpayer-home");

  const handleEditTaxPayerClick = () => {
    setCurrentPage("taxpayer-steps");
  };

  return (
    <Dashboard>
      <TaxPayerInfoStyle>
        <DashboardHeader
          heading="Taxpayer Information"
          description="Choose a tax status that represents you the best. If you need help, check the IRS Definition or visit our Tax Help Center."
        />

        {currentPage === "taxpayer-home" ? (
          <TaxPayerAfterSubmission handleEditClick={handleEditTaxPayerClick} />
        ) : (
          <TaxpayerInfoSteps setCurrentPage={setCurrentPage} />
        )}
      </TaxPayerInfoStyle>
    </Dashboard>
  );
}

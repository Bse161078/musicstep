import React from "react";
import { TaxPayerAfterSubmissionStyle } from "./TaxPayerAfterSubmission.style";
import { FilledTickIcon, EditButtonIcon } from "../../../assets";

const TaxPayerAfterSubmission = () => {
  return (
    <TaxPayerAfterSubmissionStyle>
      <FilledTickIcon />
      <div>
        <h3 className="checkbox-heading">U.S. Person</h3>
        <p className="checkbox-description">You are entitled as U.S Taxpayer Person.</p>
      </div>
      <EditButtonIcon />
    </TaxPayerAfterSubmissionStyle>
  );
};

export default TaxPayerAfterSubmission;

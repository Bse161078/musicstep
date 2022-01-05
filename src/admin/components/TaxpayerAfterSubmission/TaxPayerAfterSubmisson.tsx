import React from "react";
import { TaxPayerAfterSubmissionStyle } from "./TaxPayerAfterSubmission.style";
import { FilledTickIcon, EditButtonIcon } from "../../../assets";

type TaxPayerAfterSubmissionProps = {
  handleEditClick: () => void;
};

const TaxPayerAfterSubmission = (props: TaxPayerAfterSubmissionProps) => {
  const { handleEditClick } = props;

  return (
    <TaxPayerAfterSubmissionStyle>
      <FilledTickIcon />
      <div>
        <h3 className="checkbox-heading">U.S. Person</h3>
        <p className="checkbox-description">
          You are entitled as U.S Taxpayer Person.
        </p>
      </div>

      <span onClick={handleEditClick}>
        <EditButtonIcon />
      </span>
    </TaxPayerAfterSubmissionStyle>
  );
};

export default TaxPayerAfterSubmission;

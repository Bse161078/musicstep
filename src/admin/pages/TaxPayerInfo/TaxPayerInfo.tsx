import React, { useState, useMemo } from "react";
import {
  FilledButtonStyle,
  OutlineButtonStyle,
} from "../../../styles/Common.style";

import { StepsStyle, StepStyle } from "../../../styles/Fields.style";
import {
  Dashboard,
  DashboardHeader,
  IRSForm2,
  IRSSubstituteForm,
  TaxpayerForm,
  TaxPayerStep1,
} from "../../components";
import { TaxPayerInfoStyle } from "./TaxPayerInfo.style";

export default function TaxPayerInfo() {
  const [currentStep, setCurrentStep] = useState(1);
  const customDot = (dot: any) => <div>{dot}</div>;

  const CurrentTab = useMemo(() => {
    switch (currentStep) {
      case 1:
        return <TaxPayerStep1 />;

      case 2:
        return <TaxpayerForm />;

      case 3:
        return <IRSSubstituteForm />;

      case 4:
        return <IRSForm2 />;
      default:
        return <TaxPayerStep1 />;
    }
  }, [currentStep]);

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };
  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };
  return (
    <Dashboard>
      <TaxPayerInfoStyle>
        <DashboardHeader
          heading="Taxpayer Information"
          description="Choose a tax status that represents you the best. If you need help, check the IRS Definition or visit our Tax Help Center."
        />

        <div className="steps-wrapper">
          <StepsStyle current={currentStep} progressDot={customDot}>
            <StepStyle title={`Step ${currentStep} of 4`} />
            <StepStyle />
            <StepStyle />
            <StepStyle />
            <StepStyle />
          </StepsStyle>

          <div className="buttons-wrapper">
            {currentStep > 1 && (
              <OutlineButtonStyle
                onClick={handlePreviousStep}
                width="150px"
                height="53px"
              >
                Back
              </OutlineButtonStyle>
            )}

            {currentStep < 4 && (
              <FilledButtonStyle
                onClick={handleNextStep}
                buttonType="dark"
                width="150px"
                height="53px"
              >
                Next
              </FilledButtonStyle>
            )}

            {currentStep === 4 && (
              <FilledButtonStyle
                onClick={() => {}}
                buttonType="dark"
                width="150px"
                height="53px"
              >
                Submit
              </FilledButtonStyle>
            )}
          </div>
        </div>

        {CurrentTab}
      </TaxPayerInfoStyle>
    </Dashboard>
  );
}

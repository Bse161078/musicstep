import React, { useMemo, useState } from "react";
import { IRSForm2, IRSSubstituteForm, TaxpayerForm, TaxPayerStep1 } from "..";
import { MessageModal } from "../../../components";
import {
  FilledButtonStyle,
  OutlineButtonStyle,
} from "../../../styles/Common.style";
import { StepsStyle, StepStyle } from "../../../styles/Fields.style";

import { TaxpayerInfoStepsStyle } from "./TaxpayerInfoSteps.style";

const TaxpayerInfoSteps = ({ setCurrentPage }: any) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const customDot = (dot: any) => <div>{dot}</div>;

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };
  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };
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

  return (
    <TaxpayerInfoStepsStyle>
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
              onClick={() => setIsModalVisible(true)}
              buttonType="dark"
              width="150px"
              height="53px"
            >
              Submit
            </FilledButtonStyle>
          )}
          <MessageModal
            isModalVisible={isModalVisible}
            setIsModalVisible={setIsModalVisible}
            handleOkClick={() => setCurrentPage("taxpayer-home")}
            message="Thank you. Your Taxpayer Information has been saved and submitted."
          />
        </div>
      </div>

      {CurrentTab}
    </TaxpayerInfoStepsStyle>
  );
};

export default TaxpayerInfoSteps;

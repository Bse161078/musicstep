import React, { useState } from "react";
import { Dashboard, SubmitEventStep1, SubmitEventStep2 } from "../../components";
import { EventsManagementStepsStyle } from "./EventsManagementSteps.style";

const EventsManagementSteps = () => {
  const [currentStep, setCurrentStep] = useState(1);
  return (
    <Dashboard>
      <EventsManagementStepsStyle>
        {currentStep === 1 && <SubmitEventStep1  setCurrentStep={setCurrentStep} />}
        {currentStep === 2 && <SubmitEventStep2 setCurrentStep={setCurrentStep} />}
      </EventsManagementStepsStyle>
    </Dashboard>
  );
};
export default EventsManagementSteps;

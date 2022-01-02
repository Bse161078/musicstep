import React, { useState } from "react";
import { Dashboard, SubmitEventStep1, SubmitEventStep2 } from "../../components";
import { EventsManagementStyle } from "./EventsManagment.style";

const EventsManagement = () => {
  const [currentStep, setCurrentStep] = useState(1);
  return (
    <Dashboard>
      <EventsManagementStyle>
        {currentStep === 1 && <SubmitEventStep1  setCurrentStep={setCurrentStep} />}
        {currentStep === 2 && <SubmitEventStep2 setCurrentStep={setCurrentStep} />}
      </EventsManagementStyle>
    </Dashboard>
  );
};
export default EventsManagement;

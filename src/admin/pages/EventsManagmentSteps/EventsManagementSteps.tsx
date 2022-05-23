import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Dashboard,
  SubmitEventStep1,
  SubmitEventStep2,
} from "../../components";
import { EventsManagementStepsStyle } from "./EventsManagementSteps.style";

const EventsManagementSteps = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [eventData, setEventData] = useState({});


  return (
    <Dashboard>
      <EventsManagementStepsStyle>
        {currentStep === 1 && (
          <SubmitEventStep1
            setEventData={setEventData}
            setCurrentStep={setCurrentStep}
            eventData={eventData}
          />
        )}
        {currentStep === 2 && (
          <SubmitEventStep2
            setEventData={setEventData}
            setCurrentStep={setCurrentStep}
            eventData={eventData}
          />
        )}
      </EventsManagementStepsStyle>
    </Dashboard>
  );
};
export default EventsManagementSteps;

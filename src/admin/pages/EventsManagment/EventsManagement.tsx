import React from "react";
import { EventsManagementStyle } from "./EventsManagment.style";
import { SubmitEventStep1 } from "..";
import { SubmitEventStep2 } from "../../components";
import { Dashboard, DashboardHeader } from "../../components";
import { SubmitEventStep1Style } from "../../components/SubmitEventStep1/SubmitEventStep1.style";

const EventsManagement = () => {
  return (
    <Dashboard>
      <EventsManagementStyle>
        <SubmitEventStep1 />
      </EventsManagementStyle>
    </Dashboard>
  );
};
export default EventsManagement;

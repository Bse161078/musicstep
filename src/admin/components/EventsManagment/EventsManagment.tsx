import React from "react";
import { EventsManagmentStyle } from "./EventsManagment.style";
import { Dashboard, DashboardHeader, SearchInputWithButton } from "..";
import { OutlineButtonStyle } from "../../../styles/Common.style";
import EventsManagmentList from "./EventsManagmentList";

const EventsManagment = () => {
  return (
    <Dashboard>
      <EventsManagmentStyle>
        <DashboardHeader
          heading="Events Management"
          description="Easily manage your events and promoters."
        />
        <div className="searchbar-wrapper">
          <SearchInputWithButton/>
          <OutlineButtonStyle name="submitEvent" height="54px">
            Submit An Event
          </OutlineButtonStyle>
        </div>
        <EventsManagmentList />
      </EventsManagmentStyle>
    </Dashboard>
  );
};

export default EventsManagment;

import React from "react";
import { EventsManagmentStyle } from "./EventsManagment.style";
import { Dashboard, DashboardHeader, SearchInputWithButton } from "..";
import { OutlineButtonStyle } from "../../../styles/Common.style";
import EventsManagmentList from "./EventsManagmentList";
import { useHistory } from "react-router-dom";

const EventsManagment = () => {
  const history = useHistory();
  
  return (
    <Dashboard>
      <EventsManagmentStyle>
        <DashboardHeader
          heading="Events Management"
          description="Easily manage your events and promoters."
        />
        <div className="searchbar-wrapper">
          <SearchInputWithButton/>
          <OutlineButtonStyle name="submitEvent" height="54px" onClick={() => history.push("/admin/events-managment-home")}>
            Submit An Event
          </OutlineButtonStyle>
        </div>
        <EventsManagmentList />
      </EventsManagmentStyle>
    </Dashboard>
  );
};

export default EventsManagment;

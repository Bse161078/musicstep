import React, { useEffect, useState } from "react";
import axios from "axios";
import { EventsManagmentStyle } from "./EventsManagment.style";
import { Dashboard, DashboardHeader, SearchInputWithButton } from "..";
import { OutlineButtonStyle } from "../../../styles/Common.style";
import EventsManagmentList from "./EventsManagmentList";
import { useHistory } from "react-router-dom";
import { useLoginContext } from "../../../context/authenticationContext";

const EventsManagment = () => {
  const history = useHistory();
  const { state } = useLoginContext();
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("/v1/event/All", {
        headers: { Authorization: `Bearer ${state.authToken}` },
      })
      .then((res) => {
        // setEvents(res.data);
        setEvents(res.data);
        // setProfilesList(res.data);
      })
      .catch((error) => {});
  }, []);

  const filteredEvents = events.filter(
    (event: any) =>
      event.title.includes(search) ||
      event.organizerInfo[0].organizerName.includes(search)
  );

  return (
    <Dashboard>
      <EventsManagmentStyle>
        <DashboardHeader
          heading="Events Management "
          description="Easily manage your events and promoters."
        />
        <div className="searchbar-wrapper">
          <SearchInputWithButton setSearch={setSearch} />
          <OutlineButtonStyle
            name="submitEvent"
            height="54px"
            onClick={() => history.push("/admin/events-managment-home")}
          >
            Submit A Event
          </OutlineButtonStyle>
        </div>
        <EventsManagmentList events={filteredEvents} />
      </EventsManagmentStyle>
    </Dashboard>
  );
};

export default EventsManagment;

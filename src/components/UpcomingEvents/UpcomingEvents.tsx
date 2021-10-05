import React, { useState } from "react";
import { EventDetailsModal } from "../../admin/components";

import { TabRow } from "./TabRow";
import { UpcomingEventsStyle } from "./UpcomingEvents.style";

const UpcomingEvents = () => {
  const [isEventModalVisible, setEventModalVisible] = useState(false);

  return (
    <UpcomingEventsStyle>
      <div className="list-header">
        <span>Today, 1 September</span>

        <span>Availability</span>
      </div>

      <TabRow
        buttonType="filled"
        buttonText="11 Credits"
        buttonClick={() => setEventModalVisible(true)}
      />

      <TabRow />

      <TabRow />

      <TabRow />

      <TabRow />

      <TabRow />

      <TabRow />

      <EventDetailsModal
        isModalVisible={isEventModalVisible}
        setIsModalVisible={setEventModalVisible}
      />
    </UpcomingEventsStyle>
  );
};

export default UpcomingEvents;

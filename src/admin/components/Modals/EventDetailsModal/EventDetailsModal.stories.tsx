import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import EventDetailsModal from "./EventDetailsModal";

storiesOf("EventDetails Modal", module).add("Modal", () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  return (
    <>
      <button onClick={() => setIsModalVisible(true)}>click me</button>
      <EventDetailsModal  isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} />
    </>
  );
});

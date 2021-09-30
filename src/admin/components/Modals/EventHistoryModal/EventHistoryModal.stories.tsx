import React, { useState } from "react";
import { storiesOf } from "@storybook/react";

import "antd/dist/antd.css";
import { EventHistoryModal } from ".";

storiesOf("EventHistory Modal", module).add("Modal", () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <>
      <button onClick={() => setIsModalVisible(true)}>click me</button>
      <EventHistoryModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
    </>
  );
});

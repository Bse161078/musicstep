import React, { useState } from "react";
import { storiesOf } from "@storybook/react";

import { CreditHistoryModal } from ".";

storiesOf("CreditHistory Modal", module).add("Modal", () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  return (
    <>
      <button onClick={() => setIsModalVisible(true)}>click me</button>
      <CreditHistoryModal  isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} />
    </>
  );
});

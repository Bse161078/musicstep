import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import "antd/dist/antd.css";
import SubscriptionDetailsModal from "./SubscriptionDetailsModal";

storiesOf("SubscriptionDetails Modal", module).add("Modal", () => {
    const  [ isModalVisible, setIsModalVisible ] = useState(false);

  return (
    <>
      <button onClick={()=> setIsModalVisible(true)}>Click</button>
      <SubscriptionDetailsModal isModalVisible={isModalVisible} setIsModalVisible={isModalVisible} />
    </>
  );
});

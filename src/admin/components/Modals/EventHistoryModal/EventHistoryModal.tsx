import React from "react";
import { ModalWrapper } from "../ModalWrapper";
import { EventHistoryModelStyle } from "./EventHistoryModal.style";
import { TabsStyle,TabPaneStyle } from "../../../../styles/Fields.style";
const EventHistoryModal = () => {
  return (
    <ModalWrapper heading="Events History" isFooter={false}>
      <EventHistoryModelStyle>
        <TabsStyle defaultActiveKey="1">
          <TabPaneStyle tab="All" key="1"></TabPaneStyle>
          <TabPaneStyle tab="Reserved" key="2"></TabPaneStyle>
          <TabPaneStyle tab="Canceled" key="3"></TabPaneStyle>
        </TabsStyle>
      </EventHistoryModelStyle>
    </ModalWrapper>
  );
};
export default EventHistoryModal;

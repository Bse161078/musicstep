import React from "react";
import { ModalWrapper } from "../ModalWrapper";
import { EventHistoryModelStyle } from "./EventHistoryModal.style";
import { TabsStyle, TabPaneStyle } from "../../../../styles/Fields.style";
import { TableRow } from "../..";

type EventHistoryModalProps = {
  isModalVisible?: boolean;
  setIsModalVisible?: any;
};

const EventHistoryModal = (props: EventHistoryModalProps) => {
  const { isModalVisible, setIsModalVisible } = props;

  return (
    <ModalWrapper
      isModalVisible={isModalVisible}
      setIsModalVisible={setIsModalVisible}
      heading="Events History"
      isFooter={false}
    >
      <EventHistoryModelStyle>
        <TabsStyle defaultActiveKey="1">
          <TabPaneStyle tab="All" key="1">
            <TableRow rowLabel3="Canceled" />
            <TableRow rowLabel3="Reserved" />
            <TableRow rowLabel3="Canceled" />
            <TableRow rowLabel3="Reserved" />
            <TableRow rowLabel3="Canceled" />
            <TableRow rowLabel3="Reserved" />
          </TabPaneStyle>

          <TabPaneStyle tab="Reserved" key="2">
            <TableRow rowLabel3="Reserved" />
            <TableRow rowLabel3="Reserved" />
            <TableRow rowLabel3="Reserved" />
            <TableRow rowLabel3="Reserved" />
            <TableRow rowLabel3="Reserved" />
            <TableRow rowLabel3="Reserved" />
          </TabPaneStyle>

          <TabPaneStyle tab="Canceled" key="3">
            <TableRow rowLabel3="Canceled" />
            <TableRow rowLabel3="Canceled" />
            <TableRow rowLabel3="Canceled" />
            <TableRow rowLabel3="Canceled" />
            <TableRow rowLabel3="Canceled" />
            <TableRow rowLabel3="Canceled" />
          </TabPaneStyle>
        </TabsStyle>
      </EventHistoryModelStyle>
    </ModalWrapper>
  );
};
export default EventHistoryModal;

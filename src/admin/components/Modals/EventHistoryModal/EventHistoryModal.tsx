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
            <div className="table-wrapper">
              <TableRow rowLabel3="Canceled" />
              <TableRow rowLabel3="Reserved" />
              <TableRow rowLabel3="Canceled" />
              <TableRow rowLabel3="Reserved" />
              <TableRow rowLabel3="Canceled" />
              <TableRow rowLabel3="Reserved" />
            </div>
          </TabPaneStyle>

          <TabPaneStyle tab="Reserved" key="2">
            <div className="table-wrapper">
              <TableRow rowLabel3="Reserved" />
              <TableRow rowLabel3="Reserved" />
              <TableRow rowLabel3="Reserved" />
              <TableRow rowLabel3="Reserved" />
              <TableRow rowLabel3="Reserved" />
              <TableRow rowLabel3="Reserved" />
            </div>
          </TabPaneStyle>

          <TabPaneStyle tab="Canceled" key="3">
            <div className="table-wrapper">
              <TableRow rowLabel3="Canceled" />
              <TableRow rowLabel3="Canceled" />
              <TableRow rowLabel3="Canceled" />
              <TableRow rowLabel3="Canceled" />
              <TableRow rowLabel3="Canceled" />
              <TableRow rowLabel3="Canceled" />
            </div>
          </TabPaneStyle>
        </TabsStyle>
      </EventHistoryModelStyle>
    </ModalWrapper>
  );
};
export default EventHistoryModal;

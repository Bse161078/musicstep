import React from "react";
import { ModalWrapper } from "../ModalWrapper";
import { EventHistoryModelStyle } from "./EventHistoryModal.style";
import { TabsStyle, TabPaneStyle } from "../../../../styles/Fields.style";
import { TableRow } from "../..";

type EventHistoryModalProps = {
  isModalVisible?: boolean;
  setIsModalVisible?: any;
  reservations?: any;
};

const EventHistoryModal = (props: EventHistoryModalProps) => {
  const { isModalVisible, setIsModalVisible, reservations } = props;
console.log("reservations",reservations)
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
              {reservations.map((reservation: any) => {
                return reservation.eventReservation === "reserved" ? (
                  <TableRow reservation={reservation} rowLabel3="Reserved" />
                ) : (
                  <TableRow reservation={reservation} rowLabel3="Canceled" />
                );
              })}
            </div>
          </TabPaneStyle>

          <TabPaneStyle tab="Reserved" key="2">
            <div className="table-wrapper">
              {reservations.map((reservation: any) => {
                return reservation.eventReservation === "reserved" ? (
                  <TableRow reservation={reservation} rowLabel3="Reserved" />
                ) : null;
              })}
            </div>
          </TabPaneStyle>

          <TabPaneStyle tab="Canceled" key="3">
            <div className="table-wrapper">
              {reservations.map((reservation: any) => {
                return reservation.eventReservation === "cancelled" ? (
                  <TableRow reservation={reservation} rowLabel3="Canceled" />
                ) : null;
              })}
            </div>
          </TabPaneStyle>
        </TabsStyle>
      </EventHistoryModelStyle>
    </ModalWrapper>
  );
};
export default EventHistoryModal;

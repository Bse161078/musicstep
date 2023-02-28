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

    const sortEvents=(reservations:any)=>{
        return reservations.sort((a:any,b:any)=>{
            const c:any = new Date(a.eventInfo[0].date);
            const d:any = new Date(b.eventInfo[0].date);

            return d-c;
        });

    }

    const filteredReservation=sortEvents(reservations.filter((reservation:any)=>reservation && reservation.eventInfo && (reservation.eventInfo).length>0));

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
              {filteredReservation.map((reservation: any) => {
                return reservation.eventReservation === "reserved" ? (
                  <TableRow reservation={reservation} rowLabel3="Reserved" />
                ) : (
                  <TableRow reservation={reservation} rowLabel3="Cancelled" />
                );
              })}
            </div>
          </TabPaneStyle>

          <TabPaneStyle tab="Reserved" key="2">
            <div className="table-wrapper">
              {filteredReservation.map((reservation: any) => {
                return reservation.eventReservation === "reserved" ? (
                  <TableRow reservation={reservation} rowLabel3="Reserved" />
                ) : null;
              })}
            </div>
          </TabPaneStyle>

          <TabPaneStyle tab="Cancelled" key="3">
            <div className="table-wrapper">
              {filteredReservation.map((reservation: any) => {
                return reservation.eventReservation === "cancelled" ? (
                  <TableRow reservation={reservation} rowLabel3="Cancelled" />
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

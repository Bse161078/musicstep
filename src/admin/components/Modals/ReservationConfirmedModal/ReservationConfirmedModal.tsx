import React from "react";
import { ModalWrapper } from "../ModalWrapper";
import { ReservationConfirmedModalStyle } from "./ReservationConfirmedModal.style";

type ReservationConfirmedModalProps = {
  isModalVisible?: boolean;
  setIsModalVisible?: any;
};

const ReservationConfirmedModal = (props: ReservationConfirmedModalProps) => {
  const { isModalVisible, setIsModalVisible } = props;
  return (
    <ModalWrapper
      heading="Reservation Confirmed"
      width="617px"
      isModalVisible={isModalVisible}
      setIsModalVisible={setIsModalVisible}
    >
      <ReservationConfirmedModalStyle></ReservationConfirmedModalStyle>
    </ModalWrapper>
  );
};

export default ReservationConfirmedModal;

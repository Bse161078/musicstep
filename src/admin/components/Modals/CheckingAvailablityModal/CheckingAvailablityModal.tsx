import { message } from "antd";
import React, { useState, useEffect } from "react";
import { ReservationConfirmedModal } from "..";
import { ModalWrapper } from "../ModalWrapper";
import { CheckingAvailablityModalStyle } from "./CheckingAvailablityModal.style";

type CheckingAvailablityModalProps = {
  isModalVisible?: boolean;
  setIsModalVisible?: any;
  message?: string;
  isReservationConfirmedModalVisible?: any;
  setIsReservationConfirmedModalVisible?: any;
  event?: any;
  ticketIndex?: number;
};

const CheckingAvailablityModal = (props: CheckingAvailablityModalProps) => {
  const {
    isModalVisible,
    setIsModalVisible,
    message,
    isReservationConfirmedModalVisible,
    setIsReservationConfirmedModalVisible,
    event,
    ticketIndex,
  } = props;

  return (
    <>
      <ModalWrapper
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        isFooter={false}
        width="540px"
      >
        <CheckingAvailablityModalStyle>
          <h1>{message}</h1>
          <img alt="loading" src="/images/loading.svg" />
        </CheckingAvailablityModalStyle>
      </ModalWrapper>
      <ReservationConfirmedModal
        isModalVisible={isReservationConfirmedModalVisible}
        setIsModalVisible={setIsReservationConfirmedModalVisible}
        event={event}
        ticketIndex={ticketIndex}
      />
    </>
  );
};
export default CheckingAvailablityModal;

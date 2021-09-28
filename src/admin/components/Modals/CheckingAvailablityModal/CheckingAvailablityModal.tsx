import React, { useState, useEffect } from "react";
import { ReservationConfirmedModal } from "..";
import { ModalWrapper } from "../ModalWrapper";
import { CheckingAvailablityModalStyle } from "./CheckingAvailablityModal.style";

type CheckingAvailablityModalProps = {
  isModalVisible?: boolean;
  setIsModalVisible?: any;
};

const CheckingAvailablityModal = (props: CheckingAvailablityModalProps) => {
  const { isModalVisible, setIsModalVisible } = props;
  const [
    isReservationConfirmedModalVisible,
    setIsReservationConfirmedModalVisible,
  ] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsReservationConfirmedModalVisible(true);
      setIsModalVisible(false);
    }, 2000);
  }, [setIsReservationConfirmedModalVisible, setIsModalVisible]);
  return (
    <>
      <ModalWrapper
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        isFooter={false}
        width="540px"
      >
        <CheckingAvailablityModalStyle>
          <h1>Checking Availability, Please Wait...</h1>
          <img alt="loading" src="/images/loading.svg" />
        </CheckingAvailablityModalStyle>
      </ModalWrapper>
      <ReservationConfirmedModal
        isModalVisible={isReservationConfirmedModalVisible}
        setIsModalVisible={setIsReservationConfirmedModalVisible}
      />
    </>
  );
};
export default CheckingAvailablityModal;

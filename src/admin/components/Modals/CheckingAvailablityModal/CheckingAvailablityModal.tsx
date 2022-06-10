import { message } from "antd";
import React, { useState, useEffect } from "react";
import { ReservationConfirmedModal } from "..";
import { ModalWrapper } from "../ModalWrapper";
import { CheckingAvailablityModalStyle } from "./CheckingAvailablityModal.style";
import { FilledButtonStyle } from "../../../../styles/Common.style";
import { useHistory } from "react-router-dom";
type CheckingAvailablityModalProps = {
  isModalVisible?: boolean;
  setIsModalVisible?: any;
  message?: string;
  isReservationConfirmedModalVisible?: any;
  setIsReservationConfirmedModalVisible?: any;
  event?: any;
  ticketIndex?: number;
  buyCredit?:any;
  
};

const CheckingAvailablityModal = (props: CheckingAvailablityModalProps) => {
  const history = useHistory()
  const buyCredit=(e:any)=>{
    history.push({
      pathname: `/create-credit-payment`,
      state:{buyCredit:props.buyCredit}
    });
  
}

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
        <CheckingAvailablityModalStyle style={{display:'flex',justifyContent:'center',alignItems:'center'}}> 
          <h1>{message}</h1>
          {message==="Not Enough credits"&&<FilledButtonStyle onClick={buyCredit}>
            Buy Credits
            </FilledButtonStyle>}
            {message==="Not Enough credits"?'':<img alt="loading" src="/images/loading.svg" />}
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

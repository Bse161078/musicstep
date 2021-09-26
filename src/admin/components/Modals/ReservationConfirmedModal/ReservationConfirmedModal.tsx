import { Formik, Form } from "formik";
import React from "react";
import { InputBox } from "../../../../components/InputBox";

import {
  FilledButtonStyle,
  OutlineButtonStyle,
} from "../../../../styles/Common.style";
import { ModalWrapper } from "../ModalWrapper";
import { ReservationConfirmedModalStyle } from "./ReservationConfirmedModal.style";

type ReservationConfirmedModalProps = {
  isModalVisible?: boolean;
  setIsModalVisible?: any;
};

const ReservationConfirmedModal = (props: ReservationConfirmedModalProps) => {
  const { isModalVisible, setIsModalVisible } = props;
  const handleSubmit = () => {};
  return (
    <ModalWrapper
      heading="Reservation Confirmed"
      width="617px"
      isModalVisible={isModalVisible}
      setIsModalVisible={setIsModalVisible}
      button={<FilledButtonStyle height="54px"  width="557px">Okay</FilledButtonStyle>}
    >
      <ReservationConfirmedModalStyle>
        <img className="qrcode-img" src="/images/qrcodee.png" />

        <div className="time-wrapper">
          <h1>You're booked for 8-March-2021 at 7:00 PM</h1>
          <img src="/images/ad.svg" />
        </div>
        <FilledButtonStyle width="557px" height="54px" >
          Download & Save QR Code
        </FilledButtonStyle>
        <div className="border-div">
          <p>
            Want free events? Refer a friend and get $30 worth credits when your
            friend becomes a paid subscriber. Limited time offer. Terms &
            Conditions apply.
          </p>
          <div className="form-wrapper">
            <Formik
              initialValues={{
                inviteLink: "https://www.musicpass.com/invite/234ewrf",
              }}
              onSubmit={handleSubmit}
            >
              {() => (
                <Form>
                  <InputBox
                    label="Invite Link"
                    width="450px"
                    name="inviteLink"
                  />
                </Form>
              )}
            </Formik>
            <div>
              <OutlineButtonStyle width="97px" height="54px">
                Copy
              </OutlineButtonStyle>
            </div>
          </div>
          <div className="or">
            <p>---------------- or ----------------</p>
            </div>
          <div>
            <OutlineButtonStyle height="54px" width="557px">Email Invite</OutlineButtonStyle>
          </div>
        </div>
      </ReservationConfirmedModalStyle>
    </ModalWrapper>
  );
};

export default ReservationConfirmedModal;

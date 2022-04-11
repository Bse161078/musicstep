import React, { useRef } from "react";
import { Formik, Form } from "formik";

import { InputBox } from "../../../../components/InputBox";
import {
  FilledButtonStyle,
  OutlineButtonStyle,
} from "../../../../styles/Common.style";
import { ModalWrapper } from "../ModalWrapper";
import { ReservationConfirmedModalStyle } from "./ReservationConfirmedModal.style";
import moment from "moment";
import { PDFExport } from "@progress/kendo-react-pdf";
import QRCode from "qrcode.react";

type ReservationConfirmedModalProps = {
  isModalVisible?: boolean;
  setIsModalVisible?: any;
  event?: any;
  ticketIndex?: number;
};

const ReservationConfirmedModal = (props: ReservationConfirmedModalProps) => {
  const { isModalVisible, setIsModalVisible, event, ticketIndex } = props;

  const index = ticketIndex === undefined ? -1 : ticketIndex;
  const pdfExportComponent: any = React.createRef();
  const printComponent = useRef(null);

  const handleExportWithComponent = (event: any) => {
    const file = pdfExportComponent.current.save();
  };
  const handleSubmit = () => {};
  return (
    <ModalWrapper
      heading="Reservation Confirmed"
      width="617px"
      isModalVisible={isModalVisible}
      setIsModalVisible={setIsModalVisible}
      button={[]}
    >
      <ReservationConfirmedModalStyle>
        <PDFExport
          fileName="Ticket"
          author={"Music pass"}
          ref={pdfExportComponent}
          paperSize="A6"
        >
          {/* <img
            alt="code"
            style={{ width: "208px", height: "208px", margin: "auto" }}
            className="qrcode-img"
            src="/images/qrcodee.png"
          /> */}
          <QRCode
            // id={"qr-gen"}
            value={event.tickets[index]._id}
            size={290}
            level={"H"}
            includeMargin={true}
          />

          <div className="time-wrapper">
            <h1 style={{ display: "flex", flexDirection: "row", gap: "30px" }}>
              You're booked for
              {" " +
                moment(event && event.date).date() +
                "-" +
                moment(event && event.date).format("MMMM") +
                "-" +
                new Date(event && event.date).getFullYear() +
                " at " +
                moment(event && event.startingTime, ["h:mm"]).format("h:mm a")}
            </h1>
            {/* <img alt="ad" src="/images/ad.svg" /> */}
          </div>
        </PDFExport>
        <FilledButtonStyle
          width="100%"
          height="54px"
          onClick={handleExportWithComponent}
        >
          Download & Save QR Code
        </FilledButtonStyle>
        <div className="border-div">
          <p className="description">
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
                    width="100%"
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
            <OutlineButtonStyle
              onClick={handleSubmit}
              height="54px"
              width="100%"
            >
              Email Invite
            </OutlineButtonStyle>
          </div>
        </div>
      </ReservationConfirmedModalStyle>
    </ModalWrapper>
  );
};

export default ReservationConfirmedModal;

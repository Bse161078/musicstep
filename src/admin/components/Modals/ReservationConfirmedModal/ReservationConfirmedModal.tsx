import React, {useEffect, useRef, useState} from "react";
import {Formik, Form} from "formik";
import {CopyToClipboard} from "react-copy-to-clipboard";
import {InputBox} from "../../../../components/InputBox";
import {
    FilledButtonStyle,
    OutlineButtonStyle,
} from "../../../../styles/Common.style";
import {ModalWrapper} from "../ModalWrapper";
import {ReservationConfirmedModalStyle} from "./ReservationConfirmedModal.style";
import moment from "moment";
import {PDFExport} from "@progress/kendo-react-pdf";
import QRCode from "qrcode.react";
import axios from "axios";
import {useLoginContext} from "../../../../context/authenticationContext";
import {MessageModal} from "../../../../components";
import AddToCalendar from "react-add-to-calendar";
import * as yup from "yup";
import {useHistory} from "react-router-dom";

type ReservationConfirmedModalProps = {
    isModalVisible?: boolean;
    setIsModalVisible?: any;
    event?: any;
    ticketIndex?: number;
    reservation?:any
};

const ReservationConfirmedModal = (props: ReservationConfirmedModalProps) => {
    const {isModalVisible, setIsModalVisible, ticketIndex,reservation} = props;
    const [baseUrl, setBaseUrl] = useState("");
    const {state} = useLoginContext();
    const [messageHeading, setMessageHeading] = useState("");
    const [message, setMessage] = useState("");

    const [sendEmailModel, setSendEmailModel] = useState(false);
    const [successModel, setsuccessModel] = useState(false);
    const index = ticketIndex === undefined ? -1 : ticketIndex;
    const pdfExportComponent: any = React.createRef();
    const printComponent = useRef(null);

    const history = useHistory();


//   let event = {
//     title: props.event.title,
//     description: props.event.eventDescription,
//     location: props.event.venueInfo[0].location.address,
//     startTime: new Date(),
//     endTime: new Date()
// }
    let event = {
        title: 'Sample Event',
        description: 'This is the sample event provided as an example only',
        location: 'Portland, OR',
        startTime: '2016-09-16T20:15:00-04:00',
        endTime: '2016-09-16T21:45:00-04:00'
    };
    const handleExportWithComponent = (event: any) => {
        const file = pdfExportComponent.current.save();
    };
    const handleSubmit = () => {
    };

    const emailHandleSubmit = (values: any, {resetForm}: any) => {
        const res = axios
            .post(
                "/v1/users/eventInvitationEmail",
                {
                    partnerName:state.data.firstName+" "+(state.data.lastName.charAt(0)).toUpperCase(),
                    to: values.email,
                    musicPasslink: baseUrl,
                },
                {
                    headers: {Authorization: `Bearer ${state.authToken}`},
                }
            )
            .then((response) => {
                setsuccessModel(true);
                setMessageHeading("Success");
                setMessage("Invitation email sent");
                resetForm();
            })
            .catch((error) => {
                setMessageHeading("Error");
                setMessage("Email send failed");
                resetForm();
            });
    };
    useEffect(() => {
        setBaseUrl(window.location.href.replace(window.location.pathname, ""));

    }, []);
    let icon = {'calendar-plus-o': 'left'};



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
                        value={reservation?.id}
                        size={290}
                        level={"H"}
                        includeMargin={true}
                    />

                    <div className="time-wrapper">
                        <h1 style={{display: "flex", flexDirection: "row", gap: "30px"}}>
                            You're booked for
                            {" " +
                            moment(props.event && props.event.date).date() +
                            "-" +
                            moment(props.event && props.event.date).format("MMMM") +
                            "-" +
                            new Date(props.event && props.event.date).getFullYear() +
                            " at " +
                            moment(props.event && props.event.startingTime, ["h:mm"]).format("h:mm a")}
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
                <FilledButtonStyle
                    width="100%"
                    height="54px"
                    onClick={() => {
                        history.push("/")
                    }}
                >
                    Close
                </FilledButtonStyle>
                <div className="border-div">
                    <div className="form-wrapper">
                        <Formik
                            initialValues={{
                                inviteLink: baseUrl,
                            }}
                            onSubmit={handleSubmit}
                        >
                            {() => (
                                <Form>
                                    <InputBox
                                        label="Invite Link"
                                        width="100%"
                                        name="inviteLink"
                                        value={"https://musicpassonline.com/"}
                                    />
                                </Form>
                            )}
                        </Formik>
                        <div>
                            <CopyToClipboard text={baseUrl}>
                                <OutlineButtonStyle width="97px" height="54px">
                                    Copy
                                </OutlineButtonStyle>
                            </CopyToClipboard>
                        </div>
                    </div>
                    <div className="or">
                        <p>---------------- or ----------------</p>
                    </div>
                    <div>
                        <OutlineButtonStyle
                            onClick={() => setSendEmailModel(true)}
                            height="54px"
                            width="100%"
                        >
                            Email Invite
                        </OutlineButtonStyle>
                    </div>
                </div>
            </ReservationConfirmedModalStyle>
            <ModalWrapper
                heading="MusicPass Invitation"
                width="617px"
                isModalVisible={sendEmailModel}
                setIsModalVisible={setSendEmailModel}
                button={[]}
            >
                <Formik
                    initialValues={{
                        email: "",
                    }}
                    validationSchema={yup.object().shape({
                        email: yup
                            .string()
                            .email("Invalid email address")
                            .required("Email is required"),
                    })}
                    onSubmit={emailHandleSubmit}
                >
                    {() => (
                        <Form>
                            <InputBox label="Email" width="100%" name="email"/>
                            <div>
                                <FilledButtonStyle
                                    // onClick={handleSubmit}
                                    height="54px"
                                    width="50%"
                                    style={{margin: "20px auto"}}
                                    type="submit"
                                >
                                    Send Invitation
                                </FilledButtonStyle>
                            </div>
                        </Form>
                    )}
                </Formik>
            </ModalWrapper>
            <MessageModal
                handleOkClick={() => setsuccessModel(false)}
                isModalVisible={successModel}
                setIsModalVisible={setsuccessModel}
                message={message}
                heading={messageHeading}
            />
        </ModalWrapper>
    );
};

export default ReservationConfirmedModal;

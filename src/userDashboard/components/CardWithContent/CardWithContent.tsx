import React, {useState} from "react";
import {
    FilledButtonStyle,
    OutlineButtonStyle,
} from "../../../styles/Common.style";
import {GuestListModal} from "../../Modals";
import {CardWithContentStyle} from "./CardWithContent.style";
import moment from "moment";
import {useHistory} from "react-router";
import {Grid} from "@mui/material";
import {EventDetailsModal} from "../../../components/EventDetailsModal";
import QrCodeModal from "../../../admin/components/Modals/QrCode/QrCodeModal";
import {PeopleWithMutualFreindsModal} from "../Modals/PeopleWithMutualFreinds";

type CardWithContentProps = {
    heading: string;
    time: string;
    footerText: string;
    buttonType?: "filled" | "outlined";
    buttonText?: string;
    onButtonClick?: any;
    handleButtonClick?: any;
    date?: any;
    originalTime?: any;
    categoryTags?: any;
    reservation?: any;
};

const CardWithContent = (props: CardWithContentProps) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isQrCodeModalVisible, setIsQrCodeModalVisible] = useState(false);
    const [isPeopelWithMutualFreindsModalVisible, setPeopelWithMutualFreindsModalVisible,] = useState(false);
    const [isGuestVisible, setIsGuestVisible,] = useState(false);

    const {
        heading,
        time,
        footerText,
        buttonType,
        buttonText,
        handleButtonClick,
        date,
        originalTime,
        categoryTags,
        reservation
    } = props;

    const history = useHistory();

    const formattedFutureDate = moment(moment(date).format("YYYY-MM-DD") + ' ' + time);

    const differenceInHours = formattedFutureDate.diff(new Date(), "hours");


    let imageUrl = null;

    if (reservation && reservation.venueInfo && (reservation.venueInfo).length > 0) {
        imageUrl = reservation.venueInfo[0].logoUrl;
    }


    let hours = 0;
    if (reservation && reservation.eventInfo && (reservation.eventInfo).length > 0) {

            let convertedStartTime=moment(reservation.eventInfo[0].startingTime,"hh:mm:ss");
            let convertedEndTime=moment(reservation.eventInfo[0].endingTime,"hh:mm:ss");


            if(parseInt(reservation.eventInfo[0].startingTime.split(":")[0])>parseInt(reservation.eventInfo[0].endingTime.split(":")[0])){
                convertedEndTime=convertedEndTime.add(1, 'days');
            }
        hours=moment(convertedEndTime).diff(convertedStartTime, "hours");



    }
    const handleViewVenue = (e:any) => {
        // history.push({
        //     pathname: `/explore-venue/venue-details`,
        //
        //     state: {venueDetail: reservation.venueInfo[0]},
        // });
        setIsModalVisible(true);
    };

    const handleShowQrCode=(e:any)=>{
        setIsQrCodeModalVisible(true);
    }


    const event=reservation && reservation.eventInfo && (reservation.eventInfo).length>0 &&  reservation.eventInfo[0];
    const venue=reservation && reservation.venueInfo && (reservation.venueInfo).length>0 && reservation.venueInfo[0];


    return (
        <>
            <CardWithContentStyle>
                <Grid container justifyContent={"center"}>
                <img
                    src={imageUrl ? `${process.env.REACT_APP_BASE_URL}/images/${imageUrl}` : "/images/sample.png"}
                    style={{width: 92, height: 92, borderRadius: 10}}
                    className="card-thumbnail"
                    alt="thumbnail"
                />
                </Grid>

                <Grid container>
                    <Grid item xs={8}>
                        <div style={{cursor:"pointer"}} onClick={handleViewVenue}>
                            <h4 className="heading">{heading}</h4>
                            <p className="description">{categoryTags.join(",")}</p>
                            <h4 className="heading">{time}</h4>
                            <p className="description">{hours>0 && `${hours} ${hours === 1 ? "Hour" : "Hours"}`}</p>
                            <h4 className="heading">{moment(event.state).format("ddd")},{" "}
                                {moment(event.state).format("MMM") + " " + moment(event.state).date()}</h4>
                        </div>
                    </Grid>
                    <Grid item xs={4} container alignItems={"center"}>
                        <Grid item xs={12} container justifyContent={"flex-end"}>
                            <FilledButtonStyle
                                onClick={handleButtonClick}
                                buttonType="dark"
                                width="100px"
                                height="35px"
                            >
                                {buttonText ? buttonText : "Cancel"}
                            </FilledButtonStyle>
                        </Grid>
                        <Grid item xs={12} container justifyContent={"flex-end"}>
                            <FilledButtonStyle
                                buttonType="dark"
                                width="100px"
                                height="35px"
                                onClick={handleShowQrCode}
                            >QR Code</FilledButtonStyle>
                        </Grid>
                    </Grid>
                    <Grid container justifyContent={"flex-end"} style={{marginTop:"10px"}}>
                        <Grid item onClick={(e)=>setIsGuestVisible(true)}>
                            <p><a style={{color:'#100840'}}>(Click to View Guest List)</a></p>
                        </Grid>
                    </Grid>
                </Grid>
            </CardWithContentStyle>
            {
                isGuestVisible &&
                <GuestListModal
                    isModalVisible={isGuestVisible}
                    setIsModalVisible={setIsGuestVisible}
                    event={event._id}
                />
            }

            <QrCodeModal
                event={event}
                isModalVisible={isQrCodeModalVisible}
                setIsModalVisible={setIsQrCodeModalVisible}
                ticketId={reservation.ticketId}
                reservationId={reservation._id}
            />

            <EventDetailsModal
                isModalVisible={isModalVisible}
                setIsModalVisible={setIsModalVisible}
                isTicketsAvailable={false}
                event={event}
                subscribtionCredit={null}
                venue={venue}
            />

            {
                isPeopelWithMutualFreindsModalVisible &&
                <PeopleWithMutualFreindsModal
                    isModalVisible={isPeopelWithMutualFreindsModalVisible}
                    setIsModalVisible={setPeopelWithMutualFreindsModalVisible}
                />
            }


        </>
    );
};

export default CardWithContent;

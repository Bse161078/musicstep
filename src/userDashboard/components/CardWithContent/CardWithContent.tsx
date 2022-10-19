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
        hours = moment(reservation.eventInfo[0].city).diff(reservation.eventInfo[0].state, "hours");
    }
    const handleViewVenue = (e:any) => {
        // history.push({
        //     pathname: `/explore-venue/venue-details`,
        //
        //     state: {venueDetail: reservation.venueInfo[0]},
        // });
        setIsModalVisible(true);
    };

    const event=reservation && reservation.eventInfo && (reservation.eventInfo).length>0 &&  reservation.eventInfo[0];
    const venue=reservation && reservation.venueInfo && (reservation.venueInfo).length>0 && reservation.venueInfo[0];


    console.log("reservation = ",reservation)

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
                            <p className="description">{`${hours} ${hours === 1 ? "Hour" : "Hours"}`}</p>
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
                            >QR Code</FilledButtonStyle>
                        </Grid>
                    </Grid>
                </Grid>
            </CardWithContentStyle>
            {/*<GuestListModal*/}
                {/*isModalVisible={isModalVisible}*/}
                {/*setIsModalVisible={setIsModalVisible}*/}
            {/*/>*/}

            <EventDetailsModal
                isModalVisible={isModalVisible}
                setIsModalVisible={setIsModalVisible}
                isTicketsAvailable={false}
                event={event}
                subscribtionCredit={null}
                venue={venue}
            />

        </>
    );
};

export default CardWithContent;

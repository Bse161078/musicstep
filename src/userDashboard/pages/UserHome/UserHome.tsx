import React, {useEffect, useState} from "react";
import {Loading, MessageModal, NavbarWithSearch} from "../../../components";
import {
    FilledButtonStyle,
    OutlineButtonStyle,
} from "../../../styles/Common.style";

import {
    CardWithContent,
    SectionHeading,
    UpcomingEvents,
    UserSidebar,
} from "../../components";
import {GuestListModal} from "../../Modals";
import {EventReservationStyle, UserHomeStyle} from "./UserHome.style";
import axios from "axios";

import {useHistory} from "react-router-dom";
import {
    Grid,
    ImageList,
    ImageListItem,
    Typography
} from "@mui/material";
import {useLoginContext} from "../../../context/authenticationContext";
import {Spinner} from "../../../components/Spinner";
import {CustomCarousel} from "../../../components";
import moment from "moment";
import {UploadFile} from "../../../admin/components/UploadFile";
import FutureEvents from "./FutureEvents";

const EventReservation = ({reservations, cancelreservation, subscription}: any) => {
    const [isCancelModalVisible, setCancelModalVisible] = useState(false);
    const [isSuccessModalVisible, setSuccessModalVisible] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedReservation, setSelectedReservation] = useState(false);


    reservations = reservations.filter((reserve: any) => (reserve.eventInfo).length > 0 && (new Date(reserve.eventInfo[0].date)>=new Date()));


    return (
        <>
            {subscription.active === true ?
                <SectionHeading heading="Events In Reservation">
                    <Grid container lg={3} xs={1} spacing={1}
                          sx={{maxWidth: "70vw!important", width: "70vw!important", zIndex: 100}}>
                        <ImageList

                            sx={{
                                gridAutoFlow: "column",
                                gridTemplateColumns: "repeat(auto-fill,minmax(450px,1fr)) !important",
                                gridAutoColumns: "minmax(450px, 1fr)",
                                textAlign: "left",
                                marginRight:10,
                                paddingBottom:4
                            }}
                        >
                            {reservations &&
                            reservations.map((reservation: any) => (
                                <ImageListItem sx={{marginLeft:5}}>
                                    <CardWithContent
                                        heading={reservation.eventInfo[0].title}
                                        time={moment(reservation.eventInfo[0].startingTime, [
                                            "hh:mm",
                                        ]).format("hh:mm a")}
                                        footerText="Cancelation Time Left: 22:32:09"
                                        buttonType="filled"
                                        handleButtonClick={() => {
                                            // alert(reservation._id);
                                            //setSelectedReservation(reservation._id);
                                            //setCancelModalVisible(true);
                                        }}
                                        date={new Date(reservation.eventInfo[0].date)}
                                        originalTime={moment(reservation.eventInfo[0].startingTime)}
                                        categoryTags={reservation.venueInfo[0].categoryTags}

                                    />
                                </ImageListItem>

                            ))

                            }
                        </ImageList>

                    </Grid>
                    <FutureEvents/>
                    <EventReservationStyle>
                        {/* <CustomCarousel
          // images={[
          //   venueDetail.coverPhotoUrl,
          //   ...venueDetail.additionalPhotosUrls,
          // ]}
          > */}


                        {/* <CardWithContent
            heading="Franklin Kub's concert"
            time="10:51 AM"
            footerText="Cancelation Time Left: 22:32:09"
            buttonType="filled"
            handleButtonClick={() => setCancelModalVisible(true)}
          /> */}
                        {/* <CardWithContent
            buttonText="Reserved"
            heading="Franklin Kub's Concert"
            time="10:51 AM"
            footerText="(Click to View Guest List)"
            handleButtonClick={() => {
              setIsModalVisible(true);
            }}
          />
        */}
                        {/* </CustomCarousel> */}
                    </EventReservationStyle>

                    <MessageModal
                        isModalVisible={isCancelModalVisible}
                        setIsModalVisible={setCancelModalVisible}
                        icon={<img src="/images/icons/cancel-icon.svg" alt="icon"/>}
                        heading="Cancel Reservation?"
                        message="Are you sure you want to cancel this reservation?"
                        buttons={[
                            <OutlineButtonStyle
                                width="100%"
                                height="60px"
                                onClick={() => setCancelModalVisible(false)}
                            >
                                No
                            </OutlineButtonStyle>,
                            <FilledButtonStyle
                                width="100%"
                                height="60px"
                                onClick={() => {
                                    setCancelModalVisible(false);
                                    setSuccessModalVisible(true);
                                    cancelreservation(selectedReservation);
                                }}
                            >
                                Cancel
                            </FilledButtonStyle>,
                        ]}
                    />

                    <MessageModal
                        isModalVisible={isSuccessModalVisible}
                        setIsModalVisible={setSuccessModalVisible}
                        heading="Success"
                        message="Reservation canceled successfully."
                    />
                </SectionHeading>
                :
                <Typography variant='h3' align="center" sx={{padding: 10, fontWeight: 'bold'}}>
                    Your Subscribtion has been Expired!.Please renew your Subscribtion
                </Typography>
            }
            {subscription.active === true && <GuestListModal
                isModalVisible={isModalVisible}
                setIsModalVisible={setIsModalVisible}
            />}
            </>
    );
};

export default function UserHome() {
    const history = useHistory();
    const {state, dispatch} = useLoginContext();
    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [reservations, setReservations] = useState([]);
    const [subscription, setSubscription] = useState({
        active: true
    })
    const [user, setUser] = useState({
        credits: 0
    })
    const [timeDifference, setTimeDifference] = useState(0)

    const handleClick = () => {
        history.push({
            pathname: `/explore-venue/venue-details`,

            // state: { venueDetail: venue.venueInfo[0] },
        });
    };

    useEffect(() => {
        setIsLoading(true);
        const user: any = JSON.parse(localStorage.getItem("data") || "{}");
        axios.get(`v1/users/${user.id}`, {
            headers: {Authorization: `Bearer ${state.authToken}`},
        })
            .then((res: any) => {
                setUser(res.data)
            }).catch((e) => {
        })
        axios
            .get(`/v1/users/allEventsByVenue/${user.id}`, {
                headers: {Authorization: `Bearer ${state.authToken}`},
            })
            .then((res) => {
                console.log("eventsbyvenue",res.data)
                setEvents(res.data);
                setIsLoading(false);
            })
            .catch((error) => {
            });

        getReservation();
    }, []);

    const cancelreservation = (reservationId: any) => {
        axios
            .put(
                `/v1/reservation/cancel?reservationId=${reservationId}`,
                {},
                {
                    headers: {Authorization: `Bearer ${state.authToken}`},
                }
            )
            .then(async (responses) => {
                getReservation();

                const response = await axios
                    .get(`/v1/users/${state.data.id}`, {
                        headers: {Authorization: `Bearer ${state.authToken}`},
                    })
                    .catch((error) => {
                        alert(error.response.data.message);
                    });
                if (response) {

                    dispatch({
                        type: "UPDATE_USER_CREDITS",
                        payload: {
                            data: response.data.credits,
                        },
                    });
                }
            })
            .catch((error) => {
            });
    };
    const getReservation = () => {
        setIsLoading(true)
        axios
            .get(`/v1/reservation`, {
                headers: {Authorization: `Bearer ${state.authToken}`},
            })
            .then((res) => {
                setIsLoading(false)
                setReservations(res.data.reservation);
                setSubscription(res.data.subscription)
                const startDate = moment(res.data.subscription.created_at);
                const timeEnd = moment(res.data.subscription.expires_at);
                const diff = timeEnd.diff(startDate);
                const diffDuration = moment.duration(diff);
                setTimeDifference(diffDuration.days())
                // setEvents(res.data);
                // setIsLoading(false);
            })
            .catch((error) => {
                setIsLoading(false)
            });
    };

    return (
        <>
            <NavbarWithSearch userCredit={user.credits}/>
            {isLoading && <Loading/>}
            {!subscription ?
                <Typography variant='h3' align="center" sx={{padding: 10, fontWeight: 'bold'}}>
                    Your Subscribtion has been cancelled. Create your Subscribtion again!
                </Typography>
                :
                <UserHomeStyle>

                    <UserSidebar reservations={reservations} subscription={subscription}
                                 timeDifference={timeDifference}/>

                    <div>
                        <EventReservation
                            reservations={
                                reservations &&
                                reservations.filter(
                                    (reservation: any) =>
                                        reservation.eventReservation === "reserved" &&
                                        reservation.isTicketUsed === false
                                )
                            }
                            cancelreservation={cancelreservation}
                            subscription={subscription}
                        />
                        <div className="divider"/>
                        {!isLoading ? (
                            events.length > 0 ? (
                                <UpcomingEvents events={events}/>
                            ) : null
                        ) : (
                            ""
                        )}
                    </div>
                </UserHomeStyle>


            }
        </>
    );
}

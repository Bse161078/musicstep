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
import {ExploreVenueStyle, TrialButton} from "../../../pages/ExploreVenue/ExploreVenue.style";
import {Pricing} from "../../../pages/Pricing";

const EventReservation = ({reservations, cancelreservation, subscription}: any) => {
    const [isCancelModalVisible, setCancelModalVisible] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedReservation, setSelectedReservation] = useState(false);


    reservations = reservations.filter((reserve: any) => (reserve.eventInfo).length > 0 && (new Date(reserve.eventInfo[0].date) >= new Date()));


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
                                marginRight: 10,
                                paddingBottom: 4
                            }}
                        >
                            {reservations &&
                            reservations.map((reservation: any) => (
                                <ImageListItem sx={{marginLeft: 5}}>
                                    <CardWithContent
                                        heading={reservation.eventInfo[0].title}
                                        time={moment(reservation.eventInfo[0].startingTime, [
                                            "hh:mm",
                                        ]).format("hh:mm a")}
                                        footerText="Cancelation Time Left: 22:32:09"
                                        buttonType="filled"
                                        handleButtonClick={() => {
                                            // alert(reservation._id);
                                            setSelectedReservation(reservation._id);
                                            setCancelModalVisible(true);
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
                                    cancelreservation(selectedReservation);
                                }}
                            >
                                Cancel
                            </FilledButtonStyle>,
                        ]}
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
    const [isSuccessModalVisible, setSuccessModalVisible] = useState(false);
    const [showPricing, setShowPricing] = useState(false);

    const [subscription, setSubscription] = useState({
        active: true
    })
    const [user, setUser] = useState({
        credits: 0,
        subscriptionEndDate: null
    })
    const [timeDifference, setTimeDifference] = useState(0)

    const handleClick = () => {
        history.push({
            pathname: `/explore-venue/venue-details`,

            // state: { venueDetail: venue.venueInfo[0] },
        });
    };


    const getUser = () => {
        setIsLoading(true);
        const user: any = JSON.parse(localStorage.getItem("data") || "{}");
        axios.get(`v1/users/${user.id}`, {
            headers: {Authorization: `Bearer ${state.authToken}`},
        })
            .then((res: any) => {

                setUser(res.data);
                setSubscriptionExpiration(res.data);

            }).catch((e) => {
        })
        axios
            .get(`/v1/users/allEventsByVenue/${user.id}`, {
                headers: {Authorization: `Bearer ${state.authToken}`},
            })
            .then((res) => {
                setEvents(res.data);
                setIsLoading(false);
            })
            .catch((error) => {
            });
    }

    useEffect(() => {
        getUser();
        getReservation();
    }, []);

    const cancelreservation = (reservationId: any) => {
        setIsLoading(true);
        axios
            .put(
                `/v1/reservation/cancel?reservationId=${reservationId}`,
                {},
                {
                    headers: {Authorization: `Bearer ${state.authToken}`},
                }
            )
            .then(async (responses) => {
                setIsLoading(false);
                getReservation();
                getUser()
                setSuccessModalVisible(true);
            })
            .catch((error) => {
                setIsLoading(false);
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
                // setEvents(res.data);
                // setIsLoading(false);
            })
            .catch((error) => {
                setIsLoading(false)
            });
    };

    const setSubscriptionExpiration = (user:any) => {
        if (user && user.subscriptionEndDate) {
            const startDate = moment(new Date());
            const endDate = moment(user.subscriptionEndDate);
            const diff = endDate.diff(startDate);
            const diffDuration = moment.duration(diff);
            setTimeDifference(diffDuration.days())

        }
    }


    console.log("user = ",user.subscriptionEndDate)

    return (
        <>
            {showPricing && <Pricing showPricing={showPricing} setShowPricing={setShowPricing} isCreateSubscription={true}/>}
            <NavbarWithSearch userCredit={user.credits}/>
            {isLoading && <Loading/>}
            {!subscription ?
                <ExploreVenueStyle>
                    <h1
                        style={{
                            width: "100%",
                            margin: "0px auto",
                            textAlign: "center",
                        }}
                    >
                        Your Subscription has been Cancelled! Please create your Subscription package
                    </h1>
                    <div></div>
                    {/* <FilledButtonStyle  class="" onClick={(e)=>onSubscribePackage(e)}>Checkout</FilledButtonStyle> */}
                    <TrialButton style={{display: 'flex', justifyContent: 'center', marginLeft: 40, marginTop: 10}}
                                 onClick={(e) => {

                                     setShowPricing(true)


                                 }}
                                 className="text-center"><a className="free-trial-btn free-trial-secondary btn">
                        Create Subscription</a>
                    </TrialButton>
                </ExploreVenueStyle>
                :
                <UserHomeStyle>

                    <UserSidebar reservations={reservations} subscription={subscription}
                                 timeDifference={timeDifference} expirationDate={user.subscriptionEndDate}/>

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
                    <MessageModal
                        isModalVisible={isSuccessModalVisible}
                        setIsModalVisible={setSuccessModalVisible}
                        heading="Success"
                        message="Reservation cancelled successfully."
                    />
                </UserHomeStyle>


            }
        </>
    );
}

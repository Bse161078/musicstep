import React, {useEffect, useState} from "react";
import {Link, useHistory} from "react-router-dom";
import {HeadingTab} from "..";
import {
    CheckingAvailablityModal,
    CreditHistoryModal,
    EventHistoryModal,
    LogoutModal,
    SubscriptionDetailsModal,
} from "../../../admin/components";
import {MessageModal} from "../../../components";
import {NotificationModal, PeopleWithMutualFreindsModal} from "../Modals";
import {
    FilledButtonStyle,
    OutlineButtonStyle,
} from "../../../styles/Common.style";
import {Loading} from "../../../components/Loading";
import {UserSidebarStyle} from "./UserSidebar.style";
import {useLoginContext} from "../../../context/authenticationContext";
import axios from "axios";
import {Grid} from "@mui/material";
import moment from "moment";

const UserSidebar = ({
                         reservations,
                         subscription,
                         timeDifference,
                         expirationDate,
                     }: any) => {
    const {dispatch, state} = useLoginContext();
    const [isLogoutVisible, setLogoutVisible] = useState(false);
    const [isSubscriptionVisible, setSubscriptionVisible] = useState(false);
    const [isCreditModalVisible, setCreditModalVisible] = useState(false);
    const [isEventsModalVisible, setEventsModalVisible] = useState(false);
    const [isCancelSubscriptionVisible, setCancelSubscriptionVisible] = useState(
        false
    );
    const [isLoading, setLoading] = useState(false);
    const [isSuccessModalVisible, setSuccessModalVisible] = useState(false);
    const [isNotSuccessModalVisible, setNotSuccessModalVisible] = useState(false);
    const [reservationStats, setReservationStats] = useState<any>(null);
    const [isShowBuyCredit, setIsShowBuyCredit] = useState(false);

    const [isNotificationModalVisible, setNotificationModalVisible] = useState(
        false
    );
    const [isPeopelWithMutualFreindsModalVisible, setPeopelWithMutualFreindsModalVisible,] = useState(false);
    const history = useHistory();

    const handleModalCancelClick = () => {
        setCancelSubscriptionVisible(false);
    };

    useEffect(() => {
        getReservationStats();
    }, [])

    const handleModalOkClick = () => {
        setSuccessModalVisible(true);
        setCancelSubscriptionVisible(false);
    };

    const subscriptionCancelClick = () => {
        setLoading(true);
        setSubscriptionVisible(false);
        setCancelSubscriptionVisible(true);
        const user: any = JSON.parse(localStorage.getItem("data") || "{}");
        axios
            .post("/v1/stripe/cancel-subscription", {id: user.id})
            .then((res) => {
                setLoading(false);
                handleModalOkClick();
            })
            .catch((error) => {
                setLoading(false);
                setNotSuccessModalVisible(true);
            });
    };

    const getReservationStats = () => {
        axios
            .get(`/v1/reservation/user/stats`, {
                headers: {Authorization: `Bearer ${state.authToken}`},
            })
            .then((res) => {
                setReservationStats(res.data);
            })
            .catch((error) => {
            });
    }

    const futureReservations = reservations.filter((reserve: any) => (reserve.eventInfo).length > 0 && (new Date(reserve.eventInfo[0].date) >= new Date()));


    return (
        <UserSidebarStyle>
            {isLoading === true && <Loading/>}
            <figure className="person-info-wrapper">
                <div className="avatar-wrapper" style={{textAlign: "center"}}>
                    <img
                        src={
                            state.data.imageUrl
                                ? process.env.REACT_APP_BASE_URL +
                                "/images/" +
                                state.data.imageUrl
                                : "/images/person.svg"
                        }
                        className="avatar"
                        alt="avatar"
                        style={{border: !state.data.imageUrl ? "1px solid black" : "0px"}}
                    />

                    <div className="action-buttons-wrapper">
                        <Link to="/dashboard/basic-info">
                            <img alt="profile" src="/images/icons/edit-profile-icon.svg"/>
                        </Link>
                        <span onClick={() => setNotificationModalVisible(true)}>
              <img
                  alt="notification"
                  src="/images/icons/bell-icon.svg"
                  style={{
                      padding: "12px",
                      background: "#fff",
                      borderRadius: "100%",
                  }}
              />
            </span>
                        <span onClick={() => setLogoutVisible(true)}>
              <img alt="logout" src="/images/icons/logout-icon.svg"/>
            </span>
                    </div>
                </div>
                <figcaption
                    className="person-name"
                    style={{textTransform: "capitalize"}}
                >
                    {state.data.firstName + " " + state.data.lastName.charAt(0)}
                </figcaption>
            </figure>

            <h4 className="heading">Subscription Details</h4>

            <div className="cards-wrapper">
        <span onClick={() => setSubscriptionVisible(true)}>
          <HeadingTab
              heading={"Music " + (subscription?.name ? subscription.name : "")}
              description={
                  !subscription
                      ? "Your Subscription has Expired!"
                      : subscription?.active === true
                      ? moment(expirationDate).format("MM/DD/YYYY")
                      : ""
              }
          />
        </span>
                <div className="divider"/>
                <span onClick={() => setPeopelWithMutualFreindsModalVisible(true)}>
          <HeadingTab
              heading="Mutual Events History"
              icon={
                  <img src="/images/icons/mutual-friends-icon.svg" alt="icon"/>
              }
          />
        </span>
                {subscription?.active === true && (
                    <div>
                        <div className="divider"/>
                        <span
                            style={{padding: 4}}
                            onClick={() => setCreditModalVisible(true)}
                        >
              <HeadingTab
                  icon={
                      <img src="/images/icons/credit-history-icon.svg" alt="icon"/>
                  }
                  heading="Credits History"
              />
            </span>

                        <span onClick={() => setEventsModalVisible(true)}>
              <HeadingTab
                  icon={
                      <img src="/images/icons/event-history-icon.svg" alt="icon"/>
                  }
                  heading="Events History"
              />
            </span>

                        <div className="divider"/>
                        <HeadingTab
                            heading="Events in Reservation"
                            count={
                                futureReservations &&
                                futureReservations.filter(
                                    (reservation: any) =>
                                        reservation.eventReservation === "reserved" &&
                                        reservation.isTicketUsed === false
                                ).length
                            }
                        />
                        <HeadingTab
                            heading="Total Events Attended"
                            count={
                                reservationStats && reservationStats.data && reservationStats.data.count
                            }
                        />

                        <HeadingTab
                            heading="Total Cancelled Events"
                            count={
                                reservations &&
                                reservations.filter(
                                    (reservation: any) =>
                                        reservation.eventReservation === "cancelled"
                                ).length
                            }
                        />
                    </div>
                )}
            </div>

            <LogoutModal
                isModalVisible={isLogoutVisible}
                setIsModalVisible={setLogoutVisible}
                handleOk={() => {
                    dispatch({
                        type: "LOGOUT",
                        payload: {},
                    });
                    history.push("/login");
                    setLogoutVisible(false);
                }}
            />

            {subscription && (
                <SubscriptionDetailsModal
                    isModalVisible={isSubscriptionVisible}
                    setIsModalVisible={setSubscriptionVisible}
                    subscribtion={subscription}
                    handleCancelClick={() => setCancelSubscriptionVisible(true)}
                    handleChangeClick={() =>
                        history.push({
                            pathname: "/pricing",
                            state: {updateSubscription: true},
                        })
                    }
                    handleBuyMoreClick={() => setIsShowBuyCredit(true)}
                />
            )}
            <CreditHistoryModal
                isModalVisible={isCreditModalVisible}
                setIsModalVisible={setCreditModalVisible}
                reservations={reservations}
            />

            <EventHistoryModal
                isModalVisible={isEventsModalVisible}
                setIsModalVisible={setEventsModalVisible}
                reservations={reservations}
            />

            <MessageModal
                isModalVisible={isCancelSubscriptionVisible}
                setIsModalVisible={setCancelSubscriptionVisible}
                heading="Cancel Subscription?"
                message="Are you sure you want to cancel this subscription?"
                buttons={[
                    <OutlineButtonStyle
                        width="100%"
                        height="60px"
                        onClick={handleModalCancelClick}
                    >
                        No
                    </OutlineButtonStyle>,
                    <FilledButtonStyle
                        width="100%"
                        height="60px"
                        onClick={() => {
                            subscriptionCancelClick();
                        }}
                    >
                        Cancel Subscription
                    </FilledButtonStyle>,
                ]}
            />

            <MessageModal
                isModalVisible={isSuccessModalVisible}
                setIsModalVisible={setSuccessModalVisible}
                heading="Success"
                message="Subscription cancelled successfully."
                handleOkClick={() => {
                    history.push("/");
                }}
            />
            <MessageModal
                isModalVisible={isNotSuccessModalVisible}
                setIsModalVisible={setNotSuccessModalVisible}
                heading="Error"
                message="Subscription Error."
                handleOkClick={() => {
                    history.push("/");
                }}
            />
            <NotificationModal
                isModalVisible={isNotificationModalVisible}
                setIsModalVisible={setNotificationModalVisible}
            />
            {
                isPeopelWithMutualFreindsModalVisible &&
                <PeopleWithMutualFreindsModal
                    isModalVisible={isPeopelWithMutualFreindsModalVisible}
                    setIsModalVisible={setPeopelWithMutualFreindsModalVisible}
                />
            }
            <CheckingAvailablityModal
                isModalVisible={isShowBuyCredit}
                setIsModalVisible={setIsShowBuyCredit}
                message={"Not Enough credits"}
                isBuyCredit={true}
            />

        </UserSidebarStyle>
    );
};

export default UserSidebar;

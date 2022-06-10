import React, {useEffect, useMemo, useState} from "react";
import {
    BillingInformation,
    RedeemOfferForm,
    RedeemOfferStep2Form,
    StartTrialWrapper,
    TrialBillingInfoForm,
    TrialForm,
    TrialGeneralInfo,
    TrialSetPassword,
} from "../../components";
import axios from "axios";

import {Loading} from "../../components/Loading";
import {useHistory} from "react-router-dom";
import {FreeTrialStyle} from "./FreeTrial.style";
import {usePartnerContext} from "../../context/partnerContext ";
import {useLoginContext} from "../../context/authenticationContext";
import Pricing from "../../pages/Pricing/Pricing"

export default function FreeTrial() {
    const history = useHistory();
    const loginContext = useLoginContext();

    let initialLoadFormName = "trial-info";
    let stateObj: any = history.location?.state;

    if (stateObj && stateObj.previousPath.includes("/partner-detail")) {
        initialLoadFormName = "set-password";
    }
    const [currentForm, setCurrentForm] = useState(initialLoadFormName);
    const [isPricing, setIsPricing] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState()
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        const clientSecret = new URLSearchParams(window.location.search).get(
            "setup_intent_client_secret"
        );
        if (clientSecret && clientSecret.length > 0) {
            setCurrentForm("trial-billing-information")
            setLoading(false)
        }
        else {
            setLoading(false)
            if (localStorage.getItem("currentForm"))
                setCurrentForm(localStorage.getItem("currentForm") || "trial-billing-information");
        }

    }, [])


    useEffect(() => {
        localStorage.setItem("currentForm", currentForm)
    }, [currentForm])

    if (
        loginContext.state.data &&
        loginContext.state.isLoggedIn &&
        // state.authToken &&
        loginContext.state.data.role === "user" &&
        loginContext.state.data.isOrganizer === false &&
        currentForm === "trial-billing-information"
    ) {
        history.push("/explore-venue");
    }

    const {dispatch} = usePartnerContext();
    const resetPartnerForm = () => {
        dispatch({
            type: "RESETFROM",
            payload: {},
        });
    };

    const createSubscription = (paymentMethod: string, subscriptionName: string) => {
        setLoading(true)
        axios.post('/v1/stripe/create-subscription', {
            id: localStorage.getItem("id"),
            paymentMethod,
            subscriptionName
        }).then((response) => {
            setLoading(false);
            setIsModalVisible(true);

            const user = response.data.user;
            const token = response.data.tokens;
            dispatch({
                type: "SUBMIT_TRIAL_BILLING",
                payload: {
                    email: user.email,
                },
            });
            loginContext.dispatch({
                type: "LOGIN_USER",
                payload: {
                    isLoggedIn: true,
                    token: token.access.token,
                    data: user,
                },
            });
        }).catch((err: any) => {
            setLoading(false)
        })
    }


    const createSubs = (subscriptionName:any) => {


        setLoading(true)
        axios.post('/v1/stripe/create-subscription', {
            id: localStorage.getItem("id"),
            paymentMethod: paymentMethod,
            subscriptionName: subscriptionName
        }).then((response) => {
            setLoading(false);
            setIsModalVisible(true);

            const user = response.data.user;
            const token = response.data.tokens;
            dispatch({
                type: "SUBMIT_TRIAL_BILLING",
                payload: {
                    email: user.email,
                },
            });
            loginContext.dispatch({
                type: "LOGIN_USER",
                payload: {
                    isLoggedIn: true,
                    token: token.access.token,
                    data: user,
                },
            });
        })
            .catch((err) => {
                setLoading(false)
            })
    }

    const handleSetPricing = (pricing: boolean) => {
        setIsPricing(pricing);
    }


    const CurrentTrialStep = useMemo(() => {
        switch (currentForm) {
            case "trial-info":
                return <TrialForm setCurrentForm={setCurrentForm}/>;

            case "general-info":
                return <TrialGeneralInfo setCurrentForm={setCurrentForm}/>;

            case "set-password":
                return (
                    <TrialSetPassword
                        partnerId={stateObj && stateObj.partnerId}
                        resetPartnerForm={resetPartnerForm}
                        setCurrentForm={setCurrentForm}
                    />
                );

            case "redeem-offer":
                return <RedeemOfferForm setCurrentForm={setCurrentForm}/>;

            case "redeem-offer-verify":
                return <RedeemOfferStep2Form setCurrentForm={setCurrentForm}/>;

            case "trial-billing-information":
                return <TrialBillingInfoForm setIsPricing={handleSetPricing} isPricing={isPricing}
                                             setSetupIntent={setPaymentMethod} createSubs={createSubs}/>;
            default:
                return <TrialForm setCurrentForm={setCurrentForm}/>;
        }
    }, [currentForm, isPricing]);
    const handleCongratulationsButtonClick = () => {
        setIsModalVisible(false);
        history.push("/explore-venue");
    };
    return (
        <FreeTrialStyle>
            {loading && <Loading/>}
            {false ? <Pricing createSubscription={createSubscription} payment_method={paymentMethod}/> :
                <StartTrialWrapper
                    leftContent={
                        currentForm === "trial-billing-information" ? (
                            <BillingInformation
                                leftHeading={
                                    <>
                                        Music <span>Fan</span> Includes
                                    </>
                                }
                            />
                        ) : null
                    }
                >
                    {CurrentTrialStep}
                </StartTrialWrapper>
            }
        </FreeTrialStyle>
    );
}

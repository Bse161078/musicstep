import axios from "axios";
import {Form, Formik} from "formik";
import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";

import {CongratulationsModal, InputBox, Loading} from "..";
import {useUserContext} from "../../context/userContext";
import {useLoginContext} from "../../context/authenticationContext";
import {FilledButtonStyle} from "../../styles/Common.style";

import {TrialBillingInfoFormStyle} from "./TrialBillingInfoForm.style";
import {TrialBillingInfoValidationSchema} from "./validation";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import AddCard from "../Stripe/addCard";
import {Link} from "@reach/router";

const TrialBillingInfoForm = (props: any) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    // const [errorMessage, setErrorMessage] = useState("");
    const stripePromise = loadStripe("pk_test_51KlypNIPUfXuvJ9SeWtumhiJ3BDNEVl0rzxcwsVjYliUjnUcpPQJvNCOxjg0NlUPR5NUuX6Iog038akazJrlNkBy00sn1itpn8");
    const [clientSecret, setClientSecret] = useState("");
    const history = useHistory();
    const selectedSubscription = localStorage.getItem("subscription") ?
        JSON.parse(localStorage.getItem("subscription") || "{}") :
        {credits: "48", eventsCount: "3-4", musicType: "Enthusiast", price: "$99"};


    useEffect(() => {
        // Create PaymentIntent as soon as the page loads

        if (id && id.length > 0) {
            localStorage.setItem("id", id);
        }
        const user: any = JSON.parse(localStorage.getItem("data") || "{}");
        axios.post('/v1/stripe/add-card-intent', {id: localStorage.getItem("id")}).then((response) => {
            setClientSecret(response.data.clientSecret);
        }).catch((err) => {
        })
        // fetch("http://localhost:3001/stripe/create-payment-intent", {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
        // })
        //     .then((res) => res.json())
        //     .then((data) => setClientSecret(data.clientSecret));
    }, []);

    const handleCongratulationsButtonClick = () => {
        setIsModalVisible(false);
        history.push("/explore-venue");
    };

    const {
        state: {id, firstName, lastName, dob, email, phoneNumber},
        dispatch,
    } = useUserContext();

    const loginContext = useLoginContext();

    const handleFormSubmit = (e: any) => {
        setLoading(true);
        const userId=!id?localStorage.getItem("id"):id;

        //d
        axios
            .patch(`/v1/users/createBillingInformation/${userId}`, {
                fullName: e.nameOnCard,
                cardNumber: e.cardNumber,
                expiryDate: e.date,
                cvc: e.cvc,
            })
            .then((response) => {
                setLoading(false);
                dispatch({
                    type: "SUBMIT_TRIAL_BILLING",
                    payload: {
                        email: e.email,
                    },
                });
                setIsModalVisible(true);
                loginContext.dispatch({
                    type: "LOGIN_USER",
                    payload: {
                        isLoggedIn: true,
                        token: response.data.tokens.access.token,
                        data: response.data.user,
                    },
                });
            })
            .catch((error) => {
                // setErrorMessage("Email already exist!");
                setLoading(false);
            });
    };

    const createSubscription = (paymentMethod: string) => {
        setLoading(true)
        axios.post('/v1/stripe/create-subscription', {
            id: sessionStorage.getItem("id"),
            paymentMethod
        }).then((response) => {
            setLoading(false);

            const user = response.data.user;
            const token = response.data.tokens;
            dispatch({
                type: "SUBMIT_TRIAL_BILLING",
                payload: {
                    email: user.email,
                },
            });
            setIsModalVisible(true);
            loginContext.dispatch({
                type: "LOGIN_USER",
                payload: {
                    isLoggedIn: true,
                    token: token.access.token,
                    data: user,
                },
            });
        }).catch((err) => {
            setLoading(false)
        })
    }

    const appearance = {
        theme: 'stripe',
    };
    const options: any = {
        clientSecret,
        appearance,
    };

    const Terms = <a href={"terms-conditions"}>Terms</a>;
    const FeesApply = <a href={"help-center?fees-apply=true"}>Fees apply</a>;
    const PrivacyNotice = <a href={"privacy-policy"}>Privacy Notice</a>;


    return (
        <TrialBillingInfoFormStyle>
            {loading && <Loading/>}


            <h3 className="form-heading">Save Your Billing Information</h3>
            <p className="form-info">Why do you need my billing info?</p>

            <Formik
                initialValues={{nameOnCard: "", cardNumber: "", date: "", cvc: ""}}
                onSubmit={handleFormSubmit}
                validationSchema={TrialBillingInfoValidationSchema}
            >
                {() => (
                    <Form className="form-wrapper">
                        {clientSecret && (
                            <Elements options={options} stripe={stripePromise}>
                                <AddCard createSubscription={createSubscription}
                                         setIsPricing={props.setIsPricing} setSetupIntent={props.setSetupIntent}
                                         setLoading={setLoading}/>
                            </Elements>
                        )}

                        <p className="gift-code">I have a gift code</p>

                        <p className="description">
                            {
                                `By clicking the button below, you agree to the `
                            }
                            {
                                Terms
                            }
                            {
                                ` and your
                            free 7 days ${selectedSubscription.credits}-credits trial will begin. If you don't cancel
                            before the trial ends, you'll automatically be charged for a
                            full-priced monthly credit plan (currently ${selectedSubscription.price} + any tax for ${selectedSubscription.credits}
                            credits per month), until you cancel or change your plan. Cancel
                            anytime in Settings to avoid renewal. `
                            }
                            {
                                FeesApply
                            }
                            {
                                ` for reservations
                            missed or cancelled late. No refunds. New members only. Inventory
                            varies per location and may be limited during trial. `
                            }
                            {
                                PrivacyNotice
                            }
                            {
                                `  applies.`
                            }

                        </p>

                        {/* {errorMessage !== "" && (
              <p className="error-message">{errorMessage}</p>
            )} */}
                        {props.isPricing &&
                        <FilledButtonStyle width="100%" height="60px" onClick={() => {
                            const selectedSubscription = localStorage.getItem("subscription") ?
                                JSON.parse(localStorage.getItem("subscription") || "{}") :
                                {credits: "48", eventsCount: "3-4", musicType: "Enthusiast", price: "$99"};
                            props.createSubs(selectedSubscription.musicType);
                        }}>
                            Confirm
                        </FilledButtonStyle>
                        }
                    </Form>
                )}
            </Formik>
            <CongratulationsModal
                isModalVisible={isModalVisible}
                setIsModalVisible={setIsModalVisible}
                message="You have redeemed your trial successfully."
                handleButtonClick={handleCongratulationsButtonClick}
            />
        </TrialBillingInfoFormStyle>
    );
};

export default TrialBillingInfoForm;

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
import { loadStripe } from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import AddCard from "../Stripe/addCard";
const TrialBillingInfoForm = (props:any) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    // const [errorMessage, setErrorMessage] = useState("");
    const stripePromise = loadStripe("pk_test_51KtcQTFJ50BG2GSltkm4lfPaxH6c8raqCKt9hoBFpgAnJ9loSE8eWTU0PsTRV5wlAcgCY5n7ZMwMXfWg8FPwDPGC009SYAHTEk");
    const [clientSecret, setClientSecret] = useState("");

  

    const history = useHistory();


    useEffect(() => {
        // Create PaymentIntent as soon as the page loads

        if(id && id.length>0){
            sessionStorage.setItem("id",id);
        }
        console.log("id",id)
        axios.post('/v1/stripe/add-card-intent',{id:sessionStorage.getItem("id")}).then((response)=>{
            //console.log("data = ",response.data.clientSecret);
            setClientSecret(response.data.clientSecret);
        }).catch((err)=>{
            console.log("err = ",err.response)
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
        state: {id,firstName,lastName,dob,email,phoneNumber},
        dispatch,
    } = useUserContext();

    const loginContext = useLoginContext();

    const handleFormSubmit = (e: any) => {
        setLoading(true);
        //d
        axios
            .patch(`/v1/users/createBillingInformation/${id}`, {
                fullName: e.nameOnCard,
                cardNumber: e.cardNumber,
                expiryDate: e.date,
                cvc: e.cvc,
            })
            .then((response) => {
                setLoading(false);

                console.log(response);
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
                console.log("error");
            });
    };

    const createSubscription=(paymentMethod:string)=>{
        setLoading(true)
        axios.post('/v1/stripe/create-subscription',{id:sessionStorage.getItem("id"),paymentMethod}).then((response)=>{
            console.log("subscription = ",response);
            setLoading(false);

            const user=response.data.user;
            const token=response.data.tokens;
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
        }).catch((err)=>{
            console.log("err = ",err.response)
        })
    }

    const appearance = {
        theme: 'stripe',
    };
    const options:any = {
        clientSecret,
        appearance,
    };

    console.log("client secre1t = ",clientSecret);
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
                                setIsPricing={props.setIsPricing} setSetupIntent={props.setSetupIntent} />
                            </Elements>
                        )}

                        <p className="gift-code">I have a gift code</p>

                        <p className="description">
                            By clicking the button below, you agree to the Terms, and your
                            free 14 days 15-credit trial will begin. If you don't cancel
                            before the trial ends, you'll automatically be charged for a
                            full-priced monthly credit plan (currently $79 + any tax for 38
                            credits per month), until you cancel or change your plan. Cancel
                            anytime in Settings to avoid renewal. Fees apply for reservations
                            missed or canceled late. No refunds. New members only. Inventory
                            varies per location and may be limited during trial. Privacy
                            Notice applies.
                        </p>

                        {/* {errorMessage !== "" && (
              <p className="error-message">{errorMessage}</p>
            )} */}
                        <FilledButtonStyle width="100%" height="60px">
                            Redeem Now
                        </FilledButtonStyle>
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

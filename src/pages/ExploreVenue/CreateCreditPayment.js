import {NavbarWithSearch} from "../../components/NavbarWithSearch";
import {Pricing} from "../Pricing";
import Loading from "../../components/Spinner/Spinner";
import {ExploreVenueStyle, TrialButton} from "./ExploreVenue.style";
import {DropdownsList} from "./DropdownsList";
import {VenueCard} from "../../components/VenueCard";
import GoogleMapReact from "google-map-react";
import {Elements} from "@stripe/react-stripe-js";
import AddCard from "../../components/Stripe/addCard";
import React, {useEffect, useState} from "react";
import {loadStripe} from "@stripe/stripe-js";
import axios from "axios";
import {useHistory} from "react-router";
import PaymentIntentCard from "../../components/Stripe/paymentIntentCard";


const CreateCreditPayment = () => {

    const history = useHistory();

    const stripePromise = loadStripe("pk_test_51KtcQTFJ50BG2GSltkm4lfPaxH6c8raqCKt9hoBFpgAnJ9loSE8eWTU0PsTRV5wlAcgCY5n7ZMwMXfWg8FPwDPGC009SYAHTEk");
    const [clientSecret, setClientSecret] = useState("");
    const [loading, setLoading] = useState(false);

    const appearance = {
        theme: 'stripe',
    };
    const options = {
        clientSecret,
        appearance,
    };


    useEffect(()=>{

        const user = JSON.parse(localStorage.getItem("data") || "{}");
        setLoading(true)
        axios.post('/v1/stripe/create-credit-payment', {id: user.id,credit:4}).then((response) => {
            console.log("v1/stripe/pay-subscription = ",response.data);
            //window.open(response.data.url, '_blank');
            setLoading(false);
            setClientSecret(response.data.clientSecret);
            //console.log("subsribe package", response.data.url);
        }).catch((err) => {
            console.log(err.response);
            setLoading(false)
        })
    },[])


    const updateSubscriptionPaymentMethod=(paymentMethod)=>{
        console.log("updateSubscriptionPaymentMethod = ",paymentMethod);
        const user=JSON.parse(localStorage.getItem("data"));
        axios.post('/v1/stripe/update-subscription-method', {id: user.id,paymentMethod}).then((response) => {
            //console.log("data = ",response.data.clientSecret);
            setClientSecret(response.data.clientSecret);
            history.push("/explore-venue");
        }).catch((err) => {
            console.log("err = ", err.response);
            history.push("/explore-venue");
        })

    }

    return (
        <>

            {loading && <Loading/>}
            (
            <div><ExploreVenueStyle>
                {clientSecret && (
                    <Elements options={options} stripe={stripePromise}>
                        <PaymentIntentCard setLoading={setLoading} setSetupIntent={updateSubscriptionPaymentMethod} isUpdateSubscription={true}/>
                    </Elements>
                )}
            </ExploreVenueStyle>
            </div>

            )
        </>
    );
}

export default CreateCreditPayment;
import {NavbarWithSearch} from "../../components/NavbarWithSearch";
import {Pricing} from "../Pricing";
import Loading from '../../components/Loading/Loading'
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
import { useLocation } from "react-router-dom";


const CreateCreditPayment = () => {
    const location = useLocation();
    const history = useHistory();
    const buyCredit = location.state.buyCredit;
    const stripePromise = loadStripe("pk_test_51KlypNIPUfXuvJ9SeWtumhiJ3BDNEVl0rzxcwsVjYliUjnUcpPQJvNCOxjg0NlUPR5NUuX6Iog038akazJrlNkBy00sn1itpn8");
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
        axios.post('/v1/stripe/create-credit-payment', {id: user.id,credit:buyCredit}).then((response) => {
            //window.open(response.data.url, '_blank');
            setLoading(false);
            setClientSecret(response.data.clientSecret);
        }).catch((err) => {
            setLoading(false)
        })
    },[])


    const updateSubscriptionPaymentMethod=(paymentMethod)=>{
        const user=JSON.parse(localStorage.getItem("data"));
        axios.post('/v1/stripe/update-subscription-method', {id: user.id,paymentMethod}).then((response) => {
            setClientSecret(response.data.clientSecret);
            history.push("/explore-venue");
        }).catch((err) => {
            history.push("/explore-venue");
        })

    }

    return (
        <>

            {loading &&clientSecret && <Loading/>}
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
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
import {useLocation} from "react-router-dom";
import {useLoginContext} from "../../context/authenticationContext";


const CreateCreditPayment = () => {
    const location = useLocation();
    const history = useHistory();
    const buyCredit = location.state.buyCredit;
    const stripePromise = loadStripe("pk_live_51KlypNIPUfXuvJ9SMKa87LJ7AYk9zaeaKZvsqPMqjEBWsINJdwQfoidNPVyU9bKBMzyP3NCYKQf9kQdzijPwoiW600goa65vm0");
    const [clientSecret, setClientSecret] = useState("");
    const [loading, setLoading] = useState(false);
    const { dispatch, state } = useLoginContext();
    const [user, setUser] = useState({
        credits: 0,
        subscriptionEndDate: null
    })
    const appearance = {
        theme: 'stripe',
    };
    const options = {
        clientSecret,
        appearance,
    };


    useEffect(() => {

        const user = JSON.parse(localStorage.getItem("data") || "{}");
        setLoading(true);
        getUser();
        axios.post('/v1/stripe/create-credit-payment', {id: user.id, credit: buyCredit}).then((response) => {
            //window.open(response.data.url, '_blank');
            setLoading(false);
            setClientSecret(response.data.clientSecret);
        }).catch((err) => {
            setLoading(false)
        })
    }, [])


    const updateSubscriptionPaymentMethod = (paymentMethod) => {
        const user = JSON.parse(localStorage.getItem("data"));
        axios.post('/v1/stripe/update-subscription-method', {id: user.id, paymentMethod}).then((response) => {
            setClientSecret(response.data.clientSecret);
            history.push("/explore-venue");
        }).catch((err) => {
            history.push("/explore-venue");
        })

    }


    const getUser = () => {
        setLoading(true);
        const user = JSON.parse(localStorage.getItem("data") || "{}");
        axios.get(`v1/users/${user.id}`, {
            headers: {Authorization: `Bearer ${state.authToken}`},
        })
            .then((res) => {

                setUser(res.data);
                setLoading(true);

            }).catch((e) => {
            setLoading(true);

        })

    }

    return (
        <>

            {loading && clientSecret && <Loading/>}
            (
            <div>
                <NavbarWithSearch userCredit={user.credits}/>
                <ExploreVenueStyle>
                    {clientSecret && (
                        <Elements options={options} stripe={stripePromise}>
                            <PaymentIntentCard setLoading={setLoading} setSetupIntent={updateSubscriptionPaymentMethod}
                                               isUpdateSubscription={true}/>
                        </Elements>
                    )}
                </ExploreVenueStyle>
            </div>

            )
        </>
    );
}

export default CreateCreditPayment;

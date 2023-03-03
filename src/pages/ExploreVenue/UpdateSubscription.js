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


const UpdateSubscription = () => {

    const history = useHistory();

    const stripePromise = loadStripe("pk_live_51KlypNIPUfXuvJ9SMKa87LJ7AYk9zaeaKZvsqPMqjEBWsINJdwQfoidNPVyU9bKBMzyP3NCYKQf9kQdzijPwoiW600goa65vm0");
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
        const user=JSON.parse(localStorage.getItem("data")||"");
        axios.post('/v1/stripe/add-card-intent', {id: user.id}).then((response) => {
            setClientSecret(response.data.clientSecret);
        }).catch((err) => {
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

            {loading && <Loading/>}
            (
            <div><ExploreVenueStyle>
                {clientSecret && (
                    <Elements options={options} stripe={stripePromise}>
                        <AddCard setLoading={setLoading} setSetupIntent={updateSubscriptionPaymentMethod} isUpdateSubscription={true}/>
                    </Elements>
                )}
            </ExploreVenueStyle>
            </div>

            )
        </>
    );
}

export default UpdateSubscription;

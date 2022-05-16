import React, {Fragment, useEffect, useState} from "react";
import {
    PaymentElement,
    useStripe,
    useElements
} from "@stripe/react-stripe-js";
import {FilledButtonStyle} from "../../styles/Common.style";
import {Form} from "formik";

export default function AddCard(props) {
    const stripe = useStripe();
    const elements = useElements();

    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isCardAdded, setIsCardAdded] = useState({msg: "", status: false});


    useEffect(() => {
        if (!stripe) {
            return;
        }

        const clientSecret = new URLSearchParams(window.location.search).get(
            "setup_intent_client_secret"
        );

        if (!clientSecret) {
            return;
        }

        stripe.retrieveSetupIntent(clientSecret).then(({setupIntent}) => {
            console.log("setupIntent111 = ", setupIntent)
            switch (setupIntent.status) {
                case "succeeded":
                    setIsCardAdded({status: true, msg: "Success! Your payment method has been saved!"});
                    props.createSubscription(setupIntent.payment_method);
                    break;
                case "processing":
                    setIsCardAdded({
                        status: false,
                        msg: "Processing payment details. We'll update you when processing is complete!"
                    });
                case 'requires_payment_method':
                    setIsCardAdded({
                        status: false,
                        msg: "Failed to process payment details. Please try another payment method!"
                    })
                    break;
                default:
                    setIsCardAdded({status: false, msg: "Something went wrong!"})
                    break;
            }
        });
    }, [stripe]);


    useEffect(() => {
        if (isCardAdded.status) {

        }
    }, [isCardAdded])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
        }

        setIsLoading(true);

        const {error} = await stripe.confirmSetup({
            elements,
            confirmParams: {
                // Make sure to change this to your payment completion page
                return_url: "http://localhost:3002/free-trial",
            },
        });

        // This point will only be reached if there is an immediate error when
        // confirming the payment. Otherwise, your customer will be redirected to
        // your `return_url`. For some payment methods like iDEAL, your customer will
        // be redirected to an intermediate site first to authorize the payment, then
        // redirected to the `return_url`.

        if (error) {
            // This point will only be reached if there is an immediate error when
            // confirming the payment. Show error to your customer (for example, payment
            // details incomplete)
            setMessage(error.message);
        } else {
            // Your customer will be redirected to your `return_url`. For some payment
            // methods like iDEAL, your customer will be redirected to an intermediate
            // site first to authorize the payment, then redirected to the `return_url`.
        }

        setIsLoading(false);
    };

    console.log("message = ", message)
    return (
        <Fragment>
            {!isCardAdded.status ?
                <div id="payment-form" onClick={handleSubmit}>
                    <PaymentElement id="payment-element"/>
                    <FilledButtonStyle width="100%" height="60px" id="submit">
                        Redeem Now
                    </FilledButtonStyle>


                    {/* Show any error or success messages */}
                    {message && <div id="payment-message">{message}</div>}
                </div>
                :
                <p>{isCardAdded.msg}</p>}
        </Fragment>
    );
}


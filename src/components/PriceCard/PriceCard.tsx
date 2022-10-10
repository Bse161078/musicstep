import React, {useState} from "react";
import {Link} from "react-router-dom";
import {OutlineButtonStyle} from "../../styles/Common.style";
import axios from "axios";
import {PriceCardStyle} from "./PriceCard.style";
import {Loading} from '../../components/Loading'
import {useHistory} from "react-router-dom";

type PriceCardProps = {
    price: string;
    musicType: string;
    credits: string;
    eventsCount: string;
    createSubscribtion: '';
    payment_method: '';
    showPricing: '';
    setShowPricing: any;
    buyMoreCredit?: boolean
    isCreateSubscription?: boolean
    updateSubscription?: boolean;
    isSubscribed?: boolean

};


const PriceCard = (props: any) => {
    const history = useHistory()


    const openLink = (url:any) => {
        let a:any = document.createElement("a");
        document.body.appendChild(a);
        a.style = "display: none";
        a.href = url;
        a.click();
        document.body.removeChild(a);

    }

    const {price, musicType, credits, eventsCount, showPricing, setShowPricing, buyMoreCredit, updateSubscription, isSubscribed} = props;
    const [isLoading, setLoading] = useState(false)
    const createSubs = (subsname: any) => {
        const user: any = JSON.parse(localStorage.getItem("data") || "{}");

        axios.post('/v1/stripe/create-subscription', {
            id: user.id,
            paymentMethod: user.payment_method_id,
            subscriptionName: subsname
        }).then((res) => {
            setShowPricing()
            window.location.reload();
            // history.push("/explore-venue")
        })
            .catch((err) => {
                setLoading(false)
            })
    }
    const onSubscribePackage = (e: any, subscriptionType: String) => {
        setLoading(true)
        //setShowPricing(false)
        const user: any = JSON.parse(localStorage.getItem("data") || "{}");
        axios.post('/v1/stripe/pay-subscription', {id: user.id, subscription: subscriptionType}).then((response) => {
            setLoading(false);
            openLink(response.data.url)
        }).catch((err) => {
            setLoading(false)
        })
    }

    const onUpdateSubscription = (e: any, subscriptionType: String) => {
        setLoading(true)
        //setShowPricing(false)
        const user: any = JSON.parse(localStorage.getItem("data") || "{}");
        axios.post('/v1/stripe/update-subscription', {
            id: user.id,
            subscriptionName: subscriptionType
        }).then((response) => {
            setLoading(false)
            openLink(response.data.url)

        }).catch((err) => {
            setLoading(false)
        })
    }

    return (
        <PriceCardStyle>
            {isLoading && <Loading/>}
            <h1 className="price">{price}</h1>

            <h3 className="music-type">
                Music <span style={{color: musicType === "Credits" ? "black" : ''}}>{musicType}</span>
            </h3>

            <p className="credits">Credits: {credits}</p>

            <p className="events-info" style={{marginBottom: isSubscribed ? "130px" : "0px"}}>Events per
                month: {eventsCount}</p>
            <p style={{display: isSubscribed ? 'none' : "auto"}} className="additional-info">(Approximately)</p>


            <OutlineButtonStyle buttonType="dark"
                                style={{display: isSubscribed ? 'none' : "auto"}}
                                onClick={(e) => {
                                    if (localStorage.getItem("status") || buyMoreCredit || showPricing || updateSubscription) {
                                        if (updateSubscription) {
                                            onUpdateSubscription(e, musicType)
                                        }
                                        else if (buyMoreCredit) {
                                            history.push({
                                                pathname: `/create-credit-payment`,
                                                state: {buyCredit: parseInt(credits)}
                                            });
                                        } else if (showPricing === true)
                                            onSubscribePackage(e, musicType)
                                        else {
                                            props.payment_method ? props.createSubscription(props.payment_method, props.musicType) : onSubscribePackage(e, musicType)
                                        }
                                    } else {
                                        const subscription = {price, musicType, credits, eventsCount}
                                        localStorage.setItem("subscription", JSON.stringify(subscription));
                                        history.push("/free-trial");
                                    }
                                }}
            >That's Me</OutlineButtonStyle>
        </PriceCardStyle>
    );
};

export default PriceCard;

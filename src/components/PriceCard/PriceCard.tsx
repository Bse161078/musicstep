import React, {useState} from "react";
import {Link} from "react-router-dom";
import {OutlineButtonStyle} from "../../styles/Common.style";
import axios from "axios";
import {PriceCardStyle} from "./PriceCard.style";
import {Loading} from '../../components/Loading'
import { useHistory } from "react-router-dom";

type PriceCardProps = {
    price: string;
    musicType: string;
    credits: string;
    eventsCount: string;
    createSubscribtion: '';
    payment_method: '';
    showPricing: '';
    setShowPricing: any;
};

const PriceCard = (props: any) => {
  const history = useHistory()

    const {price, musicType, credits, eventsCount, showPricing, setShowPricing} = props;
    const [isLoading, setLoading] = useState(false)
    const createSubs = (subsname:any) => {
      const user: any = JSON.parse(localStorage.getItem("data") || "{}");

      axios.post('/v1/stripe/create-subscription', {
        id: user.id,
        paymentMethod:user.payment_method_id,
        subscriptionName:subsname
    }).then((res)=>{
     setShowPricing()
     window.location.reload(); 
     // history.push("/explore-venue")
    })
    .catch((err) => {
        setLoading(false)
    })
    }
    const onSubscribePackage = (e: any) => {
        setLoading(true)
        //setShowPricing(false)
        const user: any = JSON.parse(localStorage.getItem("data") || "{}");
        axios.post('/v1/stripe/pay-subscription', {id: user.id}).then((response) => {
            setLoading(false)
            window.open(response.data.url, '_blank');
        }).catch((err) => {
            setLoading(false)
        })
    }
    return (
        <PriceCardStyle  >
            {isLoading && <Loading/>}
            <h1 className="price">{price}</h1>

            <h3 className="music-type" >
                Music <span style={{color:musicType==="Credits"?"black":''}}>{musicType}</span>
            </h3>

            <p className="credits">Credits: {credits}</p>

            <p className="events-info">Events per month: {eventsCount}</p>
            <p className="additional-info">(Approximately)</p>


            <OutlineButtonStyle buttonType="dark"
                                onClick={(e) => {
                                    if (showPricing === true)
                                    createSubs(musicType)
                                    else {
                                        props.payment_method ? props.createSubscription(props.payment_method, props.musicType) : onSubscribePackage(e)
                                    }
                                }}
            >That's Me</OutlineButtonStyle>
        </PriceCardStyle>
    );
};

export default PriceCard;

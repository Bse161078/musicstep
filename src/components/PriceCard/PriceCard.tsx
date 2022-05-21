import React,{useState} from "react";
import { Link } from "react-router-dom";
import { OutlineButtonStyle } from "../../styles/Common.style";
import axios from "axios";
import { PriceCardStyle } from "./PriceCard.style";
import {Loading} from '../../components/Loading'
type PriceCardProps = {
  price: string;
  musicType: string;
  credits: string;
  eventsCount: string;
  createSubscribtion:'';
  payment_method:'';
  showPricing:'';
  setShowPricing:any;
};


const PriceCard = (props: any) => {
  const { price, musicType, credits, eventsCount,showPricing,setShowPricing } = props;
  const [isLoading,setLoading] = useState(false)
  const onSubscribePackage=(e:any)=>{
    setLoading(true)
    //setShowPricing(false)
    const user:any=JSON.parse(localStorage.getItem("data")||"{}");
    axios.post('/v1/stripe/pay-subscription',{id:user.id}).then((response)=>{
      setLoading(false)
      
        //console.log("data = ",response.data.clientSecret);
        window.open(response.data.url,'_blank');
    }).catch((err)=>{
      setLoading(false)
    })
  }
  return (
    <PriceCardStyle>
      {isLoading&&<Loading/>}
      <h1 className="price">{price}</h1>

      <h3 className="music-type">
        Music <span>{musicType}</span>
      </h3>

      <p className="credits">Credits: {credits}</p>

      <p className="events-info">Events per month: {eventsCount}</p>
      <p className="additional-info">(Approximately)</p>

     
        <OutlineButtonStyle buttonType="dark"
        onClick={(e)=>{
          if(showPricing===true)
          onSubscribePackage(e)
         else
          {props.payment_method?props.createSubscription(props.payment_method):
          onSubscribePackage(e)
          }
        }}
        >That's Me</OutlineButtonStyle>
    </PriceCardStyle>
  );
};

export default PriceCard;

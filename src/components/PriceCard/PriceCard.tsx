import React from "react";
import { Link } from "react-router-dom";
import { OutlineButtonStyle } from "../../styles/Common.style";

import { PriceCardStyle } from "./PriceCard.style";

type PriceCardProps = {
  price: string;
  musicType: string;
  credits: string;
  eventsCount: string;
};

const PriceCard = (props: PriceCardProps) => {
  const { price, musicType, credits, eventsCount } = props;

  return (
    <PriceCardStyle>
      <h1 className="price">{price}</h1>

      <h3 className="music-type">
        Music <span>{musicType}</span>
      </h3>

      <p className="credits">Credits: {credits}</p>

      <p className="events-info">Events per month: {eventsCount}</p>
      <p className="additional-info">(Approximately)</p>

      <Link to="/pricing/process-payment">
        <OutlineButtonStyle buttonType="dark">That's Me</OutlineButtonStyle>
      </Link>
    </PriceCardStyle>
  );
};

export default PriceCard;

import React from "react";
import { OutlineButtonStyle } from "../../styles/Common.style";

import { PriceCardStyle } from "./PriceCard.style";

const PriceCard = () => {
  return (
    <PriceCardStyle>
      <h1 className="price">$15</h1>

      <h3 className="music-type">
        Music <span>Dip</span>
      </h3>

      <p className="credits">Credits: 6</p>

      <p className="events-info">Events per month: 1</p>
      <p className="additional-info">(Approximately)</p>

      <OutlineButtonStyle buttonType="dark">That's Me</OutlineButtonStyle>
    </PriceCardStyle>
  );
};

export default PriceCard;

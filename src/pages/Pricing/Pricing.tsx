import React from "react";
import { PriceCard } from "../../components";

import { PricingStyle } from "./Pricing.style";

export default function Pricing() {
  return (
    <PricingStyle>
      <h1 className="pricing-heading">MusicPass Pricing</h1>

      <div className="prices-wrapper" style={{background:'yellow'}}>
        <PriceCard price="$15" musicType="Dip" credits="6" eventsCount="1" />
        <PriceCard
          price="$49"
          musicType="Lite"
          credits="23"
          eventsCount="2-3"
        />
        <PriceCard
          price="$99"
          musicType="Enthusiast"
          credits="48"
          eventsCount="3-4"
        />
        <PriceCard
          price="$139"
          musicType="Fan"
          credits="68"
          eventsCount="5-6"
        />
        <p>Hamzasss</p>
        <PriceCard
          price="$199"
          musicType="Pro"
          credits="100"
          eventsCount="8-10"
        />
      </div>

      <div className="divider" />

      <h4 className="subscribed-heading">Only for subscribed members</h4>
      <PriceCard
        price="$3"
        musicType="Credits"
        credits="1"
        eventsCount="You Choose"
      />
    </PricingStyle>
  );
}

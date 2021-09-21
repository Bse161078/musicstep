import React from "react";
import { PriceCard } from "../../components";

import { PricingStyle } from "./Pricing.style";

export default function Pricing() {
  return (
    <PricingStyle>
      <h1 className="pricing-heading">MusicPass Pricing</h1>

      <div className="prices-wrapper">
        <PriceCard />
        <PriceCard />
        <PriceCard />
        <PriceCard />
        <PriceCard />
      </div>

      <h4 className="subscribed-heading">Only for subscribed members</h4>
      <PriceCard />
    </PricingStyle>
  );
}

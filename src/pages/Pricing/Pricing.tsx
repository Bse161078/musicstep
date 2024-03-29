import React from "react";
import {PriceCard} from "../../components";

import {PricingStyle} from "./Pricing.style";

export default function Pricing(props: any) {

    const buyMoreCredit=props.location && props.location.state && props.location.state.buyMoreCredit;
    const updateSubscription=props.location && props.location.state && props.location.state.updateSubscription;
    return (
        <PricingStyle>
            <h1 className="pricing-heading">MusicPass Pricing</h1>

            <div className="prices-wrapper">
                <PriceCard price="$15" musicType="Dip" credits="6" eventsCount="1"
                           createSubscription={props.createSubscription} payment_method={props.payment_method}
                           showPricing={props.showPricing} setShowPricing={props.setShowPricing}
                           buyMoreCredit={buyMoreCredit}
                           isCreateSubscription={props.isCreateSubscription}
                           updateSubscription={updateSubscription}

                />
                <PriceCard
                    price="$49"
                    musicType="Lite"
                    credits="23"
                    eventsCount="2-3"
                    createSubscription={props.createSubscription} payment_method={props.payment_method}
                    showPricing={props.showPricing}
                    setShowPricing={props.setShowPricing}
                    buyMoreCredit={buyMoreCredit}
                    isCreateSubscription={props.isCreateSubscription}
                    updateSubscription={updateSubscription}
                />
                <PriceCard
                    price="$99"
                    musicType="Enthusiast"
                    credits="48"
                    eventsCount="3-4"
                    createSubscription={props.createSubscription} payment_method={props.payment_method}
                    showPricing={props.showPricing}
                    setShowPricing={props.setShowPricing}
                    buyMoreCredit={buyMoreCredit}
                    isCreateSubscription={props.isCreateSubscription}
                    updateSubscription={updateSubscription}
                />
                <PriceCard
                    price="$149"
                    musicType="Fan"
                    credits="68"
                    eventsCount="5-6"
                    createSubscription={props.createSubscription} payment_method={props.payment_method}
                    showPricing={props.showPricing}
                    setShowPricing={props.setShowPricing}
                    buyMoreCredit={buyMoreCredit}
                    isCreateSubscription={props.isCreateSubscription}
                    updateSubscription={updateSubscription}
                />
                <PriceCard
                    price="$199"
                    musicType="Pro"
                    credits="100"
                    eventsCount="8-10"
                    createSubscription={props.createSubscription} payment_method={props.payment_method}
                    showPricing={props.showPricing}
                    setShowPricing={props.setShowPricing}
                    buyMoreCredit={buyMoreCredit}
                    isCreateSubscription={props.isCreateSubscription}
                    updateSubscription={updateSubscription}
                />
            </div>

            <div className="divider"/>

            <h4 className="subscribed-heading">Only for subscribed members</h4>
            <PriceCard
                price="$3"
                musicType="Add"
                credits="1"
                eventsCount="You Choose"
                createSubscription={props.createSubscription} payment_method={props.payment_method}
                showPricing={props.showPricing}
                buyMoreCredit={buyMoreCredit}
                isCreateSubscription={props.isCreateSubscription}
                updateSubscription={updateSubscription}
                isSubscribed={true}
            />
        </PricingStyle>
    );
}

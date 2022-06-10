import React from "react";
import { MusicIcon } from "../../assets";
import { BillingInformationStyle } from "./BillingInformation.style";

type BillingInformationProps = {
  leftHeading?: React.ReactNode;
};

const BillingInformation = (props: BillingInformationProps) => {
  const { leftHeading } = props;
    const selectedSubscription = localStorage.getItem("subscription") ?
        JSON.parse(localStorage.getItem("subscription") || "{}"):
        {credits: "48",eventsCount: "3-4",musicType: "Enthusiast",price: "$99"};

  return (
    <BillingInformationStyle>
      <h2 className="heading">{leftHeading}</h2>

      <div className="icon-with-description">
        <MusicIcon />
        <p className="description">
            {`${selectedSubscription.credits} Credits To Book As Many As ${selectedSubscription.eventsCount} Reservations.`}
        </p>
      </div>

      <div className="icon-with-description">
        <img alt="icon" src="/images/icons/reminder-icon.svg" />
        <p className="description">
          We'll remind you two days before your trial ends.
        </p>
      </div>

      <div className="icon-with-description">
        <img alt="icon" src="/images/icons/lock-icon.svg" />
        <p className="description">You're never locked in. Cancel anytime.</p>
      </div>

      <div className="billing-footer">
        <div className="billing-footer-wrapper">
          <p className="footer-info">30 Days Package</p>
          <p className="footer-title">Due After 7 days</p>
        </div>
        <div className="billing-footer-wrapper">
          <p className="footer-info">{selectedSubscription.price}</p>
          <p className="footer-title">{selectedSubscription.price}</p>
        </div>
      </div>
    </BillingInformationStyle>
  );
};

export default BillingInformation;

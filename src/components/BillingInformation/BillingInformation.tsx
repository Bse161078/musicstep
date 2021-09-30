import React from "react";
import { MusicIcon } from "../../assets";
import { BillingInformationStyle } from "./BillingInformation.style";

type BillingInformationProps = {
  leftHeading?: React.ReactNode;
};

const BillingInformation = (props: BillingInformationProps) => {
  const { leftHeading } = props;

  return (
    <BillingInformationStyle>
      <h2 className="heading">{leftHeading}</h2>

      <div className="icon-with-description">
        <MusicIcon />
        <p className="description">
          68 Credits To Book As Many As 5-6 Reservations.
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
          <p className="footer-title">Due Today</p>
        </div>
        <div className="billing-footer-wrapper">
          <p className="footer-info">$139.00</p>
          <p className="footer-title">$139.00</p>
        </div>
      </div>
    </BillingInformationStyle>
  );
};

export default BillingInformation;

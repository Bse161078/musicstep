import React, { useMemo, useState } from "react";
import {
  BillingInformation,
  RedeemOfferForm,
  RedeemOfferStep2Form,
  StartTrialWrapper,
  TrialBillingInfoForm,
  TrialForm,
  TrialGeneralInfo,
  TrialSetPassword,
} from "../../components";
import { FreeTrialStyle } from "./FreeTrial.style";

export default function FreeTrial() {
  const [currentForm, setCurrentForm] = useState("trial-info");

  const CurrentTrialStep = useMemo(() => {
    switch (currentForm) {
      case "trial-info":
        return <TrialForm setCurrentForm={setCurrentForm} />;

      case "general-info":
        return <TrialGeneralInfo setCurrentForm={setCurrentForm} />;

      case "set-password":
        return <TrialSetPassword setCurrentForm={setCurrentForm} />;

      case "redeem-offer":
        return <RedeemOfferForm setCurrentForm={setCurrentForm} />;

      case "redeem-offer-verify":
        return <RedeemOfferStep2Form setCurrentForm={setCurrentForm} />;

      case "trial-billing-information":
        return <TrialBillingInfoForm />;
      default:
        return <TrialForm setCurrentForm={setCurrentForm} />;
    }
  }, [currentForm]);
  return (
    <FreeTrialStyle>
      <StartTrialWrapper
        leftContent={
          currentForm === "trial-billing-information" ? (
            <BillingInformation
              leftHeading={
                <>
                  Music <span>Fan</span> Includes
                </>
              }
            />
          ) : null
        }
      >
        {CurrentTrialStep}
      </StartTrialWrapper>
    </FreeTrialStyle>
  );
}

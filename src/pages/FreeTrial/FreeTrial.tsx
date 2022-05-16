import React, {useEffect, useMemo, useState} from "react";
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
import { useHistory } from "react-router-dom";
import { FreeTrialStyle } from "./FreeTrial.style";
import { usePartnerContext } from "../../context/partnerContext ";
import { useLoginContext } from "../../context/authenticationContext";

export default function FreeTrial() {
  const history = useHistory();
  const loginContext = useLoginContext();

  let initialLoadFormName = "trial-info";
  let stateObj: any = history.location?.state;

  if (stateObj && stateObj.previousPath.includes("/partner-detail")) {
    console.log(stateObj);
    initialLoadFormName = "set-password";
  }
  const [currentForm, setCurrentForm] = useState(initialLoadFormName);


  useEffect(()=>{
      const clientSecret = new URLSearchParams(window.location.search).get(
          "setup_intent_client_secret"
      );
      console.log("clientSecret = ",clientSecret);
      if(clientSecret && clientSecret.length>0)
      setCurrentForm("trial-billing-information")
  },[])

  if (
    loginContext.state.data &&
    loginContext.state.isLoggedIn &&
    // state.authToken &&
    loginContext.state.data.role === "user" &&
    loginContext.state.data.isOrganizer === false &&
    currentForm === "trial-info"
  ) {
    history.push("/explore-venue");
  }

  const { dispatch } = usePartnerContext();
  const resetPartnerForm = () => {
    dispatch({
      type: "RESETFROM",
      payload: {},
    });
  };


  const CurrentTrialStep = useMemo(() => {
      console.log(currentForm)
    switch (currentForm) {
      case "trial-info":
        return <TrialForm setCurrentForm={setCurrentForm} />;

      case "general-info":
        return <TrialGeneralInfo setCurrentForm={setCurrentForm} />;

      case "set-password":
        return (
          <TrialSetPassword
            partnerId={stateObj && stateObj.partnerId}
            resetPartnerForm={resetPartnerForm}
            setCurrentForm={setCurrentForm}
          />
        );

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

  console.log("current form = ",currentForm)
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

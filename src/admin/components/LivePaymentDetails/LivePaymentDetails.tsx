import { LivePaymentDetailsStyle } from "./LivePaymentDetails.style";
import React from "react";

const LivePaymentDetails = () => {
  return (
    <LivePaymentDetailsStyle>
      <p className="no-drafts">No Live Events Associated.</p>
    </LivePaymentDetailsStyle>
  );
};

export default LivePaymentDetails;

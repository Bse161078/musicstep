import { DraftsStyle } from "./DraftPaymentDetails.styles";
import React from "react";

const Drafts = () => {
  return (
    <DraftsStyle>
      <p className="no-drafts">No Draft Events Associated.</p>
    </DraftsStyle>
  );
};

export default Drafts;

import React, {useState} from "react";
import { MessageModal } from "../../../components";
import { FilledButtonStyle } from "../../../styles/Common.style";

import { PastPaymentDetailsStyle } from "./PastPaymentDetails.style";

const PastPaymentDetails = () => {
 
  return (
    <PastPaymentDetailsStyle>
      <div className="payment-wrapper">
        <div className="title-date">
          <p className="payment-title">Visualize Plug-And-Play Technologies</p>
          <p className="payment-timeDate">July 16Th, 01:38:17 PM</p>
        </div>
        <div>
          <FilledButtonStyle
            buttonType="dark"
            color="#FFF"
            width="100px"
            height="43px"
          >
            Manage
          </FilledButtonStyle>
        </div>
      </div>
      <div  className="payment-wrapper">
        <div className="title-date">
          <p className="payment-title">Visualize Plug-And-Play Technologies</p>
          <p className="payment-timeDate">July 16Th, 01:38:17 PM</p>
        </div>
        <div>
          <FilledButtonStyle
            color="#FFF"
            width="100px"
            height="43px"
            
          >
            Manage
          </FilledButtonStyle>
        
        </div>
      </div>
    </PastPaymentDetailsStyle>
  );
};
export default PastPaymentDetails;

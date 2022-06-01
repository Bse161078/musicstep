import React from "react";
import Grid from "@mui/material/Grid/Grid";
import {StripeWrapper} from "./StripeWrapper";

const CreditPaymentSuccess = () => {
    return (
        <StripeWrapper>
            <Grid container justifyContent="center" style={{width:"100%"}}>
                <h1>Thanks for purchasing credits. Your credits are in process.</h1>
            </Grid>
        </StripeWrapper>

    )
}


export default CreditPaymentSuccess;
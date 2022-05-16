import React from "react";
import Grid from "@mui/material/Grid/Grid";
import {StripeWrapper} from "./StripeWrapper";

const SubscriptionSuccess = () => {
    return (
        <StripeWrapper>
            <Grid container justifyContent="center" style={{width:"100%"}}>
                <h1>Thanks for subscribing the subscription.</h1>
            </Grid>
        </StripeWrapper>

    )
}


export default SubscriptionSuccess;
import React from "react";
import Grid from "@mui/material/Grid/Grid";
import {StripeWrapper} from "./StripeWrapper";

const SubscriptionCancel = () => {
    return (
        <StripeWrapper>
            <Grid container justifyContent="center" style={{width:"100%"}}>
                <h1>You have cancelled the subscription.</h1>
            </Grid>
        </StripeWrapper>

    )
}


export default SubscriptionCancel;
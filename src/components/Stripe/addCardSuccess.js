import React from "react";
import Grid from "@mui/material/Grid/Grid";
import {StripeWrapper} from "./StripeWrapper";

const AddCardSuccess = () => {
    return (
        <StripeWrapper>
            <Grid container justifyContent="center" style={{width:"100%"}}>
                <h1>Card added successfully.</h1>
            </Grid>
        </StripeWrapper>

    )
}


export default AddCardSuccess;
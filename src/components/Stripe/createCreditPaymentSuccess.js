import React, {useEffect, useState} from "react";
import Grid from "@mui/material/Grid/Grid";
import {StripeWrapper} from "./StripeWrapper";
import axios from "axios";
import {useLoginContext} from "../../context/authenticationContext";
import Loading from "../Loading/Loading";
import {NavbarWithSearch} from "../NavbarWithSearch";

const CreditPaymentSuccess = () => {
    const {dispatch, state} = useLoginContext();
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({
        credits: 0,
        subscriptionEndDate: null
    })


    useEffect(() => {
        getUser();
    }, [])
    const getUser = () => {
        setLoading(true);
        const user = JSON.parse(localStorage.getItem("data") || "{}");
        axios.get(`v1/users/${user.id}`, {
            headers: {Authorization: `Bearer ${state.authToken}`},
        })
            .then((res) => {

                setUser(res.data);
                setLoading(false);

            }).catch((e) => {
            setLoading(false);

        })

    }

    return (
        <div>
            {loading && <Loading/>}
            <NavbarWithSearch userCredit={user.credits}/>
            <StripeWrapper>
                <Grid container justifyContent="center" style={{width: "100%"}}>
                    <h1>Credits have been added. Please go back to reservation page.</h1>
                </Grid>
            </StripeWrapper>
        </div>

    )
}


export default CreditPaymentSuccess;
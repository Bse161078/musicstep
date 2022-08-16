import React, {useEffect, useState} from "react";
import {HeadingWithContent} from "../../components";
import {HelpCenterStyle} from "./HelpCenter.style";
import {useHistory} from "react-router";
import {Grid} from "@mui/material";

export default function HelpCenter() {






    const history = useHistory();
    return (
        <HelpCenterStyle>
            <Grid container style={{marginTop:10}}>
                <Grid container item xs={3.5} direction="column" textAlign="center"
                      onClick={(e)=>history.push('/subscription')}
                      style={{cursor:"pointer",background:"#F7F7F7",padding:10,borderRadius:20}}>
                    <Grid item>
                        <img style={{width:100,height:100}} src="/images/help-center/subscription-plans.png"/>
                    </Grid>
                    <Grid item>
                        <p style={{fontSize:22,fontWeight:"bold",marginTop:10}}>Subscription Plans</p>
                    </Grid>
                </Grid>
                <Grid item xs={0.5}></Grid>
                <Grid container item xs={3.5} direction="column" textAlign="center"
                      onClick={(e)=>history.push('/reservation')}
                      style={{cursor:"pointer",background:"#F7F7F7",padding:10,borderRadius:20}}>
                    <Grid item>
                        <img style={{width:100,height:100}} src="/images/help-center/reservation.png"/>
                    </Grid>
                    <Grid item>
                        <p style={{fontSize:22,fontWeight:"bold",marginTop:10}}>Reservations</p>
                    </Grid>
                </Grid>
                <Grid item xs={0.5}></Grid>
                <Grid container item xs={3.5} direction="column" textAlign="center"
                      onClick={(e)=>history.push('/credit')}
                      style={{cursor:"pointer",background:"#F7F7F7",padding:10,borderRadius:20}}>
                    <Grid item>
                        <img style={{width:100,height:100}} src="/images/help-center/credits.png"/>
                    </Grid>
                    <Grid item>
                        <p style={{fontSize:22,fontWeight:"bold",marginTop:10}}>Credits</p>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container style={{marginTop:30}} justifyContent="center">
                <Grid container item xs={3.5} direction="column" textAlign="center"
                      style={{background:"#F7F7F7",padding:10,borderRadius:20,cursor:"pointer"}}
                      onClick={(e)=>history.push('/billing')}>
                    <Grid item>
                        <img style={{width:100,height:100}} src="/images/help-center/billing.png"/>
                    </Grid>
                    <Grid item>
                        <p style={{fontSize:22,fontWeight:"bold",marginTop:10}}>Billing</p>
                    </Grid>
                </Grid>
                <Grid item xs={0.5}></Grid>
                <Grid container item xs={3.5} direction="column" textAlign="center"
                      onClick={(e)=>history.push('/promotion')}
                      style={{background:"#F7F7F7",cursor:"pointer",padding:10,borderRadius:20}}>
                    <Grid item>
                        <img style={{width:100,height:100}} src="/images/help-center/promotion.png"/>
                    </Grid>
                    <Grid item>
                        <p style={{fontSize:22,fontWeight:"bold",marginTop:10}}>Promotions</p>
                    </Grid>
                </Grid>
                <Grid item xs={0.5}></Grid>
            </Grid>

            <Grid container style={{marginTop:50,}} direction="column" alignItems="center">
                <Grid item>
                    <p style={{fontSize:32,fontWeight:"bold",marginTop:5}}>Still Need Help?</p>
                </Grid>
                <Grid item>
                    <p style={{fontSize:17}}>Contact us at:</p>
                </Grid>
                <Grid item>
                    <p style={{fontSize:17}}><a href={"mailto:contact@musicpassonline.com"}>contact@musicpassonline.com.</a></p>
                </Grid>
                <Grid item>
                    <p style={{fontSize:17,opacity:0.9}}>Turn-around times may vary</p>
                </Grid>
            </Grid>

        </HelpCenterStyle>
    );
}

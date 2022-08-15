import React from "react";
import {BillingStyle} from "./billing.style";
import {useHistory} from "react-router";
import {HeadingWithContentStyle} from "../../components/HeadingWithContent/HeadingWithContent.style";
import {Link} from "react-router-dom";
import {LeftChevronIcon} from "../../assets";

export default function Billing() {
    const history = useHistory();

    const content=<>
        <p className="description-without-margin">On the web:</p>
        <p className="description-without-margin" style={{marginTop:"-20px"}}>Go to your Account Settings </p>
        <p className="description-without-margin" style={{marginTop:"-20px"}}>On the left side of the screen select ‘Billing’ </p>
        <p className="description-without-margin" style={{marginTop:"-20px"}}>Select "Update Billing Details"</p>
        <p className="description-without-margin" style={{marginTop:"-20px"}}>Update your payment method and billing information, then hit ‘Save changes’</p>
        <p className="description-without-margin">If you're having trouble updating your payment information, there are a couple of ways to easily troubleshoot. Try logging into a different browser or clearing your cache and browsing history. </p>
        <p className="description-sub-heading">{"Receipt for MusicPass payment"}</p>
        <p className="description-without-margin">Log into your MusicPass account.</p>
        <p className="description-without-margin" style={{marginTop:"-20px"}}>Click on your initial from the right hand side of the menu bar. </p>
        <p className="description-without-margin" style={{marginTop:"-20px"}}>Select Membership from the dropdown. </p>
        <p className="description-without-margin" style={{marginTop:"-20px"}}>Click on Recent charges on the left hand side of the screen. </p>
        <p className="description-without-margin" style={{marginTop:"-20px"}}>Scroll down to the bottom of the page and click “Print this page.” </p>
        <p className="description-without-margin"><span><a href={"mailto:contact@musicpassonline.com"}>Still need help? Contact us here.</a></span></p>

    </>;

    return (
        <BillingStyle>
            <HeadingWithContentStyle>
                <Link to="/">
                    <div className="button-wrapper" onClick={(e)=>history.goBack()}>
                        <LeftChevronIcon/> Back To Previous Page
                    </div>
                </Link>

                <h2 className="heading">{"Billing"}</h2>
                {content}
            </HeadingWithContentStyle>
        </BillingStyle>
    );
}

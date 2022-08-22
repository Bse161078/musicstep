import React, {useEffect, useState} from "react";
import {SubscriptionStyle} from "./subscription.style";
import {useHistory} from "react-router";
import {HeadingWithContentStyle} from "../../components/HeadingWithContent/HeadingWithContent.style";
import {Link} from "react-router-dom";
import {LeftChevronIcon} from "../../assets";

export default function Subscription() {
    const history = useHistory();
    const [refund,setRefund]=useState(null);

    useEffect(() => {
        const refundEle: any = document && document?.getElementById('refund');
        setRefund(refundEle);
    }, [])


    useEffect(()=>{
        var url = new URL(window.document.URL);
        var refundPolicy = url.searchParams.get("refund-policy");
        var cancellation = url.searchParams.get("cancellation");

        if(refundPolicy && refund){
            const refundEle: any = document && document?.getElementById('refund');
            refundEle.scrollIntoView();
        }

        if(cancellation){
            const cancellation: any = document && document?.getElementById('cancellation');
            cancellation.scrollIntoView();

        }

    },[refund])

    const content=<>
        <p className="description-sub-heading">Subscription Plans</p>
        <p className="description-without-margin">We offer different subscription tiers based on your appetite for music events.</p>
        <p className="description-without-margin">Our most minimal subscription plan is called Music Dip. All our other plans step-up from there, offering more credits with each tier:</p>
        <p className="description-without-margin" style={{marginTop:"-20px"}}>Music Lite</p>
        <p className="description-without-margin" style={{marginTop:"-20px"}}>Music Enthusiast</p>
        <p className="description-without-margin" style={{marginTop:"-20px"}}>Music </p>
        <p className="description-without-margin" style={{marginTop:"-20px"}}>Music Pro</p>
        <p className="description-without-margin">Please see our <a href="/pricing">Pricing Page</a> for details.</p>
        <p className="description-sub-heading" >Subscription Offerings</p>
        <p className="description-without-margin">The events listed on the MusicPass platform are operated by the Partners we work with.</p>
        <p className="description-without-margin">Don’t see an event or partner listed? Send us an email at <span><a href={"mailto:contact@musicpassonline.com"}>contact@musicpassonline.com.</a></span></p>
        <p className="description-without-margin">If you are an interested Partner, please check out our <a href={"/partner-login"}>Partner Portal</a>.</p>
        <p className="description-sub-heading">Changing Plans</p>
        <p className="description-without-margin">Access your Account Settings to change plans.</p>
        <p className="description-without-margin">Upgrading a plan involves immediate access to more credits. The date of your upgrade activates a new billing cycle, along with a new charge for the price of your new plan.</p>
        <p className="description-without-margin">Downgrading a plan does not change a billing cycle. When the downgrade is requested, it will be fulfilled on the next billing cycle.</p>
        <p className="description-without-margin">Whether you upgrade or downgrade, renewals will continue each month for the plan chosen unless another plan change is made.</p>
        <p className="description-without-margin">Plans are subject to change at any time and changes must be submitted 24 hours prior to your next cycle date in order to take effect. Current membership plans can be referenced in your Membership settings. </p>
        <p className="description-without-margin">To change your plan:</p>
        <p className="description-without-margin" style={{marginTop:"-20px"}}>Navigate to your Membership Settings. </p>
        <p className="description-without-margin" style={{marginTop:"-20px"}}>Select ‘Manage membership’. </p>
        <p className="description-without-margin" style={{marginTop:"-20px"}}>Select your new plan.</p>
        <p className="description-sub-heading" >Reactivate Plan</p>
        <p className="description-without-margin">You can reactivate your membership at any time through your Profile page, where you can reference current membership options available in your location.</p>
        <p className="description-without-margin" id="refund">Your account will activate at the time of sign up and will renew on the same date each month. </p>
        <p className="description-without-margin">There is no reactivation fee for resuming your MusicPass membership. </p>
        <p className="description-sub-heading">Refund Policy</p>
        <p className="description-without-margin">We do not offer refunds for months of membership or additional credit purchases, including add-on credits. </p>
        <p className="description-without-margin">ClassPass memberships automatically renew each month. Any changes made to your membership will apply to your upcoming cycle. We are unable to retroactively make changes to your account. </p>
        <p className="description-without-margin">If you’re interested in cancelling your membership, please submit a cancellation request at least 24 hours prior to your cycle date. You can reference your cycle date in your Account Settings. More information on how to cancel your account can be found here. </p>
        <p className="description-without-margin">Our full refund policy can be viewed in <a href={"/terms-of-use?3c=true"}>Section 3c. of our Terms of Use</a>.</p>
        <p className="description-without-margin" id={"cancellation"}>ClassPass trials and memberships automatically renew each month on your cycle date. You can cancel your ClassPass trial or membership at any time. </p>
        <p className="description-without-margin">Cancellations need to be requested at least 24 hours prior to your cycle date.</p>
        <p className="description-without-margin">After a cancellation request is made you’ll receive a cancellation confirmation email from our Customer Experience team. If you do not receive a cancellation confirmation email, your request was not received.</p>
        <p className="description-without-margin">If you are on a Commitment Plan, please contact us with any membership questions. </p>
        <p className="description-without-margin">To cancel your membership: </p>
        <p className="description-without-margin">On the website:</p>
        <p className="description-without-margin">Navigate to your Account Settings</p>
        <p className="description-without-margin" style={{marginTop:"-20px"}}>Click the 'Cancel my membership' link</p>
        <p className="description-without-margin" style={{marginTop:"-20px"}}>Follow the prompts to confirm your cancellation request</p>
        <p className="description-sub-heading">Cancellation Fees</p>
        <p className="description-without-margin">There is no fee to cancel your ClassPass membership. Once an account is cancelled, you no longer have access to any unused credits, including rollover credits. </p>
        <p className="description-without-margin"><span><a href={"mailto:contact@musicpassonline.com"}>Still need help? Contact us here.</a></span></p>

    </>;

    return (
        <SubscriptionStyle>
            <HeadingWithContentStyle>
                <Link to="/">
                    <div className="button-wrapper" onClick={(e)=>history.goBack()}>
                        <LeftChevronIcon/> Back To Previous Page
                    </div>
                </Link>

                <h2 className="heading">{"Subscription Plans"}</h2>
                {content}
            </HeadingWithContentStyle>
        </SubscriptionStyle>
    );
}

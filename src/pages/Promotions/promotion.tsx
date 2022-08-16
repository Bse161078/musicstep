import React, {useEffect, useState} from "react";
import {PromotionStyle} from "./promotion.style";
import {useHistory} from "react-router";
import {HeadingWithContentStyle} from "../../components/HeadingWithContent/HeadingWithContent.style";
import {Link} from "react-router-dom";
import {LeftChevronIcon} from "../../assets";

export default function Promotion() {
    const history = useHistory();
    const [refund,setRefund]=useState(null);

    useEffect(() => {
        const refundEle: any = document && document?.getElementById('refund');
        setRefund(refundEle);
    }, [])


    useEffect(()=>{
        var url = new URL(window.document.URL);
        var refundPolicy = url.searchParams.get("refund-policy");

        if(refundPolicy && refund){
            const refundEle: any = document && document?.getElementById('refund');
            refundEle.scrollIntoView();
        }
    },[refund])

    const content=<>
        <p className="description-sub-heading">Trial Membership</p>
        <p className="description-without-margin">For a limited time, you can try MusicPass for free. The trial is only available for new customers who have never had a MusicPass account before.</p>
        <p className="description-without-margin">The day of trial sign-up activates the trial membership. Please wait to sign-up if you aren’t ready to try MusicPass.</p>
        <p className="description-without-margin">The end of a trial membership triggers a paid membership plan. The plan you will automatically renew to is stated when you sign up for your trial.</p>
        <p className="description-without-margin">All event reservations, even within the trial membership, are subject to our event cancellation policy.</p>
        <p className="description-without-margin">The number of credits needed to book an event may change based on a number of factors.</p>
        <p className="description-without-margin">If you’d like to change your membership plan for your next cycle, you can do so in your Membership settings.</p>
        <p className="description-without-margin">Don’t want to continue with your MusicPass membership? You can cancel at anytime.</p>
        <p className="description-sub-heading">Other Promotions</p>
        <p className="description-without-margin">We do not offer a student, first-responder, or military discount at this time.</p>
        <p className="description-without-margin"></p>
        <p className="description-without-margin"></p>
        <p className="description-without-margin"></p>
        <p className="description-without-margin"></p>
        <p className="description-without-margin"></p>
        <p className="description-without-margin"></p>
        <p className="description-without-margin"></p>
        <p className="description-without-margin"></p>
        <p className="description-without-margin"></p>
        <p className="description-without-margin"></p>
        <p className="description-without-margin"></p>
        <p className="description-without-margin"></p>
        <p className="description-without-margin"></p>

    </>;

    return (
        <PromotionStyle>
            <HeadingWithContentStyle>
                <Link to="/">
                    <div className="button-wrapper" onClick={(e)=>history.goBack()}>
                        <LeftChevronIcon/> Back To Previous Page
                    </div>
                </Link>

                <h2 className="heading">{"Promotions"}</h2>
                {content}
            </HeadingWithContentStyle>
        </PromotionStyle>
    );
}

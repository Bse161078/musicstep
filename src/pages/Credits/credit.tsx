import React, {useEffect, useState} from "react";
import {CreditStyle} from "./credit.style";
import {useHistory} from "react-router";
import {HeadingWithContentStyle} from "../../components/HeadingWithContent/HeadingWithContent.style";
import {Link} from "react-router-dom";
import {LeftChevronIcon} from "../../assets";

export default function Credit() {
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
        <p className="description-sub-heading">Credit Roll-Overs</p>
        <p className="description-without-margin">This is how it works.</p>
        <p className="description-without-margin">Rolling over un-used credits from a paid subscription month to the consecutive following month (“next month”) applies if a MusicPass member remains active and on a paid plan. The amount of un-used credits that can be rolled over depends on the transition from plan to plan:</p>
        <p className="description-without-margin" style={{marginLeft:40}}>1) Keeping the same paid plan from one month to the next allows for a maximum roll-over equivalent to the next month’s subscription.</p>
        <p className="description-without-margin">For example, Emily is currently on the 50-credit Music Enthusiast plan. Next month she is going to also be on the 50-credit Music Enthusiast plan. She can rollover at maximum 50 credits, for an eligible total of 100 credits next month.</p>
        <p className="description-without-margin" style={{marginLeft:40}}>2) Downgrading from one plan to another the next month allows for a maximum roll-over equivalent to the next month’s subscription.</p>
        <p className="description-without-margin">Using the same example, Emily decides she wants to downgrade her subscription. She is currently on the 50-credit Music Enthusiast plan. Next month she is going to be on the 25-credit Music Lite plan. She can rollover at maximum 25 credits, for an eligible total of 50 credits next month.</p>
        <p className="description-without-margin" style={{marginLeft:40}}>3) Upgrading from one plan to another the next month allows for a maximum roll-over equivalent to the next month’s subscription.</p>
        <p className="description-without-margin">Emily decides she wants to upgrade her subscription. She is currently on the 50-credit Music Enthusiast plan. Next month she is going to be on the 99-credit Music Pro plan. She can rollover at maximum 99 credits, for an eligible total of 149 credits next month.</p>
        <p className="description-without-margin" style={{marginLeft:40}}>4) Cancelling a subscription from one plan to none the next month allows for a maximum of zero roll-over.</p>
        <p className="description-without-margin">Emily decides to cancel her monthly subscription. At the end of her current subscription, all remaining credits are forfeited.</p>
        <p className="description-without-margin">Please note the rollover of un-used credits can take up to 72 hours to appear in your account after renewal.</p>
        <p className="description-sub-heading">Purchasing More Credits</p>
        <p className="description-without-margin">There is a way to buy additional credits (“add-on credits”). The add-on credits, upon purchase, will be available immediately and your cycle date won’t change.</p>
        <p className="description-without-margin">All credit purchases are final as noted in the purchase flow. Learn more about our Refund Policy here.</p>
        <p className="description-without-margin">If you have credits remaining at the end of your cycle, you can roll over up to the number of credits in your upcoming plan. Learn more about our Rollover Policy above.</p>
        <p className="description-sub-heading">Remaining Credits</p>
        <p className="description-without-margin">MusicPass will adjust your remaining credits after you have booked or cancelled a reservation. Any upcoming reservations you’ve already made will be deducted from the number of credits you have remaining.</p>
        <p className="description-without-margin">Credits are deducted from your account based on the cycle the class takes place in, not the cycle that you booked the class in.</p>
        <p className="description-without-margin">If you have credits remaining at the end of your cycle, you can roll over up to the number of credits in your upcoming plan. Learn more about our Rollover Policy above.</p>
        <p className="description-without-margin">You may not transfer, trade, or otherwise exchange MusicPass credits.</p>
    </>;

    return (
        <CreditStyle>
            <HeadingWithContentStyle>
                <Link to="/">
                    <div className="button-wrapper" onClick={(e)=>history.goBack()}>
                        <LeftChevronIcon/> Back To Previous Page
                    </div>
                </Link>

                <h2 className="heading">{"Credits"}</h2>
                {content}
            </HeadingWithContentStyle>
        </CreditStyle>
    );
}

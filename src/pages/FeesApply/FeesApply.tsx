import React from "react";
import {HeadingWithContent} from "../../components";
import {FeesApplyStyle} from "./FeesApply.style";
import {useHistory} from "react-router";

export default function FeesApply() {
    const history = useHistory();

    return (
        <FeesApplyStyle>
            <HeadingWithContent
                handleButtonClick={() => {
                    history.goBack()
                }}
                heading="Fees Apply"
                content={[
                    "Reservation Cancellation Fees",
                    "To ensure the MusicPass platform is working as intended for our Partners and for our Members, we enforce a reservation cancellation penalty. This is to maintain integrity. Incurred fees will appear on your bank statement 7-10 business days after the reservation date. ",
                    "No fee: In-person reservations can be cancelled up to 24 hours prior to start time with no charge.",
                    "Late-to-Cancel Fee: Something happens within 24 hours of the event, and now you can’t make it. The credits you used to book the reservation are automatically returned to your account, and a late-to-cancel fee of $5 is incurred. From time to time we may review and/or update these fees. The latest fee will be noted in the Cancellation Policy section of the event/appointment page or otherwise before you make a reservation.",
                    "Never-Made-It Fee: If you miss a reservation without cancelling, the credits used to book will be automatically returned to your account. A missed reservation fee will be charged for select reservations if a cancellation is not made prior to start time. A never-made-it fee of $10 is incurred. From time to time we may review or update these fees. The applicable fee will be noted in the Cancellation Policy section of the event/appointment page or otherwise before you make a reservation.",
                    "Switching Reservations",
                    "We are not able to transfer your reservation from one event to another, even if it's at the same venue.\n" +
                    "\n" +
                    "In order to switch your reservation, you will first need to cancel your original reservation and then book the event that you plan to attend on MusicPass. \n" +
                    "\n" +
                    "If you cancel your original event within the late cancellation window, you'll incur a fee.\n" +
                    "All changes should be made directly through your MusicPass account, not through the studio.\n",
                    "Bad Weather",
                    "We recommend that you contact the event host directly to inquire if they are still holding the event.",
                    "If the event is proceeding as normal and you choose not to attend, please cancel your reservation directly through your MusicPass account. A cancellation fee may apply.",
                    "If the event is no longer happening due to inclement weather and the event is still listed in your upcoming reservations, please reach out to us.",
                    "Event Cancelled",
                    "Things happen, like bad weather, which cause an event to be cancelled. We encourage all partners to provide as much advance notice as possible if and when they need to cancel an upcoming event.",
                    "As soon as MusicPass is made aware of the event cancellation, you will receive a notification within your Account profile. Any credits used to book the event will be automatically returned to your account and can be used towards a future reservation. No cancellation fees will be incurred on part of the MusicPass subscriber.",
                    "If an event was cancelled and you were not informed, please contact us here, so we can rectify the situation and ensure any credits used towards the reservation are returned to you as soon as possible.",
                ]}
            />
        </FeesApplyStyle>
    );
}

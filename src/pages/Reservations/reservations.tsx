import React, {useEffect, useState} from "react";
import {ReservationStyle} from "./reservation.style";
import {useHistory} from "react-router";
import {HeadingWithContentStyle} from "../../components/HeadingWithContent/HeadingWithContent.style";
import {Link} from "react-router-dom";
import {LeftChevronIcon} from "../../assets";

export default function Reservation() {
    const history = useHistory();

    const [reservation,setReservation]=useState(null);


    useEffect(() => {
        const reservation: any = document && document?.getElementById('cancel');
        setReservation(reservation);
    }, [])


    useEffect(()=>{
        var url = new URL(window.document.URL);
        var feesApply = url.searchParams.get("cancel");

        if(feesApply && reservation){
            const reservation: any = document && document?.getElementById('cancel');
            reservation.scrollIntoView();
        }
    },[reservation])


    const content=<>
        <p className="description-sub-heading">Search for an Event</p>
        <p className="description-without-margin">You can search for Partners, Venues, and Events on the web. You can search for events by location, genre, partner, venue, time, credits, and amenities. If you don't see an event you’re looking for, <a href={"/partner-signup"}>you can submit a partnership request here!</a> </p>
        <p className="description-sub-heading">Go to our search page</p>
        <p className="description-without-margin">In the search bar at the top of the screen type in the activity, partner, or venue name.</p>
        <p className="description-without-margin">When you browse via the ‘Events’ tab, only events with open spots will populate in the search results. To see the full schedule of events available for a partner or venue, search the partner or venue name in the search bar.</p>
        <p className="description-sub-heading">Specific Partner or Venue Schedule</p>
        <p className="description-without-margin">You can search for a specific schedule by typing in the name of the venue or partner in the search bar.</p>
        <p className="description-without-margin">If you don’t see the specific event you’re looking for on MusicPass, it is not currently available on our platform.</p>
        <p className="description-without-margin">Still need help? <a href="mailto:contact@musicpassonline.com">Get in touch with us</a>.
        </p>
        <p className="description-sub-heading">Reserving an event</p>
        <p className="description-without-margin">Once an event has been successfully reserved, it will be listed in your Upcoming Events. The event host will automatically receive your reservation.</p>
        <p className="description-without-margin">If there are no spots available for an event, we recommend checking back later since more spots can open up throughout the week. </p>
        <p className="description-without-margin">You can reserve events when the booking window opens. For most Partners, the booking window opens once the event is listed on the MusicPass platform. If the “reserve” button is greyed out, the booking window is not open yet.</p>
        <p className="description-without-margin">Partners can offer the ability to book an event as late as its published end-time. If the booking window for an event has closed, you are unable to reserve the event through MusicPass. </p>
        <p className="description-without-margin">You can book an event scheduled to take place in your upcoming cycle! When booking an event in your next cycle it will use credits from your upcoming cycle, regardless of when the event is booked. For example, if your cycle date is the 3rd of the month and you book an event for the 4th, that event will use credits from your upcoming cycle, even if you reserved it on the 1st.</p>
        <p className="description-without-margin">You can visit most MusicPass Partners as often as you’d like each cycle. </p>
        <p className="description-without-margin">How to book an event:</p>
        <p className="description-without-margin">Search for the event you want and select “Reserve”</p>
        <p className="description-without-margin">Click "Reserve" again to confirm your reservation</p>
        <p className="description-sub-heading">Events per Subscription Cycle</p>
        <p className="description-without-margin">The number of events you can attend per cycle depends on the types of events you reserve and the credit value of each event. </p>
        <p className="description-without-margin">Events are worth different credit values based on a variety of factors such as the time, place, and artist that you’re booking. The lower the credit value for each event, the more you can take. </p>
        <p className="description-without-margin">You can use your credits however you’d like. The number of credits available varies depending on your membership plan.</p>
        <p className="description-sub-heading">Arrival time</p>
        <p className="description-without-margin">Event start times are posted per event. Sometimes an end-time will be posted as well. Most partners encourage you to arrive at least 2-3 hours before the event end time to make the most of your experience.</p>
        <p className="description-without-margin">In some cases, reservations are offered based on adhering to a certain arrival time (“restricted reservation”). Perhaps the reservation is offered for entry only before 11pm or entry only after 8am. In those cases, the reservation is only valid as posited by the arrival time restrictions.</p>
        <p className="description-without-margin">If the arrival requirement of a restricted reservation is not met, the Partner has the right to charge an additional price for entry to event.</p>
        <p className="description-sub-heading">Cancel a reservation</p>
        <p className="description-without-margin">Things come up, and that’s why we’ve made it easy to cancel your reservation. More importantly, someone may want your spot!</p>
        <p className="description-without-margin">All reservations need to be cancelled directly through your MusicPass account to ensure a successful cancellation with the business. If you try to cancel your fitness event or wellness reservation through the business directly, please note the cancellation will not process successfully and you may be charged a fee.</p>
        <p className="description-without-margin">You can read more about our event <a href="/subscription?cancellation=true">cancellation policy here</a>.</p>
        <p className="description-without-margin">To cancel a reservation via the MusicPass website:</p>
        <p className="description-without-margin">Log into the MusicPass website and click the "Profile" icon at the top of the screen next to "credits".</p>
        <p className="description-without-margin">Find the reservation to be cancelled in the events in reservation.</p>
        <p className="description-without-margin">Click on the "Cancel Event" button.</p>
        <p className="description-without-margin" id="cancel">Click the "Cancel this event" button to confirm.</p>
        <p className="description-without-margin">The reservation will no longer appear in the upcoming events list.</p>
        <p className="description-without-margin" style={{fontWeight:"bold"}}>Reservation Cancellation Policy:</p>
        <p className="description-without-margin" style={{fontWeight:"bold"}}>Reservation Cancellation Fees</p>
        <p className="description-without-margin">To ensure the MusicPass platform is working as intended for our Partners and for our Members, we enforce a reservation cancellation penalty. This is to maintain integrity. Incurred fees will appear on your bank statement 7-10 business days after the reservation date. </p>
        <p className="description-without-margin"><span style={{fontWeight:"bold"}}>No fee</span>: In-person reservations can be cancelled up to 24 hours prior to start time with no charge.</p>
        <p className="description-without-margin"><span style={{fontWeight:"bold"}}>Late-to-Cancel Fee</span>: Something happens within 24 hours of the event, and now you can’t make it. The credits you used to book the reservation are automatically returned to your account, and a late-to-cancel fee of $10 is incurred. From time to time we may review and/or update these fees. The latest fee will be noted in the Cancellation Policy section of the event/appointment page or otherwise before you make a reservation.</p>
        <p className="description-without-margin"><span style={{fontWeight:"bold"}}>Never-Made-It Fee</span>: If you miss a reservation without cancelling, the credits used to book will be automatically returned to your account. A missed reservation fee will be charged for select reservations if a cancellation is not made prior to start time. A never-made-it fee of $15 is incurred. From time to time we may review or update these fees. The applicable fee will be noted in the Cancellation Policy section of the event/appointment page or otherwise before you make a reservation.</p>
        <p className="description-sub-heading">Switching Reservations</p>
        <p className="description-without-margin">We are not able to transfer your reservation from one event to another, even if it's at the same venue.</p>
        <p className="description-without-margin">In order to switch your reservation, you will first need to cancel your original reservation and then book the event that you plan to attend on MusicPass. </p>
        <p className="description-without-margin">If you cancel your original event within the late cancellation window, you'll incur a fee.</p>
        <p className="description-without-margin">All changes should be made directly through your MusicPass account, not through the studio.</p>
        <p className="description-sub-heading">Bad Weather</p>
        <p className="description-without-margin">We recommend that you contact the event host directly to inquire if they are still holding the event.</p>
        <p className="description-without-margin">If the event is proceeding as normal and you choose not to attend, please cancel your reservation directly through your MusicPass account. A cancellation fee may apply.</p>
        <p className="description-without-margin">If the event is no longer happening due to inclement weather and the event is still listed in your upcoming reservations, please reach out to us.</p>
        <p className="description-sub-heading">Event Cancelled</p>
        <p className="description-without-margin">Things happen, like bad weather, which cause an event to be cancelled. We encourage all partners to provide as much advance notice as possible if and when they need to cancel an upcoming event.</p>
        <p className="description-without-margin">As soon as MusicPass is made aware of the event cancellation, you will receive a notification within your Account profile. Any credits used to book the event will be automatically returned to your account and can be used towards a future reservation. No cancellation fees will be incurred on part of the MusicPass subscriber.</p>
        <p className="description-without-margin">If an event was cancelled and you were not informed, please <a href={"mailto:contact@musicpassonline.com"}>contact us here</a>, so we can rectify the situation and ensure any credits used towards the reservation are returned to you as soon as possible.</p>
        <p className="description-sub-heading">Event Ratings and Reviews</p>
        <p className="description-without-margin">In order to aid transparency in the world of dance and music events, we offer subscribers the right to post ratings and reviews. We encourage honesty and authenticity throughout your review process. We reserve the right to remove reviews that violate our guidelines or Terms of Use.</p>
        <p className="description-without-margin">Ratings and reviews cannot be changed once submitted, so please review carefully.</p>
        <p className="description-without-margin">We ask that our customers leave a star rating after they attend each event. We also provide a text box to encourage you to leave any comments you had about the event itself. These reviews are completely anonymous and appear on our website within a few days.</p>
        <p className="description-without-margin">Your contribution to ratings and reviews is voluntary and not required. However, we appreciate the feedback so that our Partners can continue to improve your experience moving forward.</p>


    </>;

    return (
        <ReservationStyle>
            <HeadingWithContentStyle>
                <Link to="/">
                    <div className="button-wrapper" onClick={(e)=>history.goBack()}>
                        <LeftChevronIcon/> Back To Previous Page
                    </div>
                </Link>

                <h2 className="heading">{"Reservations"}</h2>
                {content}
            </HeadingWithContentStyle>
        </ReservationStyle>
    );
}

import React from "react";
import {HeadingWithContent} from "../../components";
import {HelpCenterStyle} from "./HelpCenter.style";
import {useHistory} from "react-router";

export default function HelpCenter() {
    const history = useHistory();
    return (
        <HelpCenterStyle>
            <HeadingWithContent
                handleButtonClick={() => {
                    history.goBack()
                }}
                heading="Help Center"
                content={[
                    "Subscription Plans",
                    "We offer different subscription tiers based on your appetite for music events.",
                    "Our most minimal subscription plan is called Music Dip. All our other plans step-up from there, offering more credits with each tier:",
                    "Music Lite",
                    "Music Enthusiast",
                    "Music ",
                    "Music Pro",
                    "Please see our Pricing Page for details.",
                    "Subscription Offerings",
                    "The events listed on the MusicPass platform are operated by the Partners we work with.\n" +
                    "\n" +
                    "Don’t see an event or partner listed? Send us an email at suggestions@musicpassonline.com.\n",
                    "If you are an interested Partner, please check out our Partner Portal.",
                    "Changing Plans",
                    "Access your Account Settings to change plans.\n" +
                    "\n" +
                    "Upgrading a plan involves immediate access to more credits. The date of your upgrade activates a new billing cycle, along with a new charge for the price of your new plan.\n" +
                    "\n" +
                    "Downgrading a plan does not change a billing cycle. When the downgrade is requested, it will be fulfilled on the next billing cycle.\n" +
                    "\n" +
                    "Whether you upgrade or downgrade, renewals will continue each month for the plan chosen unless another plan change is made.\n" +
                    "\n" +
                    "Plans are subject to change at any time and changes must be submitted 24 hours prior to your next cycle date in order to take effect. Current membership plans can be referenced in your Membership settings. \n" +
                    "\n" +
                    "To change your plan:\n" +
                    "Navigate to your Membership Settings. \n" +
                    "Select ‘Manage membership’. \n" +
                    "Select your new plan.\n",
                    "Reactivate Plan",
                    "You can reactivate your membership at any time through your Profile page, where you can reference current membership options available in your location.\n" +
                    "\n" +
                    "Your account will activate at the time of sign up and will renew on the same date each month. \n" +
                    "\n" +
                    "There is no reactivation fee for resuming your MusicPass membership. \n",
                    "Refund Policy",
                    "We do not offer refunds for months of membership or additional credit purchases, including add-on credits. \n" +
                    "\n" +
                    "ClassPass memberships automatically renew each month. Any changes made to your membership will apply to your upcoming cycle. We are unable to retroactively make changes to your account. \n" +
                    "\n" +
                    "If you’re interested in cancelling your membership, please submit a cancellation request at least 24 hours prior to your cycle date. You can reference your cycle date in your Account Settings. More information on how to cancel your account can be found here. \n" +
                    "\n" +
                    "Our full refund policy can be viewed in Section 3c. of our Terms of Use. \n" +
                    "\n" +
                    "ClassPass trials and memberships automatically renew each month on your cycle date. You can cancel your ClassPass trial or membership at any time. \n" +
                    "\n" +
                    "Cancellations need to be requested at least 24 hours prior to your cycle date.\n" +
                    "\n" +
                    "After a cancellation request is made you’ll receive a cancellation confirmation email from our Customer Experience team. If you do not receive a cancellation confirmation email, your request was not received.\n" +
                    "\n" +
                    "If you are on a Commitment Plan, please contact us with any membership questions. \n" +
                    "\n" +
                    "To cancel your membership: \n" +
                    "\n" +
                    "On the website:\n" +
                    "\n" +
                    "Navigate to your Account Settings\n" +
                    "Click the 'Cancel my membership or take a break' link\n" +
                    "Follow the prompts to confirm your cancellation request\n",
                    "Cancellation Fees",
                    "There is no fee to cancel your ClassPass membership. Once an account is cancelled, you no longer have access to any unused credits, including rollover credits. ",
                    "Still need help? Contact us here.",
                    "Reservations",
                    "Search for an Event",
                    "You can search for Partners, Venues, and Events on the web. You can search for events by location, genre, partner, venue, time, credits, and amenities. If you don't see an event you’re looking for, you can submit a partnership request here!",
                    "Go to our search page ",
                    "In the search bar at the top of the screen type in the activity or studio name\n" +
                    "When you browse via the ‘Events’ tab, only events with open spots will populate in the search results. To see the full schedule of events available for a partner or venue, search the partner or venue name in the search bar. \n",
                    "Specific Partner or Venue Schedule",
                    "You can search for a specific studio’s schedule by typing in the name of the studio in the search bar. You can save a studio as one of your favorites by tapping the heart on the studio’s page. ",
                    "We offer full schedules for the majority of our studios. However, some studios reserve certain eventes for their own members. If you don’t see the specific event you’re looking for on EventPass, it is not currently available on our platform.",
                    "Go the search page ",
                    "Under the search bar select “More” on the right side of the screen\n" +
                    "Adjust the sliding credits filter to narrow your choices by credit range\n" +
                    "Scroll down and select “Done” \n" +
                    "Still need help? Get in touch with us.\n",
                    "Reserving an event",
                    "Once an event has been successfully reserved, it will be listed in your Upcoming Events. The event host will automatically receive your reservation.\n" +
                    "\n" +
                    "If there are no spots available for an event, we recommend checking back later since more spots can open up throughout the week. \n" +
                    "\n" +
                    "You can reserve events when the booking window opens. For most Partners, the booking window opens once the event is listed on the MusicPass platform. If the “reserve” button is greyed out, the booking window is not open yet.\n" +
                    "\n" +
                    "Partners can offer the ability to book an event as late as its published end-time. If the booking window for an event has closed, you are unable to reserve the event through MusicPass. \n" +
                    "\n" +
                    "You can book an event scheduled to take place in your upcoming cycle! When booking an event in your next cycle it will use credits from your upcoming cycle, regardless of when the event is booked. For example, if your cycle date is the 3rd of the month and you book an event for the 4th, that event will use credits from your upcoming cycle, even if you reserved it on the 1st.\n" +
                    "\n" +
                    "You can visit most MusicPass Partners as often as you’d like each cycle. \n" +
                    "\n" +
                    "How to book an event:\n" +
                    "Search for the event you want and select “Reserve”\n" +
                    "Click \"Reserve\" again to confirm your reservation\n",
                    "Events per Subscription Cycle",
                    "The number of events you can attend per cycle depends on the types of events you reserve and the credit value of each event. \n" +
                    "\n" +
                    "Events are worth different credit values based on a variety of factors such as the time, place, and artist that you’re booking. The lower the credit value for each event, the more you can take. \n" +
                    "\n" +
                    "You can use your credits however you’d like. The number of credits available varies depending on your membership plan.\n",
                    "Arrival time",
                    "Event start times are posted per event. Sometimes an end-time will be posted as well. Most partners encourage you to arrive at least 2-3 hours before the event end time to make the most of your experience.\n" +
                    "\n" +
                    "In some cases, reservations are offered based on adhering to a certain arrival time (“restricted reservation”). Perhaps the reservation is offered for entry only before 11pm or entry only after 8am. In those cases, the reservation is only valid as posited by the arrival time restrictions.\n" +
                    "\n" +
                    "If the arrival requirement of a restricted reservation is not met, the Partner has the right to charge an additional price for entry to event.\n",
                    "Cancel a reservation",
                    "Things come up, and that’s why we’ve made it easy to cancel your reservation. More importantly, someone may want your spot!\n" +
                    "\n" +
                    "All reservations need to be cancelled directly through your MusicPass account to ensure a successful cancellation with the business. If you try to cancel your fitness event or wellness reservation through the business directly, please note the cancellation will not process successfully and you may be charged a fee.\n" +
                    "\n" +
                    "You can read more about our event cancellation policy here.\n" +
                    "\n" +
                    "To cancel a reservation via the MusicPass website:\n" +
                    "Log into the MusicPass website and click the \"Upcoming\" text at the top of the screen next to \"Find a studio or activity\" search bar.\n" +
                    "Find the reservation to be cancelled in the upcoming events list.\n" +
                    "Click on the \"Cancel Event\" button.\n" +
                    "Click the \"Cancel this event\" button to confirm.\n" +
                    "The reservation will no longer appear in the upcoming events list.\n",
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
                    "We recommend that you contact the event host directly to inquire if they are still holding the event.\n" +
                    "\n" +
                    "If the event is proceeding as normal and you choose not to attend, please cancel your reservation directly through your MusicPass account. A cancellation fee may apply.\n" +
                    "\n" +
                    "If the event is no longer happening due to inclement weather and the event is still listed in your upcoming reservations, please reach out to us.\n",
                    "Event Cancelled",
                    "Things happen, like bad weather, which cause an event to be cancelled. We encourage all partners to provide as much advance notice as possible if and when they need to cancel an upcoming event.\n" +
                    "\n" +
                    "As soon as MusicPass is made aware of the event cancellation, you will receive a notification within your Account profile. Any credits used to book the event will be automatically returned to your account and can be used towards a future reservation. No cancellation fees will be incurred on part of the MusicPass subscriber.\n" +
                    "\n" +
                    "If an event was cancelled and you were not informed, please contact us here, so we can rectify the situation and ensure any credits used towards the reservation are returned to you as soon as possible.\n",
                    "Event Ratings and Reviews",
                    "In order to aid transparency in the world of dance and music events, we offer subscribers the right to post ratings and reviews. We encourage honesty and authenticity throughout your review process. We reserve the right to remove reviews that violate our guidelines or Terms of Use.\n" +
                    "\n" +
                    "Ratings and reviews cannot be changed once submitted, so please review carefully.\n" +
                    "\n" +
                    "We ask that our customers leave a star rating after they attend each event. We also provide a text box to encourage you to leave any comments you had about the event itself. These reviews are completely anonymous and appear on our website within a few days.\n" +
                    "\n" +
                    "Your contribution to ratings and reviews is voluntary and not required. However, we appreciate the feedback so that our Partners can continue to improve your experience moving forward.\n",
                    "Promotions",
                    "Trial membership",
                    "For a limited time, you can try MusicPass for free. The trial is only available for new customers who have never had a MusicPass account before. \n" +
                    "\n" +
                    "The day of trial sign-up activates the trial membership. Please wait to sign-up if you aren’t ready to try MusicPass. \n" +
                    "\n" +
                    "The end of a trial membership triggers a paid membership plan. The plan you will automatically renew to is stated when you sign up for your trial.\n" +
                    "\n" +
                    "All event reservations, even within the trial membership, are subject to our event cancellation policy.\n" +
                    "\n" +
                    "The number of credits needed to book an event may change based on a number of factors.\n" +
                    "\n" +
                    "If you’d like to change your membership plan for your next cycle, you can do so in your Membership settings.\n" +
                    "\n" +
                    "Don’t want to continue with your MusicPass membership? You can cancel at anytime. \n",
                    "Other Promotions",
                    "We do not offer a student, first-responder, or military discount at this time.",
                    "Credits",
                    "Credit Roll-overs",
                    "This is how it works.",
                    "Rolling over un-used credits from a paid subscription month to the consecutive following month (“next month”) applies if a MusicPass member remains active and on a paid plan. The amount of un-used credits that can be rolled over depends on the transition from plan to plan:",
                    "1)Keeping the same paid plan from one month to the next allows for a maximum roll-over equivalent to the next month’s subscription.",
                    "For example, Emily is currently on the 50-credit Music Enthusiast plan. Next month she is going to also be on the 50-credit Music Enthusiast plan. She can rollover at maximum 50 credits, for an eligible total of 100 credits next month.",
                    "2)\tDowngrading from one plan to another the next month allows for a maximum roll-over equivalent to the next month’s subscription.",
                    "Using the same example, Emily decides she wants to downgrade her subscription. She is currently on the 50-credit Music Enthusiast plan. Next month she is going to be on the 25-credit Music Lite plan. She can rollover at maximum 25 credits, for an eligible total of 50 credits next month.",
                    "3)\tUpgrading from one plan to another the next month allows for a maximum roll-over equivalent to the next month’s subscription.",
                    "Emily decides she wants to upgrade her subscription. She is currently on the 50-credit Music Enthusiast plan. Next month she is going to be on the 99-credit Music Pro plan. She can rollover at maximum 99 credits, for an eligible total of 149 credits next month.",
                    "4)\tCancelling a subscription from one plan to none the next month allows for a maximum of zero roll-over.",
                    "Emily decides to cancel her monthly subscription. At the end of her current subscription, all remaining credits are forfeited.",
                    "Please note the rollover of un-used credits can take up to 72 hours to appear in your account after renewal.",
                    "Purchasing more Credits",
                    "There is a way to buy additional credits (“add-on credits”). The add-on credits, upon purchase, will be available immediately and your cycle date won’t change. \n" +
                    "\n" +
                    "All credit purchases are final as noted in the purchase flow. Learn more about our Refund Policy here. \n" +
                    "\n" +
                    "If you have credits remaining at the end of your cycle, you can roll over up to the number of credits in your upcoming plan. Learn more about our Rollover Policy above. \n",
                    "Remaining Credits",
                    "MusicPass will adjust your remaining credits after you have booked or cancelled a reservation. Any upcoming reservations you’ve already made will be deducted from the number of credits you have remaining.\n" +
                    "\n" +
                    "Credits are deducted from your account based on the cycle the class takes place in, not the cycle that you booked the class in. \n" +
                    "\n" +
                    "If you have credits remaining at the end of your cycle, you can roll over up to the number of credits in your upcoming plan. Learn more about our Rollover Policy above.  \n" +
                    "\n" +
                    "You may not transfer, trade, or otherwise exchange MusicPass credits.\n",
                    "Billing",
                    "Update your credit card information",
                    "On the web:\n" +
                    "Go to your Account Settings \n" +
                    "On the left side of the screen select ‘Billing’ \n" +
                    "Select \"Update Billing Details\"\n" +
                    "Update your payment method and billing information, then hit ‘Save changes’\n" +
                    "\n" +
                    "If you're having trouble updating your payment information, there are a couple of ways to easily troubleshoot. Try logging into a different browser or clearing your cache and browsing history. \n",
                    "Receipt for MusicPass payment",
                    "Log into your MusicPass account.",
                    "Click on your initial from the right hand side of the menu bar.",
                    "Select Membership from the dropdown.",
                    "Click on Recent charges on the left hand side of the screen.",
                    "Scroll down to the bottom of the page and click “Print this page.”",
                    "Still need help? Get in touch with us."
                ]}
            />
        </HelpCenterStyle>
    );
}

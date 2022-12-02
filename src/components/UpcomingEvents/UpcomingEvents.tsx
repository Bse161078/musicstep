import React, {useState} from "react";

import {TabRow} from "./TabRow";

import {UpcomingEventsStyle} from "./UpcomingEvents.style";

const UpcomingEvents = ({events, venue, subscribtionCredit, handleClick,isDetails,fromPartner}: any) => {
    const [reservation, setReservation] = useState(0);
    let tempresrvatoin = 0;


    let filteredEvents = events.filter((event: any) => new Date(event.city) >= new Date());
    return (
        <UpcomingEventsStyle>
            {/* <div className="list-header">
        <span>Today, 1 September</span>

        <span>Availability</span>
      </div> */}
            {filteredEvents &&
            filteredEvents.map((event: any, index: number) => {

                return event && (event.tickets).length === 0 || event.tickets[0].availableTickets === 0 ? (
                    <TabRow
                        event={event}
                        buttonType="filled"
                        buttonText={"Reservations Full"}
                        reservation={((event.tickets).length > 0) && event.tickets[0].bookedTickets}
                        venue={venue}
                        handleClick={handleClick}
                        isDetails={isDetails}
                        fromPartner={fromPartner}
                    />
                ) : (
                    <TabRow
                        event={event}
                        subscribtionCredit={subscribtionCredit}
                        buttonText={`${
                        event.tickets && event.tickets[0].credits
                            } Credits`}
                        reservation={event.tickets[0].bookedTickets}
                        venue={venue}
                        handleClick={handleClick}
                        isDetails={isDetails}
                        fromPartner={fromPartner}
                    />
                );

                // return <h1>yoo</h1>;
            })}

            {/* <TabRow buttonText="11 Credits" />
      <TabRow buttonType="filled" buttonText="Reservation Full" />
      <TabRow buttonText="11 Credits" />
      <TabRow buttonType="filled" buttonText="Reservation Full" />
      <TabRow buttonText="11 Credits" />
      <TabRow buttonText="13 Credits" />
      <TabRow buttonText="11 Credits" />
      <TabRow buttonText="11 Credits" /> */}
        </UpcomingEventsStyle>
    );
};

export default UpcomingEvents;

import React, {useState} from "react";

import {TabRow} from "./TabRow";

import {UpcomingEventsStyle} from "./UpcomingEvents.style";

const UpcomingEvents = ({events, venue, subscribtionCredit, handleClick,isDetails,fromPartner}: any) => {
    const [reservation, setReservation] = useState(0);
    let tempresrvatoin = 0;


    let filteredEvents = (events.filter((event: any) => new Date(event.city) >= new Date())).sort((a:any,b:any)=>{
        let date1:any=new Date(a.state);
        let date2:any=new Date(b.state);

        return date1 - date2;
    });

    filteredEvents = filteredEvents.map((event:any)=>{
        let credits=0;
        let availableTickets=0;
        let bookedTickets=0;
        let tickets=event.tickets || [];
        tickets.reduce((partialSum:any, ticket:any) => partialSum + parseInt(ticket.credits), 0)
        const sumTicketCredit=tickets.reduce((partialSum:any, ticket:any) => partialSum + parseInt(ticket.credits), 0);
        const sumAvailableTickets=tickets.reduce((partialSum:any, ticket:any) => partialSum + parseInt(ticket.availableTickets), 0);
        const sumBookedTickets=tickets.reduce((partialSum:any, ticket:any) => partialSum + parseInt(ticket.bookedTickets), 0);

        event.credits=sumTicketCredit;
        event.availableTickets=sumAvailableTickets;
        event.bookedTickets=sumBookedTickets;
        return event;
    })



    return (
        <UpcomingEventsStyle>
            {/* <div className="list-header">
        <span>Today, 1 September</span>F

        <span>Availability</span>
      </div> */}
            {filteredEvents &&
            filteredEvents.map((event: any, index: number) => {

                return event &&  event.availableTickets === 0 ? (
                    <TabRow
                        event={event}
                        buttonType="filled"
                        buttonText={"Reservations Full"}
                        reservation={event.bookedTickets}
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
                        event.credits
                            } Credits`}
                        reservation={event.bookedTickets}
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

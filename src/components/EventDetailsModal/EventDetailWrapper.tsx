import React, {useEffect, useState} from "react";
import moment from "moment";
import {useHistory} from "react-router-dom";
import axios from "axios";
import {useLoginContext} from "../../context/authenticationContext";

type EventDetailWrapperProps = {
    event?: any;
    venue?: any
};
export const EventDetailWrapper = ({event, venue}: EventDetailWrapperProps) => {
    const history = useHistory();
    const eventImage = venue.coverPhotoUrl || venue.logoUrl;
    const {state, dispatch} = useLoginContext();
    const [organizer,setOrganizer]=useState<any>(null);


    const week = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];


    const handleViewOrganizer = () => {
        history.push({
            pathname: `/explore-venue/organizer-profile`,

            state: {organizerDetail: venue},
        });
    };


    const getOrganizer=async (organizerId:any)=>{
        try {
            const response = await axios.get("/v1/organizer/"+organizerId, {headers: {Authorization: `Bearer ${state.authToken}`}});
            setOrganizer(response.data);
        } catch (e) {
        }
    }

    useEffect(() => {
        let organizerInfo = null;
        if (event.organizerInfo && (event.organizerInfo).length > 0) {
            organizerInfo = event.organizerInfo[0];
        } else if (venue.organizerInfo && (venue.organizerInfo).length > 0) {
            organizerInfo = venue.organizerInfo[0];
        }

        if (!organizerInfo) {
            getOrganizer(event.organizer)
        }

    }, [])

    const handleViewVenue = () => {
        history.push({
            pathname: `/dashboard/home/venue-details`,

            state: {venueDetail: venue},
        });
    };


    let organizerInfo = null;
    if (event.organizerInfo && (event.organizerInfo).length > 0) {
        organizerInfo = event.organizerInfo[0];
    } else if (venue.organizerInfo && (venue.organizerInfo).length > 0) {
        organizerInfo = venue.organizerInfo[0];

    }


    if(!organizerInfo && organizer){
        organizerInfo=organizer;
    }


    return (
        <div className="first-row-wrapper">
            <img
                // src="/images/crystal2.png"
                // src={process.env.REACT_APP_BASE_URL}
                src={process.env.REACT_APP_BASE_URL + "/images/" + eventImage}
                alt="crystal"
                width="480px"
                height="270px"
                style={{borderRadius: "10px"}}
            />

            <div className="description-wrapper">
                <div className="concert-name">
                    <h3>{event && event.title}</h3>
                    <p>{venue.categoryTags.join(",")}</p>
                </div>

                <div className="description">
                    <p>{event && event.eventDescription}</p>
                </div>

                <div className="date-time">
                    <p>
                        {week[moment(event.date).day()]},
                        {moment(event.date).format("MMMM") +
                        " " +
                        moment(event.date).date()}
                    </p>
                    <p>
                        {moment(event.startingTime, ["hh:mm"]).format("hh:mm a")} -
                        {moment(event.endingTime, ["hh:mm"]).format("hh:mm a")}
                    </p>
                </div>

                <div>
                    <p>Venue : {venue?.name}</p>
                    <p>
                        {" "}
                        <img src="/images/icons/location-icon.svg" alt="location"/>
                        {venue.location?.address}
                    </p>
                </div>

                <div className="organizedBy-text">
                    <p>
                        Organized by:{" "}
                        <span className="link"
                              onClick={() => {
                                  handleViewOrganizer()
                              }
                              }
                        >{organizerInfo && organizerInfo.organizerName}</span>
                    </p>

                </div>
            </div>
        </div>
    );
};
export default EventDetailWrapper;

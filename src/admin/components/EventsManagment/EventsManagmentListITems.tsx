import moment from "moment";
import React, {useState} from "react";
import {EventsManagmentListItemStyle} from "./EventsManagment.style";
import {EventDetailsModal} from "../../../components/EventDetailsModal";
import {useHistory} from "react-router";

type EventsManagmentListItemProps = {
    event: any;
};
const EventsManagmentListItem = ({event}: EventsManagmentListItemProps) => {
    const week = ["Sun", "Mon", "Thu", "Wed", "Thr", "Fri", "Sat"];
    const [showEventDetails, setShowEventDetails] = useState(false);
    const [showVenueDetails, setShowVenuesDetails] = useState(false);
    const history = useHistory();

    const handleVenueClick = () => {
        history.push({
            pathname: `/explore-venue/venue-details`,

            state: { venueDetail: event.venueInfo[0], subscribtionCredit:null,fromPartner:true },
        });
    };

    const handleOrganizerClick = () => {
        history.push({
            pathname: `/explore-venue/organizer-profile`,

            state: {organizerDetail: {organizerInfo:event.organizerInfo,venuesInfo:event.venueInfo},isOrganizer:true},
        });

    };


    const venueName = event.venueInfo && (event.venueInfo).length > 0 && event.venueInfo[0].name;
    return (
        <EventsManagmentListItemStyle>
            <div className="content-wrapper">
                <div className="event-details">
                    <div className="event-date-name">
                        <span className="event-name" style={{cursor: "pointer"}}
                              onClick={handleVenueClick}>{venueName && venueName} /</span>
                        <span className="event-name" style={{cursor: "pointer"}}
                              onClick={(e) => setShowEventDetails(true)}>{event?.title}</span>
                    </div>

                    <div>
            <span className="event-address">
              {" "}
                {event?.venueInfo[0]?.location.address}
            </span>
                    </div>
                </div>
                <div className="engagments">
          <span
              style={{fontSize: 17, fontWeight: "bold"}}
          >{`${event.reviewCount} Reviews`}</span>
                    <span
                        style={{fontSize: 17, fontWeight: "bold"}}
                    >{`${event.reservationCount} Reservations Made`}</span>
                </div>
                <div className="Organizer">
          <span className="org-name" style={{cursor:"pointer"}} onClick={handleOrganizerClick}>
            {event.organizerInfo[0] && event.organizerInfo[0].organizerName}
          </span>
                </div>
            </div>
            <EventDetailsModal
                isModalVisible={showEventDetails}
                setIsModalVisible={() => {
                    setShowEventDetails(false);
                }}
                isTicketsAvailable={true}
                event={event}
                subscribtionCredit={null}
                venue={event.venueInfo[0]}
                hideReserve={true}
            />
        </EventsManagmentListItemStyle>
    );
};
export default EventsManagmentListItem;

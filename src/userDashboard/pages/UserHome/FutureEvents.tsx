import {useEffect, useState} from "react";
import {useLoginContext} from "../../../context/authenticationContext";
import axios from "axios";
import {SectionHeading} from "../../components/SectionHeading";
import React from "react";
import {CardWithContentStyle} from "../../components/CardWithContent/CardWithContent.style";


import {
    Grid,
    ImageList,
    ImageListItem,
    Table, TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import moment from "moment";
import {OutlineButtonStyle} from "../../../styles/Common.style";
import VenueDetailsModal from "../../../components/EventDetailsModal/VenueDetailsModal";
import {EventDetailsModal, Loading} from "../../../components";
import {useHistory} from "react-router-dom";

const FutureEvents = ({refreshSuggestedEvents}: any) => {

    const {state, dispatch} = useLoginContext();
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [futureEvents, setFutureEvents] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState<any>(null);
    const [loading, setLoading] = useState(true);


    const getCurrentLocation = () => {
        setLoading(true);
        navigator.geolocation.getCurrentPosition(function (position) {
            setLoading(false)
            if (position) {
                getAllFutureEvents({latitude: position.coords.latitude, longitude: position.coords.longitude});
            }
        });
    }


    const getAllFutureEvents = async (latLng:any) => {
        setLoading(true);
        latLng=latLng && latLng.latitude && latLng.longitude?JSON.stringify(latLng):""
        const response = await axios.get(`/v1/event/future?search=${latLng}`, {headers: {Authorization: `Bearer ${state.authToken}`}});
        setLoading(false);
        let events = response.data;
        setFutureEvents(events);
    }
    const history = useHistory()
    const handleViewVenue = (event: any) => {
        history.push({
            pathname: `/dashboard/home/venue-details`,

            state: {venueDetail: event.venuesInfo[0]},
        });
    };
    useEffect(() => {
        getCurrentLocation();
        //getAllFutureEvents();
    }, [refreshSuggestedEvents])


    const ContainerData = futureEvents.filter((event: any) => (event.tickets).length > 0).map((event: any, index: any) => {
        let imageUrl = null;

        if (event && event.venuesInfo && (event.venuesInfo).length > 0) {
            imageUrl = event.venuesInfo[0].logoUrl;
        }
        return (
            <TableRow hover tabIndex={-1} key={event._id + index}>
                {loading && <Loading/>}

                <TableCell align="left" style={{wordBreak: "break-word"}}>
                    <img
                        src={imageUrl ? `${process.env.REACT_APP_BASE_URL}/images/${imageUrl}` : "/images/sample.png"}
                        className="card-thumbnail"
                        style={{width: 92, height: 92, borderRadius: 10}}
                        alt="thumbnail"
                    />
                </TableCell>
                <TableCell align="left" style={{wordBreak: "break-word"}}>
                    <Grid container>
                        <Grid item xs={12}>
                            <h4 className="heading">{moment(event.startingTime, ("hh:mm")).format("hh:mm a")}</h4>

                        </Grid>
                        <Grid item xs={12}>
                            <p className="description">{moment(event.city).diff(event.state, "hours") + "  " + " Hours"}</p>
                        </Grid>
                    </Grid>
                </TableCell>
                <TableCell align="left" style={{wordBreak: "break-word", cursor: "pointer"}}
                           onClick={(e) => handleViewVenue(event)}>
                    <Grid container>
                        <Grid item xs={12}>
                            <h4 className="heading">{event.title}</h4>

                        </Grid>
                        <Grid item xs={12}>
                            <p className="description">{event.country}</p>
                        </Grid>
                    </Grid>
                </TableCell>
                <TableCell align="left" style={{wordBreak: "break-word"}}>
                    <h4 className="heading">{event.venuesInfo[0].name}</h4>
                </TableCell>
                <TableCell align="left" style={{wordBreak: "break-word"}}>
                    <Grid container>
                        <Grid item xs={12}>
                            <OutlineButtonStyle
                                width="150px"
                                height="43px"
                                className="pricing"
                                onClick={() => {
                                    handleViewVenue(event)
                                }}
                            >
                                View Venue
                            </OutlineButtonStyle>
                        </Grid>
                    </Grid>
                </TableCell>
                <TableCell align="left" style={{wordBreak: "break-word"}}>
                    <Grid container>
                        <Grid item xs={12}>
                            <OutlineButtonStyle
                                width="150px"
                                height="43px"
                                className="pricing"
                                onClick={() => {
                                    setSelectedEvent(event)
                                    setIsModalVisible(true)
                                }}
                            >
                                {`${event.tickets[0].credits} Credits`}
                            </OutlineButtonStyle>
                        </Grid>
                    </Grid>
                </TableCell>
            </TableRow>
        )
    });

    return (
        <SectionHeading heading="Suggested Upcoming Events">
            {isModalVisible && selectedEvent &&
            <VenueDetailsModal
                isModalVisible={isModalVisible}
                setIsModalVisible={setIsModalVisible}
                event={selectedEvent}
                venue={selectedEvent.venuesInfo[0]}

            />
            }
            <TableContainer sx={{overflow: "auto", width: {lg: "65vw", xs: "90vw"}, maxHeight: "420px"}}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="left" style={{minWidth: 150}}>

                            </TableCell>
                            <TableCell align="left" style={{minWidth: 150}}>
                                Time & Duration
                            </TableCell>
                            <TableCell align="left" style={{minWidth: 250}}>
                                Event Name & Genre
                            </TableCell>
                            <TableCell align="left" style={{minWidth: 250}}>
                                Venue Name
                            </TableCell>
                            <TableCell align="left" style={{minWidth: 150}}>
                            </TableCell>
                            <TableCell align="left" style={{minWidth: 150}}>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {ContainerData}
                    </TableBody>
                </Table>
            </TableContainer>
        </SectionHeading>
    )
}

export default FutureEvents;
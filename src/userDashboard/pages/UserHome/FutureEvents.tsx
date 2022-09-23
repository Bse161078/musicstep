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
import {EventDetailsModal} from "../../../components";
import {useHistory} from "react-router-dom";

const FutureEvents = () => {

    const {state, dispatch} = useLoginContext();
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [futureEvents, setFutureEvents] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState<any>(null);


    const getAllFutureEvents = async () => {
        const response = await axios.get("/v1/event/future", {headers: {Authorization: `Bearer ${state.authToken}`}})
        setFutureEvents(response.data)
    }
    const history = useHistory()
    const handleViewVenue = (event: any) => {
        history.push({
            pathname: `/dashboard/home/venue-details`,

            state: {venueDetail: event.venuesInfo[0]},
        });
    };
    useEffect(() => {
        getAllFutureEvents();
    }, [])


    const ContainerData = futureEvents.filter((event: any) => (event.tickets).length > 0).map((event: any, index: any) => {
        let imageUrl=null;

        if(event && event.venuesInfo && (event.venuesInfo).length>0){
            imageUrl=event.venuesInfo[0].logoUrl;
        }
        return (
            <TableRow hover tabIndex={-1} key={event._id + index}>

                <TableCell key={event._id + index} align="left" style={{wordBreak: "break-word"}}>
                    <img
                        src={imageUrl?`${process.env.REACT_APP_BASE_URL}/images/${imageUrl}`:"/images/sample.png"}
                        className="card-thumbnail"
                        style={{width:92,height:92,borderRadius:10}}
                        alt="thumbnail"
                    />
                </TableCell>
                <TableCell key={event.startingTime + index} align="left" style={{wordBreak: "break-word"}}>
                    <Grid container>
                        <Grid item xs={12}>
                            <h4 className="heading">{moment(event.startingTime, ("hh:mm")).format("hh:mm a")}</h4>

                        </Grid>
                        <Grid item xs={12}>
                            <p className="description">{moment(event.city).diff(event.state, "hours") + "  " + " Hours"}</p>
                        </Grid>
                    </Grid>
                </TableCell>
                <TableCell key={event.title + index} align="left" style={{wordBreak: "break-word"}}>
                    <Grid container>
                        <Grid item xs={12}>
                            <h4 className="heading">{event.title}</h4>

                        </Grid>
                        <Grid item xs={12}>
                            <p className="description">{event.venuesInfo[0].categoryTags}</p>
                        </Grid>
                    </Grid>
                </TableCell>
                <TableCell key={event.venuesInfo[0].name + index} align="left" style={{wordBreak: "break-word"}}>
                    <h4 className="heading">{event.venuesInfo[0].name}</h4>
                </TableCell>
                <TableCell key={event.venuesInfo[0].name + index} align="left" style={{wordBreak: "break-word"}}>
                    <Grid container>
                        <Grid item xs={5}>
                            <OutlineButtonStyle
                                width="150px"
                                height="43px"
                                style={{marginRight: 20}}
                                className="pricing"
                                onClick={() => {
                                    handleViewVenue(event)
                                }}
                            >
                                View Venue
                            </OutlineButtonStyle>
                        </Grid>
                        <Grid item xs={1}></Grid>
                        <Grid item xs={5}>
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
            <TableContainer style={{height: "91%", overflowY: "scroll"}}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left" style={{minWidth: 1}}>

                            </TableCell>
                            <TableCell align="left" style={{minWidth: 1}}>
                                Time & Duration
                            </TableCell>
                            <TableCell align="left" style={{minWidth: 2}}>
                                Event Name & Genre
                            </TableCell>
                            <TableCell align="left" style={{minWidth: 2}}>
                                Venue Name
                            </TableCell>
                            <TableCell align="left" style={{minWidth: 2}}>
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
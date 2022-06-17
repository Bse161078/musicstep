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


const FutureEvents = () => {

    const {state, dispatch} = useLoginContext();

    const [futureEvents, setFutureEvents] = useState([])

    const getAllFutureEvents = async () => {
        const response = await axios.get("/v1/event/future", {headers: {Authorization: `Bearer ${state.authToken}`}})
        setFutureEvents(response.data)
        console.log("response = ", response.data);
    }

    useEffect(() => {
        getAllFutureEvents();
    }, [])


    const ContainerData = futureEvents.map((event: any, index: any) =>
        <TableRow hover tabIndex={-1} key={event._id + index}>
            <TableCell key={event._id + index} align="left" style={{wordBreak: "break-word"}}>
                <img
                    src="/images/sample.png"
                    className="card-thumbnail"
                    alt="thumbnail"
                />
            </TableCell>
            <TableCell key={event.startingTime + index} align="left" style={{wordBreak: "break-word"}}>
                <Grid container>
                    <Grid item xs={12}>
                        <h4 className="heading">{moment(event.startingTime, ("hh:mm")).format("hh:mm a")}</h4>

                    </Grid>
                    <Grid item xs={12}>
                        <p className="description">{moment(moment(event.date).format("YYYY-MM-DD")+' '+event.startingTime).diff(new Date(),"hours")+"  "+" Hours"}</p>
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
                            className="pricing"
                            onClick={() => {
                                //setIsEventDetailsModalVisibel(true);
                                //setIsTicketsAvailabe(true);
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
                            }}
                        >
                            {`${event.tickets[0].price} Credits`}
                        </OutlineButtonStyle>
                    </Grid>
                </Grid>
            </TableCell>
        </TableRow>);

    return (
        <SectionHeading heading="Suggested Upcoming Events">
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
                                Events
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
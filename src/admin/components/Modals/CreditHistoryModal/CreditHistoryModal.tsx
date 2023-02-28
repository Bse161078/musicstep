import React, {useEffect, useState} from "react";

import {ModalWrapper} from "../ModalWrapper";
import {CreditHistoryModalStyle} from "./CreditHistoryModal.style";
import axios from "axios";
import {useLoginContext} from "../../../../context/authenticationContext";
import {Loading} from "../../../../components/Loading";
import {UserSidebarStyle} from "../../../../userDashboard/components/UserSidebar/UserSidebar.style";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import moment from "moment";
import {TableRowStyle} from "../../TableRow/TableRow.style";

type CreditHistoryModalProps = {
    isModalVisible?: boolean;
    setIsModalVisible?: any;
    reservations?: any;
};

const CreditHistoryModal = (props: CreditHistoryModalProps) => {
    const {isModalVisible, setIsModalVisible, reservations} = props;
    const {dispatch, state} = useLoginContext();




    const TableHeader = () => {
        return (
            <div className="header">
                <div>
                    <span>Time & Date</span>
                    <span>Event & Venue</span>
                </div>
                <span>Credits</span>
            </div>
        );
    };


    const sortEvents=(reservations:any)=>{
        return reservations.sort((a:any,b:any)=>{
            const c:any = new Date(a.eventInfo[0].date);
            const d:any = new Date(b.eventInfo[0].date);

            return d-c;
        });

    }


    const filteredReservation=sortEvents(reservations.filter((reservation:any)=>reservation && reservation.eventInfo && (reservation.eventInfo).length>0))

    return (
        <>

            <ModalWrapper
                heading="Credits History"
                isModalVisible={isModalVisible}
                setIsModalVisible={setIsModalVisible}
                isFooter={false}
                width="920px"
            >
                <CreditHistoryModalStyle>
                    <div className="table-wrapper" style={{height: "460px", overflowY: "auto"}}>


                        <TableContainer>
                            <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="left" style={{minWidth: 1}}>
                                            Time & Date
                                        </TableCell>
                                        <TableCell align="left" style={{minWidth: 2}}>
                                            Event & Venue
                                        </TableCell>
                                        <TableCell align="left" style={{minWidth: 2}}>
                                            Credits
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {filteredReservation &&
                                    filteredReservation.map((reservation: any) => {
                                        return (
                                            <TableRow>
                                                <TableCell align="left" style={{minWidth: 1}}>
                                                     <span>
        <h1 className="heading">
          {/* 10:51 AM */}
            {moment(reservation && reservation.eventInfo[0].startingTime, [
                "hh:mm",
            ]).format("hh:mm a")}
        </h1>
        <p className="subheading">
          {moment(reservation && reservation.eventInfo[0].date).format("MMMM") +
          " " +
          moment(reservation && reservation.eventInfo[0].date).date() +
          ", " +
          new Date(
              reservation && reservation.eventInfo[0].date
          ).getFullYear()}
        </p>
      </span>
                                                </TableCell>
                                                <TableCell align="left" style={{minWidth: 2}}>
                                                    <span>
        <h1 className="heading">
          {reservation && reservation.eventInfo[0].title}
        </h1>
        <p className="subheading">
          {reservation && reservation.venueInfo[0].name}
        </p>
      </span>
                                                </TableCell>
                                                <TableCell align="left" style={{minWidth: 2}}>
                                                    <span>
        <h1 className="credits">{`${reservation.credits} Credits`}</h1>
      </span>
                                                </TableCell>
                                            </TableRow>
                                        );
                                        return null;
                                    })}
                                </TableBody>
                            </Table>
                        </TableContainer>


                    </div>
                </CreditHistoryModalStyle>
            </ModalWrapper>
        </>
    );
};

export default CreditHistoryModal;

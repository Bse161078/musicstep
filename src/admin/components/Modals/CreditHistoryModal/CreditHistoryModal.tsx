import React, {useEffect, useState} from "react";
import {TableRow} from "../..";

import {ModalWrapper} from "../ModalWrapper";
import {CreditHistoryModalStyle} from "./CreditHistoryModal.style";
import axios from "axios";
import {useLoginContext} from "../../../../context/authenticationContext";
import {Loading} from "../../../../components/Loading";
import {UserSidebarStyle} from "../../../../userDashboard/components/UserSidebar/UserSidebar.style";

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
                    <div className="table-wrapper">
                        <TableHeader/>
                        {reservations &&
                        reservations.map((reservation: any) => {
                            if (reservation.eventReservation === "reserved")
                                return (
                                    <TableRow
                                        rowLabel3={`${reservation.credits} Credits`}
                                        reservation={reservation}
                                    />
                                );
                            return null;
                        })}
                    </div>
                </CreditHistoryModalStyle>
            </ModalWrapper>
        </>
    );
};

export default CreditHistoryModal;

import React, {useState} from "react";

import {UpcomingPayoutsListItem} from "./UpcomingPayoutsListItem";
import {UpcomingPayoutsListStyle} from "./UpcomingPayoutsList.style";
import {PayoutDetails} from "../Modals/PayoutDetails";
import {PayoutsListStyle} from "../PayoutsList/PayoutsList.style";

const PayoutsList = (props: any) => {
    const {reserveEvent} = props;
    const [showPayoutDetailModal, setShowPayoutDetailModal] = useState(false)
    const [selectedPayout, setSelectedPayout] = useState(null);

    const filteredReservations = (props.reserveEvent).reservations.filter((event: any) => new Date(event.date) >= (new Date()))

    const handleShowDetails = (event: any) => {
        setSelectedPayout(event)
        setShowPayoutDetailModal(true);
    }
    return (

        <UpcomingPayoutsListStyle>
            <div className="table-header">
                <h3 className="header-title">Scheduled</h3>
                <h3 className="header-title">Event</h3>
                <h3 className="header-title">Payout</h3>
            </div>

            <UpcomingPayoutsListItem reserveEvent={{reservations: filteredReservations}}
                                     handleShowDetails={handleShowDetails}
                                     search={props.search} from={props.from} to={props.to}/>
            <PayoutDetails reserveEvent={selectedPayout} isModalVisible={showPayoutDetailModal}
                           setIsModalVisible={setShowPayoutDetailModal}/>

        </UpcomingPayoutsListStyle>
    );
};

export default PayoutsList;

import React, {useState} from "react";
import {PayoutsListStyle} from "./PayoutsList.style";
import {PayoutsListItem} from "./PayoutsListItem";
import {PayoutDetails} from "..";

const PayoutsList = (props: any) => {
    const [showPayoutDetailModal, setShowPayoutDetailModal] = useState(false)
    const [selectedPayout,setSelectedPayout]=useState(null);

    const handleShowDetails=(event:any)=>{
        setSelectedPayout(event)
        setShowPayoutDetailModal(true);
    }

    return (
        <PayoutsListStyle>
            <div className="table-header">
                <h3 className="header-title">Date</h3>
                <h3 className="header-title">Event</h3>
                <h3 className="header-title">Payout</h3>
            </div>
            <PayoutsListItem reserveEvent={props.reserveEvent} search={props.search} from={props.from} to={props.to}
                             handleShowDetails={handleShowDetails}/>
            <PayoutDetails reserveEvent={selectedPayout} isModalVisible={showPayoutDetailModal}
                           setIsModalVisible={setShowPayoutDetailModal}/>
        </PayoutsListStyle>
    );
};

export default PayoutsList;

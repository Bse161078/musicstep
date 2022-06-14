import React from "react";
import {PayoutDetailsStyle} from "./PayoutDetails.style";
import {ModalWrapper} from "../ModalWrapper";
import {FilledButtonStyle} from "../../../../styles/Common.style";
import moment from "moment";

type PayoutDetailsProps = {
    isModalVisible?: boolean;
    setIsModalVisible?: any;
    reserveEvent?: any;
};
const PayoutDetails = (props: PayoutDetailsProps) => {
    const {isModalVisible, setIsModalVisible, reserveEvent} = props;
    return (
        <ModalWrapper
            heading="Payout Details"
            width="920px"
            button={
                <FilledButtonStyle width="500px" height="60px"
                                   onClick={() => {
                                       setIsModalVisible(false)
                                   }}
                >
                    Okay
                </FilledButtonStyle>
            }
            isModalVisible={isModalVisible}
            setIsModalVisible={setIsModalVisible}
        >
            {
                <PayoutDetailsStyle>
                    <div className="left-section">
                        <div>
                            <h3>Event Name</h3>
                            <p>{reserveEvent.title}</p>
                        </div>
                        <div>
                            <h3>Event Date</h3>
                            <p>{moment(reserveEvent.date).format("MMM Do YYYY")}</p>
                        </div>
                        <div>
                            <h3>Payment Method</h3>
                            <p>
                                Credit Card
                            </p>
                        </div>
                        <div>
                            <h3>Currency</h3>
                            <p>USD</p>
                        </div>
                        <div>
                            <h3>Payout Type</h3>
                            <p>Final</p>
                        </div>
                        <div>
                            <h3>Event Status</h3>
                            <p>Completed</p>
                        </div>
                    </div>
                </PayoutDetailsStyle>
            }
        </ModalWrapper>
    );
};

export default PayoutDetails;

import React, {useState} from "react";
import TicketInfoCardStyle from "./TicketInfoCardstyle";
import {DeleteIcon, EditButtonIcon} from "../../../assets";
import {Dashboard, DeleteRoleModal} from "..";
import {CreateTicketModal} from "../../../components";
import {OutlineButtonStyle} from "../../../styles/Common.style";
import {TicketModal} from "../../../components/TicketModal";
import axios from "axios";
import Loading from "../../../components/Loading/Loading";
import {useLoginContext} from "../../../context/authenticationContext";
import {ErrorDialog} from "../Modals/ErrorDialog";

type TicketInfoCardProps = {
    heading?: string;
    eventCredit?: number;
    availableTickets?: number;
    description?: string;
    outlineButton?: boolean;
    disableTicketsAvailbilty?: boolean;
    index?: number;
    handleDeleteTicket?: any;
    ticket?: any;
    handleEditTicket?: any;
    ticketIndex?: number;
    event?: any;
    subscribtionCredit?: number;
    venue?: any;
};

const TicketInfoCard = (props: TicketInfoCardProps) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [
        isCricketTicketModalVisible,
        setIsCricketTicketModalVisible,
    ] = useState(false);
    const [isTicketModalVisible, setTicketModalVisible] = useState(false);
    const [error, setError] = useState(false);
    const [isLoading, setLoading] = useState(false)
    const {state, dispatch} = useLoginContext();

    const handleDeleteModal = () => {
        setIsModalVisible(true);
    };
    const handleEditTicketModal = () => {
        setIsCricketTicketModalVisible(true);
    };

    const checkReservation = async () => {
        const  event= props.event;
        if(event){
            try {
                setLoading(true);
                const response = await axios.get(`/v1/reservation/check/${event._id}`, {headers: {Authorization: `Bearer ${state.authToken}`}});
                setLoading(false);
                setTicketModalVisible(true);

            } catch (e) {
                setLoading(false);
                setError(true);
            }
        }

    }

    return (
        <>
            {isLoading && <Loading/>}
            {props.event && (
                <TicketModal
                    isModalVisible={isTicketModalVisible}
                    setIsModalVisible={setTicketModalVisible}
                    eventCredit={props.eventCredit}
                    subscribtionCredit={props.subscribtionCredit}
                    ticketIndex={props.ticketIndex ? props.ticketIndex : 0}
                    event={props.event}
                    venue={props.venue}
                />
            )}

            <TicketInfoCardStyle disableTicketsAvailbilty>
                <h2>{props.heading}</h2>
                <p className="credits">Credits : {props.eventCredit}</p>
                {props.disableTicketsAvailbilty ? null : (
                    <p className="tickets">
                        Seats or Spots Available: {props.availableTickets}
                    </p>
                )}
                <p className="description">{props.description}</p>
                <div className="button-wrapper">
                    {props.outlineButton ? (
                        <OutlineButtonStyle
                            height="53px"
                            onClick={() => {
                                checkReservation();
                            }}
                        >
                            Reserve
                        </OutlineButtonStyle>
                    ) : (
                        <>
                            <div onClick={handleDeleteModal}>
                                <DeleteIcon/>
                            </div>
                            <div onClick={handleEditTicketModal}>
                                <EditButtonIcon/>
                            </div>
                        </>
                    )}
                </div>
            </TicketInfoCardStyle>
            <ErrorDialog
                header={"Error"}
                message="You have already reserved this event."
                isModalVisible={error}
                setIsModalVisible={setError}
                handleOkClick={() => {
                    props.handleDeleteTicket(props.index);
                    setIsModalVisible(false);
                }}
            />
            <DeleteRoleModal
                header={"Delete Ticket?"}
                message="Are you sure you want to delete this type of tickets?"
                isModalVisible={isModalVisible}
                setIsModalVisible={setIsModalVisible}
                handleOkClick={() => {
                    props.handleDeleteTicket(props.index);
                    setIsModalVisible(false);
                }}
            />
            <CreateTicketModal
                isModalVisible={isCricketTicketModalVisible}
                setIsModalVisible={setIsCricketTicketModalVisible}
                ticket={props.ticket}
                handleEditTicket={props.handleEditTicket}
                index={props.index}
            />
        </>
    );
};

export default TicketInfoCard;

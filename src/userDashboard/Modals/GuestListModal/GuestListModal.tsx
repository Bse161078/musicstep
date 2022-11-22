import React, {useEffect, useState} from 'react'
import GuestListModalStyle from './GuestListModal.style'
import {ModalWrapper} from '../../../admin/components/Modals/ModalWrapper'
import {PersonListItem} from '../../components'
import axios from "axios";
import {useLoginContext} from "../../../context/authenticationContext";
import Loading from "../../../components/Loading/Loading";
import {EditProfileFormStyle} from "../../components/EditProfileForm/EditProfileForm.style";

type InviteModalProps = {
    isModalVisible?: boolean
    setIsModalVisible?: any
    event?:any
}

const GuestListModal = (props: InviteModalProps) => {
    const {isModalVisible, setIsModalVisible,event} = props;
    const [isLoading, setLoading] = useState<any>(null);
    const [data, setData] = useState<any>([]);
    const {state, dispatch} = useLoginContext();

    const getGuestList = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`/v1/reservation/event?event=${event}`, {headers: {Authorization: `Bearer ${state.authToken}`}});
            let data = response.data.data;
            const ownUser = state.data;
            const reservations = (data.reservations).filter((reservation: any) => reservation.user
                && ownUser.id!==reservation.user.id);
            data.reservations=reservations;
            setData(data);
            setLoading(false);
        } catch (e) {
            setLoading(false);
        }
    }

    useEffect(() => {
        getGuestList();
    }, [])


   const reservations=data && data.reservations?data.reservations:[];
    const container=reservations.map((reservation:any)=>
        <PersonListItem
            personName={reservation.user.firstName+' '+reservation.user.lastName}
            imageLink={`${reservation.imageUrl && (reservation.imageUrl).length>0?
                process.env.REACT_APP_BASE_URL + "/images/" + reservation.imageUrl : "/images/person.svg"}`}
            recentEventName=""
            nextEventName=""
            listType="normal"
        />
    )

    return (
        <>
            <ModalWrapper
                heading="Guest List"
                description={`${data.listed-1} Listed, ${data.anonymousReservations} Anonymous`}
                isModalVisible={isModalVisible}
                setIsModalVisible={setIsModalVisible}
                isFooter={false}
                width="904px">
                {isLoading && <Loading/>}

                <GuestListModalStyle>
                    {container}
                </GuestListModalStyle>
            </ModalWrapper>
        </>
    )
}

export default GuestListModal

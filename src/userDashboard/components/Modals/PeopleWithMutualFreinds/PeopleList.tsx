import {useEffect, useState} from 'react'
import {PersonListItem} from '../../'
import axios from "axios";
import {useLoginContext} from "../../../../context/authenticationContext";
import {Loading} from "../../../../components/Loading";
import {UserSidebarStyle} from "../../UserSidebar/UserSidebar.style";
import React from "react";


export const PeopleList = (props:any) => {
    const {setIsModalVisible}=props;
    const [reservations, setReservations] = useState<any>([]);
    const {state, dispatch} = useLoginContext();
    const [isLoading, setLoading] = useState(false);
    const [refreshApis,setRefreshApis]=useState(0);
    const getMutualReservations = async () => {
        try {
            setLoading(true);
            const response = await axios.get("/v1/reservation/mutual", {headers: {Authorization: `Bearer ${state.authToken}`}});
            let users=response.data.data;
            const ownUser=state.data;
            users=users.filter((user:any)=>user.publicInfo && user.publicInfo.isPublicInfo && ownUser.id!==user._id)
            setReservations(users);
            setLoading(false);
        } catch (e) {
            setLoading(false);
        }
    }



    const refreshApi=()=>{
        setRefreshApis(refreshApis+1);
    }

    useEffect(() => {
        getMutualReservations();
    }, [refreshApis])



    const reservationContainer=reservations && reservations.length>0 && reservations.map((reservation:any)=>
        <PersonListItem
            personName={`${reservation.firstName} ${reservation.lastName}`}
            imageLink={`${reservation.imageUrl && (reservation.imageUrl).length>0?
                process.env.REACT_APP_BASE_URL + "/images/" + reservation.imageUrl : "/images/person.svg"}`}
            recentEventName={reservation.recentEvent}
            nextEventName={reservation.publicNextReservation?reservation.nextEvent:""}
            refreshApi={refreshApi}
            user={reservation}
        />
    )


    return (
        <div className="people-list">
            {isLoading === true && <Loading/>}

            {reservationContainer}

        </div>

    )
}

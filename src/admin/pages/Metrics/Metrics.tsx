import React, {useEffect, useState} from "react";
import {
    ContentHeader,
    Dashboard,
    DashboardHeader,
    Tile,
} from "../../components";
import {MetricsStyle} from "./Metrics.style";
import axios from "axios";
import {Loading} from "../../../components";

const Metrics = () => {
    const [isLocading, setLoading] = useState<any>();
    const [stats, setStats] = useState<any>();
    const [reservationStats, setReservationStats] = useState<any>(null);

    useEffect(() => {
        handlePartnerStats();
        getReservationStats();
    }, []);
    const handlePartnerStats = () => {
        setLoading(true);
        const user: any = JSON.parse(localStorage.getItem("data") || "{}");
        axios
            .get(`/v1/partners/stats/${user.id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("authToken")}`,
                },
            })
            .then((response) => {
                //window.open(response.data.url, '_blank');
                setStats(response.data);
                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
            });
    };

    const getReservationStats = () => {
        const user: any = JSON.parse(localStorage.getItem("data") || "{}");
        axios
            .get(`/v1/reservation/partner/stats/${user.id}`, {
                headers: {Authorization: `Bearer ${localStorage.getItem("authToken")}`},
            })
            .then((res) => {
                setReservationStats(res.data);
            })
            .catch((error) => {
            });
    }

    return (
        <div style={{width: "100vw", overflow: "hidden"}}>
            <Dashboard>
                {isLocading && <Loading/>}
                {stats && (
                    <MetricsStyle>
                        <DashboardHeader heading="Metrics"/>

                        {/* <ContentHeader heading="Summary" actionButtons={<>Events Filter</>} /> */}
                        <div className="tiles-wrapper">
                            {/*<Tile heading="Total Reservations" value={`$${stats.totalReservations}`} />*/}
                            {/*<Tile heading="Sold Reservations" value={`$${stats.soldReservations}`}/>*/}
                            {/*<Tile heading="Sold Tickets" value={stats.soldTickets}/>*/}
                            <Tile heading="Total Reservations Completed (#)" value={reservationStats && reservationStats.data && `${reservationStats.data.count}`}/>
                            <Tile heading="Total Reservations Completed ($)" value={reservationStats && reservationStats.data && `$${(reservationStats.data.amount).toFixed(2)}`}/>
                        </div>
                        {/*<ContentHeader heading="Charts" actionButtons={<>Events Filter</>} />*/}
                        {/*<div className="charts-wrapper">*/}
                        {/*<img alt="chart" src="/images/metrics/payouts-chart.svg" className="chart" />*/}
                        {/*<img alt="chart" src="/images/metrics/reservation-chart.svg" className="chart" />*/}
                        {/*<img alt="chart" src="/images/metrics/event-chart.svg" className="chart" />*/}
                        {/*</div>*/}
                    </MetricsStyle>
                )}
            </Dashboard>
        </div>
    );
};

export default Metrics;

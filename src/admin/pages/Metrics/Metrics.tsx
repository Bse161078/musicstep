import React from "react";
import { ContentHeader, Dashboard, DashboardHeader, Tile } from "../../components";
import { MetricsStyle } from "./Metrics.style";

const Metrics = () => {
  return (
    <Dashboard>
      <MetricsStyle>
        <DashboardHeader heading="Metrics" />

        <ContentHeader heading="Summary" actionButtons={<>Events Filter</>} />
        <div className="tiles-wrapper">
            <Tile heading="Total Reservations" value={200} />
            <Tile heading="Total Reservations" value={190} />
            <Tile heading="Total Reservations" value="95%" />
            <Tile heading="Total Reservations" value="5%" />
            <Tile heading="Total Reservations" value="$2880" />
        </div>

        <ContentHeader heading="Charts" actionButtons={<>Events Filter</>} />
        <div className="charts-wrapper">
            <img alt="chart" src="/images/metrics/payouts-chart.svg" className="chart" />
            <img alt="chart" src="/images/metrics/reservation-chart.svg" className="chart" />
            <img alt="chart" src="/images/metrics/event-chart.svg" className="chart" />
        </div>
      </MetricsStyle>
    </Dashboard>
  );
};

export default Metrics;

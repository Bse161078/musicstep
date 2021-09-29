import React from "react";
import { TabPaneStyle, TabsStyle } from "../../../styles/Fields.style";
import {
  Dashboard,
  DashboardHeader,
  PayoutsList,
  SearchInputWithButton,
  UpcomingPayoutsList,
} from "../../components";

import { PayoutsStyle } from "./Payouts.style";

export default function Payouts() {
  return (
    <Dashboard>
      <PayoutsStyle>
        <DashboardHeader heading="Payouts" />

        <TabsStyle defaultActiveKey="1">
          <TabPaneStyle tab="Payouts" key="1">
            <SearchInputWithButton />
            <div className="table-wrapper">
              <PayoutsList />
            </div>
          </TabPaneStyle>

          <TabPaneStyle tab="Upcoming Payouts" key="2">
            <SearchInputWithButton />
            <div className="table-wrapper">
              <UpcomingPayoutsList />
            </div>
          </TabPaneStyle>
        </TabsStyle>
      </PayoutsStyle>
    </Dashboard>
  );
}

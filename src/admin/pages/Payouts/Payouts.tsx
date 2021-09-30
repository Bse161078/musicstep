import { Form, Formik } from "formik";
import React from "react";
import { SelectBox } from "../../../components";
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
            <div className="header-wrapper">
              <SearchInputWithButton />
              <Formik
                initialValues={{
                  status: "All",
                  startDate: "Select a date",
                  endDate: "Select a date",
                }}
                onSubmit={() => {}}
              >
                {() => (
                  <Form className="dropdowns-form">
                    <SelectBox
                      name="status"
                      label="Status"
                      type="horizontal"
                      options={[{ key: "", value: "All" }]}
                    />
                    <SelectBox
                      name="startDate"
                      label="Start Date"
                      type="horizontal"
                      options={[{ key: "", value: "Select a date" }]}
                    />
                    <SelectBox
                      name="endDate"
                      label="End Date"
                      type="horizontal"
                      options={[{ key: "", value: "Select a Date" }]}
                    />
                  </Form>
                )}
              </Formik>
            </div>
            <div className="table-wrapper">
              <PayoutsList />
            </div>
          </TabPaneStyle>

          <TabPaneStyle tab="Upcoming Payouts" key="2">
            <div className="header-wrapper">
              <SearchInputWithButton />
              <Formik
                initialValues={{
                  status: "All",
                  startDate: "Select a date",
                  endDate: "Select a date",
                }}
                onSubmit={() => {}}
              >
                {() => (
                  <Form className="dropdowns-form">
                    <SelectBox
                      name="status"
                      label="Status"
                      type="horizontal"
                      options={[{ key: "", value: "All" }]}
                    />
                    <SelectBox
                      name="startDate"
                      label="Start Date"
                      type="horizontal"
                      options={[{ key: "", value: "Select a date" }]}
                    />
                    <SelectBox
                      name="endDate"
                      label="End Date"
                      type="horizontal"
                      options={[{ key: "", value: "Select a Date" }]}
                    />
                  </Form>
                )}
              </Formik>
            </div>
            <div className="table-wrapper">
              <UpcomingPayoutsList />
            </div>
          </TabPaneStyle>
        </TabsStyle>
      </PayoutsStyle>
    </Dashboard>
  );
}

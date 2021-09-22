import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
// import { Navbar } from "./components";
import {
  ExploreVenue,
  FreeTrial,
  Home,
  Login,
  PartnerLogin,
  Pricing,
  ProcessPayment,
  VenueDetails,
} from "./pages";

import {
  AccountSettings,
  BasicInfo,
  PaymentInfo,
  Payouts,
  TaxPayerInfo,
  TeamManagement,
} from "./admin/pages";
import { Navbar } from "./components";
import { BaseStyle } from "./styles/Base.style";
import { UserHome } from "./userDashboard/pages";

function App() {
  return (
    <div className="App">
      <BaseStyle />
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/free-trial" component={FreeTrial} />
          <Route path="/partner-login" component={PartnerLogin} />
          <Route exact path="/pricing" component={Pricing} />
          <Route path="/pricing/process-payment" component={ProcessPayment} />
          <Route exact path="/explore-venue" component={ExploreVenue} />
          <Route path="/explore-venue/venue-details" component={VenueDetails} />

          {/* Admin routes */}
          <Route path="/admin/basic-info" component={BasicInfo} />
          <Route path="/admin/team-management" component={TeamManagement} />
          <Route path="/admin/payment-information" component={PaymentInfo} />
          <Route path="/admin/payouts" component={Payouts} />
          <Route path="/admin/tax-payer-information" component={TaxPayerInfo} />
          <Route path="/admin/account-settings" component={AccountSettings} />

          {/* User Admin Routes */}
          <Route path="/dashboard/home" component={UserHome} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;

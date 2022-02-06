import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch, useLocation } from "react-router-dom";

import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import {
  ExploreVenue,
  FreeTrial,
  Home,
  HowItWorks,
  Login,
  PartnerLogin,
  Pricing,
  ProcessPayment,
  TermsAndConditions,
  VenueDetails,
  PartnerSignup,
  OrganizerProfile,
} from "./pages";

import {
  AccountSettings,
  BasicInfo,
  Metrics,
  PaymentInfo,
  Payouts,
  TaxPayerInfo,
  TeamManagement,
  EventsManagementSteps,
} from "./admin/pages";
import { AddVenueProfileForm } from "./admin/components";
import { AuthenticatedRoute, Footer, Navbar } from "./components";
import { BaseStyle } from "./styles/Base.style";
import {
  BillingInformation,
  ChangePassword,
  EditProfile,
  UserHome,
} from "./userDashboard/pages";
import { UserContextProvider } from "./context/userContext";
import { PartnerContextProvider } from "./context/partnerContext ";
import { LoginContextProvider } from "./context/authenticationContext";
import { EventsManagment } from "./admin/components";

const RoutesList = (props: any) => {
  const { pathname } = useLocation();
  const [showNavbar, setShowNavbar] = useState(true);
  //use
  useEffect(() => {
    switch (pathname) {
      case "/explore-venue":
        setShowNavbar(false);
        break;
      case "/explore-venue/venue-details":
        setShowNavbar(false);
        break;

      default:
        setShowNavbar(true);
    }

    window.scrollTo(0, 0);
  }, [pathname]);

  const isAdminSide = pathname.includes("/admin");
  const isDashboardSide = pathname.includes("/dashboard");

  return (
    <>
      {!isAdminSide && !isDashboardSide && showNavbar ? <Navbar /> : ""}
      <Switch>
        <Route
          path="/admin/events-management"
          exact
          render={() => <EventsManagment />}
        />

        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/free-trial" component={FreeTrial} />
        <Route path="/partner-login" component={PartnerLogin} />
        <Route path="/partner-detail/:partnerId" component={PartnerSignup} />
        <Route exact path="/pricing" component={Pricing} />
        <Route path="/explore-venue/venue-details" component={VenueDetails} />
        <Route
          path="/explore-venue/organizer-profile"
          component={OrganizerProfile}
        />
        <Route path="/how-it-works" component={HowItWorks} />
        <Route path="/terms-conditions" component={TermsAndConditions} />

        <Route
          path="/admin/basic-info"
          render={() => (
            // <AuthenticatedRoute redirectTo="/partner-login">
            <BasicInfo />
            // </AuthenticatedRoute>
          )}
        />

        <Route
          path="/pricing/process-payment"
          render={() => (
            <AuthenticatedRoute redirectTo="/login">
              <ProcessPayment />
            </AuthenticatedRoute>
          )}
        />
        <Route
          exact
          path="/explore-venue"
          render={() => (
            <AuthenticatedRoute redirectTo="/login">
              <ExploreVenue />
            </AuthenticatedRoute>
          )}
        />

        {/* Admin routes */}
        <Route
          path="/admin/team-management"
          render={() => (
            <AuthenticatedRoute redirectTo="/partner-login">
              <TeamManagement />
            </AuthenticatedRoute>
          )}
        />
        <Route
          path="/admin/payment-information"
          render={() => (
            <AuthenticatedRoute redirectTo="/partner-login">
              <PaymentInfo />
            </AuthenticatedRoute>
          )}
        />
        <Route
          path="/admin/payouts"
          render={() => (
            <AuthenticatedRoute redirectTo="/partner-login">
              <Payouts />
            </AuthenticatedRoute>
          )}
        />
        <Route
          path="/admin/tax-payer-information"
          render={() => (
            <AuthenticatedRoute redirectTo="/partner-login">
              <TaxPayerInfo />
            </AuthenticatedRoute>
          )}
        />
        <Route
          path="/admin/account-settings"
          render={() => (
            <AuthenticatedRoute redirectTo="/partner-login">
              <AccountSettings />
            </AuthenticatedRoute>
          )}
        />
        <Route
          path="/admin/add-venueprofile"
          render={() => (
            // <AuthenticatedRoute redirectTo="/partner-login">
            <AddVenueProfileForm />
            // </AuthenticatedRoute>
          )}
        />
        <Route
          path="/admin/events-managment-home"
          render={() => (
            // <AuthenticatedRoute redirectTo="/partner-login">
            <EventsManagementSteps />
            // </AuthenticatedRoute>
          )}
        />
        <Route
          path="/admin/metrics"
          render={() => (
            <AuthenticatedRoute redirectTo="/partner-login">
              <Metrics />
            </AuthenticatedRoute>
          )}
        />

        {/* User Admin Routes */}
        <Route
          path="/dashboard/home"
          render={() => (
            // <AuthenticatedRoute redirectTo="/login">
            <UserHome />
            // </AuthenticatedRoute>
          )}
        />
        <Route
          path="/dashboard/basic-info"
          render={() => (
            <AuthenticatedRoute redirectTo="/login">
              <EditProfile />
            </AuthenticatedRoute>
          )}
        />
        <Route
          path="/dashboard/billing-information"
          exact
          render={() => (
            <AuthenticatedRoute redirectTo="/login">
              <BillingInformation />
            </AuthenticatedRoute>
          )}
        />
        <Route
          path="/dashboard/change-password"
          render={() => (
            <AuthenticatedRoute redirectTo="/login">
              <ChangePassword />
            </AuthenticatedRoute>
          )}
        />
        <Route
          path="/partner-signup"
          exact
          render={() => (
            // <AuthenticatedRoute redirectTo="partner/login">
            <PartnerSignup />
            // </AuthenticatedRoute>
          )}
        />
      </Switch>
    </>
  );
};

function App() {
  return (
    <div className="App">
      <LoginContextProvider>
        <UserContextProvider>
          <PartnerContextProvider>
            <BaseStyle />
            <BrowserRouter>
              <RoutesList />
              <Footer />
            </BrowserRouter>
          </PartnerContextProvider>
        </UserContextProvider>
      </LoginContextProvider>
    </div>
  );
}
export default App;

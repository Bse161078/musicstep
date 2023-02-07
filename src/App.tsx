import React, {useEffect, useState} from "react";
import {
    BrowserRouter,
    Route,
    Switch,
    useLocation,
    useHistory,
} from "react-router-dom";

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
    PrivacyPolicy,
    AboutUs,
    VenueDetails,
    PartnerSignup,
    OrganizerProfile,
    FeesApply,
    HelpCenter,
    TermsOfUse,
    DCMA,
    Billing,
    Reservation,
    Subscription,
    Credit,
    Promotion
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
import {AddVenueProfileForm} from "./admin/components";
import {AuthenticatedRoute, Footer, Navbar} from "./components";
import {BaseStyle} from "./styles/Base.style";
import {
    BillingInformation,
    ChangePassword,
    EditProfile,
    UserHome,
} from "./userDashboard/pages";
import {UserContextProvider} from "./context/userContext";
import {PartnerContextProvider} from "./context/partnerContext ";
import {EventContextProvider} from "./context/eventContext";
import {LoginContextProvider} from "./context/authenticationContext";
import {EventsManagment} from "./admin/components";
import {ForgotPasswordForm} from "./components/ForgotPasswordForm";
import {ResetPasswordForm} from "./components/ResetPasswordForm";
import axios from "axios";
import {useLoginContext} from "./context/authenticationContext";
import AddCardSuccess from "./components/Stripe/addCardSuccess";
import SubscriptionSuccess from "./components/Stripe/subscriptionSuccess";
import SubscriptionCancel from "./components/Stripe/subscriptionCancel";
import UpdateSubscription from "./pages/ExploreVenue/UpdateSubscription";
import CreateCreditPayment from "./pages/ExploreVenue/CreateCreditPayment";
import CreditPaymentSuccess from "./components/Stripe/createCreditPaymentSuccess";
import OrientationModal from "./components/ChangeOrientation/OrientationModal/OrientationModal";
import {subscribe, isSupported} from 'on-screen-keyboard-detector';
import {PartnerTermsAndCondition} from "./pages/PartnerTermsAndCondition";
import {checkIfPathIsFooter} from "./mockData/footer";
import StaticAboutUs from "./pages/AboutUs/about-us";
import StaticPrivacyPolicy from "./pages/PrivacyPolicy/privacy-policy";

// axios.defaults.baseURL = "https://music-pass-backend.herokuapp.com/v1";
axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
// axios.defaults.headers.common["Authorization"] = "AUTH TOKEN";
axios.defaults.headers.post["Content-Type"] = "application/json";

const RoutesList = (props: any) => {
    const {pathname} = useLocation();
    const [showNavbar, setShowNavbar] = useState(true);
    const history = useHistory();

    //Axios Inteceptors

    const {dispatch, state} = useLoginContext();

    axios.interceptors.request.use(
        (request) => {
            return request;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    axios.interceptors.response.use(
        (response) => {
            // Edit response config
            return response;
        },
        (error) => {
            if (error.response.status === 401) {
                if (!window.location.href.includes("partner-login")) {
                    dispatch({
                        type: "LOGOUT",
                        payload: {},
                    });
                    history.push("/login");
                }else{
                    history.push('/')
                }
            }

            return Promise.reject(error);
        }
    );
    //

    useEffect(() => {
        const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        if (!isSafari) {
            const unsubscribe = subscribe(visibility => {
                if (visibility === "hidden") {
                    // ...
                    if (pathname === "/login" || pathname === "/register" || pathname === "/forgot-password"
                        || pathname === "reset-password" || pathname === "partner-login")
                        setShowNavbar(true)
                }
                else { // visibility === "visible"
                    // ...
                    if (pathname === "/login" || pathname === "/register" || pathname === "/forgot-password"
                        || pathname === "reset-password" || pathname === "partner-login")
                        setShowNavbar(false);

                }
            });
        }

        if(!localStorage.getItem("authToken") ||  (localStorage.getItem("authToken") || "").length<=0){
            history.push('/')
        }

    }, [])


    //use
    useEffect(() => {
        switch (pathname) {
            case "/explore-venue":
                setShowNavbar(false);
                break;
            case "/explore-venue/venue-details":
                setShowNavbar(false);
                break;
            case "/explore-venue/organizer-profile":
                setShowNavbar(false);
                break;
            case "/create-credit-payment":
                setShowNavbar(false);
                break;

            default:
                setShowNavbar(true);
        }

        if (pathname.includes("credit-payment-success")) setShowNavbar(false)

        window.scrollTo(0, 0);
    }, [pathname]);


    const isAdminSide = pathname.includes("/admin") || (state && state.data && state.data.role==="admin");
    const isDashboardSide = pathname.includes("/dashboard");

    //localStorage.clear();
    return (
        <>
            {(!isAdminSide && !isDashboardSide && showNavbar) || (checkIfPathIsFooter(pathname)) ? <Navbar/> : ""}

            <Switch>
                <Route
                    path="/admin/events-management"
                    exact
                    render={() => (
                        <AuthenticatedRoute redirectTo="/partner-login">
                            <EventsManagment/>
                        </AuthenticatedRoute>
                    )}
                />

                <Route path="/" exact component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/forgot-password" component={ForgotPasswordForm}/>
                <Route path="/reset-password" component={ResetPasswordForm}/>
                <Route path="/free-trial" component={FreeTrial}/>
                <Route path="/partner-login" component={PartnerLogin}/>
                <Route path="/partner-detail/:partnerId" component={PartnerSignup}/>
                <Route exact path="/pricing" component={Pricing}/>
                <Route exact path="/subscription-success" component={SubscriptionSuccess}/>
                <Route exact path="/subscription-cancel" component={SubscriptionCancel}/>
                <Route path="/how-it-works" component={HowItWorks}/>
                <Route path="/terms-conditions" component={TermsAndConditions}/>
                <Route path="/privacy-policy" component={PrivacyPolicy}/>
                <Route path="/about-us" component={AboutUs}/>
                <Route path="/fees-apply" component={FeesApply}/>
                <Route path="/help-center" component={HelpCenter}/>
                <Route path="/terms-of-use" component={TermsOfUse}/>
                <Route path="/dcma" component={DCMA}/>
                <Route path="/billing" component={Billing}/>
                <Route path="/reservation" component={Reservation}/>
                <Route path="/subscription" component={Subscription}/>
                <Route path="/credit" component={Credit}/>
                <Route path="/promotion" component={Promotion}/>
                <Route path="/partner-terms" component={PartnerTermsAndCondition}/>


                <Route path="/dashboard/home/venue-details"
                       render={() => (
                           <AuthenticatedRoute redirectTo="/login">
                               <VenueDetails/>
                           </AuthenticatedRoute>
                       )}/>


                <Route path="/explore-venue/venue-details"
                       render={() => (
                           <AuthenticatedRoute redirectTo="/login">
                               <VenueDetails/>
                           </AuthenticatedRoute>
                       )}/>
                <Route
                    path="/explore-venue/organizer-profile"
                    render={() => (
                        <AuthenticatedRoute redirectTo="/login">
                            <OrganizerProfile/>
                        </AuthenticatedRoute>
                    )}
                />
                <Route
                    path="/dashboard/home/organizer-profile"
                    render={() => (
                        <AuthenticatedRoute redirectTo="/partner-login">
                            <OrganizerProfile/>
                        </AuthenticatedRoute>
                    )}
                />

                <Route
                    path="/admin/basic-info"
                    render={() => (
                        <AuthenticatedRoute redirectTo="/partner-login">
                            <BasicInfo/>
                        </AuthenticatedRoute>
                    )}
                />

                <Route
                    path="/pricing/process-payment"
                    render={() => (
                        <AuthenticatedRoute redirectTo="/login">
                            <ProcessPayment/>
                        </AuthenticatedRoute>
                    )}
                />
                <Route
                    exact
                    path="/explore-venue"
                    render={() => (
                        <AuthenticatedRoute redirectTo="/login">
                            <ExploreVenue/>
                        </AuthenticatedRoute>
                    )}
                />

                <Route
                    exact
                    path="/update-subscription"
                    render={() => (
                        <UpdateSubscription/>
                    )}
                />
                <Route
                    exact
                    path="/create-credit-payment"
                    render={() => (
                        <CreateCreditPayment/>
                    )}
                />

                {/* Admin routes */}
                <Route
                    path="/admin/team-management"
                    render={() => (
                        <AuthenticatedRoute redirectTo="/partner-login">
                            <TeamManagement/>
                        </AuthenticatedRoute>
                    )}
                />
                <Route
                    exact
                    path="/update-subscription"
                    render={() => (
                        <UpdateSubscription/>
                    )}
                />
                <Route
                    path="/admin/payment-information"
                    render={() => (
                        <AuthenticatedRoute redirectTo="/admin/add-venueprofile">
                            <PaymentInfo/>
                        </AuthenticatedRoute>
                    )}
                />
                <Route
                    path="/admin/payouts"
                    render={() => (
                        <AuthenticatedRoute redirectTo="/partner-login">
                            <Payouts/>
                        </AuthenticatedRoute>
                    )}
                />
                <Route
                    path="/admin/tax-payer-information"
                    render={() => (
                        <AuthenticatedRoute redirectTo="/partner-login">
                            <TaxPayerInfo/>
                        </AuthenticatedRoute>
                    )}
                />
                <Route
                    path="/admin/account-settings"
                    render={() => (
                        <AuthenticatedRoute redirectTo="/partner-login">
                            <AccountSettings/>
                        </AuthenticatedRoute>
                    )}
                />
                <Route
                    path="/admin/add-venueprofile"
                    render={() => (
                        <AuthenticatedRoute redirectTo="/partner-login">
                            <AddVenueProfileForm/>
                        </AuthenticatedRoute>
                    )}
                />
                <Route
                    path="/admin/events-managment-home"
                    render={() => (
                        <AuthenticatedRoute redirectTo="/partner-login">
                            <EventsManagementSteps/>
                        </AuthenticatedRoute>
                    )}
                />
                <Route
                    path="/admin/metrics"
                    render={() => (
                        <AuthenticatedRoute redirectTo="/partner-login">
                            <Metrics/>
                        </AuthenticatedRoute>
                    )}
                />

                {/* User Admin Routes */}
                <Route path="/credit-payment-success"
                       render={() => (
                           <AuthenticatedRoute redirectTo="/login">
                               <CreditPaymentSuccess/>
                           </AuthenticatedRoute>
                       )}/>

                <Route
                    path="/dashboard/home"
                    render={() => (
                        <AuthenticatedRoute redirectTo="/login">
                            <UserHome/>
                        </AuthenticatedRoute>
                    )}
                />
                <Route
                    path="/dashboard/basic-info"
                    render={() => (
                        <AuthenticatedRoute redirectTo="/login">
                            <EditProfile/>
                        </AuthenticatedRoute>
                    )}
                />
                <Route
                    path="/dashboard/billing-information"
                    exact
                    render={() => (
                        <AuthenticatedRoute redirectTo="/login">
                            <BillingInformation/>
                        </AuthenticatedRoute>
                    )}
                />
                <Route
                    path="/dashboard/change-password"
                    render={() => (
                        <AuthenticatedRoute redirectTo="/login">
                            <ChangePassword/>
                        </AuthenticatedRoute>
                    )}
                />
                <Route
                    path="/partner-signup"
                    exact
                    render={() => (
                        // <AuthenticatedRoute redirectTo="partner/login">
                        <PartnerSignup/>
                        // </AuthenticatedRoute>
                    )}
                />
            </Switch>

        </>
    );
};

function App() {
    const [isPortrait, setIsPortrait] = useState(false);
    useEffect(() => {
        const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        setIsPortrait(window.matchMedia("(orientation: portrait)").matches);
        window.addEventListener("orientationchange", function () {
            setIsPortrait(!window.matchMedia("(orientation: portrait)").matches)
        });


    }, [])
    return (
        <div className="App">
            {isPortrait && <OrientationModal/>}
            {!isPortrait &&
            <LoginContextProvider>
                <UserContextProvider>
                    <PartnerContextProvider>
                        <EventContextProvider>
                            <BaseStyle/>
                            <BrowserRouter>
                                <RoutesList/>
                                <Footer/>
                            </BrowserRouter>
                        </EventContextProvider>
                    </PartnerContextProvider>
                </UserContextProvider>
            </LoginContextProvider>
            }
        </div>
    );
}

export default App;

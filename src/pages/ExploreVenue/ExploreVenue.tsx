import React, {useEffect, useState} from "react";
import axios from "axios";
import GoogleMapReact from "google-map-react";
import {NavbarWithSearch, VenueCard} from "../../components";
import {DropdownsList} from "./DropdownsList";
import {ExploreVenueStyle, TrialButton} from "./ExploreVenue.style";
import {useLoginContext} from "../../context/authenticationContext";
// import Marker from "../../components/Marker";
import {Box, Button, Grid} from "@mui/material";
import {Pricing} from "../Pricing";
import {Loading} from "../../components";
import {Elements} from "@stripe/react-stripe-js";
import AddCard from "../../components/Stripe/addCard";
import {loadStripe} from "@stripe/stripe-js";
import {useHistory, useLocation} from "react-router-dom";
import OrientationModal from "../../components/ChangeOrientation/OrientationModal/OrientationModal";
import {GoogleMap, Marker, withGoogleMap} from "react-google-maps"

export default function ExploreVenue() {
    const style = {
        position: "absolute" as "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        p: 4,
    };
    const [search, setSearch] = useState("");
    const {state, dispatch} = useLoginContext();
    const [venues, setVenues] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showPricing, setShowPricing] = useState(false);
    const [user, setUser] = useState({
        credits: 0,
    });
    const [latlng, setLatlng] = useState<any>(null)
    const [isfilterApply,setIsFilterApply]=useState(false);
    const [subscribtion, setSubscribtion] = useState({
        active: false,
        status: "",
        credit: 0,
    });
    const location: any = useLocation();

    const history = useHistory();

    const [filter, setFilter] = useState();
    useEffect(() => {
        setLoading(true);
        navigator.geolocation.getCurrentPosition(function (position) {
            if (position) {
                setLatlng({latitude: position.coords.latitude, longitude: position.coords.longitude})
            }
        });
        getFilters();
        getEvents();
        getUser();

        const locallyStoredUser = JSON.parse(localStorage.getItem("data") || "{}");
        const isFilterApply = locallyStoredUser.preferences && (locallyStoredUser.preferences).length>0;
        setIsFilterApply(isFilterApply);


    }, []);


    useEffect(() => {
        getEvents();
    }, [location])

    useEffect(() => {
        if (!loading && (!subscribtion || !subscribtion.active)) {
            history.push("/dashboard/home");
        }
    }, [subscribtion]);

    useEffect(() => {
        getUser();
    }, [user.credits]);
    const getUser = () => {
        const user: any = JSON.parse(localStorage.getItem("data") || "{}");
        axios
            .get(`v1/users/${user.id}`, {
                headers: {Authorization: `Bearer ${state.authToken}`},
            })
            .then((res: any) => {
                setUser(res.data);
            })
            .catch((e) => {
            });
    };

    const openLink = (url: any) => {
        let a: any = document.createElement("a");
        document.body.appendChild(a);
        a.style = "display: none";
        a.href = url;
        a.click();
        document.body.removeChild(a);

    }


    const onSubscribePackage = (e: any) => {
        const user: any = JSON.parse(localStorage.getItem("data") || "{}");
        axios
            .post("/v1/stripe/pay-subscription", {id: user.id})
            .then((response) => {
                openLink(response.data.url)
                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
            });
    };

    const buyCredit = (e: any) => {
        history.push("/create-credit-payment");
    };

    const getFilters = () => {
        //  setLoading(true);
        axios
            .get("/v1/filter", {
                headers: {Authorization: `Bearer ${state.authToken}`},
            })
            .then((res) => {
                setFilter(res.data);
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
            });
    };

    const getEvents = () => {
        setLoading(true);
        axios
            .get("/v1/users/allEventsByVenues", {
                headers: {Authorization: `Bearer ${state.authToken}`},
            })
            .then((res) => {
                setLoading(false);
                setVenues(res.data.event);
                setSubscribtion(res.data.subscription);
            })
            .catch((error) => {
                setLoading(false);
            });
    };


    const refreshNearbyVenues = () => {
        setLoading(true)
        axios.get(`/v1/users/allEventsByVenues?search=${JSON.stringify(latlng)}`, {
            headers: {Authorization: `Bearer ${state.authToken}`},
        })
            .then((res) => {
                setLoading(false)
                setVenues(res.data.event);
                setSubscribtion(res.data.subscription);
            })
            .catch((error) => {
                setLoading(false)
            });
    }

    const venueFilter =
        venues &&
        venues.filter((venue: any) =>
            (venue?.name).toLowerCase().includes(state.search.toLowerCase()) ||
            ((venue.location.address.toLowerCase()).includes(state.search.toLowerCase()))
        );
    const venueLocations = venueFilter.filter(
        (venue: any) => venue.location && venue.location.address
    );



    let defaultProps = {
        center: {
            lat: latlng && latlng.latitude,
            lng: latlng && latlng.longitude,
        },
        zoom: 12,
    };

    // if (venueLocations.length > 0) {
    //     const selectedVenueLocation: any = venueLocations[0];
    //     defaultProps = {
    //       center: {
    //         lat: Number(selectedVenueLocation.location.lat),
    //         lng: Number(selectedVenueLocation.location.lng),
    //       },
    //       zoom: 18,
    //     };
    // }


    const MyMapComponent = withGoogleMap((props: any) =>
        <GoogleMap
            defaultZoom={props.zoom}
            defaultCenter={props.center}
            options={props.options}
        >

            {venueLocations.length > 0 &&
            venueLocations.map((venue: any) => (
                <Marker
                    // lat={31.582045}
                    // lng={74.329376}
                    icon={{

                        url: 'https://musicpassonline.com:3000/images/location.png',
                        anchor: new google.maps.Point(0, 49),
                        scaledSize: new google.maps.Size(37, 37)

                    }}
                    position={{lat: Number(venue.location.lat), lng: Number(venue.location.lng)}}
                    title={venue.name}
                />
            ))}
        </GoogleMap>
    )

    return (
        <>
            <NavbarWithSearch
                navbar_search={state.search}
                active={subscribtion?.active}
                userCredit={user.credits}
                latlng={latlng}
                refreshNearbyVenues={refreshNearbyVenues}
            />

            {showPricing && (
                <Pricing
                    showPricing={showPricing}
                    setShowPricing={setShowPricing}
                    isCreateSubscription={true}
                />
            )}
            {loading && <Loading/>}
            {}
            {subscribtion?.active ? (
                <>
                    <div style={{padding: "30px 60px"}}>
                        <DropdownsList
                            filter={filter}
                            setLoading={setLoading}
                            setVenues={setVenues}
                            getEvents={getEvents}
                            setIsFilterApply={setIsFilterApply}
                            getFilters={getFilters}
                        />
                    </div>
                    <div/>
                    <ExploreVenueStyle>
                        <section className="venues-list">
                            {venues.length > 0 ? (
                                venueFilter.length > 0 ? (
                                    venueFilter.map((venue: any) => (
                                        <VenueCard
                                            subscribtionCredit={user.credits}
                                            venue={venue}
                                        />
                                    ))
                                ) : (
                                    <h1
                                        style={{
                                            width: "100%",
                                            margin: "0px auto",
                                            fontSize: "32px",
                                            textAlign: "center",
                                        }}
                                    >
                                        {isfilterApply || (state.search && (state.search).length>0) ?"Hm…no events to show here. Please adjust your search":"No Event or Venue to explore"}
                                    </h1>
                                )
                            ) : (
                                <h1
                                    style={{
                                        width: "100%",
                                        margin: "0px auto",
                                        fontSize: "40px",
                                        textAlign: "center",
                                    }}
                                >
                                    {isfilterApply || (state.search && (state.search).length>0) ?"Hm…no events to show here. Please adjust your search":"No Event or Venue to explore"}
                                </h1>
                            )}
                            {/* <VenueCard pageUrl="/explore-venue/organizer-profile" />

          <VenueCard pageUrl="/explore-venue/organizer-profile" />

          <VenueCard pageUrl="/explore-venue/organizer-profile" />

          <VenueCard pageUrl="/explore-venue/organizer-profile" />

          <VenueCard pageUrl="/explore-venue/organizer-profile" /> */}
                        </section>

                        <section>
                            {/* <img
            className="maps-wrapper"
            src="/images/explore-venue/map.png"
            alt="map"
          /> */}

                            <Box
                                //  className={styles.mapConatiner}
                                sx={{width: "100%", height: "100%", display: {lg: "block", md: "none",xs:'none',sm:'none'}}}
                            >
                                {venueLocations.length > 0 && (
                                    <MyMapComponent isMarkerShown
                                                    loadingElement={<div style={{height: `100%`}}/>}
                                                    containerElement={<div style={{height: `100%`}}/>}
                                                    mapElement={<div style={{height: `100%`,minHeight:"240px",maxHeight:"520px"}}/>}
                                                    center={defaultProps.center}
                                                    zoom={defaultProps.zoom}
                                                    options={{
                                                        styles: [
                                                            {
                                                                elementType: "geometry",
                                                                stylers: [{color: "#242f3e"}],
                                                            },
                                                            {
                                                                elementType: "labels.text.stroke",
                                                                stylers: [{color: "#242f3e"}],
                                                            },
                                                            {
                                                                elementType: "labels.text.fill",
                                                                stylers: [{color: "#746855"}],
                                                            },
                                                            {
                                                                featureType: "administrative.locality",
                                                                elementType: "labels.text.fill",
                                                                stylers: [{color: "#d59563"}],
                                                            },
                                                            {
                                                                featureType: "poi",
                                                                elementType: "labels.text.fill",
                                                                stylers: [{color: "#d59563"}],
                                                            },
                                                            {
                                                                featureType: "poi.park",
                                                                elementType: "geometry",
                                                                stylers: [{color: "#263c3f"}],
                                                            },
                                                            {
                                                                featureType: "poi.park",
                                                                elementType: "labels.text.fill",
                                                                stylers: [{color: "#6b9a76"}],
                                                            },
                                                            {
                                                                featureType: "road",
                                                                elementType: "geometry",
                                                                stylers: [{color: "#38414e"}],
                                                            },
                                                            {
                                                                featureType: "road",
                                                                elementType: "geometry.stroke",
                                                                stylers: [{color: "#212a37"}],
                                                            },
                                                            {
                                                                featureType: "road",
                                                                elementType: "labels.text.fill",
                                                                stylers: [{color: "#9ca5b3"}],
                                                            },
                                                            {
                                                                featureType: "road.highway",
                                                                elementType: "geometry",
                                                                stylers: [{color: "#746855"}],
                                                            },
                                                            {
                                                                featureType: "road.highway",
                                                                elementType: "geometry.stroke",
                                                                stylers: [{color: "#1f2835"}],
                                                            },
                                                            {
                                                                featureType: "road.highway",
                                                                elementType: "labels.text.fill",
                                                                stylers: [{color: "#f3d19c"}],
                                                            },
                                                            {
                                                                featureType: "transit",
                                                                elementType: "geometry",
                                                                stylers: [{color: "#2f3948"}],
                                                            },
                                                            {
                                                                featureType: "transit.station",
                                                                elementType: "labels.text.fill",
                                                                stylers: [{color: "#d59563"}],
                                                            },
                                                            {
                                                                featureType: "water",
                                                                elementType: "geometry",
                                                                stylers: [{color: "#17263c"}],
                                                            },
                                                            {
                                                                featureType: "water",
                                                                elementType: "labels.text.fill",
                                                                stylers: [{color: "#515c6d"}],
                                                            },
                                                            {
                                                                featureType: "water",
                                                                elementType: "labels.text.stroke",
                                                                stylers: [{color: "#17263c"}],
                                                            },
                                                        ],
                                                    }}
                                    />
                                )}
                            </Box>
                        </section>
                    </ExploreVenueStyle>
                </>
            ) : !loading && !showPricing && subscribtion?.active ? (
                <ExploreVenueStyle>
                    <h1
                        style={{
                            width: "100%",
                            margin: "0px auto",
                            textAlign: "center",
                            fontFamily: `Montserrat!important`,
                        }}
                    >
                        Your Subscription has been Expired! Please renew your Subscription
                        package
                    </h1>
                    <div></div>

                    <TrialButton
                        style={{
                            display: "flex",
                            justifyContent: "left",
                            marginLeft: 40,
                            marginTop: 10,
                        }}
                        onClick={(e) => {
                            if (subscribtion.status === "canceled") {
                                setShowPricing(true);
                            } else {
                                history.push("/update-subscription");
                            }
                        }}
                        className="text-center"
                    >
                        <a className="free-trial-btn free-trial-secondary btn">
                            Create Subscription
                        </a>
                    </TrialButton>
                </ExploreVenueStyle>
            ) : (
                !loading &&
                !subscribtion &&
                !showPricing && (
                    <ExploreVenueStyle>
                        <h1
                            style={{
                                width: "100%",
                                margin: "0px auto",
                                fontSize: "40px",
                                textAlign: "center",
                            }}
                        >
                            Your Subscription has been Cancelled! Please create your
                            Subscription package
                        </h1>
                        <div></div>
                        {/* <FilledButtonStyle  class="" onClick={(e)=>onSubscribePackage(e)}>Checkout</FilledButtonStyle> */}
                        <TrialButton
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                marginLeft: 10,
                                marginTop: 10,
                            }}
                            onClick={(e) => {
                                setShowPricing(true);
                            }}
                            className="text-center"
                        >
                            <a className="free-trial-btn free-trial-secondary btn">
                                »&nbsp;Create&nbsp;Subscribtion!
                            </a>
                        </TrialButton>

                    </ExploreVenueStyle>
                )
            )}
        </>
    );
}

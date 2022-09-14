import React, { useEffect, useState } from "react";
import axios from "axios";
import GoogleMapReact from "google-map-react";
import { NavbarWithSearch, VenueCard } from "../../components";
import { DropdownsList } from "./DropdownsList";
import { ExploreVenueStyle, TrialButton } from "./ExploreVenue.style";
import { useLoginContext } from "../../context/authenticationContext";
import Marker from "../../components/Marker";
import { Button, Grid } from "@mui/material";
import { Pricing } from "../Pricing";
import { Loading } from "../../components";
import { Elements } from "@stripe/react-stripe-js";
import AddCard from "../../components/Stripe/addCard";
import { loadStripe } from "@stripe/stripe-js";
import { useHistory } from "react-router-dom";

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
  const { state, dispatch } = useLoginContext();
  const [venues, setVenues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showPricing, setShowPricing] = useState(false);
  const [user, setUser] = useState({
    credits: 0,
  });
  const [subscribtion, setSubscribtion] = useState({
    active: false,
    status: "",
    credit: 0,
  });

  const history = useHistory();

  const [filter, setFilter] = useState();
  useEffect(() => {
    setLoading(true);
    navigator.geolocation.getCurrentPosition(function (position) {});
    getFilters();
    getEvents();
    getUser();
  }, []);

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
        headers: { Authorization: `Bearer ${state.authToken}` },
      })
      .then((res: any) => {
        setUser(res.data);
      })
      .catch((e) => {});
  };

  const onSubscribePackage = (e: any) => {
    const user: any = JSON.parse(localStorage.getItem("data") || "{}");
    axios
      .post("/v1/stripe/pay-subscription", { id: user.id })
      .then((response) => {
        window.open(response.data.url, "_blank");
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
    setLoading(true);
    axios
      .get("/v1/filter", {
        headers: { Authorization: `Bearer ${state.authToken}` },
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
    axios
      .get("/v1/users/allEventsByVenues", {
        headers: { Authorization: `Bearer ${state.authToken}` },
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

  const venueFilter =
    venues &&
    venues.filter((venue: any) =>
      (venue?.name).toLowerCase().includes(state.search.toLowerCase())
    );
  const venueLocations = venueFilter.filter(
    (venue: any) => venue.location && venue.location.address
  );

  let defaultProps = {
    center: {
      lat: 25.788,
      lng: -80.29,
    },
    zoom: 11,
  };

  if (venueLocations.length > 0) {
    const selectedVenueLocation: any = venueLocations[0];
    defaultProps = {
      center: {
        lat: Number(selectedVenueLocation.location.lat),
        lng: Number(selectedVenueLocation.location.lng),
      },
      zoom: 11,
    };
  }

  return (
    <>
      <NavbarWithSearch
        navbar_search={state.search}
        active={subscribtion?.active}
        userCredit={user.credits}
      />

      {showPricing && (
        <Pricing
          showPricing={showPricing}
          setShowPricing={setShowPricing}
          isCreateSubscription={true}
        />
      )}
      {loading && <Loading />}
      {}
      {subscribtion?.active ? (
        <>
          <div style={{ padding: "30px 60px" }}>
            <DropdownsList
              filter={filter}
              setLoading={setLoading}
              setVenues={setVenues}
              getEvents={getEvents}
              getFilters={getFilters}
            />
          </div>
          <div />
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
                    No Event or Venue to explore
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
                  No Event or Venue to explore
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

              <div
                //  className={styles.mapConatiner}
                style={{ width: "100%", height: "100%" }}
              >
                {venueLocations.length > 0 && (
                  <GoogleMapReact
                    bootstrapURLKeys={{
                      key: "AIzaSyB4oh8lVm9cjXA-V0GovELsSVY5Lr9NMew",
                    }}
                    center={defaultProps.center}
                    zoom={defaultProps.zoom}
                    options={{
                      styles: [
                        {
                          elementType: "geometry",
                          stylers: [{ color: "#242f3e" }],
                        },
                        {
                          elementType: "labels.text.stroke",
                          stylers: [{ color: "#242f3e" }],
                        },
                        {
                          elementType: "labels.text.fill",
                          stylers: [{ color: "#746855" }],
                        },
                        {
                          featureType: "administrative.locality",
                          elementType: "labels.text.fill",
                          stylers: [{ color: "#d59563" }],
                        },
                        {
                          featureType: "poi",
                          elementType: "labels.text.fill",
                          stylers: [{ color: "#d59563" }],
                        },
                        {
                          featureType: "poi.park",
                          elementType: "geometry",
                          stylers: [{ color: "#263c3f" }],
                        },
                        {
                          featureType: "poi.park",
                          elementType: "labels.text.fill",
                          stylers: [{ color: "#6b9a76" }],
                        },
                        {
                          featureType: "road",
                          elementType: "geometry",
                          stylers: [{ color: "#38414e" }],
                        },
                        {
                          featureType: "road",
                          elementType: "geometry.stroke",
                          stylers: [{ color: "#212a37" }],
                        },
                        {
                          featureType: "road",
                          elementType: "labels.text.fill",
                          stylers: [{ color: "#9ca5b3" }],
                        },
                        {
                          featureType: "road.highway",
                          elementType: "geometry",
                          stylers: [{ color: "#746855" }],
                        },
                        {
                          featureType: "road.highway",
                          elementType: "geometry.stroke",
                          stylers: [{ color: "#1f2835" }],
                        },
                        {
                          featureType: "road.highway",
                          elementType: "labels.text.fill",
                          stylers: [{ color: "#f3d19c" }],
                        },
                        {
                          featureType: "transit",
                          elementType: "geometry",
                          stylers: [{ color: "#2f3948" }],
                        },
                        {
                          featureType: "transit.station",
                          elementType: "labels.text.fill",
                          stylers: [{ color: "#d59563" }],
                        },
                        {
                          featureType: "water",
                          elementType: "geometry",
                          stylers: [{ color: "#17263c" }],
                        },
                        {
                          featureType: "water",
                          elementType: "labels.text.fill",
                          stylers: [{ color: "#515c6d" }],
                        },
                        {
                          featureType: "water",
                          elementType: "labels.text.stroke",
                          stylers: [{ color: "#17263c" }],
                        },
                      ],
                    }}
                  >
                    {/* {browseEvents &&
                                    browseEvents.map((event) => ( */}
                    {/* <Marker
                lat={31.582045}
                lng={74.329376}
                // lat={event.lat}
                // lng={event.lng}
                name={"Request Titile:" + " " + "adeel"}
                color={event.markerColor}
                // handlePinClcik={handlePinClcik}
                // request={event}
              />
              ))} */}
                    {/* <Marker
                  // lat={31.582045}
                  // lng={74.329376}
                  lat={31.582045}
                  lng={75.329376}
                  name="Your location"
                  color={"blue"}
                  id="1"
                /> */}
                    {venueLocations.length > 0 &&
                      venueLocations.map((venue: any) => (
                        <Marker
                          // lat={31.582045}
                          // lng={74.329376}
                          lat={venue.location.lat}
                          lng={venue.location.lng}
                          name={venue.name}
                          color={"blue"}
                          id="1"
                        />
                      ))}
                  </GoogleMapReact>
                )}
              </div>
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

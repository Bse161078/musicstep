import React, { useEffect, useState } from "react";
import axios from "axios";
import GoogleMapReact from "google-map-react";
import { NavbarWithSearch, VenueCard } from "../../components";
import { DropdownsList } from "./DropdownsList";
import { ExploreVenueStyle } from "./ExploreVenue.style";
import { useLoginContext } from "../../context/authenticationContext";
import Marker from "../../components/Marker";
import {Button} from "@mui/material";

export default function ExploreVenue() {
  const defaultProps = {
    center: {
      lat: 25.788,
      lng: -80.29,
    },
    zoom: 11,
  };
  const [search,setSearch] = useState('')
  const { state, dispatch } = useLoginContext();
  const [venues, setVenues] = useState([]);
  const venueFilter =  venues .filter((venue:any)=>(venue.venueInfo[0].name).toLowerCase().includes((search).toLowerCase()))
  useEffect(() => {
    axios
      .get("/v1/users/allEventsByVenues", {
        headers: { Authorization: `Bearer ${state.authToken}` },
      })
      .then((res) => {
        setVenues(res.data);
        console.log('venues',venues)
        // setEvents(res.data);
        // setEvents(res.data);
        // setProfilesList(res.data);
      })
      .catch((error) => {
      });
  }, []);

  const onSubscribePackage=(e:any)=>{
    console.log("onSubscribePackage")
      const user:any=JSON.parse(localStorage.getItem("data")||"{}");
      axios.post('/v1/stripe/pay-subscription',{id:user.id}).then((response)=>{
          //console.log("data = ",response.data.clientSecret);
          window.open(response.data.url,'_blank');

          console.log("subsribe package",response.data.url);
      }).catch((err)=>{
          console.log("err = ",err.response)
      })
  }

  return (
    <>
      <NavbarWithSearch setSearch={setSearch}
      search={search}
      />
      <ExploreVenueStyle>
        <DropdownsList />
        <div />

        <section className="venues-list">
            <Button  style={{background:"Red",zIndex:11111}} onClick={(e)=>onSubscribePackage(e)}>Checkout</Button>

          {venues.length > 0 ? (
            venueFilter.length>0?(
          venueFilter.map((venue: any) => <VenueCard venue={venue} />)):
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
          ) :
           (
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
            {venues.length > 0 && (
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
                {venues.length > 0 &&
                  venues.map(
                    (venue: any) => (
                      <Marker
                        // lat={31.582045}
                        // lng={74.329376}
                        lat={venue.venueInfo[0].location.lat}
                        lng={venue.venueInfo[0].location.lng}
                        name="Your location"
                        color={"blue"}
                        id="1"
                      />
                    )
                    // console.log(venue)
                  )}
              </GoogleMapReact>
            )}
          </div>
        </section>
      </ExploreVenueStyle>
    </>
  );
}

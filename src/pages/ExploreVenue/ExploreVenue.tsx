import React, { useEffect, useState } from "react";
import axios from "axios";
import GoogleMapReact from "google-map-react";
import { NavbarWithSearch, VenueCard } from "../../components";
import { DropdownsList } from "./DropdownsList";
import {ExploreVenueStyle, TrialButton} from "./ExploreVenue.style";
import { useLoginContext } from "../../context/authenticationContext";
import Marker from "../../components/Marker";
import {Button} from "@mui/material";
import {Pricing} from "../Pricing";
import { Loading } from "../../components/Loading";
import { Typography } from "@mui/material";
export default function ExploreVenue() {
  const defaultProps = {
    center: {
      lat: 25.788,
      lng: -80.29,
    },
    zoom: 11,
  };

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const [search,setSearch] = useState('')
  const { state, dispatch } = useLoginContext();
  const [venues, setVenues] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showPricing,setShowPricing] = useState(false)
  const [subscribtion,setSubscribtion] = useState({
    active:true,
  })
  const [filter,setFilter] = useState()
  const venueFilter =  venues&&venues.filter((venue:any)=>(venue?.name||venue?.events.map((event:any)=>event.title)).toLowerCase().includes((search).toLowerCase()))
  useEffect(() => {
    setLoading(true)
    axios
      .get("/v1/filter", {
        headers: { Authorization: `Bearer ${state.authToken}` },
      })
      .then((res) => {
        setFilter(res.data)
      })
      .catch((error) => {
        console.log("filtererror",error)
      });
      console.log('subs',subscribtion)
      axios
      .get("/v1/users/allEventsByVenues", {
        headers: { Authorization: `Bearer ${state.authToken}` },
      })
      .then((res) => {
        setLoading(false)
        console.log("subscribtion",res.data.subscription,res.data.event)
        setSubscribtion(res.data.subscription)
      })
      .catch((error) => {
        setLoading(false)
      });
      axios
      .get("/v1/venue", {
        headers: { Authorization: `Bearer ${state.authToken}` },
      })
      .then((res) => {
        setVenues(res.data);
        console.log("venues",res.data,res.data)
      })
      .catch((error) => {
      });
  }, []);
  const handleShowPricing=()=>{
    setShowPricing(false)
  }
  const onSubscribePackage=(e:any)=>{
      const user:any=JSON.parse(localStorage.getItem("data")||"{}");
      axios.post('/v1/stripe/pay-subscription',{id:user.id}).then((response)=>{
      window.open(response.data.url,'_blank');
      setLoading(false)
      console.log("subsribe package",response.data.url);
      }).catch((err)=>{
        console.log("subsribe package error", err.response);
        setLoading(false)
      })
  }
  console.log("showPricing",showPricing)
  return (
    <>
    {showPricing===true&&<Pricing showPricing={showPricing} setShowPricing={handleShowPricing} />}
      {!showPricing&&<NavbarWithSearch setSearch={setSearch}
      search={search}
      active={subscribtion?.active}
      />}
      
      {loading && <Loading/>}
      {!subscribtion && !showPricing?
      <div>
        <Typography variant='h3'align="center"sx={{padding:10,fontWeight:'bold'}}>
        Your Subscribtion has been Cancelled. Please Create Subscribtion Again!
      </Typography>
      <Typography variant='h3'align="center"sx={{padding:3,fontWeight:'bold'}}>
                  <TrialButton 
                  onClick={(e)=>{
                     setShowPricing(true)
                  }}
                className="text-center"><a  className="free-trial-btn free-trial-secondary btn">
                  »&nbsp;{ "Create Subscribtion!"}</a>
                  </TrialButton>
                  </Typography>
      </div> 
      :
      (!loading&&subscribtion?.active)&&!showPricing?
      <ExploreVenueStyle>
       {!showPricing&& <DropdownsList filter={filter} setVenues={setVenues} setLoading={setLoading} />}
        <div />

        <section className="venues-list">

          {
         venues.length > 0&&!showPricing ? (
            venueFilter.length>0?(
          venueFilter.map((venue: any) => <VenueCard venue={venue} />)):!showPricing&&
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
          ) :!showPricing&&
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
          )


         }
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
            {venues.length > 0 && !showPricing&& (
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
                {venues.length > 0 &&
                  venues.map(
                    (venue: any) => (
                      <Marker
                        // lat={31.582045}
                        // lng={74.329376}
                        lat={venue.location.lat}
                        lng={venue.location.lng}
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
      </ExploreVenueStyle>:
      !showPricing&&
      <div>
              <Typography variant='h3'align="center"sx={{padding:10,fontWeight:'bold'}}>
        Your Subscribtion has been Expired. Please Subscribe Again!
      </Typography>
                {/* <FilledButtonStyle  class="" onClick={(e)=>onSubscribePackage(e)}>Checkout</FilledButtonStyle> */}
                <div></div>
                <Typography variant='h3'align="center"sx={{padding:3,fontWeight:'bold'}}>
                  <TrialButton 
                  onClick={(e)=>{
                    if(!subscribtion)
                   {
                     setShowPricing(true)
                   }
                    else
                    {
                      onSubscribePackage(e)
                      setLoading(true)
                    }
                  }}
                className="text-center"><a  className="free-trial-btn free-trial-secondary btn">
                  »&nbsp;{ subscribtion? "Subscribe Now!":"Create Subscribtion!"}</a>
                  </TrialButton>
                  </Typography>
                  
       </div>

                
      }
    </>
  );
}

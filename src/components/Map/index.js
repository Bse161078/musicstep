import React from "react";
import {
    withGoogleMap,
    GoogleMap,
    withScriptjs,
    InfoWindow,
    Marker,
} from "react-google-maps";
import Geocode from "react-geocode";
import Autocomplete from "react-google-autocomplete";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

import "./style.css";
import Grid from "@mui/material/Grid/Grid";
import {Button} from "@mui/material";
import {FilledButtonStyle, OutlineButtonStyle} from "../../styles/Common.style";
import AutoCompletePlaces from "./AutoComplete";
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   Divider,
//   Grid,
//   TextField,
//   makeStyles,
//   InputAdornment,
//   Typography,
//   Button,
// } from "@material-ui/core";

const {
    MarkerWithLabel,
} = require("react-google-maps/lib/components/addons/MarkerWithLabel");

Geocode.setApiKey("AIzaSyB4oh8lVm9cjXA-V0GovELsSVY5Lr9NMew");
Geocode.enableDebug();

let mapEndLocation={lat:0,lng:0}


class Index extends React.Component {
    state = {
        address: "",
        city: "",
        area: "",
        state: "",
        zoom: 14,
        height: 500,
        mapPosition: {
            lat: 0,
            lng: 0,
        },
        markerPosition: {
            lat: 0,
            lng: 0,
        },
    };

    componentDidMount() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.setState(
                    {
                        mapPosition: {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude,
                        },
                        markerPosition: {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude,
                        },
                    }
                );
            });
        } else {
            console.error("Geolocation is not supported by this browser!");
        }
    }

    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     if (
    //         this.state.markerPosition.lat !== this.state.center.lat ||
    //         this.state.address !== nextState.address ||
    //         this.state.city !== nextState.city ||
    //         this.state.area !== nextState.area ||
    //         this.state.state !== nextState.state
    //     ) {
    //         return true
    //     } else if (this.state.mapPosition.lat === nextState.mapPosition.lat) {
    //         return false
    //     }
    // }

    getCity = (addressArray) => {
        let city = "";
        for (let i = 0; i < addressArray.length; i++) {
            if (
                addressArray[i].types[0] &&
                "administrative_area_level_2" === addressArray[i].types[0]
            ) {
                city = addressArray[i].long_name;
                return city;
            }
        }
    };

    getArea = (addressArray) => {
        let area = "";
        for (let i = 0; i < addressArray.length; i++) {
            if (addressArray[i].types[0]) {
                for (let j = 0; j < addressArray[i].types.length; j++) {
                    if (
                        "sublocality_level_1" === addressArray[i].types[j] ||
                        "locality" === addressArray[i].types[j]
                    ) {
                        area = addressArray[i].long_name;
                        return area;
                    }
                }
            }
        }
    };

    getState = (addressArray) => {
        let state = "";
        for (let i = 0; i < addressArray.length; i++) {
            for (let i = 0; i < addressArray.length; i++) {
                if (
                    addressArray[i].types[0] &&
                    "administrative_area_level_1" === addressArray[i].types[0]
                ) {
                    state = addressArray[i].long_name;
                    return state;
                }
            }
        }
    };

    getCountry = (addressArray) => {
        let country = "";
        for (let i = 0; i < addressArray.length; i++) {
            for (let i = 0; i < addressArray.length; i++) {
                if (
                    addressArray[i].types[0] &&
                    "country" === addressArray[i].types[0]
                ) {
                    country = addressArray[i].long_name;
                    return country;
                }
            }
        }
    };
    onChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    };

    onInfoWindowClose = (event) => {
    };


    onPlaceSelected = (place) => {
        const address = place.formatted_address,
            addressArray = place.address_components,
            city = this.getCity(addressArray),
            area = this.getArea(addressArray),
            state = this.getState(addressArray),
            latValue = place.geometry.location.lat(),
            lngValue = place.geometry.location.lng(),
            country = this.getCountry(addressArray);



        // Set these values in the state.
        this.setState({
            address: address ? address : "",
            area: area ? area : "",
            city: city ? city : "",
            state: state ? state : "",
            markerPosition: {
                lat: latValue,
                lng: lngValue,
            },
            mapPosition: {
                lat: latValue,
                lng: lngValue,
            },
        });
    };


    onChangeLocation=(location)=>{
        this.setState(location);
    }


    onSelectLocation=(autoLocation)=>{
        if(autoLocation.markerPosition.lat!==0) {
            this.props.handleLocation(
                autoLocation.country,
                autoLocation.state,
                autoLocation.city,
                autoLocation.address,
                autoLocation.markerPosition.lat,
                autoLocation.markerPosition.lng
            );
        }else if(mapEndLocation.lat!==0){
            this.props.getLocation(mapEndLocation.lat,mapEndLocation.lng)

        }
    }


    onMarkerDragEnd = (coord, index) => {
        const { latLng } = coord;
        const lat = latLng.lat();
        const lng = latLng.lng();
        mapEndLocation={lat,lng}

    };


    // const AsyncMap = compose(
    //     withProps({
    //         googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyALVjLwOIM1gf7EzdJJVmWLKdLP-yZGTcw&v=3.exp&libraries=geometry,drawing,places",
    //         loadingElement: <div style={{ height: `100%` }} />,
    //         containerElement: <div style={{ height: `400px` }} />,
    //         mapElement: <div style={{ height: `100%` }} />,
    //     }),
    //     withScriptjs,
    //     withGoogleMap
    // )((props) =>
    //     <GoogleMap

    render() {

        const AsyncMap = withScriptjs(
            withGoogleMap((props) => (
                <GoogleMap
                    defaultZoom={this.state.zoom}
                    defaultCenter={{
                        lat: this.state.markerPosition.lat,
                        lng: this.state.markerPosition.lng,
                    }}
                    options={{
                        styles: [
                            {elementType: "geometry", stylers: [{color: "#242f3e"}]},
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
                    onClick={(e)=>{
                        let latitude = e.latLng.lat()
                        let longitude  = e.latLng.lng()
                        this.props.getLocation(latitude,longitude)
                    }}
                >
                    {/* InfoWindow on top of marker */}

                    {/*Marker*/}
                    <Marker
                        google={this.props.google}
                        draggable={true}
                        onDragEnd={this.onMarkerDragEnd}
                        position={{
                            lat: this.state.markerPosition.lat,
                            lng: this.state.markerPosition.lng,
                        }}
                        icon={"https://musicpassonline.com:3000/images/location.png"}
                    />
                    {/* <InfoWindow
            onClose={this.onInfoWindowClose}
            position={{
              lat: this.state.markerPosition.lat + 0.0018,
              lng: this.state.markerPosition.lng,
            }}
          >
            <div>
              <span style={{ padding: 0, margin: 0 }}>
                {this.state.address}
              </span>
            </div>
          </InfoWindow> */}

                    {/* <MarkerWithLabel
                            position={{ lat: -34.397, lng: 150.644 }}
                            labelAnchor={new google.maps.Point(0, 0)}
                            labelStyle={{ backgroundColor: "yellow", fontSize: "32px", padding: "16px" }}
                        >
                            <div>Hello There!</div>
                        </MarkerWithLabel> */}

                    {/* For Auto complete Search Box */}
                </GoogleMap>
            ))
        );


        return (
            <div
                style={{
                    padding: "1rem",
                    //   margin: "0 auto",
                    //   maxWidth: "940px",
                }}
            >

                <AsyncMap
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB4oh8lVm9cjXA-V0GovELsSVY5Lr9NMew"
                    loadingElement={<div style={{height: `100%`}}/>}
                    containerElement={<div style={{height: 300}}/>}
                    mapElement={<div style={{height: `100%`}}/>}
                />
                <AutoCompletePlaces onChangeLocation={this.onChangeLocation} onSelectLocation={this.onSelectLocation}/>
            </div>
        );
    }
}

export default Index;

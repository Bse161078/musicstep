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
          },
          () => {
            Geocode.fromLatLng(
              position.coords.latitude,
              position.coords.longitude
            ).then(
              (response) => {
                console.log(response);
                const address = response.results[0].formatted_address,
                  addressArray = response.results[0].address_components,
                  city = this.getCity(addressArray),
                  area = this.getArea(addressArray),
                  state = this.getState(addressArray),
                  country = this.getCountry(addressArray);
                this.props.handleLocation(
                  country,
                  state,
                  city,
                  address,
                  position.coords.latitude,
                  position.coords.longitude
                );
                console.log("city", city, area, state);
                this.setState({
                  address: address ? address : "",
                  area: area ? area : "",
                  city: city ? city : "",
                  state: state ? state : "",
                });
              },
              (error) => {
                console.error(error);
              }
            );
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
    this.setState({ [event.target.name]: event.target.value });
  };

  onInfoWindowClose = (event) => {};

  onMarkerDragEnd = (event) => {
    let newLat = event.latLng.lat(),
      newLng = event.latLng.lng();

    Geocode.fromLatLng(newLat, newLng).then(
      (response) => {
        const address = response.results[0].formatted_address,
          addressArray = response.results[0].address_components,
          city = this.getCity(addressArray),
          area = this.getArea(addressArray),
          state = this.getState(addressArray),
          country = this.getCountry(addressArray);
        this.props.handleLocation(
          country,
          state,
          city,
          address,
          newLat,
          newLng
        );
        this.setState({
          address: address ? address : "",
          area: area ? area : "",
          city: city ? city : "",
          state: state ? state : "",
          markerPosition: {
            lat: newLat,
            lng: newLng,
          },
          mapPosition: {
            lat: newLat,
            lng: newLng,
          },
        });
      },
      (error) => {
        console.error(error);
      }
    );
  };

  onPlaceSelected = (place) => {
    console.log("plc", place);
    const address = place.formatted_address,
      addressArray = place.address_components,
      city = this.getCity(addressArray),
      area = this.getArea(addressArray),
      state = this.getState(addressArray),
      latValue = place.geometry.location.lat(),
      lngValue = place.geometry.location.lng(),
      country = this.getCountry(addressArray);
    this.props.handleLocation(
      country,
      state,
      city,
      address,
      latValue,
      lngValue
    );

    console.log("latvalue", latValue);
    console.log("lngValue", lngValue);

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
            lat: this.state.mapPosition.lat,
            lng: this.state.mapPosition.lng,
          }}
          options={{
            styles: [
              { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
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
          {/* InfoWindow on top of marker */}

          {/*Marker*/}
          <Marker
            google={this.props.google}
            name={"Dolores park"}
            draggable={true}
            onDragEnd={this.onMarkerDragEnd}
            position={{
              lat: this.state.markerPosition.lat,
              lng: this.state.markerPosition.lng,
            }}
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
          <Marker />

          {/* <MarkerWithLabel
                            position={{ lat: -34.397, lng: 150.644 }}
                            labelAnchor={new google.maps.Point(0, 0)}
                            labelStyle={{ backgroundColor: "yellow", fontSize: "32px", padding: "16px" }}
                        >
                            <div>Hello There!</div>
                        </MarkerWithLabel> */}

          {/* For Auto complete Search Box */}
          <Autocomplete
            style={{
              width: "100%",
              maxWidth: "880px",
              height: "40px",
              paddingLeft: "16px",
              margin: "0px auto",
              marginTop: "2px",
              marginBottom: "2rem",
            }}
            onPlaceSelected={this.onPlaceSelected}
            types={["(regions)"]}
          />
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
        {/* <Grid container spacing={0}>
          <Grid className="cell1" item xs={1}>
            City
          </Grid>
          <Grid className="cell2" item xs={3}>
            {this.state.city}
          </Grid>
          <Grid className="cell1" item xs={1}>
            Area
          </Grid>
          <Grid className="cell2" item xs={3}>
            {this.state.area}
          </Grid>
          <Grid className="cell1" item xs={1}>
            State
          </Grid>
          <Grid className="cell2" item xs={3}>
            {this.state.state}
          </Grid>
          <Grid className="cell1" item xs={1}>
            Address
          </Grid>
          <Grid className="cell2" item xs={11}>
            {this.state.address}
          </Grid>
        </Grid> */}

        <AsyncMap
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB4oh8lVm9cjXA-V0GovELsSVY5Lr9NMew&libraries=places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: this.state.height }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}

export default Index;

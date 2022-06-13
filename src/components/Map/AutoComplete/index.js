import Autocomplete from "react-google-autocomplete";
import React, {Fragment, useState} from "react";
import Grid from "@mui/material/Grid/Grid";
import {FilledButtonStyle} from "../../../styles/Common.style";

const AutoCompletePlaces=(props)=>{
    const [location,setLocation]=useState({
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
    })


    const getArea = (addressArray) => {
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

    const getState = (addressArray) => {
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

    const getCountry = (addressArray) => {
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


    const getCity = (addressArray) => {
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

    const onPlaceSelected = (place) => {
        const address = place.formatted_address,
            addressArray = place.address_components,
            city = getCity(addressArray),
            area = getArea(addressArray),
            state = getState(addressArray),
            latValue = place.geometry.location.lat(),
            lngValue = place.geometry.location.lng(),
            country = getCountry(addressArray);



        const location={
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
        };
        // Set these values in the state.
        setLocation(location);
        props.onChangeLocation(location);
    };


    return(
        <Fragment>
            <Autocomplete
                apiKey={"AIzaSyB4oh8lVm9cjXA-V0GovELsSVY5Lr9NMew"}
                style={{
                    width: "100%",
                    maxWidth: "880px",
                    height: "40px",
                    paddingLeft: "16px",
                    margin: "0px auto",
                    marginTop: "2px",
                }}
                options={{
                    types: ['amusement_park','aquarium','art_gallery','cafe','casino'],
                }}
                onFail={error => console.error(error)}
                onPlaceSelected={onPlaceSelected}
            />
            <Grid container style={{marginTop:20}} justifyContent="center">
                <FilledButtonStyle
                    onClick={(e)=>{
                        props.onSelectLocation(location)
                    }}
                    width={  "80%"}
                    height="60px"
                >
                    Select Location
                </FilledButtonStyle>
            </Grid>
        </Fragment>
    )
}

export default AutoCompletePlaces;
import React, {useState, useEffect} from "react";
import {Form, Formik} from "formik";

import {InputBox, SelectBox} from "..";
import LocationSelectBox from "../SelectBox/LocationSelectBox";
import {SelectWithInputStyle} from "./SelectWithInput.style";
import {SearchIcon} from "../../assets";
import Select, {SelectChangeEvent} from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

const SelectWithInput = ({placeholder, setSearch, search}: any) => {
    let dataa = '';
    const [latitude, setLatitude] = useState(0.0)
    const [menuItem, setMenuItem] = useState(["Current Location"])
    const [longtitude, setLongtitude] = useState(0.0)
    let [values, setValues] = useState([])
    const [address, setAddress] = useState(
        {
            countryCode: '',
            countryName: '',
            locality: '',
            name: '',
        }
    )

    useEffect(() => {
        handleLocation()
        displayLocation(latitude, longtitude)

    }, [])
    const handleChange = (event: SelectChangeEvent) => {
        setAddress(event.target.value as any);
    };
    const displayLocation = async (latitude: any, longitude: any) => {
        var request = new XMLHttpRequest();
        var method = 'GET';
        var url = 'https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=' + latitude + '&longitude=' + longitude + '&localityLanguage=en';
        var async = true;
        request.open(method, url, async);
        request.onreadystatechange = function () {
            if (request.readyState == 4 && request.status == 200) {
                var data = JSON.parse(request.responseText);
                //var address = data.results[0];
                setAddress(data)
                setMenuItem(data.localityInfo.administrative.map((value: any) => value.name))
            }


        };
        request.send();
    }

    const handleLocation = async () => {
        const res = await navigator.geolocation.getCurrentPosition(function (position) {
            setLatitude(position.coords.latitude)
            setLongtitude(position.coords.longitude)
            displayLocation(position.coords.latitude, position.coords.longitude)
        })
    }

    const handleMenuItem = menuItem && menuItem.map((item: any) => {
        return (
            <MenuItem value={item.name}>{item.name}</MenuItem>
        )
    })

    return (
        <SelectWithInputStyle>

            <Formik
                initialValues={{
                    location: (
                        <>
                            <img src="/images/icons/location-icon.svg" alt="location"/>
                        </>
                    ),
                    search: "",
                }}
                onSubmit={() => {
                }}
            >
                {() => (
                    <Form className="search-form-wrapper">
                        {/* //        <FormControl fullWidth sx={{ m: 1, minWidth: 120 }}>
      //   <Select
      //     value={address}
      //     onChange={handleChange}
      //     label={address.locality+" , "+address.countryCode+" , "+address.countryName}
      //   >
          
      //     {handleMenuItem}
      //   </Select>
      // </FormControl> */}
                        <span className="select-wrapper">
           
              {/* {address.countryCode?<SelectBox name={address.locality+" , "+address.countryCode+" , "+address.countryName} options={[{ key: "", value: "" }]} />:
              // <p> {address.locality+" , "+address.countryCode+" , "+address.countryName}  </p>
              } */}
                            {address.locality != '' && <LocationSelectBox
                                name={address.locality != '' && address.locality + " , " + address.countryCode + " , " + address.countryName}
                                options={menuItem} values={menuItem}/>}

                            {/* {/* <p>{address.locality+ address.countryCode+ address.countryName}</p> */}
            </span>

                        <span className="input-wrapper">
              <InputBox name="search" placeholder={placeholder}
                        setSearch={setSearch} search={search}
              />
            </span>

                        <span className="search-button">
              <SearchIcon/>
            </span>
                    </Form>
                )}
            </Formik>
        </SelectWithInputStyle>
    );
};

export default SelectWithInput;

import React,{useState,useEffect} from "react";
import { Form, Formik } from "formik";

import { InputBox, SelectBox } from "..";
import { SelectWithInputStyle } from "./SelectWithInput.style";
import { SearchIcon } from "../../assets";

const SelectWithInput = ({placeholder,setSearch,search}: any) => {
  let dataa='';
  const [latitude,setLatitude] = useState(0.0)
  const [longtitude,setLongtitude] = useState(0.0)
  const [address,setAddress] = useState(
    {
      countryCode:'',
      countryName:'',
      locality:''
    }
  )

    useEffect(()=>{
      handleLocation()
      displayLocation(latitude,longtitude)
      
    },[])

  const displayLocation=async(latitude:any,longitude:any)=>{
    var request = new XMLHttpRequest();
    var method = 'GET';
    var url = 'https://api.bigdatacloud.net/data/reverse-geocode-client?latitude='+latitude+'&longitude='+longitude+'&localityLanguage=en';
    var async = true;

    request.open(method, url, async);
    request.onreadystatechange = function(){
      if(request.readyState == 4 && request.status == 200){
        var data = JSON.parse(request.responseText);
        //var address = data.results[0];
        setAddress(data)
        dataa = data.locality+" , "+data.countryCode+" , "+data.countryName
      }
      

    };
    request.send();
  }
 
  const handleLocation = async()=>{
    const res = await  navigator.geolocation.getCurrentPosition(function(position) {
      setLatitude(position.coords.latitude)
      setLongtitude(position.coords.longitude)
      displayLocation(position.coords.latitude,position.coords.longitude)
    })
  }
  return (
    <SelectWithInputStyle>
      <Formik
        initialValues={{
          location: (
            <>
              <img src="/images/icons/location-icon.svg" alt="location" /> 
            </>
          ),
          search: "",
        }}
        onSubmit={() => {}}
      >
        {() => (
          <Form className="search-form-wrapper">
            <span className="select-wrapper">
              {address.countryCode?<SelectBox name={address.countryCode?address.locality+" , "+address.countryCode+" , "+address.countryName:'location'} options={[{ key: "", value: "" }]} />:
              <SelectBox name='location' options={[{ key: "", value: "" }]} />
              }
              {/* {/* <p>{address.locality+ address.countryCode+ address.countryName}</p> */}
            </span>

            <span className="input-wrapper">
              <InputBox name="search" placeholder={placeholder} 
              setSearch={setSearch} search={search}
              />
            </span>

            <span className="search-button">
              <SearchIcon />
            </span>
          </Form>
        )}
      </Formik>
    </SelectWithInputStyle>
  );
};

export default SelectWithInput;

import React, { useState,useEffect } from "react";
import { Select } from "antd";
import { useField } from "formik";
import axios from "axios";
import { SelectBoxStyle, SelectInputStyle } from "./SelectBox.style";
import { ArrowDownIcon } from "../../assets";
import  {AimOutlined} from '@ant-design/icons';
const { Option } = Select;

type options = {
  key: string;
  value: string;
  disabled?: boolean;
};

type SelectBoxProps = {
  name: any;
  defaultValue?: string;
  options: any;
  width?: string;
  setFieldValue?: (field: string, value: any) => void;
  initializeSettingsData?: any;
  values?: any;
  disabled?: boolean;
  label?: any;
  setVenues?:any;
  setLoading?:any;
  type?: "horizontal" | "vertical";
  placeholder?: string;
  clear?:any;
  handleSelectBoxChange?: (e: any) => void;
};

const LocationSelectBox = (props: SelectBoxProps) => {
  const [field] = useField(props);
  const [val,setVal] = useState()
  const [latitude,setLatitude] = useState(0.0)
  const [longtitude,setLongtitude] = useState(0.0)
  const [address,setAddress] = useState(
    {
      countryName:'',
      countryCode:'',
      locality:''
    }
  )
  const {
    options,
    width,
    setFieldValue,
    initializeSettingsData,
    values,
    defaultValue,
    disabled = false,
    label,
    type = "vertical",
    placeholder,
    setVenues,
    setLoading,
    clear,
    handleSelectBoxChange,
  } = props;
  useEffect(() => {
    const value=field.name
    //clear&&setVal
   // clear&&setVal(value)
    // const data = [
    //   {type: "tags", search: ["pop", "test"]},
    //   {type: "distance", search: [{location: {latitude: 33.640599, longitude: 73.061110}, value: 5}]},
    //   {type: "time", search: [{unit: "hours", value: 5}]},
    //   {type: "amenities", search: ["Lockerss", "Valet"]}
    // ]
    // axios.post('/v1/filter/event',{filters:data}).then((response)=>{
    //     console.log("response",response);
    // }).catch((err)=>{
    //   console.log("responseerror",err)
    // })
    handleLocation()
    displayLocation(latitude,longtitude)
  }, []);
  const [addressData,setAddressData] = useState('')
  useEffect(()=>{
    setAddressData(address.locality+" , "+ address.countryCode+" , "+ address.countryName)
  },[address])
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
        setAddressData(data.locality+" , "+ data.countryCode+" , "+ data.countryName)
      }

    };
    request.send();
  }

  const handleLocation = async()=>{
    const res = await  navigator.geolocation.getCurrentPosition(function(position) {
      setLatitude(position.coords.latitude)
      setLongtitude(position.coords.longitude)
      displayLocation(position.coords.latitude,position.coords.longitude)
    });
  }
  const handleFilter=(value:any)=>{
    setLoading(true)
    let data
    if(field.name==='categoriesType'||field.name==='genre')
    {
       data = [
        {type: "tags", search: [value]}
      ]
    }
    else if(field.name==='distance')
    {
      data = [
      {type: "distance", search: [{location: {latitude: latitude, longitude: longtitude}, value: parseInt(value.split(" "))}]},
      
    ]
  }
  else if(field.name==='time'){
    if(value==="Now")
    {
      data = [
      {type: "time", search: [{unit: "hours", value: 0}]},
    ]
  }
  else if(value.includes("Not now"))
  {
    data = [
      {type: "time", search: [{unit: "hours", value: 12}]},
    ]
  }
  else{
    data = [
      {type: "time", search: [{unit: "days", value: 7}]},
    ]
  }
  }
  else
  {
    data = [
      {type: "amenities", search: [value]}
    ]
  }
  
    axios.post('/v1/filter/event',{filters:data}).then((response)=>{
        setLoading(false)
        setVenues(response.data)
    }).catch((err)=>{setLoading(false)
    })
}

  const handleChange = (value: any) => {
    setFieldValue && setFieldValue(field.name, value);
    console.log("selectboxvalue",value)
    {setLoading&&handleFilter(value)}
    setVal(value)
    initializeSettingsData && initializeSettingsData(value, undefined, values);
    handleSelectBoxChange && handleSelectBoxChange(value);
  };
  let count = 0
  useEffect(()=>{
    console.log("addressloco",values,field.name)

  },[values])
  console.log("fieldname",val)
  return (
    <SelectInputStyle type={type}>
      {label && <label className="select-label">{label}</label>}

      <SelectBoxStyle
        suffixIcon={<ArrowDownIcon />}
        name="hamza"
        width={width}
        defaultValue={field.name}
      // value={val}
        onChange={handleChange}
        disabled={disabled}
        placeholder={placeholder}
      >
        <Option
        key = {field.name}
        value = {field.name}
        >
            {field.name}
        </Option>
        {values&&values.map(
          (option: any) => (
            <Option
              key={option}
              value={option}
            >
              {option}
            </Option>
          )
        )}
      </SelectBoxStyle>
    </SelectInputStyle>
  );
};

export default LocationSelectBox;

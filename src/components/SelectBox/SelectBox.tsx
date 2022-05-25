import React, { useState,useEffect } from "react";
import { Select } from "antd";
import { useField } from "formik";
import axios from "axios";
import { SelectBoxStyle, SelectInputStyle } from "./SelectBox.style";
import { ArrowDownIcon } from "../../assets";

const { Option } = Select;

type options = {
  key: string;
  value: string;
  disabled?: boolean;
};

type SelectBoxProps = {
  name: string;
  defaultValue?: string;
  options: options[];
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
  handleSelectBoxChange?: (e: any) => void;
};

const SelectBox = (props: SelectBoxProps) => {
  const [field] = useField(props);
  const [val,setVal] = useState()
  const [latitude,setLatitude] = useState(0.0)
  const [longtitude,setLongtitude] = useState(0.0)
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
    handleSelectBoxChange,
  } = props;
  useEffect(() => {
    const data = [
      {type: "tags", search: ["pop", "test"]},
      {type: "distance", search: [{location: {latitude: 33.640599, longitude: 73.061110}, value: 5}]},
      {type: "time", search: [{unit: "hours", value: 5}]},
      {type: "amenities", search: ["Lockerss", "Valet"]}
    ]
    axios.post('/v1/filter/event',{filters:data}).then((response)=>{
        console.log("response",response);
    }).catch((err)=>{
      console.log("responseerror",err)
    })
    handleLocation()
  }, []);
  
  const handleLocation = async()=>{
    const res = await  navigator.geolocation.getCurrentPosition(function(position) {
      setLatitude(position.coords.latitude)
      setLongtitude(position.coords.longitude)
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
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
     
      console.log('lat',latitude,longtitude)
     data = [
      {type: "distance", search: [{location: {latitude: latitude, longitude: longtitude}, value: value}]},
      
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
        console.log("response",response);
        setLoading(false)
        setVenues(response.data)
    }).catch((err)=>{
      console.log("responseerror",err)
      setLoading(false)
    })
}

console.log("values",values)
  const handleChange = (value: any) => {
    setFieldValue && setFieldValue(field.name, value);
    console.log("val",value,field.name)
    {setLoading&&handleFilter(value)}
    setVal(value)
    initializeSettingsData && initializeSettingsData(value, undefined, values);
    handleSelectBoxChange && handleSelectBoxChange(value);
  };
  let count = 0
  console.log("filters",field.name)
  return (
    <SelectInputStyle type={type}>
      {label && <label className="select-label">{label}</label>}

      <SelectBoxStyle
        suffixIcon={<ArrowDownIcon />}
        name={"hamza"}
        width={width}
        defaultValue={field.name}
        value={val}
        onChange={handleChange}
        disabled={disabled}
        placeholder={placeholder}
      >
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

export default SelectBox;

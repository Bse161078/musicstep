import React, {useState, useEffect} from "react";
import {Select} from "antd";
import {useField} from "formik";
import axios from "axios";
import {SelectBoxStyle, SelectInputStyle} from "./SelectBox.style";
import {ArrowDownIcon} from "../../assets";

const {Option} = Select;

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
    setVenues?: any;
    setLoading?: any;
    type?: "horizontal" | "vertical";
    placeholder?: string;
    clear?: any;
    setWidthManually?:boolean;
    handleSelectBoxChange?: (e: any) => void;
};

const SelectBox = (props: SelectBoxProps) => {
    const [field] = useField(props);
    const [val, setVal] = useState();
    const [latitude, setLatitude] = useState(0.0);
    const [longtitude, setLongtitude] = useState(0.0);
    const [address, setAddress] = useState({
        countryName: "",
        countryCode: "",
        locality: "",
    });
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
        setWidthManually,
        handleSelectBoxChange,
    } = props;
    useEffect(() => {
        const value = field.name;
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
        handleLocation();
        displayLocation(latitude, longtitude);
    }, []);
    const [addressData, setAddressData] = useState("");
    useEffect(() => {
        setAddressData(
            address.locality +
            " , " +
            address.countryCode +
            " , " +
            address.countryName
        );
    }, [address]);
    const displayLocation = async (latitude: any, longitude: any) => {
        var request = new XMLHttpRequest();
        var method = "GET";
        var url =
            "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=" +
            latitude +
            "&longitude=" +
            longitude +
            "&localityLanguage=en";
        var async = true;

        request.open(method, url, async);
        request.onreadystatechange = function () {
            if (request.readyState == 4 && request.status == 200) {
                var data = JSON.parse(request.responseText);
                //var address = data.results[0];
                setAddress(data);
                setAddressData(
                    data.locality + " , " + data.countryCode + " , " + data.countryName
                );
            }
        };
        request.send();
    };

    const handleLocation = async () => {
        const res = await navigator.geolocation.getCurrentPosition(function (
            position
        ) {
            setLatitude(position.coords.latitude);
            setLongtitude(position.coords.longitude);
            displayLocation(position.coords.latitude, position.coords.longitude);
        });
    };
    const handleFilter = (value: any) => {
        setLoading(true);
        let data;

        if(handleSelectBoxChange) handleSelectBoxChange({key:field.name,data:value,latitude,longtitude});







    };

    const handleChange = (value: any) => {


        setFieldValue && setFieldValue(field.name, value);
        {
            setLoading && handleFilter(value);
        }
        setVal(value);
        initializeSettingsData && initializeSettingsData(value, undefined, values);
        handleSelectBoxChange && !setLoading && handleSelectBoxChange(value);
    };
    let count = 0;
    useEffect(() => {
    }, [values]);
    return (
        <SelectInputStyle type={type}>
            {label && <label className="select-label">{label}</label>}

            <SelectBoxStyle
                className="removeelisp"
                suffixIcon={<ArrowDownIcon/>}
                name="hamza"
                width={width}
                setWidthManually={setWidthManually}
                defaultValue={defaultValue || field.name}
                value={val}
                onChange={handleChange}
                disabled={disabled}
                placeholder={placeholder}
            >
                {values &&
                values.map((option: any) => (
                    <Option key={option} value={option}>
                        {option}
                    </Option>
                ))}
            </SelectBoxStyle>
        </SelectInputStyle>
    );
};

export default SelectBox;

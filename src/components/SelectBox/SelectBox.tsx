import React, { useState } from "react";
import { Select } from "antd";
import { useField } from "formik";

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
  type?: "horizontal" | "vertical";
  placeholder?: string;
  handleSelectBoxChange?: (e: any) => void;
};

const SelectBox = (props: SelectBoxProps) => {
  const [field] = useField(props);
  const [val,setVal] = useState()
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
    handleSelectBoxChange,
  } = props;
console.log("values",values)
  const handleChange = (value: any) => {
    setFieldValue && setFieldValue(field.name, value);
    console.log("val",value)
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

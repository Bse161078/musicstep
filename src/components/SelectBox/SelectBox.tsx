import React from "react";
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
};

const SelectBox = (props: SelectBoxProps) => {
  const [field] = useField(props);

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
  } = props;

  const handleChange = (value: any) => {
    setFieldValue && setFieldValue(field.name, value);
    initializeSettingsData && initializeSettingsData(value, undefined, values);
  };
  return (
    <SelectInputStyle type={type}>
      {label && <label className="select-label">{label}</label>}

      <SelectBoxStyle
        suffixIcon={<ArrowDownIcon />}
        name={field.name}
        width={width}
        defaultValue={field.value || defaultValue}
        value={field.value || defaultValue}
        onChange={handleChange}
        disabled={disabled}
      >
        {options.map(
          (option: { key: string; value: string; disabled?: boolean }) => (
            <Option
              key={option.key}
              value={option.key}
              disabled={option.disabled}
            >
              {option.value}
            </Option>
          )
        )}
      </SelectBoxStyle>
    </SelectInputStyle>
  );
};

export default SelectBox;

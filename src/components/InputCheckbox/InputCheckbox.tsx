import React from "react";
import { useField } from "formik";

import { CheckboxWrapperStyle } from "./InputCheckbox.style";
type CheckboxProps = {
  name: string;
  onClick: (e: any) => void;
  className: string;
  isCorrectOption?: boolean;
  label?: string;
};

const InputCheckbox = (props: CheckboxProps) => {
  const { name, onClick, className, isCorrectOption, label } = props;
  const [field, meta] = useField({ name });
  const invalid =
    field["value"] &&
    !field["value"].length &&
    Boolean(meta.error && meta.touched)
      ? "#100840"
      : "#100840";
  const check = isCorrectOption ? undefined : invalid;
  return (
    <CheckboxWrapperStyle
      checked={isCorrectOption}
      className={className}
      
      onClick={onClick}
    >
      <p style={{fontSize:name?.includes("Delete")?'20px':'',paddingTop:name?.includes("Delete")?'10px':''}} >{label}</p>
    </CheckboxWrapperStyle>
  );
};

export default InputCheckbox;

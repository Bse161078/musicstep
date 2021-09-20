import React from "react";
import { useField } from "formik";
import {
  TextFieldStyle,
  TextFieldErrorStyle,
  InputBoxStyle,
} from "./InputBox.style";

const InputBox = (props: any) => {
  const [field, meta] = useField(props);

  return (
    <InputBoxStyle>
      <label className="input-label">{props.label}</label>
      <TextFieldStyle
        className={props.className}
        name={field.name}
        color="primary"
        value={field.value}
        onBlur={field.onBlur}
        onChange={field.onChange}
        placeholder={props.label}
        width={props.width}
        {...props}
      />
      {meta.touched && meta.error ? (
        <TextFieldErrorStyle>{meta.error}</TextFieldErrorStyle>
      ) : null}
      {props.info && <p className="input-info">{props.info}</p>}
    </InputBoxStyle>
  );
};

export default InputBox;

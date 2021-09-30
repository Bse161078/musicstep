import React, { useRef } from "react";
import { useField } from "formik";
import {
  TextFieldStyle,
  TextFieldErrorStyle,
  InputBoxStyle,
} from "./InputBox.style";

const InputBox = (props: any) => {
  const [field, meta] = useField(props);

  const inputRef = useRef(null);

  const handlePasswordIconClick = () => {
    if (inputRef && props.type === "password") {
      // console.log(inputRef?.current?.type);
    }
  };

  return (
    <InputBoxStyle>
      <label className="input-label">{props.label}</label>

      <TextFieldStyle
        ref={inputRef}
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

      {props.type === "password" && (
        <span onClick={handlePasswordIconClick} className="password-icon">
          <img src="/images/icons/Password-hide-icon.svg" />
        </span>
      )}
      {meta.touched && meta.error ? (
        <TextFieldErrorStyle>{meta.error}</TextFieldErrorStyle>
      ) : null}
      {props.info && <p className="input-info">{props.info}</p>}
    </InputBoxStyle>
  );
};

export default InputBox;

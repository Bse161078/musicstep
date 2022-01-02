import React, { useRef, useState } from "react";
import { useField } from "formik";
import {
  TextFieldStyle,
  TextFieldErrorStyle,
  InputBoxStyle,
} from "./InputBox.style";

const InputBox = (props: any) => {
  const [field, meta] = useField(props);

  const inputRef = useRef();
  const [showPassword, setShowPassword] = useState(false)

  const handlePasswordIconClick = () => {
    if (inputRef.current && props.type === "password") {
      //@ts-ignore
      if (inputRef.current?.type === "password") {
        //@ts-ignore
        inputRef.current.type = "text";
        setShowPassword(true)
      } else {
        //@ts-ignore
        inputRef.current.type = "password";
        setShowPassword(false)
      }
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
        height={props.height}
        {...props}
      />

      {props.type === "password" &&
        (showPassword ? (
          <span onClick={handlePasswordIconClick} className="password-icon">
            <img alt="icon" src="/images/icons/Password-hide-icon.svg" />
          </span>
        ) : (
          <span onClick={handlePasswordIconClick} className="password-icon">
            <img alt="icon" src="/images/icons/password-show-icon.svg" />
          </span>
        ))}
      {meta.touched && meta.error ? (
        <TextFieldErrorStyle>{meta.error}</TextFieldErrorStyle>
      ) : null}
      {props.info && <p className="input-info">{props.info}</p>}
    </InputBoxStyle>
  );
};

export default InputBox;

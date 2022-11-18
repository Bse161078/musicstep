import React, {useRef, useState, useEffect} from "react";
import {useField} from "formik";
import {
    TextFieldStyle,
    TextFieldErrorStyle,
    InputBoxStyle,
} from "./InputBox.style";
import {useHistory} from "react-router";

const InputBox = (props: any) => {
    const [field, meta, helpers] = useField(props);
    const history = useHistory();

    const inputRef = useRef();
    const [showPassword, setShowPassword] = useState(false);
    const [locationChanged, setLocationChanged] = useState(true);

    useEffect(() => {
        if (props.navbar_search && props.navbar_search.length > 0) {
            helpers.setValue(props.navbar_search);
        }
    }, []);

    useEffect(() => {
        props.setSearch && props.setSearch(field.value);
    }, [field]);

    const handlePasswordIconClick = () => {
        if (inputRef.current && props.type === "password") {
            //@ts-ignore
            if (inputRef.current?.type === "password") {
                //@ts-ignore
                inputRef.current.type = "text";
                setShowPassword(true);
            } else {
                //@ts-ignore
                inputRef.current.type = "password";
                setShowPassword(false);
            }
        }
    };

    // const handleInputChange=(e:any)=>{
    //   const value = e.target.value
    //   props.setSearch(value)
    //   field.value=value
    // }

    return (
        <InputBoxStyle>
            <label className="input-label">
                {props.name === "explaination" ? "" : props.label}
            </label>

            <TextFieldStyle
                ref={inputRef}
                className={props.className}
                name={field.name}
                color="primary"
                value={field.value || props.navbar_search}
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
            <img alt="icon" src="/images/icons/Password-hide-icon.svg"/>
          </span>
            ) : (
                <span onClick={handlePasswordIconClick} className="password-icon">
            <img alt="icon" src="/images/icons/password-show-icon.svg"/>
          </span>
            ))}

            {props.type === "countryCode" &&
            (
                <span className="country-code-icon">
            <img alt="icon" src={`https://flagcdn.com/16x12/${(props.country).toLowerCase()}.png`}/>
          </span>
            )}

            {props.startText === "$" &&
            (
                <span style={{position:"relative"}}>
                    <h2 style={{position:"absolute",top:-40,left:"10px"}}>$</h2></span>
            )}

            {(meta.touched && meta.error) || props.error ? (
                <TextFieldErrorStyle>{meta.error || props.error}</TextFieldErrorStyle>
            ) : null}
            {props.info && <p className="input-info">{props.info}</p>}
        </InputBoxStyle>
    );
};

export default InputBox;

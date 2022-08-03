import axios from "axios";
import {Form, Formik} from "formik";
import React, {useState} from "react";
import {InputBox, Loading, TrialFormWrapper} from "..";
import {useUserContext} from "../../context/userContext";
import {FilledButtonStyle} from "../../styles/Common.style";
import {TrialGeneralInfoStyle} from "./TrialGeneralInfo.style";
import {TrialGeneralInfoValidationSchema} from "./validation";
import {IMaskInput} from "react-imask";
import {Input} from "@mui/material";
import InputMask from 'react-input-mask';
import {InputBoxStyle, TextFieldErrorStyle, TextFieldStyle} from "../InputBox/InputBox.style";

type TrailGeneralInfoProps = {
    setCurrentForm: (data: string) => void;
};





const TrialGeneralInfo = (props: any) => {
    const {setCurrentForm} = props;
    const [dob,setDob]=useState({value:"",error:"",show:false});


    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");



    const {
        state: {id},
        dispatch,
    } = useUserContext();

    const handleGeneralInfoSubmit = (e: any) => {
        var timestamp = Date.parse(dob.value);

        if(isNaN(timestamp) == true){
            setDob({...dob,error:"Date of birth is required",show:true});
            return;
        }

        setLoading(true);
        axios
            .patch(`/v1/users/createPersonalInfo/${id}`, {
                firstName: e.firstName,
                lastName: e.lastName,
                dob: dob.value,
            })
            .then((response) => {
                setLoading(false);
                dispatch({
                    type: "SUBMIT_GENERAL_INFO",
                    payload: {
                        firstName: e.firstName,
                        lastName: e.lastName,
                        dob: e.dob,
                    },
                });
                setCurrentForm("set-password");
            })
            .catch((error) => {
                setErrorMessage("Error while submitting data!");
                setLoading(false);
            });
    };




    const Pricing = <a href={"pricing"}>please click here</a>;


    console.log(props.value)
    return (
        <TrialFormWrapper heading="General Info">
            {loading && <Loading/>}

            <TrialGeneralInfoStyle>
                <Formik
                    initialValues={{
                        firstName: "",
                        lastName: "",
                    }}
                    validationSchema={TrialGeneralInfoValidationSchema}
                    onSubmit={handleGeneralInfoSubmit}
                >
                    {({values, errors}) => (
                        <Form className="general-info-wrapper">
                            <InputBox label="First Name" name="firstName"/>
                            <InputBox label="Last Name" name="lastName"/>
                            <InputBoxStyle>
                                <label
                                    className="input-label">{"Date of birth"}</label>

                                <InputMask mask="99/99/9999" value={props.value}
                                           onChange={(e)=>setDob({error:"",show:false,value:e.target.value})}>
                                    {(inputProps: any) => <TextFieldStyle {...inputProps} onChange={props.onChange}/>}
                                </InputMask>

                                {dob.show ? (
                                    <TextFieldErrorStyle>{dob.error}</TextFieldErrorStyle>
                                ) : null}
                            </InputBoxStyle>

                            {errorMessage !== "" && (
                                <p className="error-message">{errorMessage}</p>
                            )}
                            <FilledButtonStyle width="100%" height="60px">
                                Next
                            </FilledButtonStyle>
                        </Form>
                    )}
                </Formik>


                <p className="info-details">
                    {
                        `You may cancel your trial at any time. After 7 calendar days, you'll
          auto-enroll in our $99/month plan. Trial cannot be combined with any
          other package. If you wish to forego trial and choose a different
          membership package, `
                    }
                    {
                        Pricing
                    }
                </p>

                <p className="info-details">
                    Reservations to events cannot be cancelled 24 hours prior to event, at
                    which point credit use is deemed permanent.
                </p>

                <h4 className="info-footer-heading">
                    I'm in <span>Miami/South Florida</span>
                </h4>
            </TrialGeneralInfoStyle>
        </TrialFormWrapper>
    );
};

export default TrialGeneralInfo;

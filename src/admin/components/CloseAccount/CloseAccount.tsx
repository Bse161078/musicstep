import {Button} from "antd";
import {Form, Formik} from "formik";
import React, {useState} from "react";
import {DashboardHeader, RadioButton} from "..";
import {InputBox} from "../../../components";
import {
    FilledButtonStyle,
    OutlineButtonStyle,
} from "../../../styles/Common.style";
import {InputCheckbox} from "../../../components";
import {CloseAccountStyle} from "./CloseAccount.style";
import {Loading} from "../../../components";
import axios from "axios";
import {useLoginContext} from "../../../context/authenticationContext";
import {useHistory} from "react-router-dom";

const CloseAccount = (props: any) => {
    const {dispatch, state} = useLoginContext();
    const history = useHistory()
    const [deleteAccount, setDeleteAccount] = useState(false)
    const [sendData, setSendData] = useState(false)
    const [isLoading, setLoading] = useState(false)
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState("")
    const handleBackClick = () => {
        props.setCurrentPage("account-settings")
    }
    const handleCloseAccount = () => {
        setLoading(true);
        const user: any = JSON.parse(localStorage.getItem("data") || "{}");
        axios
            .put(`/v1/partners/${user.id}`,
                {password: password},
                {
                    headers: {Authorization: `Bearer ${localStorage.getItem('authToken')}`},
                })
            .then((response) => {
                console.log("response = ",response);
                setLoading(false);
                window.history.replaceState(null, "", "/");
                dispatch({
                    type: "LOGOUT",
                    payload: {},
                });
                history.push("/");
            }).catch((error) => {
            console.log('responseerror', error.response.data.message)
            setErrorMessage(error.response.data.message)
            setLoading(false);
        });
    }
    return (
        <CloseAccountStyle>
            <DashboardHeader
                heading="Close Account"
                description="Thank you for using MusicPass Events. If there is anything we can do to keep you with us, please Let Us Know."
                handleBackClick={handleBackClick}
                isLoading={isLoading}
            />

            <Formik initialValues={{explaination: ""}} onSubmit={() => {
            }}>
                {() => (
                    <Form className="close-account-form">
                        <RadioButton/>
                        <InputBox name="explaination" label="Type your explaination here..."/>
                        <div className="input-check-box">
             <span className="span-element"> 
               <InputCheckbox
                   name="Delete account"
                   onClick={() =>
                       setDeleteAccount(!deleteAccount)
                   }
                   isCorrectOption={deleteAccount}
                   className=""
                   label="Delete My Account After Closing It."
               />
              <p className="close-account-typograpghy">This is a permanent action and cannot be undone.</p>
              </span>
                            <span className="span-element">
              <InputCheckbox
                  name="Delete account"
                  onClick={() =>

                      setSendData(!sendData)

                  }
                  isCorrectOption={sendData}
                  className=""
                  label="Send Me My Personal Data File Before You Delete My Account."
              />
              <p className="close-account-typograpghy">Your personal data file will be sent to the email address associated with your MusicPass account.</p>
              </span>
                        </div>
                        <InputBox className="email" onChange={(e: any) => {
                            setPassword(e.target.value)
                        }}
                                  value={password} name="password" type="password" label="Your Password"/>
                        <div style={{marginTop: 20,paddingBottom:20}}>
                           <p className="close-account-typograpghy" style={{color:"red"}}>{errorMessage}</p>
                        </div>
                        <div style={{marginTop: 20,paddingBottom:20}}>
                            <FilledButtonStyle
                                width="290px"
                                height="60px"
                                buttonType="dark"
                                onClick={() => {
                                    handleCloseAccount()
                                }}
                            >
                                Okay
                            </FilledButtonStyle>
                        </div>
                    </Form>
                )}
            </Formik>
        </CloseAccountStyle>
    );
};

export default CloseAccount;

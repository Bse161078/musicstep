import { Button } from "antd";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import { DashboardHeader, RadioButton } from "..";
import { InputBox } from "../../../components";
import {
  FilledButtonStyle,
  OutlineButtonStyle,
} from "../../../styles/Common.style";
import { InputCheckbox } from "../../../components";
import { CloseAccountStyle } from "./CloseAccount.style";
import { Loading } from "../../../components";
import axios from "axios";

const CloseAccount = (props:any) => {
  const [deleteAccount,setDeleteAccount] = useState(false)
  const [sendData,setSendData] = useState(false) 
  const [isLoading,setLoading] = useState(false)
  const [password,setPassword] = useState('')
  const handleBackClick =()=>{
    props.setCurrentPage("account-settings")
  }
  const handleCloseAccount = ()=>{
    setLoading(true);
    const user: any = JSON.parse(localStorage.getItem("data") || "{}");
    axios
      .put(`/v1/partners/${user.id}`, 
        {password:password},
        {
          headers: { Authorization: `Bearer ${localStorage.getItem('authToken')}` },
        })
      .then((response) => {
        setLoading(false);
       console.log('response',response)
        
        }).catch((error) => {
          console.log('responseerror',error)
        setLoading(false);
      });
  }
  console.log('password',password)
  return (
    <CloseAccountStyle>
      {isLoading&&<Loading/>}
      <DashboardHeader
        heading="Close Account"
        description="Thank you for using MusicPass Events. If there is anything we can do to keep you with us, please Let Us Know."
        handleBackClick={handleBackClick}
      />

      <Formik initialValues={{ explaination: "" }} onSubmit={() => {}}>
        {() => (
          <Form className="close-account-form">
            <RadioButton />
            <InputBox name="explaination" label="Type your explaination here..." />
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
              <p className="close-account-typograpghy" >This is a permanent action and cannot be undone.</p>
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
              <p className="close-account-typograpghy" >Your personal data file will be sent to the email address associated with your MusicPass account.</p>
              </span>
            </div>
            <InputBox className="email" onChange={(e:any)=>{
              setPassword(e.target.value)
            }}
            value={password} name="password"  type="password" label="Your Password" />
            <div style={{padding:10}}>
            <FilledButtonStyle
                    width="290px"
                    height="60px"
                    buttonType="dark"
                    onClick={()=>{
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

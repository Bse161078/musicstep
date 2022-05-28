import { Button } from "antd";
import { Form, Formik } from "formik";
import React from "react";
import { DashboardHeader, RadioButton } from "..";
import { InputBox } from "../../../components";
import {
  FilledButtonStyle,
  OutlineButtonStyle,
} from "../../../styles/Common.style";
import { CloseAccountStyle } from "./CloseAccount.style";

const CloseAccount = (props:any) => {
  const handleBackClick =()=>{
    props.setCurrentPage("account-settings")
  }
  return (
    <CloseAccountStyle>
      <DashboardHeader
        heading="Close Account"
        description="Thank you for using MusicPass Events. If there is anything we can do to keep you with us, please Let Us Know."
        handleBackClick={handleBackClick}
      />

      <Formik initialValues={{ explaination: "" }} onSubmit={() => {}}>
        {() => (
          <Form className="close-account-form">
            <RadioButton />
            <InputBox name="explaination" />
            <div style={{padding:10}}>
            <FilledButtonStyle
                    width="290px"
                    height="60px"
                    buttonType="dark"
                    onClick={()=>{}}
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

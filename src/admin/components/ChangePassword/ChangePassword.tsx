import { Form, Formik } from "formik";
import React, { useState } from "react";
import { DashboardHeader } from "..";
import { InputBox } from "../../../components";
import { FilledButtonStyle,OutlineButtonStyle } from "../../../styles/Common.style";
import { ChangePasswordPrompt } from "..";
import { ChangePasswordStyle } from "./ChangePassword.style";

const ChangePassword = (props:any) => {
  const handleSubmit = () => {};
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleBackClick =()=>{
    props.setCurrentPage("account-settings")
  }
  return (
    <ChangePasswordStyle>
      <DashboardHeader heading="Change Password" handleBackClick={handleBackClick} />
      <div style={{padding:5}}>
     
         </div>
      <Formik
        initialValues={{
          currentPassword: "",
          newPassword: "",
          confirmPassword: "",
        }}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className="change-password-form">
            <InputBox label="Current Password" name="currentPassword" />
            <InputBox label="New Password" type="password" name="newPassword" />
            <InputBox
              label="Confirm New Password"
              type="password"
              name="confirmPassword"
            />

            <FilledButtonStyle
              buttonType="dark"
              onClick={() => setIsModalVisible(true)}
            >
              Change Password
            </FilledButtonStyle>
          </Form>
        )}
      </Formik>
      <ChangePasswordPrompt
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
    </ChangePasswordStyle>
  );
};

export default ChangePassword;

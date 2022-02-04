import axios from "axios";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import { InputBox, MessageModal } from "../../../components";
import { useLoginContext } from "../../../context/authenticationContext";
import { FilledButtonStyle } from "../../../styles/Common.style";

import { ChangePasswordFormStyle } from "./ChangePasswordForm.style";

const ChangePasswordForm = () => {
  const [isSuccessModalVisible, setSuccessModalVisible] = useState(false);

  const { state } = useLoginContext();

  const handlePasswordSubmit = (e: any) => {
    if (e.newPassword === e.confirmPassword)
      //na
      axios
        .put(
          "/v1/users/updatePassword",
          {
            password: e.currentPassword,
            newPassword: e.confirmPassword,
          },
          { headers: { Authorization: `Bearer ${state.authToken}` } }
        )
        .then(() => setSuccessModalVisible(true))
        .catch((error) => console.log("error: ", error));
  };
  return (
    <ChangePasswordFormStyle>
      <Formik
        initialValues={{
          currentPassword: "",
          newPassword: "",
          confirmPassword: "",
        }}
        onSubmit={handlePasswordSubmit}
      >
        {() => (
          <Form className="form-wrapper">
            <InputBox
              type="password"
              label="Current Password"
              name="currentPassword"
            />
            <InputBox type="password" label="New Password" name="newPassword" />
            <InputBox
              type="password"
              label="Confirm Password"
              name="confirmPassword"
            />

            <FilledButtonStyle buttonType="dark" width="520px" height="60px">
              Change Password
            </FilledButtonStyle>
          </Form>
        )}
      </Formik>

      <MessageModal
        isModalVisible={isSuccessModalVisible}
        setIsModalVisible={setSuccessModalVisible}
        heading="Success"
        message="Password changed successfully."
      />
    </ChangePasswordFormStyle>
  );
};

export default ChangePasswordForm;

import { Form, Formik } from "formik";
import React, { useState } from "react";
import { InputBox, MessageModal } from "../../../components";
import { FilledButtonStyle } from "../../../styles/Common.style";

import { ChangePasswordFormStyle } from "./ChangePasswordForm.style";

const ChangePasswordForm = () => {
  const [isSuccessModalVisible, setSuccessModalVisible] = useState(false);

  return (
    <ChangePasswordFormStyle>
      <Formik
        initialValues={{
          currentPassword: "",
          newPassword: "",
          confirmPassword: "",
        }}
        onSubmit={() => {setSuccessModalVisible(true)}}
      >
        {() => (
          <Form className="form-wrapper">
            <InputBox label="Current Password" name="currentPassword" />
            <InputBox label="New Password" name="newPassword" />
            <InputBox label="Confirm Password" name="confirmPassword" />

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

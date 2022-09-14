import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { InputBox, MessageModal, Loading } from "..";
import {
  FilledButtonStyle,
  OutlineButtonStyle,
} from "../../styles/Common.style";
import { FormWrapper } from "../../components";

import { ResetPasswordFormStyle } from "./ResetPasswordForm.style";
import { useHistory, useParams, useLocation } from "react-router-dom";
import queryString from "query-string";
import { ResetPasswordFormValidationSchema } from "./validation";

type ResetPasswordFormProps = {
  // setCurrentSection: any;
};

const ResetPasswordForm = ({ match }: any) => {
  const history = useHistory();
  // const { setCurrentSection } = props;

  const [messageHeading, setMessageHeading] = useState("");
  const [message, setMessage] = useState("");
  const loc = useLocation();
  const value = queryString.parse(loc.search);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    validateToken();
  }, []);

  const successModalClose = () => {
    //   setCurrentSection("reset-password");
    messageHeading === "Success" && history.push("/");

    setIsModalVisible(false);
  };

  const validateToken = () => {
    setLoading(true);
    axios
      .get(`v1/users/userToken/${value.token}`)
      .then((response) => {
        setUser(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        history.push("/");
        setLoading(false);
      });
  };

  const handleResetSubmit = (e: any) => {
    setLoading(true);
    axios
      .post(`/v1/auth/reset-password?token=${value.token}`, {
        password: e.password,
      })
      .then((response) => {
        setLoading(false);
        setIsModalVisible(true);
        setIsModalVisible(true);
        setMessageHeading("Success");
        setMessage(
          "We have successfully  reset your password. Please log in with your new password."
        );
      })
      .catch((error) => {
        setMessage(error.response?.data.message);
        setIsModalVisible(true);
        setMessageHeading("Error");
        setLoading(false);
      });
  };

  const username = user ? `${user.firstName} ${user.lastName}` : "Member";
  return (
    <FormWrapper
      leftImage="/images/login/login-side.png"
      topHeading="Reset Password"
      formHeading={`“Hey, ${username}!”`}
    >
      {loading && <Loading />}
      <ResetPasswordFormStyle>
        <p className="description">
          Please enter and confirm your new password.
        </p>

        <Formik
          initialValues={{ password: "", confirmPassword: "" }}
          onSubmit={handleResetSubmit}
          validationSchema={ResetPasswordFormValidationSchema}
        >
          {() => (
            <Form className="form-wrapper">
              <InputBox type="password" label="New Password" name="password" />
              <InputBox
                type="password"
                label="Confirm New Password"
                name="confirmPassword"
              />

              <FilledButtonStyle
                type="submit"
                buttonType="dark"
                width="100%"
                height="60px"
              >
                Reset Password
              </FilledButtonStyle>
            </Form>
          )}
        </Formik>

        <div className="form-footer">
          <p>Go back to</p>
          <OutlineButtonStyle width="100%" height="60px">
            Login Page
          </OutlineButtonStyle>
        </div>
      </ResetPasswordFormStyle>
      <MessageModal
        handleOkClick={successModalClose}
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        message={message}
        heading={messageHeading}
      />
    </FormWrapper>
  );
};

export default ResetPasswordForm;

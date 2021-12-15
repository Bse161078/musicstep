import axios from "axios";
import { Form, Formik } from "formik";
import React, { useState } from "react";

import { InputBox, Loading, TrialFormWrapper } from "..";
import { useUserContext } from "../../context/userContext";
import { FilledButtonStyle } from "../../styles/Common.style";
import { TrialSetPasswordStyle } from "./TrialSetPassword.style";

type TrailSetPasswordProps = {
  setCurrentForm: (data: string) => void;
};

const TrialSetPassword = (props: TrailSetPasswordProps) => {
  const { setCurrentForm } = props;

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const {
    state: { id },
    dispatch,
  } = useUserContext();

  const handleSetPasswordSubmit = (e: any) => {
    setLoading(true);

    if (e.password === e.confirmPassword) {
      axios
        .patch(
          `https://music-pass-backend.herokuapp.com/v1/users/createPassword/${id}`,
          {
            password: e.password,
          }
        )
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
          setCurrentForm("redeem-offer");
        })
        .catch((error) => {
          console.log({error})
          setErrorMessage(error.message);
          setLoading(false);
          console.log("error");
        });
    } else {
      setLoading(false);
      setErrorMessage("Password missmatched!");
    }
  };
  return (
    <TrialFormWrapper heading="Set Your Password">
      {loading && <Loading />}

      <TrialSetPasswordStyle>
        <Formik
          initialValues={{
            password: "",
            confirmPassword: "",
          }}
          onSubmit={handleSetPasswordSubmit}
        >
          {({ values }) => (
            <Form className="set-password-wrapper">
              <h3 className="password-wrapper-heading">
                Your password must have at least 8 characters, and includes a
                number or symbols.
              </h3>

              <InputBox label="Password" type="password" name="password" />
              <InputBox
                label="Confirm Password"
                type="password"
                name="confirmPassword"
              />
              {errorMessage !== "" && (
                <p className="error-message">{errorMessage}</p>
              )}

              <FilledButtonStyle width="100%" height="60px">
                Continue
              </FilledButtonStyle>
            </Form>
          )}
        </Formik>

        <p className="info-details">
          You may cancel your trial at any time. After 7 calendar days, you'll
          auto-enroll in our $99/month plan. Trial cannot be combined with any
          other package. If you wish to forego trial and choose a different
          membership package, please click here.
        </p>

        <p className="info-details">
          Reservations to events cannot be cancelled 24 hours prior to event, at
          which point credit use is deemed permanent.
        </p>

        <h4 className="info-footer-heading">
          I'm in <span>Miami/South Florida</span>
        </h4>
      </TrialSetPasswordStyle>
    </TrialFormWrapper>
  );
};

export default TrialSetPassword;

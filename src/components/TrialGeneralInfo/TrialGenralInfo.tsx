import axios from "axios";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import { InputBox, Loading, TrialFormWrapper } from "..";
import { useUserContext } from "../../context/userContext";
import { FilledButtonStyle } from "../../styles/Common.style";
import { TrialGeneralInfoStyle } from "./TrialGeneralInfo.style";

type TrailGeneralInfoProps = {
  setCurrentForm: (data: string) => void;
};

const TrialGeneralInfo = (props: TrailGeneralInfoProps) => {
  const { setCurrentForm } = props;

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const {
    state: { id },
    dispatch,
  } = useUserContext();

  const handleGeneralInfoSubmit = (e: any) => {
    setLoading(true);
    axios
      .patch(
        `https://music-pass-backend.herokuapp.com/v1/users/createPersonalInfo/${id}`,
        {
          firstName: e.firstName,
          lastName: e.lastName,
          dob: e.dob,
        }
      )
      .then((response) => {
        setLoading(false);
        console.log(response);
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
        console.log("error");
      });
  };
  return (
    <TrialFormWrapper heading="General Info">
      {loading && <Loading />}

      <TrialGeneralInfoStyle>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
          }}
          onSubmit={handleGeneralInfoSubmit}
        >
          {({ values }) => (
            <Form className="general-info-wrapper">
              <InputBox label="First Name" name="firstName" />
              <InputBox label="Last Name" name="lastName" />
              <InputBox label="Date of birth" name="dob" />

              <FilledButtonStyle width="100%" height="60px">
                Next
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
      </TrialGeneralInfoStyle>
    </TrialFormWrapper>
  );
};

export default TrialGeneralInfo;

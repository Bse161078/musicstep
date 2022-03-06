import React, { useState } from "react";
import { Form, Formik } from "formik";

import { InputBox, Loading, TrialFormWrapper } from "..";
import { UpcomingEventsIcon } from "../../assets";
import { FilledButtonStyle } from "../../styles/Common.style";
import { IconWithTextStyle, TrialFormStyle } from "./TrialForm.style";
import axios from "axios";
import { useUserContext } from "../../context/userContext";

type IconWithTextProps = {
  heading: string;
  icon: React.ReactNode;
};

const IconWithText = (props: IconWithTextProps) => {
  const { heading, icon } = props;

  return (
    <IconWithTextStyle>
      {icon}
      <figcaption>{heading}</figcaption>
    </IconWithTextStyle>
  );
};

type TrialFormProps = {
  setCurrentForm: any;
};

const TrialForm = (props: TrialFormProps) => {
  const { setCurrentForm } = props;

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { dispatch } = useUserContext();

  const handleFreeTrialEmailSubmit = (e: any) => {
    setLoading(true);

    const res = axios
      .post("/v1/users", {
        email: e.email,
      })
      .then((response) => {
        setLoading(false);
        console.log(response);

        dispatch({
          type: "SUBMIT_EMAIL",
          payload: {
            email: e.email,
            id: response.data.id,
          },
        });
        setCurrentForm("general-info");
      })
      .catch((error) => {
        setErrorMessage(error.response.data.message);
        setLoading(false);
        console.log(error.response.data.message);
      });

    console.log(res);
  };

  return (
    <TrialFormWrapper heading="Your Trial Includes">
      {loading && <Loading />}

      <TrialFormStyle>
        <h1 className="trial-price">$O</h1>
        <h4 className="price-description">For 7 Days</h4>

        <IconWithText
          heading="Get XX credits to book upcoming events."
          icon={<UpcomingEventsIcon />}
        />

        <IconWithText
          heading="We'll remind you two days before your trial ends."
          icon={<img alt="icon" src="/images/icons/reminder-icon.svg" />}
        />

        <IconWithText
          heading="You're never locked in. Cancel anytime."
          icon={<img alt="icon" src="/images/icons/cancel-lock-icon.svg" />}
        />

        <Formik
          enableReinitialize={true}
          initialValues={{ email: "" }}
          onSubmit={handleFreeTrialEmailSubmit}
          validateOnChange={true}
        >
          {({ values }) => (
            <Form className="trial-form-wrapper">
              <div>
                <InputBox
                  label="Email Address"
                  name="email"
                  type="email"
                  required
                />
                {errorMessage !== "" && (
                  <p className="error-message">{errorMessage}</p>
                )}
              </div>

              <FilledButtonStyle width="100%" height="60px">
                Try For Free
              </FilledButtonStyle>
            </Form>
          )}
        </Formik>
      </TrialFormStyle>
    </TrialFormWrapper>
  );
};

export default TrialForm;

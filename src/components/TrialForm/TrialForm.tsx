import { Form, Formik } from "formik";
import React from "react";
import { InputBox, TrialFormWrapper } from "..";
import { UpcomingEventsIcon } from "../../assets";
import { FilledButtonStyle } from "../../styles/Common.style";
import { IconWithTextStyle, TrialFormStyle } from "./TrialForm.style";

const IconWithText = () => {
  return (
    <IconWithTextStyle>
      <UpcomingEventsIcon />

      <figcaption>Get XX credits to book upcoming events.</figcaption>
    </IconWithTextStyle>
  );
};

type TrialFormProps = {
  setCurrentForm: any
}

const TrialForm = (props: TrialFormProps) => {
  const { setCurrentForm } = props;

  const handleFreeTrialEmailSubmit = () => {
    setCurrentForm("general-info")
  };
  return (
    <TrialFormWrapper heading="Your Trial Includes">
      <TrialFormStyle>
        <h1 className="trial-price">$O</h1>
        <h4 className="price-description">For 7 Days</h4>

        <IconWithText />
        <IconWithText />
        <IconWithText />

        <Formik
          enableReinitialize={true}
          initialValues={{ email: "" }}
          onSubmit={handleFreeTrialEmailSubmit}
        >
          {({ values }) => (
            <Form className="trial-form-wrapper">
              <InputBox label="Email Address" name="email" />

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

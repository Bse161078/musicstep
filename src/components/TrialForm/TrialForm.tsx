import React from "react";
import { Form, Formik } from "formik";

import { InputBox, TrialFormWrapper } from "..";
import { UpcomingEventsIcon } from "../../assets";
import { FilledButtonStyle } from "../../styles/Common.style";
import { IconWithTextStyle, TrialFormStyle } from "./TrialForm.style";

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

  const handleFreeTrialEmailSubmit = () => {
    setCurrentForm("general-info");
  };
  return (
    <TrialFormWrapper heading="Your Trial Includes">
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

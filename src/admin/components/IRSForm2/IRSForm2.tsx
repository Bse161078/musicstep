import { Form, Formik } from "formik";
import React from "react";
import { ContentHeader } from "..";
import { InputBox } from "../../../components";
import { IRSForm2Style } from "./IRSForm2.style";

const IRSForm2 = () => {
  const handleSubmit = () => {};
  return (
    <IRSForm2Style>
      <ContentHeader
        heading="IRS Substitute Form W-9"
        description="The following form is required by the U.S. Interval Revenue Service and is only available in U.S. English. Please complete in U.S. English. If you need help, see FAQs and IRS Form W-9 Instructions."
      />

      <h4 className="form-content-heading">content here</h4>

      <Formik
        initialValues={{ signature: "", date: "" }}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className="form-wrapper">
            <InputBox width="600px" name="signature" label="Your Signature" />
            <InputBox width="255px" name="date" label="Sign Date" />
          </Form>
        )}
      </Formik>

      <p className="form-details">Typing your name acts as your signature.</p>
      <p className="form-details">
        Note: Date & time of submission and your computer's IP will be recorded
        upon your submissions.
      </p>
    </IRSForm2Style>
  );
};

export default IRSForm2;

import { Form, Formik } from "formik";
import React from "react";
import { ContentHeader } from "..";
import { InputBox } from "../../../components";
import { IRSSubstituteFormStyle } from "./IRSSubstituteForm.style";

const IRSSubstituteForm = () => {
  const handleFormSubmit = () => {};
  return (
    <IRSSubstituteFormStyle>
      <ContentHeader
        heading="IRS Substitute Form W-9"
        description="The following form is required by the U.S. Interval Revenue Service and is only available in U.S. English. Please complete in U.S. English. If you need help, see FAQs and IRS Form W-9 Instructions."
      />

      <h4 className="content-desc-heading">
        Taxpayer Identification Number (TIN)
      </h4>
      <Formik initialValues={{ id: "" }} onSubmit={handleFormSubmit}>
        {() => (
          <Form>
            Radio buttons here
            <InputBox
              name="id"
              info="Note: Please enter your valid 9-digit EIN Number without dash (-)."
            />
          </Form>
        )}
      </Formik>
    </IRSSubstituteFormStyle>
  );
};

export default IRSSubstituteForm;

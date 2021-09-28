import React from "react";
import { Form, Formik } from "formik";

import { UploadFile } from "..";
import { InputBox, SelectBox } from "../../../components";
import { OrganizationDetailsFormStyle } from "./OrganizationDetailsForm.style";

const OrganizationDetailsForm = () => {
  const handleOrganizationDetailsSubmit = () => {};

  return (
    <OrganizationDetailsFormStyle>
      <UploadFile />

      <div>
        <Formik
          initialValues={{ organizationName: "", perefferedCountry: "" }}
          onSubmit={handleOrganizationDetailsSubmit}
        >
          {() => (
            <Form className="organization-details-form">
              <InputBox label="Organization Name" name="organizationName" />
              <SelectBox
                width="fill"
                options={[{ key: "", value: "" }]}
                label="Preffered Country"
                name="perefferedCountry"
              />
            </Form>
          )}
        </Formik>
      </div>
    </OrganizationDetailsFormStyle>
  );
};

export default OrganizationDetailsForm;

import { Form, Formik } from "formik";
import React from "react";
import { ContentHeader, DashboardHeader } from "..";
import { InputBox } from "../../../components";

import { ContactInfoFormStyle } from "./ContactInfoForm.style";

const ContactInfoForm = () => {
  return (
    <ContactInfoFormStyle>
      <DashboardHeader heading="Contact Info" />

      <Formik
        initialValues={{
          prefix: "",
          firstName: "",
          lastName: "",
          suffix: "",
          email: "",
          phone: "",
          jobTitle: "",
          company: "",
          website: "",
          blog: "",
        }}
        onSubmit={() => {}}
      >
        {() => (
          <Form>
            <div className="headings-with-inputs">
              <ContentHeader heading="Full Name" />
              <div className="inputs-wrapper">
                <InputBox label="Prefix" name="prefix" width="690px" />
                <InputBox label="First Name" name="firstName" width="400px" />
                <InputBox label="Last Name" name="lastName" width="350px" />
                <InputBox label="Suffix" name="suffix" width="250px" />
              </div>
            </div>

            <div className="headings-with-inputs">
              <ContentHeader heading="Email & Phone" />
              <div className="inputs-wrapper">
                <InputBox label="Email Address" name="email" width="450px" />
                <InputBox
                  label="Cell Phone Number"
                  name="phone"
                  width="450px"
                />
              </div>
            </div>

            <div className="headings-with-inputs">
              <ContentHeader heading="Designation" />
              <div className="inputs-wrapper">
                <InputBox label="Job Title" name="jobTitle" width="400px" />
                <InputBox
                  label="Company / Organization"
                  name="company"
                  width="400px"
                />
              </div>
            </div>

            <div className="headings-with-inputs">
              <ContentHeader heading="Internet" />
              <div className="inputs-wrapper">
                <InputBox label="Website" name="website" width="400px" />
                <InputBox label="Blog" name="blog" width="400px" />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </ContactInfoFormStyle>
  );
};

export default ContactInfoForm;

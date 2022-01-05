import React from "react";
import PartnerOrganizationDetailFormStyle from "./PartnerOrganizationDetailForm.style";
import { InputBox } from "..";
import { Form, Formik } from "formik";
import { TrialFormWrapper } from "..";
import { FilledButtonStyle } from "../../styles/Common.style";
import { SelectBox } from "..";

const PartnerOrganizationDetailForm = () => {
  const initialValues = {};
  const handleDetailsSubmit = () => {};

  return (
    <TrialFormWrapper heading="Organization Details">
      <PartnerOrganizationDetailFormStyle>
        <Formik
          enableReinitialize={true}
          initialValues={{ initialValues }}
          onSubmit={handleDetailsSubmit}
          validateOnChange={true}
        >
          {({ values }) => (
            <Form className="form-wrapper">
              <InputBox label="Organization Name" name="Sunrise Event Organizers"  width="520px" />
              <SelectBox
                width="fill"
                name="organizationType"
                options={[{ key: "", value: "+44 (UK)" }]}
                label="Organization Type"
              />
              <InputBox
                label="Organization URL"
                placeholder="e.g. https://www.organization.com/"
                name="url"
                width="520px"
              />
              <div className="feild-wrapper">
                <InputBox
                  label="Yearly Events"
                  placeholder="Type any number..."
                  name="phoneNumber"
                  width="520px"
                />
                <InputBox
                  label="Capacity"
                  placeholder="Type any number..."
                  name="capacity"
                  width="520px"
                />
              </div>
              <FilledButtonStyle width="100%" height="60px">
                Continue
              </FilledButtonStyle>
              <div className="footer-wrapper">
                <p className="foooter-text">
                  We'll use the information you submit to tell you about
                  partnership opportunities and provide other updates. By
                  submitting this form, you agree to the{" "}
                  <span className="terms-text">
                    Terms of Use & Privacy Policy.
                  </span>
                </p>
              </div>
            </Form>
          )}
        </Formik>
      </PartnerOrganizationDetailFormStyle>
    </TrialFormWrapper>
  );
};

export default PartnerOrganizationDetailForm;

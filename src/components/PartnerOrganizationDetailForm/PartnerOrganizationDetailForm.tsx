import React from "react";
import PartnerOrganizationDetailFormStyle from "./PartnerOrganizationDetailForm.style";
import { InputBox } from "..";
import { Form, Formik } from "formik";
import { TrialFormWrapper } from "..";
import { FilledButtonStyle } from "../../styles/Common.style";
import { SelectBox } from "..";
import { PartnerOrganizationDetailFormValidationSchema } from "./validation";
import axios from "axios";
import { usePartnerContext } from "../../context/partnerContext ";
import { useHistory, useLocation, useParams } from "react-router-dom";
const PartnerOrganizationDetailForm = () => {
  const { state, dispatch } = usePartnerContext();

  const history = useHistory();
  const params: any = useParams();
  console.log(params);
  const initialValues = {
    organizationName: state.organizationName,
    organizationType: state.organizationType,
    organizationURL: state.organizationURL,
    yearlyEvents: state.yearlyEvents,
    capacity: state.capacity,
  };
  const handleDetailsSubmit = (value: any) => {
    console.log("details",value,params.partnerId)
    axios
      .patch(`/v1/partners/createOrganizationInformation/${params.partnerId}`, {
        organizationName: value.organizationName,
        organizationType: value.organizationType,
        organizationURL: value.organizationURL,
        yearlyEvents: value.yearlyEvents,
        capacity: value.capacity,
      })
      .then((res) => {
        // setContinueModal(true);
        dispatch({
          type: "SUBMIT_ORGANIZATION_INFO",
          payload: {
            organizationName: value.organizationName,
            organizationType: value.organizationType,
            organizationURL: value.organizationURL,
            yearlyEvents: value.yearlyEvents,
            capacity: value.capacity,
          },
        });

        // history.push("/free-trial");

        // localStorage.setItem("partnerId", params.id);
        history.push({
          pathname: "/free-trial",
          state: {
            previousPath: history.location.pathname,
            partnerId: params.partnerId,
          },
        });
      })
      .catch((error) => {
        // setErrorMessage(error.response?.data.message);
      });
    console.log(value);
  };

  return (
    <TrialFormWrapper heading="Organization Details">
      <PartnerOrganizationDetailFormStyle>
        <Formik
          enableReinitialize={true}
          initialValues={initialValues}
          onSubmit={(value) => handleDetailsSubmit(value)}
          validateOnChange={true}
          validationSchema={PartnerOrganizationDetailFormValidationSchema}
        >
          {({ values, setFieldValue }) => (
            <Form className="form-wrapper">
              <InputBox
                label="Organization Name"
                name="organizationName"
                width="520px"
                value={values.organizationName}
              />
              <SelectBox
                width="fill"
                name="organizationType"
                options={[
                  { key: "New Organization", value: "New Organization" },
                  { key: "Old Organization", value: "Old Organization" },
                ]}
                values={['New Organization','Old Organization']}
                label="Organization Type"
                setFieldValue={setFieldValue}
              />
              <InputBox
                label="Organization URL"
                placeholder="e.g. https://www.organization.com/"
                name="organizationURL"
                width="520px"
                value={values.organizationURL}
              />
              <div className="feild-wrapper">
                <InputBox
                  label="Yearly Events"
                  placeholder="Type any number..."
                  name="yearlyEvents"
                  width="520px"
                  value={values.yearlyEvents}
                />
                <InputBox
                  label="Capacity"
                  placeholder="Type any number..."
                  name="capacity"
                  width="520px"
                  value={values.capacity}
                />
              </div>
              <FilledButtonStyle width="100%" height="60px" 
               onClick={(value) => handleDetailsSubmit(values)} >
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

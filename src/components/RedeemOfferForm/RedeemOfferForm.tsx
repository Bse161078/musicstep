import axios from "axios";
import { Form, Formik } from "formik";
import React, { useState } from "react";

import { InputBox, Loading, SelectBox, TrialFormWrapper } from "..";
import { useUserContext } from "../../context/userContext";
import { FilledButtonStyle } from "../../styles/Common.style";
import { RedeemOfferFormStyle } from "./RedeemOfferForm.style";

type TrailSetPasswordProps = {
  setCurrentForm: (data: string) => void;
};

const RedeemOfferForm = (props: TrailSetPasswordProps) => {
  const { setCurrentForm } = props;

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const {
    state: { id },
    dispatch,
  } = useUserContext();

  const handleSetPasswordSubmit = (e: any) => {
    console.log("EVENTS: ", e);
    setLoading(true);

    console.log("id: ", id, `${e.countryCode}${e.phoneNumber}`);

    axios
      .patch(`/users/createPhonenumber/${id}`, {
        phoneNumber: `${e.countryCode}${e.phoneNumber}`,
      })
      .then((response) => {
        setLoading(false);
        console.log(response);
        dispatch({
          type: "SUBMIT_PHONE_NUMBER",
          payload: {
            phoneNumber: `${e.countryCode}${e.phoneNumber}`,
          },
        });
        setCurrentForm("redeem-offer-verify");
      })
      .catch((error) => {
        setErrorMessage(error.message);
        setLoading(false);
        console.log("error", error);
      });
  };
  return (
    <TrialFormWrapper heading="Redeem Your Offer">
      {loading && <Loading />}

      <RedeemOfferFormStyle>
        <h3 className="steps-count">Step 1 of 2</h3>

        <h4 className="verify-yourself">Verify Yourself</h4>
        <h3 className="form-wrapper-heading">
          Please enter your phone number and we'll send you a verification code
          to your account.
        </h3>
        <Formik
          initialValues={{
            countryCode: "",
            phoneNumber: "",
          }}
          onSubmit={handleSetPasswordSubmit}
        >
          {({ values, setFieldValue }) => (
            <Form className="set-password-wrapper">
              <div className="input-wrapper">
                <SelectBox
                  label="Country Code"
                  name="countryCode"
                  options={[{ key: "+92", value: "+92" }]}
                  setFieldValue={setFieldValue}
                />
                <InputBox label="Phone Number" name="phoneNumber" />
                {errorMessage !== "" && (
                  <p className="error-message">{errorMessage}</p>
                )}
              </div>

              <p className="standard-message">
                Standard message and data rates may apply.
              </p>

              <FilledButtonStyle width="100%" height="60px">
                Continue
              </FilledButtonStyle>
            </Form>
          )}
        </Formik>

        <p className="info-details">
          We need to verify using your phone number because we only allow one
          account per person
        </p>

        <p className="info-footer-heading">
          <span>Questions or Need Help?</span>
        </p>
      </RedeemOfferFormStyle>
    </TrialFormWrapper>
  );
};

export default RedeemOfferForm;

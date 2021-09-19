import { Form, Formik } from "formik";
import React from "react";
import { InputBox } from "../../../components";

import { TaxpayerFormStyle } from "./TaxpayerForm.style";

const TaxpayerForm = () => {
  const handleTaxpayerSubmit = () => {};

  return (
    <TaxpayerFormStyle>
      <Formik
        initialValues={{
          name: "",
          federalTaxClassification: "",
          payeeCode: "",
          address: "",
          city: "",
          state: "",
          zipCode: "",
        }}
        onSubmit={handleTaxpayerSubmit}
      >
        {() => (
          <Form className="taxpayer-form-wrapper">
            <InputBox width="600px" label="Name" name="name" />
            <InputBox
              width="600px"
              label="Federal Tax Classification"
              name="federalTaxClassification"
            />
            <InputBox
              width="600px"
              label="Exempt Payee Code (If Any)"
              name="payeeCode"
            />
            <span className="description-code">
              See description of each code here.
            </span>

            <InputBox label="Address" name="address" />
            <div className="inputs-wrapper">
              <InputBox width="700px" label="City" name="city" />
              <InputBox label="State" name="state" />
              <InputBox label="Zip Code" name="zipCode" />
            </div>
          </Form>
        )}
      </Formik>
    </TaxpayerFormStyle>
  );
};

export default TaxpayerForm;

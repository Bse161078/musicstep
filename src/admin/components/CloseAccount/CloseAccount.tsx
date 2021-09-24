import { Form, Formik } from "formik";
import React from "react";
import { DashboardHeader, RadioButton } from "..";
import { InputBox } from "../../../components";

import { CloseAccountStyle } from "./CloseAccount.style";

const CloseAccount = () => {
  return (
    <CloseAccountStyle>
      <DashboardHeader
        heading="Close Account"
        description="Thank you for using MusicPass Events. If there is anything we can do to keep you with us, please Let Us Know."
      />

      <Formik initialValues={{ explaination: "" }} onSubmit={() => {}}>
        {() => (
          <Form className="close-account-form">
            <RadioButton />
            <InputBox name="explaination" />
          </Form>
        )}
      </Formik>
    </CloseAccountStyle>
  );
};

export default CloseAccount;

import React from "react";
import { InputBox, SelectBox } from "../../../../components";
import { Field, Form, Formik } from "formik";
import { ModalWrapper } from "../ModalWrapper";
import { AddRoleStyle } from "./AddRole.style";
const AddRole = () => {
  const handleSubmit = () => {};
  return (
    <ModalWrapper
      heading="Add Role"
      rightButtonTitle="Add"
      leftButtonTitle="Cancel"
    >
      <Formik
        initialValues={{
          Role: "",
        }}
        onSubmit={handleSubmit}
      >
        <AddRoleStyle>
          <Form className="form-wrapper">
            <InputBox name="Role" label="Title" placeholder="Manager" />
          </Form>
        </AddRoleStyle>
      </Formik>
    </ModalWrapper>
  );
};
export default AddRole;

import React from "react";
import { InputBox, SelectBox } from "../../../../components";
import { Field, Form, Formik } from "formik";
import { ModalWrapper } from "../ModalWrapper";
import { EditRoleStyle } from "./EditRole.style";
const AddRole = () => {
  const handleSubmit = () => {};
  return (
    <ModalWrapper
      heading="Edit Role"
      rightButtonTitle="Edit"
      leftButtonTitle="Cancel"
    >
      <Formik
        initialValues={{
            EditRole: "",
        }}
        onSubmit={handleSubmit}
      >
        <EditRoleStyle>
          <Form className="form-wrapper">
            <InputBox name="EditRole" label="Title" placeholder="Manager" />
          </Form>
        </EditRoleStyle>
      </Formik>
    </ModalWrapper>
  );
};
export default AddRole;

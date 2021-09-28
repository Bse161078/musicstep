import React from "react";
import { InputBox } from "../../../../components";
import { Form, Formik } from "formik";
import { ModalWrapper } from "../ModalWrapper";
import { AddRoleStyle } from "./AddRole.style";
type AddRoleModalProps = {
  isModalVisible?: boolean;
  setIsModalVisible?: any;
}; 
const AddRoleModal = (props:AddRoleModalProps) => {
  const { isModalVisible, setIsModalVisible } = props;
  const handleSubmit = () => {};
  return (
    <ModalWrapper
      heading="Add Role"
      rightButtonTitle="Add"
      leftButtonTitle="Cancel"
      isModalVisible={isModalVisible}
      setIsModalVisible={setIsModalVisible}
    >
      <Formik
        initialValues={{
          AddRole: "",
        }}
        onSubmit={handleSubmit}
      >
        <AddRoleStyle>
          <Form className="form-wrapper">
            <InputBox name="AddRole" label="Title" placeholder="Manager" />
          </Form>
        </AddRoleStyle>
      </Formik>
    </ModalWrapper>
  );
};
export default AddRoleModal;

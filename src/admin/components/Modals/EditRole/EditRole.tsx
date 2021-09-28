import React from "react";
import { InputBox } from "../../../../components";
import { Form, Formik } from "formik";
import { ModalWrapper } from "../ModalWrapper";
import { EditRoleStyle } from "./EditRole.style";
type EditRoleModalProps = {
  isModalVisible?: boolean;
  setIsModalVisible?: any;
};
const EditRole = (props: EditRoleModalProps) => {
  const { isModalVisible, setIsModalVisible } = props;
  const handleSubmit = () => {};
  return (
    <ModalWrapper
      heading="Edit Role"
      rightButtonTitle="Edit"
      leftButtonTitle="Cancel"
      isModalVisible={isModalVisible}
      setIsModalVisible={setIsModalVisible}
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
export default EditRole;

import { InputBox, SelectBox } from "../../../../components";
import { Field, Form, Formik } from "formik";
import { ModalWrapper } from "../ModalWrapper";
import { InviteModalStyle } from "../InviteModal/InviteModal.style";
import { roleItems } from "../../../../mockData/roleItems";
import React,{useEffect} from 'react'
type EditUserModalProps = {
  showEditUserModal?: boolean;
  handleSubmit?: any;

};
const EditUserModal = (props: EditUserModalProps) => {
  const { showEditUserModal, handleSubmit } = props;
  const handleSubmitModal = () => {
    handleSubmit()
    };
  // useEffect(()=>{
  //   setShowEditUserModal(false)
  // })
  console.log("naeemsahab",props)
  return (
    <>
      <ModalWrapper
        heading="Edit Users"
        rightButtonTitle="Update"
        leftButtonTitle="Cancel"
        isModalVisible={showEditUserModal}
        setIsModalVisible={handleSubmitModal}
      >
        <Formik
          initialValues={{
            email: "",
            userRole: "",
            eventaccess: "",
          }}
          onSubmit={handleSubmit}
        >
          <InviteModalStyle>
            <Form className="form-wrapper">
              <div>
                <InputBox
                  label="Email Address"
                  placeholder="example@gmail.com"
                  name="email"
                />
              </div>
              <div>
                <SelectBox
                  width="fill"
                  label="User Role"
                  name="userRole"
                  options={[
                    ...roleItems.map((item) => {
                      return { key: item.name, value: item.name };
                    }),
                  ]}
                />
              </div>
              <div style={{ display: "flex" }}>
                <Field type="checkbox" name="eventaccess" />
                <label>Limit Event Access</label>
              </div>
            </Form>
          </InviteModalStyle>
        </Formik>
      </ModalWrapper>
    </>
  );
};

export default EditUserModal;

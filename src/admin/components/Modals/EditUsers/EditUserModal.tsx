import { InputBox, SelectBox } from "../../../../components";
import { Field, Form, Formik } from "formik";
import { ModalWrapper } from "../ModalWrapper";
import { InviteModalStyle } from "../InviteModal/InviteModal.style";
import { roleItems } from "../../../../mockData/roleItems";


const EditUserModal = () => {
  const handleSubmit = () => {};
  return (
    <>
      <ModalWrapper
        heading="Edit Users"
        rightButtonTitle="Update"
        leftButtonTitle="Cancel"
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
                <SelectBox label="User Role" name="userRole" as="select">
                  {roleItems.map((item, index) => {
                    <option>{item.name}</option>;
                  })}
                </SelectBox>
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

import React, {useState} from "react";
import {InputBox} from "../../../../components";
import {Form, Formik} from "formik";
import {ModalWrapper} from "../ModalWrapper";
import {EditRoleStyle} from "./EditRole.style";

type EditRoleModalProps = {
    isModalVisible?: boolean;
    setIsModalVisible?: any;
    handleOkClick?: any
};
const EditRole = (props: EditRoleModalProps) => {
    const {isModalVisible, setIsModalVisible,handleOkClick} = props;
    const [search,setSearch]=useState("");

    const onEditRole = (e: any) => {
        //addNewRole(e);
        handleOkClick(search)
    };

    const handleSubmit = () => {
    };
    return (
        <ModalWrapper
            heading="Edit Role"
            rightButtonTitle="Edit"
            leftButtonTitle="Cancel"
            isModalVisible={isModalVisible}
            setIsModalVisible={setIsModalVisible}
            handleOkClick={onEditRole}
        >
            <Formik
                initialValues={{
                    EditRole: "",
                }}
                onSubmit={handleSubmit}
            >
                <EditRoleStyle>
                    <Form className="form-wrapper">
                        <InputBox name="EditRole" label="Title" placeholder="Manager" setSearch={setSearch}/>
                    </Form>
                </EditRoleStyle>
            </Formik>
        </ModalWrapper>
    );
};
export default EditRole;

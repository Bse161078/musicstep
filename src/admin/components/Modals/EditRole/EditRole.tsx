import React, {useState} from "react";
import {InputBox} from "../../../../components";
import {Form, Formik} from "formik";
import {ModalWrapper} from "../ModalWrapper";
import {EditRoleStyle} from "./EditRole.style";

type EditRoleModalProps = {
    isModalVisible?: boolean;
    setIsModalVisible?: any;
    handleOkClick?: any;
    role?:any
};
const EditRole = (props: EditRoleModalProps) => {
    const {isModalVisible, setIsModalVisible,handleOkClick,role} = props;
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
                        <InputBox name="EditRole" placeholder={role.name} label="Title" setSearch={setSearch}/>
                    </Form>
                </EditRoleStyle>
            </Formik>
        </ModalWrapper>
    );
};
export default EditRole;

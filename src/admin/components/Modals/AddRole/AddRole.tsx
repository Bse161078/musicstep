import React, {useState} from "react";
import {InputBox} from "../../../../components";
import {Form, Formik} from "formik";
import {ModalWrapper} from "../ModalWrapper";
import {AddRoleStyle} from "./AddRole.style";
import {FilledButtonStyle} from "../../../../styles/Common.style";

type AddRoleModalProps = {
    isModalVisible?: boolean;
    setIsModalVisible?: any;
    addNewRole?: any;

};
const AddRoleModal = (props: AddRoleModalProps) => {
    const {isModalVisible, setIsModalVisible, addNewRole} = props;
    const [search,setSearch]=useState("");


    const handleOkClick = (e: any) => {
        //addNewRole(e);
        addNewRole(search)
    };


    return (
        <ModalWrapper
            heading="Add Role"
            rightButtonTitle="Add"
            leftButtonTitle="Cancel"
            isModalVisible={isModalVisible}
            setIsModalVisible={setIsModalVisible}
            handleOkClick={handleOkClick}
        >
            <Formik
                initialValues={{
                    AddRole: "",
                }}
                onSubmit={(e)=>{}}
            >
                {() => (
                    <Form className="form-wrapper">
                        <AddRoleStyle>
                            <InputBox name="AddRole" label="Title" placeholder="Manager" setSearch={setSearch}/>
                        </AddRoleStyle>
                    </Form>
                )}
            </Formik>
        </ModalWrapper>
    );
};
export default AddRoleModal;

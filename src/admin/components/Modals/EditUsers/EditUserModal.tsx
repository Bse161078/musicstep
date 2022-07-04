import {InputBox, SelectBox} from "../../../../components";
import {Field, Form, Formik} from "formik";
import {ModalWrapper} from "../ModalWrapper";
import {InviteModalStyle} from "../InviteModal/InviteModal.style";
import {roleItems} from "../../../../mockData/roleItems";
import React, {useEffect, useState} from 'react'

type EditUserModalProps = {
    showEditUserModal?: boolean;
    handleSubmit?: any;
    roles?: any
    updateTeam?:any

};
const EditUserModal = (props: EditUserModalProps) => {
    const {showEditUserModal, handleSubmit, roles,updateTeam} = props;

    const [role,setRole]=useState("");
    const [email,setEmail]=useState("");

    const handleSubmitModal = () => {
        handleSubmit()
    };
    // useEffect(()=>{
    //   setShowEditUserModal(false)
    // })

    const filteredRoles = roles ? roles : []


    return (
        <>
            <ModalWrapper
                heading="Edit Users"
                rightButtonTitle="Update"
                leftButtonTitle="Cancel"
                isModalVisible={showEditUserModal}
                setIsModalVisible={handleSubmitModal}
                handleOkClick={()=>{
                    handleSubmit(role,email);
                }}
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
                                    setSearch={(value:any)=>{
                                        setEmail(value);
                                    }}
                                />
                            </div>
                            <div>
                                <SelectBox
                                    width="fill"
                                    label="User Role"
                                    name="userRole"
                                    options={[
                                        ...filteredRoles.map((item: any) => {
                                            return {key: item.name, value: item.name};
                                        }),
                                    ]}
                                    values={[
                                        ...filteredRoles.map((item: any) => {
                                            return item.name;
                                        }),
                                    ]}
                                    handleSelectBoxChange={(value) => setRole(value)}
                                />
                            </div>
                            <div style={{display: "flex"}}>
                                <Field type="checkbox" name="eventaccess"/>
                                <label>Limit Event Access</label>
                            </div>
                        </Form>
                    </InviteModalStyle>
                </Formik>
            </ModalWrapper>
        </>
    )
        ;
};

export default EditUserModal;

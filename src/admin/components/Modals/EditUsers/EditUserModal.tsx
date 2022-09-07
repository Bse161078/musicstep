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
    team?:any
    setShowEditUserModal?:any
};
const EditUserModal = (props: EditUserModalProps) => {
    const {showEditUserModal, handleSubmit, roles,updateTeam,team,setShowEditUserModal} = props;

    const [role,setRole]=useState(team.to);
    const [email,setEmail]=useState("");

    const handleSubmitModal = () => {
        //handleSubmit()
        setShowEditUserModal(false)
    };
    // useEffect(()=>{
    //   setShowEditUserModal(false)
    // })

    const filteredRoles = roles ? roles : []


    console.log(filteredRoles,team)
    return (
        <>
            <ModalWrapper
                heading="Edit Users"
                rightButtonTitle="Update"
                leftButtonTitle="Cancel"
                isModalVisible={showEditUserModal}
                setIsModalVisible={handleSubmitModal}
                handleOkClick={()=>{
                    console.log(role || team.role,email || team.email)
                    handleSubmit(role || team.role,email || team.email);
                }}
            >
                <Formik
                    initialValues={{
                        email: "",
                        userRole: "",
                        eventaccess: "",
                    }}
                    onSubmit={handleSubmitModal}
                >
                    <InviteModalStyle>
                        <Form className="form-wrapper">
                            <div>
                                <InputBox
                                    label="Email Address"
                                    placeholder={team.email}
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
                                    defaultValue={team.role}
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

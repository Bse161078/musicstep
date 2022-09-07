import {InputBox, MessageModal, SelectBox} from "../../../../components";
import {Field, Form, Formik} from "formik";
import {ModalWrapper} from "../ModalWrapper";
import {InviteModalStyle} from "./InviteModal.style";

import {roleItems} from "../../../../mockData/roleItems";
import axios from "axios";
import {useLoginContext} from "../../../../context/authenticationContext";
import React, {useEffect, useState} from "react";
import Loading from "../../../../components/Loading/Loading";


type InviteModalProps = {
    isModalVisible?: boolean;
    setIsModalVisible?: any;
    roles?:any;
    addNewTeam?:any
};
const InviteModal = (props: InviteModalProps) => {
    const {isModalVisible, setIsModalVisible,roles,addNewTeam} = props;
    const {state} = useLoginContext();
    const [successModel, setsuccessModel] = useState(false);
    const [message, setMessage] = useState("");
    const [messageHeading, setMessageHeading] = useState("");
    const [email,setEmail]=useState("");
    const [error,setError]=useState("");
    const [isLoading,setLoading] = useState(false)
    const [role,setRole]=useState("");



    useEffect(()=>{
       setEmail("");
       setRole("");
    },[isModalVisible])

    const sendInviteMail = () => {
        setLoading(true);
        const res = axios
            .post(
                "/v1/users/sendInvitationEmail",
                {
                    to: email,
                    musicPasslink: "",
                    partnerName:(state.data).organizationName
                },
                {
                    headers: {Authorization: `Bearer ${state.authToken}`},
                }
            )
            .then((response) => {
                setsuccessModel(true);
                setMessageHeading("Success");
                setMessage("Invitation Email send Successfully");
                setLoading(false);
            })
            .catch((error) => {
                setsuccessModel(true);
                setMessageHeading("Success");
                setMessage("Invitation Email send Successfully");
                setLoading(false);
            });
    };

    const handleSubmit = () => {
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            setError('Invalid email address');

        }else{
            sendInviteMail();
            setIsModalVisible(false);

        }
    };


    console.log("state  = ",state);
    const filteredRoles=roles?roles:[]
    return (
        <>
            {isLoading&&<Loading/>}
            <ModalWrapper
                heading="Invite Users"
                rightButtonTitle="Invite"
                leftButtonTitle="Cancel"
                isModalVisible={isModalVisible}
                setIsModalVisible={()=>{

                }}
                handleOkClick={()=>{
                    handleSubmit();
                }}
                handleCancelClick={()=>{
                    setIsModalVisible(false);
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
                                    value={email}
                                    name="email"
                                    error={error}
                                    setSearch={(value:any)=>{
                                        setEmail(value);
                                    }}
                                />
                            </div>
                            <div>
                                <SelectBox
                                    label="User Role"
                                    name="userRole"
                                    options={[
                                        ...filteredRoles.map((item:any) => {
                                            return {key: item.name, value: item.name};
                                        }),
                                    ]}
                                    values={[
                                        ...filteredRoles.map((item:any) => {
                                            return item.name;
                                        }),
                                    ]}
                                    handleSelectBoxChange={(value)=>setRole(value)}
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
            <MessageModal
                handleOkClick={() => {
                    setsuccessModel(false);
                    addNewTeam(role,email)
                }}
                isModalVisible={successModel}
                setIsModalVisible={setsuccessModel}
                message={message}
                heading={messageHeading}
            />
        </>
    );
};

export default InviteModal;

import React, {useState} from "react";
import {ChangePasswordPromptStyle} from "./ChangePasswordPrompt.style";
import {ModalWrapper} from "../ModalWrapper";
import {MessageModal} from "../../../../components";
import axios from "axios";

type ChangePasswordPromptProps = {
    isModalVisible?: boolean;
    setIsModalVisible?: any;
    data?: any
};

const ChangePasswordPrompt = (props: ChangePasswordPromptProps) => {
    const {isModalVisible, setIsModalVisible} = props;
    const [isMessageModalVisible, setMessageModalVisible] = useState({message: "", show: false,heading:""})
    const handleOkClick = () => {
        setIsModalVisible(false)
        changePassword(props.data);
    }


    const changePassword = async (data: any) => {
        try {
            const response = await axios.put(`/v1/partners/update/password`, data, {
                headers: {Authorization: `Bearer ${localStorage.getItem("authToken")}`},
            });

            setMessageModalVisible({
                heading:"Success",
                message: "Your password has been reset successfully. You can now login with your new password.",
                show: true
            })
        } catch (e: any) {
            setMessageModalVisible({
                heading:"Error",
                message: e.response.data.message,
                show: true
            })
        }
    }

    const handleMessageModal=()=>{
        setMessageModalVisible({message:"",show:false,heading:""});
    }

    return (
        <>
            <ModalWrapper
                heading="Change Password?"
                isModalVisible={isModalVisible}
                setIsModalVisible={setIsModalVisible}
                leftButtonTitle="Cancel"
                rightButtonTitle="Change Password"
                handleOkClick={handleOkClick}>
                <ChangePasswordPromptStyle>
                    <img src="/images/changepasswordpromt.svg" alt="change passowrd"/>
                    <p>Are you sure you want to change your password?</p>
                </ChangePasswordPromptStyle>
            </ModalWrapper>
            {

                isMessageModalVisible.show &&
                <MessageModal
                    message={isMessageModalVisible.message}
                    heading={isMessageModalVisible.heading}
                    isModalVisible={isMessageModalVisible.show} setIsModalVisible={handleMessageModal}/>
            }

        </>
    );
};

export default ChangePasswordPrompt;

import {Form, Formik} from "formik";
import React, {useState} from "react";
import {DashboardHeader} from "..";
import {InputBox} from "../../../components";
import {FilledButtonStyle, OutlineButtonStyle} from "../../../styles/Common.style";
import {ChangePasswordPrompt} from "..";
import {ChangePasswordStyle} from "./ChangePassword.style";
import * as yup from "yup";
import {ResetPasswordFormValidationSchema} from "../../../components/ResetPasswordForm/validation";

const ChangePassword = (props: any) => {
    const [data,setData]=useState<any>(null);

    const handleSubmit = (e: any) => {
        console.log("change password", e)
        setData({password:e.currentPassword,newPassword:e.newPassword});
        setIsModalVisible(true)
    };
    const [isModalVisible, setIsModalVisible] = useState(false);
    const handleBackClick = () => {
        props.setCurrentPage("account-settings")
    }

    const ResetPasswordFormValidationSchema = yup.object().shape({
        newPassword: yup.string().required('New Password is required'),
        currentPassword: yup.string().required('Password is required'),
        confirmPassword: yup.string()
            .test('passwords-match', 'Passwords must match', function (value) {
                return this.parent.newPassword === value
            })
    });

    return (
        <ChangePasswordStyle>
            <DashboardHeader heading="Change Password" handleBackClick={handleBackClick}/>
            <div style={{padding: 5}}>

            </div>
            <Formik
                initialValues={{
                    currentPassword: "",
                    newPassword: "",
                    confirmPassword: "",
                }}
                onSubmit={handleSubmit}
                validationSchema={ResetPasswordFormValidationSchema}
            >
                {() => (
                    <Form className="change-password-form">
                        <InputBox label="Current Password" name="currentPassword"/>
                        <InputBox label="New Password" type="password" name="newPassword"/>
                        <InputBox
                            label="Confirm New Password"
                            type="password"
                            name="confirmPassword"
                        />

                        <FilledButtonStyle buttonType="dark" type="submit">Change Password</FilledButtonStyle>
                    </Form>
                )}
            </Formik>
            <ChangePasswordPrompt
                isModalVisible={isModalVisible}
                setIsModalVisible={setIsModalVisible}
                data={data}
            />
        </ChangePasswordStyle>
    );
};

export default ChangePassword;

import {Form, Formik} from "formik";
import React, {useState, useEffect} from "react";
import {ContentHeader, DashboardHeader} from "..";
import {InputBox} from "../../../components";
import axios from "axios";
import {ContactInfoFormStyle} from "./ContactInfoForm.style";
import {useLoginContext} from "../../../context/authenticationContext";
import {Loading} from "../../../components";
import {
    FilledButtonStyle,
    OutlineButtonStyle,
} from "../../../styles/Common.style";
import {MessageModal} from "../../../components";

const ContactInfoForm = (props: any) => {
    const [contactInfo, setContactInfo] = useState({
        firstName: "",
        lastName: '',
        email: '',
        phoneNumber: '',
        organizationName: '',
        organizationURL: '',
        prefix: '',
        suffix: '',
        jobTitle: '',
        blog: ''
    })
    const [isLoading, setLoading] = useState(false)
    const [messageModalVisible, setMessageModalVissible] = useState(false)
    const {
        dispatch,
        state: {data},
    } = useLoginContext();
    const {state} = useLoginContext();
    const handleBackClick = () => {
        props.setCurrentPage("account-settings")
    }
    useEffect(() => {
        setContactInfo(JSON.parse(JSON.stringify(data)))
    }, [])
    const editProfile = () => {
        setLoading(true)
        const user: any = JSON.parse(localStorage.getItem("data") || "{}");
        axios
            .patch(`/v1/partners/${user.id}`,
                contactInfo,
                {
                    headers: {Authorization: `Bearer ${state.authToken}`},
                })
            .then((res) => {
                setLoading(false)
                setMessageModalVissible(true)
                dispatch({
                    type: "UPDATE_USER",
                    payload: {
                        data: contactInfo
                    },
                });
            })
            .catch((error) => {
                setLoading(false)
            });
    }


    return (
        <ContactInfoFormStyle>
            <MessageModal
                isModalVisible={messageModalVisible}
                setIsModalVisible={setMessageModalVissible}
                heading="Success"
                message={"Your profile is updated"}

            />
            <DashboardHeader heading="Contact Info"
                             handleSaveClick={() => {
                                 editProfile()
                             }}
                             isLoading={isLoading}
                             saveButtonText="Save"
                             handleBackClick={handleBackClick}/>

            <Formik
                initialValues={{
                    prefix: "",
                    firstName: "",
                    lastName: "",
                    suffix: "",
                    email: "",
                    phone: "",
                    jobTitle: "",
                    company: "",
                    website: "",
                    blog: "",
                }}
                onSubmit={() => {
                }}
            >

`
                {() => (
                    <Form>
                        <div className="headings-with-inputs">
                            <div className="inputs-wrapper-header">
                                <ContentHeader heading="Full Name"/>
                            </div>
                            <div className="inputs-wrapper-4">
                                <InputBox label="Prefix" name="prefix"
                                          value={contactInfo.prefix}
                                          onChange={(e: any) => {
                                              setContactInfo({...contactInfo, prefix: e.target.value})
                                          }}/>
                                <InputBox
                                    label="First Name"
                                    name="firstName"
                                    value={contactInfo.firstName}
                                    onChange={(e: any) => {
                                        setContactInfo({...contactInfo, firstName: e.target.value})
                                    }}
                                />
                                <InputBox
                                    label="Last Name"
                                    value={contactInfo.lastName}
                                    name="lastName"
                                    onChange={(e: any) => {
                                        setContactInfo({...contactInfo, lastName: e.target.value})
                                    }}
                                />
                                <InputBox label="Suffix" name="suffix"
                                          value={contactInfo.suffix}
                                          onChange={(e: any) => {
                                              setContactInfo({...contactInfo, suffix: e.target.value})
                                          }}/>
                            </div>
                        </div>

                        <div className="headings-with-inputs">
                            <ContentHeader heading="Email & Phone"/>
                            <div className="inputs-wrapper-2">
                                <InputBox
                                    label="Email Address"
                                    value={contactInfo.email}
                                    name="email"
                                    width="450px"
                                    onChange={(e: any) => {
                                        setContactInfo({...contactInfo, email: e.target.value})
                                    }}
                                />
                                <InputBox
                                    label="Cell Phone Number"
                                    value={"+" + contactInfo.phoneNumber}
                                    name="phone"
                                    width="450px"
                                    onChange={(e: any) => {
                                        setContactInfo({...contactInfo, phoneNumber: e.target.value})
                                    }}
                                />
                                <div style={{display:'none'}}/>
                                <div style={{display:'none'}}/>
                            </div>
                        </div>

                        <div className="headings-with-inputs">
                            <ContentHeader heading="Designation"/>
                            <div className="inputs-wrapper-2">
                                <InputBox label="Job Title" name="jobTitle" width="400px"
                                          value={contactInfo.jobTitle}
                                          onChange={(e: any) => {
                                              setContactInfo({...contactInfo, jobTitle: e.target.value})
                                          }}/>
                                <InputBox
                                    label="Company / Organization"
                                    value={contactInfo.organizationName}
                                    name="company"
                                    width="400px"
                                    onChange={(e: any) => {
                                        setContactInfo({...contactInfo, organizationName: e.target.value})
                                    }}
                                />
                                <div style={{display:'none'}}/>
                                <div style={{display:'none'}}/>

                            </div>
                        </div>

                        <div className="headings-with-inputs">
                            <ContentHeader heading="Internet"/>
                            <div className="inputs-wrapper-2">
                                <InputBox
                                    label="Website"
                                    value={contactInfo.organizationURL}
                                    name="website"
                                    width="400px"
                                    onChange={(e: any) => {
                                        setContactInfo({...contactInfo, organizationURL: e.target.value})
                                    }}
                                />
                                <InputBox label="Blog" name="blog" width="400px"
                                          value={contactInfo.blog}
                                          onChange={(e: any) => {
                                              setContactInfo({...contactInfo, blog: e.target.value})
                                          }}/>
                                <div style={{display:'none'}}/>
                                <div style={{display:'none'}}/>

                            </div>
                        </div>
                    </Form>
                )}

            </Formik>
        </ContactInfoFormStyle>
    );
};

export default ContactInfoForm;

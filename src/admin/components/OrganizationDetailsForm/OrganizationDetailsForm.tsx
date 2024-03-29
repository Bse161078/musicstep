import React, {useState} from "react";
import {Form, Formik} from "formik";
import axios from "axios";

import {UploadFile} from "..";
import {InputBox, SelectBox, MessageModal} from "../../../components";
import {OrganizationDetailsFormStyle} from "./OrganizationDetailsForm.style";
import {useLoginContext} from "../../../context/authenticationContext";
import {OrganizationDetailFormValidationSchema} from "./validation";

const OrganizationDetailsForm = React.forwardRef((props: any, ref: any) => {
    const {state, dispatch} = useLoginContext();
    const [isSuccessModalVisible, setSuccessModalVisible] = useState(false);
    const [previewProfileImage, setPreviewProfileImage] = useState<string>(
        process.env.REACT_APP_BASE_URL + "/images/" + state.data.imageUrl
    );

    //Handle file upload
    let fileUpload: any = React.createRef();
    const handleClick = (e: any) => {
        fileUpload.current.click();
    };

    //handle file
    const handleFileUpload = (event: any, form: any) => {
        const imageType = event.target.files[0].type;
        if (
            imageType === "image/jpeg" ||
            imageType === "image/png" ||
            imageType === "image/jpg" ||
            imageType === "image/svg"
        ) {
            form.setFieldValue("photo", event.target.files[0]);
            let reader = new FileReader();
            let file = event.target.files[0];
            reader.onloadend = () => {
                const imagePreview: any = reader.result;
                setPreviewProfileImage(imagePreview);
            };
            reader.readAsDataURL(file);
        }
    };

    //Handle Submit from
    const handleOrganizationDetailsSubmit = async (e: any) => {
        const bodyData = new FormData();
        if (e.photo) bodyData.append("profileImage", e.photo);
        bodyData.append("organizationName", e.organizationName);
        bodyData.append("preferredCountery", e.preferredCountry);

        const res = await axios
            .patch("/v1/partners/basicInfo/organization", bodyData, {
                headers: {Authorization: `Bearer ${state.authToken}`},
            })
            .catch((error) => {
            });
        if (res) {
            setSuccessModalVisible(true);
            dispatch({
                type: "UPDATE_USER",
                payload: {
                    data: res.data.response,
                },
            });
        }
    };


    return (
        <OrganizationDetailsFormStyle>
            <UploadFile
                handleClick={handleClick}
                previewProfileImage={previewProfileImage}
            />

            <div>
                <Formik
                    initialValues={{
                        organizationName: state.data.organizationName,
                        preferredCountry: state.data && state.data.preferredCountery && state.data.preferredCountery!="undefined" ?state.data.preferredCountery:"",
                        photo: "",
                    }}
                    onSubmit={handleOrganizationDetailsSubmit}
                    validationSchema={OrganizationDetailFormValidationSchema}
                >
                    {(form: any) => (
                        <Form className="organization-details-form">
                            <InputBox label="Organization Name" name="organizationName"/>

                            <InputBox label="Preferred Country" name="preferredCountry"/>

                            {/* {console.log(form)} */}
                            {/* <SelectBox
                width="fill"
                options={[
                  { key: "Pakisitan", value: "Pakistan" },
                  { key: "USA", value: "USA" },
                  { key: "UK", value: "UK" },
                ]}
                label="Prefered Country"
                name="perefferedCountry2"
                placeholder="Prefered Country"
                setFieldValue={form.setFieldValue}
                // value={{ key: "Pakisitan", value: "Pakistan" }}
              /> */}
                            <input
                                ref={fileUpload}
                                type={"file"}
                                accept=".png, .jpg, .jpeg"
                                style={{display: "none"}}
                                onChange={(e) => handleFileUpload(e, form)}
                            />
                            <input
                                type="submit"
                                value="Submit"
                                ref={ref}
                                style={{display: "none"}}
                            />
                        </Form>
                    )}
                </Formik>
            </div>
            <MessageModal
                isModalVisible={isSuccessModalVisible}
                setIsModalVisible={setSuccessModalVisible}
                heading="Success"
                message="Basic information updated"
            />
        </OrganizationDetailsFormStyle>
    );
});

export default OrganizationDetailsForm;

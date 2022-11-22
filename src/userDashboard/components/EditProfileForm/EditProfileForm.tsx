import axios from "axios";
import {Form, Formik} from "formik";
import React, {useEffect, useRef, useState} from "react";
import {InputBox, InputCheckbox, MessageModal} from "../../../components";
import {useLoginContext} from "../../../context/authenticationContext";
import {OutlineButtonStyle} from "../../../styles/Common.style";
import {Switch} from "antd";
import {EditProfileFormStyle} from "./EditProfileForm.style";
import {PeopleWithMutualFreindsModal} from "../Modals";
import {BasicInfoFormValidationSchema} from "./validation";
import Loading from "../../../components/Loading/Loading";
import {parsePhoneNumber} from "react-phone-number-input";
import LabelWithTag from "../../../admin/components/LabelWithTag/LabelWithTag";
import {TextFieldErrorStyle} from "../../../components/InputBox/InputBox.style";

const EditProfileForm = React.forwardRef((props: any, ref: any) => {
    // const { textInput } = props;
    const {setSaveButtonRef} = props;
    const {state, dispatch} = useLoginContext();
    const [isSuccessModalVisible, setSuccessModalVisible] = useState(false);
    const userData = state.data;
    const [isPublicProfileVisible, setPublicProfileVisible] = useState();
    const profileImageInput: any = useRef();
    const [profileImage, setProfileImage] = useState("");
    const [isLoading, setLoading] = useState(false);
    const [previewProfileImage, setPreviewProfileImage] = useState<string>(
        process.env.REACT_APP_BASE_URL + "/images/" + userData.imageUrl
    );
    const [bio,setBio]=useState<any>({value:"",showError:false,error:"Venue bio is required"});

    useEffect(()=>{
        setBio({value:userData.publicInfo && userData.publicInfo.bio,showError:false,error:"Venue bio is required"})
    },[])


    const uploadProfileImage = async (imagePreview: any) => {
        if (imagePreview) {
            const bodyData = new FormData();
            bodyData.append("profileImage", imagePreview);
            try {
                setLoading(true)
                const res: any = await axios.put("/v1/users/updateProfileImage", bodyData, {
                    headers: {Authorization: `Bearer ${state.authToken}`},
                });
                const updatedProfileImage = res.data.profileImageUrl;
                const localUser: any = JSON.parse(localStorage.getItem("data") || "{}");
                localUser.imageUrl = updatedProfileImage;
                localStorage.setItem("data", JSON.stringify(localUser));
                setPreviewProfileImage(process.env.REACT_APP_BASE_URL + "/images/" + updatedProfileImage)
                setLoading(false);
                dispatch({
                    type: "UPDATE_USER",
                    payload: {
                        data: {...state, imageUrl: updatedProfileImage},
                    },
                });
            } catch (error) {
                setLoading(false);
            }
        }
    }


    const handleBackgroundImageUpload = (event: any, form: any) => {
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

            setProfileImage(event.target.files[0]);

            reader.onloadend = () => {
                const imagePreview: any = reader.result;
                setPreviewProfileImage(imagePreview);
                uploadProfileImage(event.target.files[0])
            };

            reader.readAsDataURL(file);
        }
    };
    const handleEditProfile = async (e: any) => {
        if((bio.value).trim().length<1){
            setBio({showError:true,value:"",error:"Bio is required"});
            return;
        }
        setLoading(true);

        const bodyData: any = {
            firstName: e.firstName,
            lastName: e.lastName,
            dob: e.dateOfBirth,
            email: e.email,
            phoneNumber: `${e.countryCode}${e.phone}`,
            isPhoneNumberPublic: e.isPhoneNumberPublic,
            isPublicInfo: e.isPublicInfo,
            bio: bio.value,
            instagram: e.instagram,
            facebook: e.facebook,
            twitter: e.twitter,
            publicNextReservation: e.publicNextReservation,
        };

        const res = await axios
            .put("/v1/users/updatePersonalInformation", bodyData, {
                headers: {Authorization: `Bearer ${state.authToken}`},
            })
            .catch((error) => {
                setLoading(false);
            });

        if (res) {
            setSuccessModalVisible(true);
            setLoading(false);
            dispatch({
                type: "UPDATE_USER",
                payload: {
                    data: res.data,
                },
            });
        }
    };


    //const country = parsePhoneNumber("+" + userData.phoneNumber)?.country;
    return (
        <>
            <EditProfileFormStyle>
                {isLoading && <Loading/>}
                <Formik
                    initialValues={{
                        firstName: userData.firstName,
                        lastName: userData.lastName,
                        dateOfBirth:
                            userData.dateOfBirth && userData.dateOfBirth.slice(0, 10),
                        email: userData.email,
                        countryCode: parsePhoneNumber("+" + userData.phoneNumber)
                            ?.countryCallingCode,
                        phone: parsePhoneNumber("+" + userData.phoneNumber)?.nationalNumber,
                        photo: "",
                        isPhoneNumberPublic: userData.isPhoneNumberPublic,
                        isPublicInfo: (function () {
                            return userData.publicInfo
                                ? userData.publicInfo.isPublicInfo
                                : false;
                        })(),
                        bio: userData.publicInfo && userData.publicInfo.bio,
                        instagram: userData.publicInfo && userData.publicInfo.instagram,
                        facebook: userData.publicInfo && userData.publicInfo.facebook,
                        twitter: userData.publicInfo && userData.publicInfo.twitter,
                        publicNextReservation: userData.publicNextReservation,
                    }}
                    onSubmit={handleEditProfile}
                    validationSchema={BasicInfoFormValidationSchema}
                    validateOnChange={false}
                    validateOnBlur={false}
                >
                    {(form:any) => {
                        const country = parsePhoneNumber("+" + (form.values.countryCode)+(form.values.phone))?.country;
                        return (
                            <Form className="form-wrapper">
                                <div className="form-left">
                                    <div className="custom-columns-2">
                                        <InputBox label="First Name" name="firstName"/>
                                        <InputBox label="Last Name" name="lastName"/>
                                    </div>
                                    <div className="custom-columns-email">
                                        <InputBox label="Email Address" name="email"/>
                                        <InputBox label="Date Of Birth" name="dateOfBirth"/>
                                    </div>

                                    <div className="custom-columns-new">
                                        <InputBox label="Country Code" name="countryCode" type={"countryCode"}
                                                  country={country?country:"92"}/>
                                        <InputBox label="Phone Number" name="phone"/>
                                    </div>

                                    <div className="public-info">
                                        <label style={{fontSize:"14px",color:"#0c0c0c",fontWeight:"500",marginLeft:"15px",textAlign:"left"}}>
                                            Bio
                                        </label>
                                        <div>
                                            <textarea
                                                style={{width: "100%", marginTop: 10}}
                                                placeholder="Enter venue bio."
                                                className="customTextare"
                                                name="venueBio"
                                                value={bio.value}
                                                onChange={(e) => {
                                                    if((e.target.value).length>0){
                                                        setBio({value:e.target.value,showError:false,error:bio.error});
                                                    }else{
                                                        setBio({value:e.target.value})
                                                    }
                                                }}
                                            ></textarea>
                                            {bio.showError ? (
                                                <TextFieldErrorStyle>{bio.error}</TextFieldErrorStyle>
                                            ) : null}
                                        </div>
                                    </div>

                                    {/*<InputCheckbox*/}
                                        {/*name="isPhoneNumberPublic"*/}
                                        {/*className="dont-show-phone"*/}
                                        {/*onClick={() => {*/}
                                            {/*form.setFieldValue(*/}
                                                {/*"isPhoneNumberPublic",*/}
                                                {/*!form.values.isPhoneNumberPublic*/}
                                            {/*);*/}
                                        {/*}}*/}
                                        {/*label="Don't show my phone number in public profile."*/}
                                        {/*isCorrectOption={form.values.isPhoneNumberPublic}*/}
                                    {/*/>*/}
                                    <div className="public-info">
                                        <div className="d-flex align-items-center">
                                            <h1>
                                                Public Info <span></span>
                                                <Switch
                                                    onChange={() => {
                                                        form.setFieldValue(
                                                            "isPublicInfo",
                                                            !form.values.isPublicInfo
                                                        );
                                                    }}
                                                    checked={form.values.isPublicInfo || false}
                                                />
                                            </h1>
                                            <span className="red-text" style={{paddingLeft: 10}}>
                        (Turning off this will not show your profile publicly in
                        <strong> "People With Mutual Events"</strong>
                      </span>
                    </div>
                    <p>
                      Your name, profile picture & phone number include in your
                      public info as well. Public info will be used for{" "}
                      <strong>"People With Mutual Events"</strong>, where other
                      people will able to see your profile.
                    </p>
                  </div>
                  <div className="public-info column-3">
                    <InputBox
                      label="Instagram"
                      name="instagram"
                      placeholder="@username"
                    />
                    <InputBox
                      label="Facebook"
                      placeholder="@username"
                      name="facebook"
                    />
                    <InputBox
                      label="Twitter"
                      placeholder="@username"
                      name="twitter"
                    />
                  </div>
                  <div className="public-info">
                    <h1>
                      <InputCheckbox
                        name="publicNextReservation"
                        onClick={() => {
                          form.setFieldValue(
                            "publicNextReservation",
                            !form.values.publicNextReservation
                          );
                        }}
                        className=""
                        label="Be included on Guest Lists"
                        isCorrectOption={form.values.publicNextReservation}
                      />
                    </h1>
                    <p>
                        By checking this box, members will be able to see your name and picture displayed in the Guest List of events you make a reservation to.
                    </p>
                  </div>
                </div>

                                <div className="right-side">
                                    <div className="avatar-wrapper">
                                        <img
                                            // src={"/images/sample-image.webp"}
                                            src={
                                                (userData && userData.imageUrl && (userData.imageUrl).trim().length > 0)
                                                    ? previewProfileImage
                                                    : "/images/person.svg"
                                            }
                                            alt="avatar"
                                            className="avatar"
                                        />
                                        <OutlineButtonStyle
                                            type="button"
                                            width="250px"
                                            height="60px"
                                            onClick={() => {
                                                profileImageInput.current.click();
                                            }}
                                        >
                                            Change Photo
                                        </OutlineButtonStyle>
                                    </div>
                                    <input
                                        style={{display: "none"}}
                                        type="file"
                                        accept=".png, .jpg, .jpeg"
                                        ref={profileImageInput}
                                        onChange={(e) => {
                                            handleBackgroundImageUpload(e, form);
                                        }}
                                    />
                                </div>
                                {/* <input
                type="submit"
                ref={ref}
                style={{ display: "none" }}
              /> */}
                                <input
                                    type="submit"
                                    ref={ref}
                                    value="Submit"
                                    style={{display: "none"}}
                                ></input>
                            </Form>
                        );
                    }}
                </Formik>

                <MessageModal
                    isModalVisible={isSuccessModalVisible}
                    setIsModalVisible={setSuccessModalVisible}
                    heading="Success"
                    message="Basic information updated"
                />
            </EditProfileFormStyle>
            <PeopleWithMutualFreindsModal
                isPublicProfileVisible={isPublicProfileVisible}
            />
        </>
    );
});
export default EditProfileForm;

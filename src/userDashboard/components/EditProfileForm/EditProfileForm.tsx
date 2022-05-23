import axios from "axios";
import { Form, Formik } from "formik";
import React, { useRef, useState } from "react";
import { InputBox, InputCheckbox, MessageModal } from "../../../components";
import { useLoginContext } from "../../../context/authenticationContext";
import { OutlineButtonStyle } from "../../../styles/Common.style";
import { Switch } from "antd";
import { EditProfileFormStyle } from "./EditProfileForm.style";
import { PeopleWithMutualFreindsModal } from "../Modals";
import { BasicInfoFormValidationSchema } from "./validation";
import Loading from '../../../components/Loading/Loading'
const EditProfileForm = React.forwardRef((props: any, ref: any) => {
  // const { textInput } = props;
  const { setSaveButtonRef } = props;
  const { state, dispatch } = useLoginContext();
  const [isSuccessModalVisible, setSuccessModalVisible] = useState(false);
  const userData = state.data;
  const [isPublicProfileVisible, setPublicProfileVisible] = useState();
  const profileImageInput: any = useRef();
  const [profileImage, setProfileImage] = useState("");
  const [isLoading,setLoading] = useState(false)
  const [previewProfileImage, setPreviewProfileImage] = useState<string>(
    process.env.REACT_APP_BASE_URL + "/" + userData.imageUrl
  );

  const handleBackgroundImageUpload = (event: any, form: any) => {
    form.setFieldValue("photo", event.target.files[0]);
    let reader = new FileReader();
    let file = event.target.files[0];

    setProfileImage(event.target.files[0]);

    reader.onloadend = () => {
      const imagePreview: any = reader.result;
      setPreviewProfileImage(imagePreview);
    };

    reader.readAsDataURL(file);
  };

  const handleEditProfile = async (e: any) => {
    setLoading(true)
    if (e.photo) {
      const bodyData = new FormData();
      bodyData.append("profileImage", e.photo);
      try{
      const res = await axios
        .put("/v1/users/updateProfileImage", bodyData, {
          headers: { Authorization: `Bearer ${state.authToken}` },
        })
        setLoading(false)
      }catch(error) {
          console.log(error);
          setLoading(false)
        };
    }

    const bodyData: any = {
      firstName: e.firstName,
      lastName: e.lastName,
      dob: e.dateOfBirth,
      email: e.email,
      phoneNumber: e.phone,
      isPhoneNumberPublic: e.isPhoneNumberPublic,
      isPublicInfo: e.isPublicInfo,
      bio: e.bio,
      instagram: e.instagram,
      facebook: e.facebook,
      twitter: e.twitter,
      publicNextReservation: e.publicNextReservation,
    };

    const res = await axios
      .put("/v1/users/updatePersonalInformation", bodyData, {
        headers: { Authorization: `Bearer ${state.authToken}` },
      })
      .catch((error) => {
        console.log(error);
        setLoading(false)
      });

    if (res) {
      console.log(res.data);
      setSuccessModalVisible(true);
      setLoading(false)
      dispatch({
        type: "UPDATE_USER",
        payload: {
          data: res.data,
        },
      });
    }
  };

  return (
    <>
      <EditProfileFormStyle>
        {isLoading&&<Loading/>}
        <Formik
          initialValues={{
            firstName: userData.firstName,
            lastName: userData.lastName,
            dateOfBirth:
              userData.dateOfBirth && userData.dateOfBirth.slice(0, 10),
            email: userData.email,
            countryCode: "+92",
            phone: userData.phoneNumber,
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
          {(form) => {
            return (
              <Form className="form-wrapper">
                <div className="form-left">
                  <div className="multi-column">
                    <InputBox label="First Name" name="firstName" 
                    />
                    <InputBox label="Last Name" name="lastName" 
                       />
                  </div>

                  <InputBox label="Date Of Birth" name="dateOfBirth" />
                  <InputBox label="Email Address" name="email"
                      />
                  <div className="custom-columns">
                    <InputBox label="Country Code" name="countryCode" />
                    <InputBox label="Phone Number" name="phone" />
                  </div>
                  <InputCheckbox
                    name="isPhoneNumberPublic"
                    className="dont-show-phone"
                    onClick={() => {
                      form.setFieldValue(
                        "isPhoneNumberPublic",
                        !form.values.isPhoneNumberPublic
                      );
                    }}
                    label="Don't show my phone number in public profile."
                    isCorrectOption={form.values.isPhoneNumberPublic}
                  />
                  <div className="public-info">
                    <h1>
                      Public Info
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
                    <p className="red-text">
                      (Turning off this will not show your profile publicly in
                      "People With Mutual Events")
                    </p>
                    <p>
                      Your name, profile picture & phone number include in your
                      public info as well. Public info will be used for "People
                      With Mutual Events", where other people will able to see
                      your profile.
                    </p>
                  </div>
                  <div className="public-info">
                    <InputBox
                      label="Bio"
                      name="bio"
                      radiusType="27px"
                      height="74px"
                      placeholder="Dolor rem non inventore. Non rerum nostrum. Sit consectetur dolorem voluptatem sit dolorem. Deleniti vel sit dolorem illo sed culpa."
                    />
                  </div>
                  <div className="public-info column-3">
                    <InputBox
                      label="Instagram"
                      name="instagram"
                      placeholder="@instagram"
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
                        label="Public My Next Reservation"
                        isCorrectOption={form.values.publicNextReservation}
                      />
                    </h1>
                    <p>
                      By checking this public will able see your next
                      reservation in People With Mutual Events. Also your name &
                      picture will be displayed in Guest List of that event.
                    </p>
                  </div>
                </div>

                <div className="right-side">
                  <div className="avatar-wrapper">
                    <img
                      // src={"/images/sample-image.webp"}
                      src={
                        !previewProfileImage.includes("null")
                          ? previewProfileImage
                          : "/images/sample-image.webp"
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
                    style={{ display: "none" }}
                    type="file"
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
                  style={{ display: "none" }}
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

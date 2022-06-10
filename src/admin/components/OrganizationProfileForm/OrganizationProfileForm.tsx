import { Form, Formik, useFormikContext } from "formik";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ContentHeader, DashboardHeader } from "..";
import {
  Slider,
  InputBox,
  InputCheckbox,
  MessageModal,
} from "../../../components";
import { useHistory } from "react-router-dom";
import LabelWithTag from "../LabelWithTag/LabelWithTag";
import { UploadFile } from "..";
import { OrganizationProfileFormStyle } from "./OrganizationProfileForm.style";
import ShowCaseYourEvents from "./ShowCaseYourEvent";
import { policies } from "../../../mockData/policies";
import { attributesList } from "./OrganizationAttributesList";
import { OrganizerFormValidationSchema } from "./validation";
import {
  LoginContext,
  useLoginContext,
} from "../../../context/authenticationContext";
import Loading from "../../../components/Loading/Loading"
type OrganizationProfileFormProps = {
  setCurrentPage: (data: string) => void;
  organizerProfile?: any;
  currentPage?:any;
};
const OrganizationProfileForm = (props: OrganizationProfileFormProps) => {
  const { setCurrentPage, organizerProfile } = props;
  const [isLoading,setIsLoading] = useState(false)
  const history = useHistory();
  const [message, setMessage] = useState("");
  const [heading, setHeading] = useState("");
  const [initialValues, setInitialValues] = useState({
    organizerBio: "",
    phoneNumber: "",
    organizerName: "",
    facebook: "",
    twitter: "",
    instagram: "",
    youtube: "",
    logo: null,
    coverPhoto: null,
    additionalPhotos: null,
  });

  //Ref
  let logoUpload: any = React.createRef();
  let coverPhotoUpload: any = React.createRef();
  let additionalPhotoUpload: any = React.createRef();
  let submitRef: any = React.createRef();

  //State
  const { state } = useLoginContext();
  const [attributesListState, setAttributesListState] = useState([
    ...attributesList,
  ]);
  const [policiesState, setPoliciesState] = useState([...policies]);

  const [previewLogoImage, setLogoImage] = useState<string>(
    process.env.REACT_APP_BASE_URL + "/images/" + "null"
    // state.data.imageUrl
  );

  const [previewCoverImage, setCoverImage] = useState<string>(
    process.env.REACT_APP_BASE_URL + "/images/" + "null"
    // state.data.imageUrl
  );
  const [previewAdditionalImage, setAdditionalImage] = useState<[]>([]);
  const [isSuccessModalVisible, setSuccessModalVisible] = useState(false);

  //useEffect
  useEffect(() => {
    if (organizerProfile) {
      setLogoImage(
        process.env.REACT_APP_BASE_URL + "/images/" + organizerProfile.logoUrl
      );
      setCoverImage(
        process.env.REACT_APP_BASE_URL + "/images/" + organizerProfile.coverPhotoUrl
      );
      const photos: [] = organizerProfile.additionalPhotosUrls.map(
        (photo: any) => process.env.REACT_APP_BASE_URL + "/images/" + photo
      );

      setAdditionalImage(photos);

      const tempPoliciesState = policiesState.map((item) => {
        item.value = organizerProfile.saftyAndCleaness[item.id];
        return item;
      });
      setPoliciesState(tempPoliciesState);

      const tempAttributesList = attributesList.map((item) => {
        item.value = organizerProfile.organizationAttributes[item.id];
        return item;
      });
      setAttributesListState(tempAttributesList);

      setInitialValues({
        ...initialValues,
        organizerBio: organizerProfile.organizerBio,
        organizerName: organizerProfile.organizerName,
        phoneNumber: organizerProfile.socialMediaAndMarketingLinks?.phoneNumber,
        facebook: organizerProfile.socialMediaAndMarketingLinks?.facebook,
        twitter: organizerProfile.socialMediaAndMarketingLinks?.twitter,
        instagram: organizerProfile.socialMediaAndMarketingLinks?.instagram,
        youtube: organizerProfile.socialMediaAndMarketingLinks?.youtube,
        logo: {} as any,
        coverPhoto: {} as any,
        additionalPhotos: null,
      });
    }
  }, []);
  //Handler
  const handleattributesList = (currentValue: any, index: any) => {
    const item = { ...currentValue };
    const tempAttributesListState = [...attributesListState];
    item.value = !item.value;
    tempAttributesListState[index] = { ...item };
    setAttributesListState(tempAttributesListState);
  };

  const handlePolicies = (currentValue: any, index: any) => {
    const item = { ...currentValue };
    const tempPoliciesState = [...policiesState];
    item.value = !item.value;
    tempPoliciesState[index] = { ...item };
    setPoliciesState(tempPoliciesState);
  };
  //Upload images

  const handleClickLogo = (e: any) => {
    logoUpload.current.click();
  };

  const handleClickCover = (e: any) => {
    coverPhotoUpload.current.click();
  };
  const handleAdditionalPhoto = () => {
    additionalPhotoUpload.current.click();
  };

  //Handle Upload logo
  const handleLogoUpload = async (event: any, form: any) => {
    // Sceniro 1:Add organizer
    form.setFieldValue("logo", event.target.files[0]);
    let reader = new FileReader();
    let file = event.target.files[0];
    if (file) {
      reader.onloadend = () => {
        const imagePreview: any = reader.result;
        setLogoImage(imagePreview);
      };
      reader.readAsDataURL(file);
    }
    // Sceniro 2:Edit organizer
    if (organizerProfile && file) {
      const bodyData = new FormData();
      bodyData.append("logo", file);
      const res = await axios
        .patch(
          `/v1/organizer/editOrganizerProfileLogo/${organizerProfile.id}`,
          bodyData,
          {
            headers: { Authorization: `Bearer ${state.authToken}` },
          }
        )
        .catch((error) => {
          setSuccessModalVisible(true);
          setMessage(error.response.data.error);
          setHeading("Error");
        });
      if (res) {
        setSuccessModalVisible(true);
        setMessage("Organizer Logo Updated Successfully");
        setHeading("Success");
        // if (!isSuccessModalVisible)
      }
    }
  };

  //Handle Upload Coever
  const handleCoverUpload = async (event: any, form: any) => {
    form.setFieldValue("coverPhoto", event.target.files[0]);
    let reader = new FileReader();
    let file = event.target.files[0];
    if (file) {
      reader.onloadend = () => {
        const imagePreview: any = reader.result;
        setCoverImage(imagePreview);
      };
      reader.readAsDataURL(file);
    }
    if (organizerProfile && file) {
      const bodyData = new FormData();
      bodyData.append("coverPhoto", file);
      const res = await axios
        .patch(
          `/v1/organizer/editOrganizerProfileCoverPhoto/${organizerProfile.id}`,
          bodyData,
          {
            headers: { Authorization: `Bearer ${state.authToken}` },
          }
        )
        .catch((error) => {
          setSuccessModalVisible(true);
          setMessage(error.response.data.error);
          setHeading("Error");
        });
      if (res) {
        setSuccessModalVisible(true);
        setMessage("Organizer Cover Photo Updated Successfully");
        setHeading("Success");
        // if (!isSuccessModalVisible)
      }
    }
  };

  //Handle Additional photo
  const handleAdditionalPhotoUpload = async (event: any, form: any) => {
    form.setFieldValue("additionalPhotos", event.target.files);
    if (event.target.files && !organizerProfile) {
      const files = Array.from(event.target.files);
      Promise.all(
        files.map((file: any) => {
          return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.addEventListener("load", (ev) => {
              resolve(ev.target?.result);
            });
            reader.addEventListener("error", reject);
            reader.readAsDataURL(file);
          });
        })
      ).then(
        (images: any) => {
          /* Once all promises are resolved, update state with image URI array */
          setAdditionalImage(images);
        },
        (error) => {
          console.error(error);
        }
      );
    }

    const files = event.target.files;
    if (organizerProfile && files) {
      const bodyData = new FormData();

      for (let i = 0; i < files.length; i++) {
        bodyData.append(`additionalPhotos`, files[i]);
      }

      const res = await axios
        .patch(
          `/v1/organizer/editOrganizerProfileAdditionalPhotos/${organizerProfile.id}`,
          bodyData,
          {
            headers: { Authorization: `Bearer ${state.authToken}` },
          }
        )
        .catch((error) => {
          setSuccessModalVisible(true);
          setMessage(error.response.data.error);
          setHeading("Error");
        });
      if (res) {
        setSuccessModalVisible(true);
        setMessage("Organizer Additional photos Updated Successfully");
        setHeading("Success");
        // if (!isSuccessModalVisible)
        const photos: [] = res.data.additionalPhotosUrls.map(
          (photo: any) => process.env.REACT_APP_BASE_URL + "/images/" + photo
        );
        photos.reverse();
        setAdditionalImage(photos);
      }
    }
  };

  //
  const handleImageClick = async (e: any) => {
    if (organizerProfile) {
      const imgUrl = e.target.src.replace(
        process.env.REACT_APP_BASE_URL + "/",
        ""
      );
      const body = {
        additionalPhoto: imgUrl,
      };
      const res = await axios
        .patch(
          `/v1/organizer/removeAdditionalPhotos/${organizerProfile.id}`,
          body,
          {
            headers: { Authorization: `Bearer ${state.authToken}` },
          }
        )
        .catch((error) => {
          setSuccessModalVisible(true);
          setMessage(error.response.data.error);
          setHeading("Error");
        });
      if (res) {
        setSuccessModalVisible(true);
        setMessage("Photo remove Successfully");
        setHeading("Success");
        // if (!isSuccessModalVisible)
        const photos: [] = res.data.additionalPhotosUrls.map(
          (photo: any) => process.env.REACT_APP_BASE_URL + "/images/" + photo
        );
        photos.reverse();
        setAdditionalImage(photos);
      }
    }
  };
  //
  const handleProfileForm = async (e: any) => {
    const organizationAttributes: any = {};

    attributesListState.forEach((currentValue: any) => {
      organizationAttributes[currentValue.id] = currentValue.value;
    });

    const saftyAndCleaness: any = {};
    policiesState.forEach((currentValue: any) => {
      saftyAndCleaness[currentValue.id] = currentValue.value;
    });

    const socialMediaAndMarketingLinks: any = {
      phoneNumber: e.phoneNumber,
      twitter: e.twitter,
      facebook: e.facebook,
      youtube: e.youtube,
      instagram: e.instagram,
    };

    /////form Data
    const bodyData = new FormData();

    bodyData.append("organizerBio", e.organizerBio);
    bodyData.append("organizerName", e.organizerName);
    bodyData.append(
      "organizationAttributes",
      JSON.stringify(organizationAttributes)
    );
    bodyData.append("saftyAndCleaness", JSON.stringify(saftyAndCleaness));
    bodyData.append(
      "socialMediaAndMarketingLinks",
      JSON.stringify(socialMediaAndMarketingLinks)
    );

    //Photos
    // Add organizer
    if (!organizerProfile) {
      bodyData.append("logo", e.logo);
      bodyData.append("coverPhoto", e.coverPhoto);

      if (e.additionalPhotos) {
        const files = e.additionalPhotos;
        for (let i = 0; i < files.length; i++) {
          bodyData.append(`additionalPhotos`, files[i]);
        }
      }
      setIsLoading(true)
      const res = await axios
        .post("/v1/organizer", bodyData, {
          headers: { Authorization: `Bearer ${state.authToken}` },
        })
        .catch((error) => {
          setSuccessModalVisible(true);
          setMessage(error.response.data.error);
          setHeading("Error");
          setIsLoading(false)
        });
      if (res) {
        setSuccessModalVisible(true);
        setMessage("Organizer created Successfully");
        setHeading("Success");
        setIsLoading(false)
      }
    } else {
      var body: any = {
        organizerBio: e.organizerBio,

        organizationAttributes: organizationAttributes,
        organizerName:e.organizerName,

        saftyAndCleaness: saftyAndCleaness,

        socialMediaAndMarketingLinks: socialMediaAndMarketingLinks,
      };
      setIsLoading(true)

      const res = await axios
        .patch(
          `/v1/organizer/editOrganizerProfile/${organizerProfile.id}`,
          body,
          {
            headers: { Authorization: `Bearer ${state.authToken}` },
          }
        )
        .catch((error) => {

          setSuccessModalVisible(true);
          setMessage(error.response.data.error);
          setHeading("Error");
          setIsLoading(false)
        });
      if (res) {
        setSuccessModalVisible(true);
        setMessage("Organizer updated Successfully");
        setHeading("Success");
        setIsLoading(false)

        // if (!isSuccessModalVisible)
      }
    }
  };

  return (
    <div>
      {isLoading&&<Loading/>}
    <OrganizationProfileFormStyle>
      
      <DashboardHeader
        handleBackClick={() => setCurrentPage("preview")}
        handleSaveClick={() => {
          submitRef.current.click();
        }}
        backButtonText="Back To Basic Info"
        saveButtonText="Add"
        heading={props.currentPage==='add-organization'?"Add Organizer Profile":"Edit Organizer Profile"}
        isLoading={isLoading}
        handleCancelClick={() => setCurrentPage("preview")}
      />

      <ShowCaseYourEvents />
      {/* 
      <div className="file-wrapper">
        <div className="child-Filewrapper">
          <div>
            <LabelWithTag label="Your logo" />
            <UploadFile
              previewProfileImage={previewLogoImage}
              handleClick={handleClickLogo}
            />
          </div>
          <div>
            <LabelWithTag label="Your Cover Photo" />
            <UploadFile
              buttonType="large"
              previewProfileImage={previewCoverImage}
              handleClick={handleClickCover}
            />
          </div>
        </div>
        <div>
          <LabelWithTag label="Your Additional Photos" tagType="Recomended" />
          <Slider
            handleAdditionalPhoto={handleAdditionalPhoto}
            previewAdditionalImage={previewAdditionalImage}
            handleImageClick={handleImageClick}
          />
        </div>
      </div> */}

      <Formik
        initialValues={initialValues}
        onSubmit={handleProfileForm}
        validationSchema={OrganizerFormValidationSchema}
        enableReinitialize={true}
      >
        {(form) => (
          <Form className="form-wrapper">
            <div className="file-wrapper">
              <div className="child-Filewrapper">
                <div>
                  <LabelWithTag label="Your logo" />
                  <UploadFile
                    previewProfileImage={previewLogoImage}
                    handleClick={handleClickLogo}
                  />
                  {form.touched.logo && form.errors.logo && (
                    <span className="error-message">{form.errors.logo}</span>
                  )}
                </div>

                <div>
                  <LabelWithTag label="Your Cover Photo" />
                  <UploadFile
                    buttonType="large"
                    previewProfileImage={previewCoverImage}
                    handleClick={handleClickCover}
                  />
                  {form.touched.coverPhoto && form.errors.coverPhoto && (
                    <span className="error-message">
                      {form.errors.coverPhoto}
                    </span>
                  )}
                </div>
              </div>
              <div>
                <LabelWithTag
                  label="Your Additional Photos"
                  tagType="Recomended"
                />
                <Slider
                  handleAdditionalPhoto={handleAdditionalPhoto}
                  previewAdditionalImage={previewAdditionalImage}
                  handleImageClick={handleImageClick}
                />
              </div>
            </div>

            <div>
              <LabelWithTag label="Organizer Name" description="" />
              <InputBox
                radiusType="27px"
                height="60px"
                width="1380px"
               // value={}
                name="organizerName"
                placeholder="Enter Your name here"
              />
              <LabelWithTag
                label="Organizer Bio"
                description="Describe who you are, the types of events you host, or your mission. The bio is displayed on your organizer profile."
              />
              <input
                ref={logoUpload}
                type={"file"}
                style={{ display: "none" }}
                onChange={(e) => handleLogoUpload(e, form)}
              />
              <input
                ref={coverPhotoUpload}
                type={"file"}
                style={{ display: "none" }}
                onChange={(e) => handleCoverUpload(e, form)}
              />
              <input
                ref={additionalPhotoUpload}
                type={"file"}
                style={{ display: "none" }}
                onChange={(e) => handleAdditionalPhotoUpload(e, form)}
                multiple
              />

              <InputBox
                radiusType="27px"
                height="118px"
                width="1380px"
                name="organizerBio"
                placeholder="Enter Your name here"
              />
            </div>
            <div className="attributes-wrapper">
              <LabelWithTag
                label="Organization Attributes"
                description="Let Music Pass members know more about your organization."
                tagType="none"
              />
              <div className="list-wrapper">
                {attributesListState.map((currentValue, index) => {
                  return (
                    <InputCheckbox
                      key={currentValue.id}
                      name={currentValue.name}
                      onClick={(e) => {
                        handleattributesList(currentValue, index);
                      }}
                      className=""
                      label={currentValue.name}
                      isCorrectOption={currentValue.value}
                    />
                  );
                })}
              </div>
            </div>
            <div className="saftey-policies-wrapper">
              <LabelWithTag
                label="Safety & Cleanliness"
                description="Let members know what your Vaccination Policies are, if they need to bring proof, and how this impacts other measures (eg. if vaccinated members can attend without a mask)."
                tagType="Recomended"
              />
              handlePolicies
              <div className="policy-list">
                {policiesState.map((currentValue, index) => {
                  return (
                    <InputCheckbox
                      key={currentValue.id}
                      name={currentValue.name}
                      onClick={(e) => {
                        handlePolicies(currentValue, index);
                      }}
                      className=""
                      label={currentValue.name}
                      isCorrectOption={currentValue.value}
                    />
                  );
                })}
              </div>
            </div>

            <div className="social-media-wrapper">
              <ContentHeader
                heading="Social Media & Marketing Link"
                description="Let attendees know how to connect with you"
              />

              <div className="socialMedia-wrapper">
                <LabelWithTag
                  label="Social Media & Marketing Links"
                  description="Let attendees know how to connect with you."
                  tagType="Recomended"
                />
                <div className="socialLinks-wrapper">
                  <InputBox
                    name="phoneNumber"
                    placeholder="+14166966270"
                    label="Phone Number"
                  />
                  <InputBox
                    name="facebook"
                    placeholder="https://www.facebook.com/organizer"
                    label="FaceBook"
                  />
                  <InputBox
                    name="instagram"
                    placeholder="e.g. https://www.Instagram.com/organizer"
                    label="Instagram"
                  />
                  <InputBox
                    name="twitter"
                    placeholder="e.g. https://www.twitter.com/"
                    label="Twitter"
                  />
                  <InputBox
                    name="youtube"
                    label="Youtube"
                    placeholder="e.g. https://www.youtube.com/organizer"
                  />
                </div>
                <input
                  type="submit"
                  value="Submit"
                  ref={submitRef}
                  style={{ display: "none" }}
                  onClick={() => {}}
                />
              </div>
            </div>
          </Form>
        )}
      </Formik>
      <MessageModal
        isModalVisible={isSuccessModalVisible}
        setIsModalVisible={setSuccessModalVisible}
        heading={heading}
        message={message}
        handleOkClick={() => {
          heading === "Success" &&
            !organizerProfile &&
            setCurrentPage("preview");

          setSuccessModalVisible(false);
        }}
      />
    </OrganizationProfileFormStyle>
    </div>
  );
};

export default OrganizationProfileForm;

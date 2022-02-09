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
type OrganizationProfileFormProps = {
  setCurrentPage: (data: string) => void;
  organizerProfile?: any;
};
const OrganizationProfileForm = (props: OrganizationProfileFormProps) => {
  const { setCurrentPage, organizerProfile } = props;

  const history = useHistory();
  const [message, setMessage] = useState("");
  const [heading, setHeading] = useState("");
  let initialValues = {
    organizerBio: "",
    phoneNumber: "",
    facebook: "",
    twitter: "",
    instagram: "",
    youtube: "",
    logo: null,
    coverPhoto: null,
    additionalPhotos: null,
  };

  //Ref
  let logoUpload: any = React.createRef();
  let coverPhotoUpload: any = React.createRef();
  let additionalPhotoUpload: any = React.createRef();
  let submitRef: any = React.createRef();

  //State
  const { state } = useLoginContext();
  const [attributesListState, setAttributesListState] = useState(
    attributesList
  );
  const [policiesState, setPoliciesState] = useState(policies);

  const [previewLogoImage, setLogoImage] = useState<string>(
    process.env.REACT_APP_BASE_URL + "/" + "null"
    // state.data.imageUrl
  );

  const [previewCoverImage, setCoverImage] = useState<string>(
    process.env.REACT_APP_BASE_URL + "/" + "null"
    // state.data.imageUrl
  );
  const [previewAdditionalImage, setAdditionalImage] = useState<[]>([]);
  const [isSuccessModalVisible, setSuccessModalVisible] = useState(false);

  //useEffect
  useEffect(() => {
    if (organizerProfile) {
      setLogoImage(
        process.env.REACT_APP_BASE_URL + "/" + organizerProfile.logoUrl
      );
      setCoverImage(
        process.env.REACT_APP_BASE_URL + "/" + organizerProfile.coverPhotoUrl
      );

      //
      initialValues = {
        ...initialValues,
        organizerBio: organizerProfile.organizerBio,
        phoneNumber: organizerProfile.socialMediaAndMark?.phoneNumber,
        facebook: organizerProfile.socialMediaAndMark?.facebook,
        twitter: organizerProfile.socialMediaAndMark?.twitter,
        instagram: organizerProfile.socialMediaAndMark?.intsagram,
        youtube: organizerProfile.socialMediaAndMark?.youtube,
        logo: null,
        coverPhoto: null,
        additionalPhotos: null,
      };
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
  const handleLogoUpload = (event: any, form: any) => {
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
  };

  //Handle Upload Coever
  const handleCoverUpload = (event: any, form: any) => {
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
  };

  //Handle Additional photo
  const handleAdditionalPhotoUpload = (event: any, form: any) => {
    form.setFieldValue("additionalPhotos", event.target.files);

    // const files = event.target.files;
    // // previewAdditionalImage, setAdditionalImage
    // for (let i = 0; i < files.length; i++) {
    //   alert(i);

    //   let reader = new FileReader();
    //   let file = event.target.files[0];
    //   if (file) {
    //     reader.onloadend = () => {
    //       const imagePreview: any = reader.result;
    //       const images = { ...previewAdditionalImage, imagePreview };
    //       setAdditionalImage(images);
    //     };
    //     reader.readAsDataURL(file);
    //   }
    // }

    if (event.target.files) {
      /* Get files in array form */
      const files = Array.from(event.target.files);

      /* Map each file to a promise that resolves to an array of image URI's */
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
          // this.setState({ imageArray: images });
          setAdditionalImage(images);
        },
        (error) => {
          console.error(error);
        }
      );
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
    bodyData.append("logo", e.logo);
    bodyData.append("coverPhoto", e.coverPhoto);

    if (e.additionalPhotos) {
      const files = e.additionalPhotos;
      for (let i = 0; i < files.length; i++) {
        bodyData.append(`additionalPhotos`, files[i]);
      }
    }

    const res = await axios
      .post("/v1/organizer", bodyData, {
        headers: { Authorization: `Bearer ${state.authToken}` },
      })
      .catch((error) => {
        console.log(error.response.data.error);
        setSuccessModalVisible(true);
        setMessage(error.response.data.error);
        setHeading("Error");
      });
    if (res) {
      setSuccessModalVisible(true);
      setMessage("Organizer Created Successfully");
      setHeading("Success");
      console.log(res.data);
      // if (!isSuccessModalVisible)
    }
  };

  return (
    <OrganizationProfileFormStyle>
      <DashboardHeader
        handleBackClick={() => setCurrentPage("preview")}
        handleSaveClick={() => {
          submitRef.current.click();
        }}
        backButtonText="Back To Basic Info"
        saveButtonText="Add"
        heading="Add Organizer Profile"
        handleCancelClick={() => setCurrentPage("preview")}
      />

      <ShowCaseYourEvents />

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
          />
        </div>
      </div>

      <Formik
        initialValues={initialValues}
        onSubmit={handleProfileForm}
        validationSchema={OrganizerFormValidationSchema}
      >
        {(form) => (
          <Form className="form-wrapper">
            <div>
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
              {console.log(form)}
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
                    placeholder="e.g. https://www.eventbritemusic.com/"
                    label="Phone Number"
                  />
                  <InputBox
                    name="facebook"
                    placeholder="e.g. https://www.eventbritemusic.com/"
                    label="FaceBook"
                  />
                  <InputBox
                    name="instagram"
                    placeholder="e.g. https://www.eventbritemusic.com/"
                    label="Instagram"
                  />
                  <InputBox
                    name="twitter"
                    placeholder="e.g. https://www.eventbritemusic.com/"
                    label="Twitter"
                  />
                  <InputBox
                    name="youtube"
                    label="Youtube"
                    placeholder="e.g. https://www.eventbritemusic.com/"
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
          heading === "Success" && setCurrentPage("preview");
        }}
      />
    </OrganizationProfileFormStyle>
  );
};

export default OrganizationProfileForm;

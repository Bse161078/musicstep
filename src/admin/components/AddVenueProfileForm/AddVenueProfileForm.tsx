import React, { useState } from "react";

import { Form, Formik } from "formik";

import { AddVenueProfileFormStyle } from "./AddVenueProfileForm.style";
import { Dashboard, UploadFile } from "..";
import { Slider, InputBox, InputCheckbox } from "../../../components";
import LabelWithTag from "../LabelWithTag/LabelWithTag";
import { MessageModal } from "../../../components";
import { policies } from "../../../mockData/policies";
import { amenties } from "../../../mockData/amenties";

import { DashboardHeader } from "..";
import { initialValues } from "./initialValues";
import { useHistory } from "react-router-dom";
import { VenueFormValidationSchema } from "./validation";
import { useLoginContext } from "../../../context/authenticationContext";
import axios from "axios";

const AddVenueProfileForm = () => {
  const { state } = useLoginContext();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [message, setMessage] = useState("");
  const [heading, setHeading] = useState("");

  //Ref
  let logoUpload: any = React.createRef();
  let coverPhotoUpload: any = React.createRef();
  let additionalPhotoUpload: any = React.createRef();
  let submitRef: any = React.createRef();

  //State
  //  const { state } = useLoginContext();
  //  const [attributesListState, setAttributesListState] = useState([
  //    ...attributesList,
  //  ]);
  const [policiesState, setPoliciesState] = useState([...policies]);
  const [amentiesState, setAmentiesState] = useState([...amenties]);

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
  };

  const handlePolicies = (currentValue: any, index: any) => {
    const item = { ...currentValue };
    const tempPoliciesState = [...policiesState];
    item.value = !item.value;
    tempPoliciesState[index] = { ...item };
    setPoliciesState(tempPoliciesState);
  };
  // amenties
  const handleAmenties = (currentValue: any, index: any) => {
    const item = { ...currentValue };
    const tempAmentiesState = [...amentiesState];
    item.value = !item.value;
    tempAmentiesState[index] = { ...item };
    setAmentiesState(tempAmentiesState);
  };

  //Handle Additional photo
  const handleAdditionalPhotoUpload = async (event: any, form: any) => {
    form.setFieldValue("additionalPhotos", event.target.files);
    if (event.target.files) {
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
  };

  const onSubmit = async (e: any) => {
    const saftyAndCleaness: any = {};
    policiesState.forEach((currentValue: any) => {
      saftyAndCleaness[currentValue.id] = currentValue.value;
    });

    const amentiesBody: any = {};
    amentiesState.forEach((currentValue: any) => {
      amentiesBody[currentValue.id] = currentValue.value;
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

    bodyData.append("venueBio", e.venueBio);
    bodyData.append("location", e.locations);
    bodyData.append("saftyAndCleaness", JSON.stringify(saftyAndCleaness));
    bodyData.append("amenities", JSON.stringify(amentiesBody));
    bodyData.append(
      "socialMediaAndMarketingLinks",
      JSON.stringify(socialMediaAndMarketingLinks)
    );
    bodyData.append("categoryTags", e.categoryTags);
    //Photos
    // Add organizer
    // if (!organizerProfile) {
    bodyData.append("logo", e.logo);
    bodyData.append("coverPhoto", e.coverPhoto);

    if (e.additionalPhotos) {
      const files = e.additionalPhotos;
      for (let i = 0; i < files.length; i++) {
        bodyData.append(`additionalPhotos`, files[i]);
      }
    }

    const res = await axios
      .post("/v1/venue", bodyData, {
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
      setMessage("Organizer created Successfully");
      setHeading("Success");
      console.log(res.data);
    }
    // }
    // else
    // {
    //   var body: any = {
    //     organizerBio: e.organizerBio,

    //     organizationAttributes: organizationAttributes,

    //     saftyAndCleaness: saftyAndCleaness,

    //     socialMediaAndMarketingLinks: socialMediaAndMarketingLinks,
    //   };

    //   const res = await axios
    //     .patch(
    //       `/v1/organizer/editOrganizerProfile/${organizerProfile.id}`,
    //       body,
    //       {
    //         headers: { Authorization: `Bearer ${state.authToken}` },
    //       }
    //     )
    //     .catch((error) => {
    //       console.log(error.response.data.error);
    //       setSuccessModalVisible(true);
    //       setMessage(error.response.data.error);
    //       setHeading("Error");
    //     });
    //   if (res) {
    //     setSuccessModalVisible(true);
    //     setMessage("Organizer Profile Updated Successfully");
    //     setHeading("Success");
    //     console.log(res.data);
    //     // if (!isSuccessModalVisible)
    //   }
    // }

    setIsModalVisible(true);
  };

  const history = useHistory();

  return (
    <>
      <Dashboard>
        <AddVenueProfileFormStyle>
          <DashboardHeader
            heading="Add Venue Profile"
            saveButtonText="Add"
            handleSaveClick={() => {
              submitRef.current.click();
            }}
            backButtonText="Back To Submit An Event"
            handleBackClick={() => {
              history.push("/admin/events-managment-home");
            }}
            handleCancelClick={() => {
              history.push("/admin/events-managment-home");
            }}
          />

          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={VenueFormValidationSchema}
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
                        <span className="error-message">
                          {form.errors.logo}
                        </span>
                      )}
                      {console.log(form)}
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
                      label="Add Additional Photos"
                      tagType="Recomended"
                    />
                    <Slider
                      handleAdditionalPhoto={handleAdditionalPhoto}
                      previewAdditionalImage={previewAdditionalImage}
                      // handleImageClick={handleImageClick}
                    />
                  </div>
                </div>

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
                <div>
                  <LabelWithTag label="Category Tages" tagType="Recomended" />
                  <InputBox
                    radiusType="27px"
                    height="93px"
                    width="670px"
                    name="categoryTags"
                    placeholder="Enter Category Tags"
                  />
                </div>
                <div>
                  <LabelWithTag
                    label="Venue Bio"
                    description="Describe who you are, the types of events you host, or your mission. The bio is displayed on your organizer profile."
                  />
                  <InputBox
                    radiusType="27px"
                    height="118px"
                    width="1380px"
                    name="venueBio"
                    placeholder="Enter Venu BIO"
                  />
                </div>
                <div className="location-and-amenstiesWrapper">
                  <div className="location-wrapper">
                    <LabelWithTag
                      label="Location"
                      description="Guide attendees where the event is happening."
                    />
                    <InputBox
                      name="locations"
                      placeholder="1020 NW 183rd St, Miami, Florida(FL), 33169"
                    />
                    <img
                      src="/images/explore-venue/map-2.png"
                      className="map"
                      alt="map"
                    />
                  </div>
                  <div className="amenties-wrapper">
                    <LabelWithTag
                      label="Amenities"
                      description="Help users know what to expect at your venue."
                      tagType="none"
                    />
                    <div className="list-wrapper">
                      {amentiesState.map((currentValue, index) => {
                        return (
                          <InputCheckbox
                            key={currentValue.id}
                            name={currentValue.name}
                            onClick={(e) => {
                              handleAmenties(currentValue, index);
                            }}
                            className=""
                            label={currentValue.name}
                            isCorrectOption={currentValue.value}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="saftey-policies-wrapper">
                  <LabelWithTag
                    label="Safety & Cleanliness"
                    description="Let members know what your Vaccination Policies are, if they need to bring proof, and how this impacts other measures (eg. if vaccinated members can attend without a mask)."
                    tagType="Recomended"
                  />
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
                </div>
                <input
                  type="submit"
                  value="Submit"
                  ref={submitRef}
                  style={{ display: "none" }}
                  onClick={() => {}}
                />
              </Form>
            )}
          </Formik>
        </AddVenueProfileFormStyle>
      </Dashboard>
      <MessageModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        heading={heading}
        message={message}
        handleOkClick={() => {
          heading === "Success" && history.goBack();

          setSuccessModalVisible(false);
        }}
      />
    </>
  );
};

export default AddVenueProfileForm;

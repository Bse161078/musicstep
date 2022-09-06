import React, {useEffect, useState} from "react";

import {Form, Formik} from "formik";

import {AddVenueProfileFormStyle} from "./AddVenueProfileForm.style";
import {Dashboard, UploadFile} from "..";
import {Slider, InputBox, InputCheckbox} from "../../../components";
import LabelWithTag from "../LabelWithTag/LabelWithTag";
import {MessageModal} from "../../../components";
import {policies} from "../../../mockData/policies";
import {amenties} from "../../../mockData/amenties";
import Geocode from "react-geocode";

import {DashboardHeader} from "..";
import {initialValues} from "./initialValues";
import {useHistory} from "react-router-dom";
import {VenueFormValidationSchema} from "./validation";
import {useLoginContext} from "../../../context/authenticationContext";
import axios from "axios";
import {MapModalWrapper} from "../../../admin/components/Modals/MapModalWrapper";
import Map from "../../../components/Map";
import {Loading} from "../../../components";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";


const {
    MarkerWithLabel,
} = require("react-google-maps/lib/components/addons/MarkerWithLabel");

Geocode.setApiKey("AIzaSyB4oh8lVm9cjXA-V0GovELsSVY5Lr9NMew");
Geocode.enableDebug();

let formikForm: any = null;

const AddVenueProfileForm = () => {
    const {state} = useLoginContext();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isMapModalVisible, setIsMapModalVisible] = useState(false);
    const [location, setLocation] = useState({lat: 0, lng: 0});
    const [message, setMessage] = useState("");
    const [isLoading, setLoading] = useState(false);
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
    const [defaultCategories, setDefaultCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("Dayclub");

    const getTags = async () => {
        try {
            const response = await axios.get("/v1/filter", {headers: {Authorization: `Bearer ${state.authToken}`}});
            setDefaultCategories(response.data.categories);
        } catch (e) {

        }
    }


    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position: any) => {
                setLocation({lat: position.coords.latitude, lng: position.coords.longitude})
                getLocation(position.coords.latitude, position.coords.longitude)
            });

        } else {
            console.error("Geolocation is not supported by this browser!");
        }
        getTags();
    }, [])

    const getLocation = (lat: any, lng: any) => {
        Geocode.fromLatLng(lat, lng).then(
            (response) => {

                console.log("location = ",response.results[0].formatted_address)
                if (formikForm) {
                    formikForm.setFieldValue("address", response.results[0].formatted_address);
                    formikForm.setFieldValue("location", {
                        address: response.results[0].formatted_address,
                        lat: lat,
                        lng: lng,
                    });
                }

            },
            (error) => {
            });
    }

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
        const imageType = event.target.files[0].type;
        if (imageType === "image/jpeg" || imageType === "image/png" || imageType === "image/jpg" || imageType === "image/svg") {
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
        }
    };

    //Handle Upload Coever
    const handleCoverUpload = async (event: any, form: any) => {

        const imageType = event.target.files[0].type;
        if (imageType === "image/jpeg" || imageType === "image/png" || imageType === "image/jpg" || imageType === "image/svg") {
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
        }
    };

    const handlePolicies = (currentValue: any, index: any) => {
        const item = {...currentValue};
        const tempPoliciesState = [...policiesState];
        item.value = !item.value;
        tempPoliciesState[index] = {...item};
        setPoliciesState(tempPoliciesState);
    };
    // amenties
    const handleAmenties = (currentValue: any, index: any) => {
        const item = {...currentValue};
        const tempAmentiesState = [...amentiesState];
        item.value = !item.value;
        tempAmentiesState[index] = {...item};
        setAmentiesState(tempAmentiesState);
    };

    //Handle Additional photo
    const handleAdditionalPhotoUpload = async (event: any, form: any) => {
        const imageType = event.target.files[0].type;
        if (imageType === "image/jpeg" || imageType === "image/png" || imageType === "image/jpg" || imageType === "image/svg") {
            form.setFieldValue("additionalPhotos", event.target.files);
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
                    let tempImages=JSON.parse(JSON.stringify(previewAdditionalImage));
                    tempImages=tempImages.concat(images);
                    setAdditionalImage(tempImages);
                },
                (error) => {
                    console.error(error);
                }
            );
        }
    };

    const onSubmit = async (e: any) => {
        setLoading(true)
        const saftyAndCleaness: any = {};
        policiesState.forEach((currentValue: any) => {
            saftyAndCleaness[currentValue.id] = currentValue.value;
        });

        let amentiesBody: any = {};
        amentiesBody = amentiesState.filter((amenity) => amenity.value).map((amenity) => amenity.name);

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
        bodyData.append("name", e.name);
        bodyData.append("location", JSON.stringify(e.location));
        bodyData.append("saftyAndCleaness", JSON.stringify(saftyAndCleaness));
        bodyData.append("amenities", JSON.stringify(amentiesBody));
        bodyData.append(
            "socialMediaAndMarketingLinks",
            JSON.stringify(socialMediaAndMarketingLinks)
        );
        bodyData.append("categoryTags", selectedCategory);
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
                headers: {Authorization: `Bearer ${state.authToken}`},
            })
            .catch((error) => {
                setSuccessModalVisible(true);
                setMessage(error.response.data.error);
                setLoading(false)
                setHeading("Error");
            });
        if (res) {
            setLoading(false)
            setSuccessModalVisible(true);
            setMessage("Venue created Successfully");
            setHeading("Success");
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
        //       setSuccessModalVisible(true);
        //       setMessage(error.response.data.error);
        //       setHeading("Error");
        //     });
        //   if (res) {
        //     setSuccessModalVisible(true);
        //     setMessage("Organizer Profile Updated Successfully");
        //     setHeading("Success");
        //     // if (!isSuccessModalVisible)
        //   }
        // }

        setIsModalVisible(true);
    };

    const history = useHistory();

    const handleLocation = (
        country: any,
        state: any,
        city: any,
        address: any,
        lat: any,
        lng: any
    ) => {
        // props.setcity(city);
        // props.setstate(state);
        // props.setlng(lng);
        // props.setlat(lat);
        // props.setAddress(address);
        // props.setCountry(country);
        // setGig({ ...gig, address: address, lat: lat, lng: lng });

        // setLocation({
        //     country: country,
        //     state: state,
        //     city: city,
        //     address: address,
        //     lat: lat,
        //     lng: lng
        // });
    };


    const defaultCategoriesContainer = defaultCategories.map((category) =>
        <MenuItem value={category}>{category}</MenuItem>
    )


    const onDeleteFile=(form:any,index:any)=>{
        let tempFiles=JSON.parse(JSON.stringify(previewAdditionalImage));
        tempFiles.splice(index,1);
        setAdditionalImage(tempFiles);
    }

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
                        isLoading={isLoading}
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
                        {(form) => {
                            formikForm = form;
                            return (
                                <Form className="form-wrapper">
                                    <div className="file-wrapper">
                                        <div className="child-Filewrapper">
                                            <div>
                                                <LabelWithTag label="Your logo"/>
                                                <UploadFile
                                                    previewProfileImage={previewLogoImage}
                                                    handleClick={handleClickLogo}
                                                />
                                                {form.touched.logo && form.errors.logo && (
                                                    <span className="error-message">
                          {form.errors.logo}
                        </span>
                                                )}
                                            </div>
                                            <div>
                                                <LabelWithTag label="Your Cover Photo"/>
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
                                                onDeleteFile={onDeleteFile}
                                                // handleImageClick={handleImageClick}
                                            />
                                        </div>
                                    </div>

                                    <input
                                        ref={logoUpload}
                                        type={"file"}
                                        accept=".png, .jpg, .jpeg"
                                        style={{display: "none"}}
                                        onChange={(e) => handleLogoUpload(e, form)}
                                    />
                                    <input
                                        ref={coverPhotoUpload}
                                        type={"file"}
                                        accept=".png, .jpg, .jpeg"
                                        style={{display: "none"}}
                                        onChange={(e) => handleCoverUpload(e, form)}
                                    />
                                    <input
                                        ref={additionalPhotoUpload}
                                        type={"file"}
                                        accept=".png, .jpg, .jpeg"
                                        style={{display: "none"}}
                                        onChange={(e) => handleAdditionalPhotoUpload(e, form)}
                                        multiple
                                    />
                                    <div>
                                        <LabelWithTag label="Category Tags" tagType="Recomended"/>
                                        <FormControl variant="standard" sx={{width: "65%", marginTop: "10px"}}>
                                            <Select
                                                value={selectedCategory}
                                                onChange={(e) => {
                                                    setSelectedCategory(e.target.value)
                                                }}
                                                displayEmpty
                                                inputProps={{'aria-label': 'Without label'}}
                                            >
                                                {defaultCategoriesContainer}
                                            </Select>
                                        </FormControl>
                                    </div>
                                    <div>
                                        <LabelWithTag label="Venue Name"/>
                                        <InputBox
                                            radiusType="27px"
                                            height="63px"
                                            width="670px"
                                            name="name"
                                            placeholder="Enter venue name"
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
                                        <div
                                            className="location-wrapper"
                                            onClick={() => setIsMapModalVisible(true)}
                                        >
                                            <LabelWithTag
                                                label="Location"
                                                description="Guide attendees where the event is happening."
                                            />
                                            <InputBox
                                                name="address"
                                                placeholder="1020 NW 183rd St, Miami, Florida(FL), 33169"
                                                disabled={true}
                                            />
                                            <img
                                                src={location.lat === 0 ? "/images/explore-venue/map-2.png"
                                                    :
                                                    `https://maps.googleapis.com/maps/api/staticmap?size=600x400&markers=icon%3Ahttp%3A%2F%2Fwww.google.com%2Fmapfiles%2Farrow.png%7C${location.lat}%2C${location.lng}&visible=${location.lat}%2C${location.lng}%7C${location.lat}%2C${location.lng}&key=AIzaSyB4oh8lVm9cjXA-V0GovELsSVY5Lr9NMew`}
                                                className="map"
                                                alt="map"
                                            />
                                        </div>
                                        <MapModalWrapper
                                            heading="Choose venue Location"
                                            rightButtonTitle="Create Tickets"
                                            leftButtonTitle="Cancel"
                                            isModalVisible={isMapModalVisible}
                                            setIsModalVisible={setIsMapModalVisible}
                                            width="800px"
                                            handleOkClick={() => {
                                                // alert("Ok is clicked");
                                            }}
                                            description="yoop"
                                        >
                                            <Map
                                                //handleLocation= {handleLocation}
                                                handleLocation={(
                                                    country: any,
                                                    state: any,
                                                    city: any,
                                                    address: any,
                                                    lat: any,
                                                    lng: any
                                                ) => {
                                                    if (lat && lng && lat !== 0) {
                                                        form.setFieldValue("address", address);
                                                        form.setFieldValue("location", {
                                                            address: address,
                                                            lat: lat,
                                                            lng: lng,
                                                        });
                                                        setIsMapModalVisible(false)
                                                        setLocation({lat, lng})

                                                    }
                                                }}
                                                getLocation={(lat:any, lng:any) => {
                                                    setIsMapModalVisible(false);
                                                    setLocation({lat,lng});
                                                    getLocation(lat, lng);
                                                }}
                                            />
                                        </MapModalWrapper>
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
                                                placeholder="+14166966270"
                                                label="Phone Number"
                                            />
                                            <InputBox
                                                name="facebook"
                                                placeholder="https://www.facebook.com/Organizer"
                                                label="FaceBook"
                                            />
                                            <InputBox
                                                name="instagram"
                                                placeholder=" https://www.instagram.com/Organizer"
                                                label="Instagram"
                                            />
                                            <InputBox
                                                name="twitter"
                                                placeholder=" https://www.eventbritemusic.com/"
                                                label="Twitter"
                                            />
                                            <InputBox
                                                name="youtube"
                                                label="Youtube"
                                                placeholder=" https://www.youtube.com/organizer"
                                            />
                                        </div>
                                    </div>
                                    <input
                                        type="submit"
                                        value="Submit"
                                        ref={submitRef}
                                        style={{display: "none"}}
                                        onClick={() => {
                                        }}
                                    />
                                </Form>
                            )
                        }}
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

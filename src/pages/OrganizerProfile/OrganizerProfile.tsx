import {Form, Formik} from "formik";
import React, {useEffect, useState} from "react";
import {LabelWithTag} from "../../admin/components";
import {attributesList} from "../../admin/components/OrganizationProfileForm/OrganizationAttributesList";
import {} from "../../admin/components/";
import axios from "axios";
import {
    LogoWithHeading,
    NavbarWithSearch,
    UpcomingEvents,
    Reviews,
    InputCheckbox,
    CustomCarousel,
    Loading,
} from "../../components";
import {OutlineButtonStyle} from "../../styles/Common.style";
import {TabPaneStyle, TabsStyle} from "../../styles/Fields.style";

import {VenueDetailsStyle, HeadingWithContentStyle} from "../VenueDetails/VenueDetails.style";
import {useLocation} from "react-router-dom";

import {useLoginContext} from "../../context/authenticationContext";
import {Spinner} from "../../components/Spinner";
import {amenties} from "../../mockData/amenties";
import Dashboard from "../../admin/components/Dashboard/Dashboard";
import Grid from "@mui/material/Grid/Grid";

type HeadingWithContentProps = {
    heading?: string;
    description: string[];
};

const HeadingWithContent = (props: HeadingWithContentProps) => {
    const {heading, description} = props;

    return (
        <HeadingWithContentStyle>
            <h3 className="heading">{heading}</h3>

            <p className="description">{description}</p>
        </HeadingWithContentStyle>
    );
};

export default function VenueDetails() {
    const location: any = useLocation();
    const {state, dispatch} = useLoginContext();
    const [events, setEvents] = React.useState<any>(null);
    const [user, setUser] = useState({
        credits: 0
    })
    const [isLoading, setIsLoading] = React.useState(false);
    const [amentiesState, setamentiesState] = useState(amenties);
    const [reviews, setreviews] = useState(null);
    const venueDetail = location.state.isOrganizer ? location.state.organizerDetail.venuesInfo[0] : location.state.organizerDetail;
    const [count, setCount] = useState(0);
    const fromPartner = location.state.isOrganizer;
    const [selectedTab, setSelectedTab] = useState<any>("one");


    function getVenue() {
        setIsLoading(true);
        axios
            .get(`/v1/users/allEventsOfVenue?organizerId=${location.state.organizerDetail.organizerInfo[0]._id}&search=organizer&review_type=organizer`, {
                headers: {Authorization: `Bearer ${state.authToken}`},
            })
            .then((res) => {
                setEvents(res.data.event[0]);
                setIsLoading(false);
                setCount(count + 1);
            })
            .catch((error) => {
            });
    }

    useEffect(() => {
        const user: any = JSON.parse(localStorage.getItem("data") || "{}");
        axios.get(`v1/users/${user.id}`, {
            headers: {Authorization: `Bearer ${state.authToken}`},
        })
            .then((res: any) => {
                setUser(res.data)
                setCount(count + 1);

            }).catch((e) => {
        })
        const tempAmenties:any = amentiesState.map((item) => {
            item.value = venueDetail.amenities && venueDetail.amenities[item.id];
            return item;
        });
        getVenue();
        setamentiesState(tempAmenties);
        // setAttributesListState(tempAttributesList);
    }, []);

    const getReviews = () => {
        axios
            .get(`/v1/review?venueId=${location.state.organizerDetail.organizerInfo[0]._id}&review_type=organizer`, {
                headers: {Authorization: `Bearer ${state.authToken}`},
            })
            .then((res) => {
                setreviews(res.data);
                setCount(count + 1);

                // setEvents(res.data);
                // setEvents(res.data);
                // setProfilesList(res.data);
            })
            .catch((error) => {
            });
    };


    const openLink = (url:any) => {
        let a:any = document.createElement("a");
        document.body.appendChild(a);
        a.style = "display: none";
        a.href = url;
        a.click();
        document.body.removeChild(a);

    }

    const organizerDetail = location.state.organizerDetail.organizerInfo[0]
    const attributes = organizerDetail?.organizationAttributes;
    // const amenities = events && events?.event?.length>0 && JSON.parse(events.event[0].venueInfo[0].amenities)
    let attributeValues: any = [];
    if (attributes) {

        for (const property in attributes) {
            if (attributes[property]) attributeValues.push({name: property, value: attributes[property]});
        }
    }


    return (
        <>
            {
                !fromPartner &&
                <>
                    <NavbarWithSearch userCredit={user.credits}/>
                    {isLoading && <Loading/>}
                    {events && <VenueDetailsStyle>
                        <div className="left-side">
                            <CustomCarousel
                                // images={[
                                //   venueDetail.coverPhotoUrl,
                                //   ...venueDetail.additionalPhotosUrls,
                                // ]}
                            >
                                {[
                                    organizerDetail.coverPhotoUrl,
                                    ...organizerDetail.additionalPhotosUrls,
                                ]?.map((image: any) => (
                                    <img
                                        alt="carousel tab"
                                        style={{maxHeight:"250px"}}

                                        src={`${process.env.REACT_APP_BASE_URL}/images/${image}`}
                                    />
                                ))}
                            </CustomCarousel>
                            <LogoWithHeading
                                heading={organizerDetail.organizerName}
                                logo={organizerDetail.logoUrl}
                                averageRating={events.averageRating}
                                reviewCount={events.reviewCount}
                            />

                            <div className="buttons-wrapper">
                                {venueDetail?.categoryTags ? venueDetail.categoryTags.map((categoryTag: any) => (
                                    <OutlineButtonStyle>{categoryTag}</OutlineButtonStyle>
                                )) : venueDetail.venuesInfo[0].categoryTags.map((categoryTag: any) => (
                                    <OutlineButtonStyle>{categoryTag}</OutlineButtonStyle>
                                ))}
                            </div>

                            <TabsStyle
                                defaultActiveKey="1"
                                onChange={(key) => {
                                    if (key === "2") {
                                        setEvents(events)
                                    } else if (key === "3") {
                                        getReviews();
                                    }
                                }}
                            >
                                <TabPaneStyle tab="Info" key="1">
                                    <HeadingWithContent description={[organizerDetail?.organizerBio]}
                                                        heading={organizerDetail.organizerName}/>
                                    {/* <HeadingWithContent
                heading="This is heading for venue"
                description={[
                  "Asperiores eveniet tempora possimus ut. Vel minus voluptas et quo. Minus molestias fugiat et. Ut deserunt provident ab id numquam quo laborum. Asperiores facilis voluptates voluptatibus magnam. Et est quo expedita molestiae vel porro. Dicta est earum ab dignissimos sit. Dolorem deserunt eius. Ut quia dolore alias. Ad possimus tenetur consequatur quae odit deleniti magnam qui quidem. Et distinctio et rerum illo dolor. Voluptatem impedit enim sint ducimus corrupti eaque suscipit fuga. Asperiores eveniet tempora possimus ut. Vel minus voluptas et quo. Minus molestias fugiat et. Ut deserunt provident ab id numquam quo laborum. Asperiores facilis voluptates voluptatibus magnam. Et est quo expedita molestiae vel porro. Dicta est earum ab dignissimos sit. Dolorem deserunt eius. Ut quia dolore alias. Ad possimus tenetur consequatur quae odit deleniti magnam qui quidem. Et distinctio et rerum illo dolor. Voluptatem impedit enim sint ducimus corrupti eaque suscipit fuga. Asperiores eveniet tempora possimus ut. Vel minus voluptas et quo. Minus molestias fugiat et. Ut deserunt provident ab id numquam quo laborum. Asperiores facilis voluptates voluptatibus magnam. Et est quo expedita molestiae vel porro. Dicta est earum ab dignissimos sit. Dolorem deserunt eius. Ut quia dolore alias. Ad possimus tenetur consequatur quae odit deleniti magnam qui quidem. Et distinctio et rerum illo dolor. Voluptatem impedit enim sint ducimus corrupti eaque suscipit fuga.",
                ]}
              /> */}
                                </TabPaneStyle>
                                <TabPaneStyle tab="Upcoming Events" key="2">
                                    <div className="table-wrapper" onClick={() => {

                                    }}>
                                        {isLoading ? <Spinner/> :
                                            <UpcomingEvents events={events.events} venue={venueDetail}
                                                            isDetails={true}/>}
                                    </div>
                                </TabPaneStyle>
                                <TabPaneStyle tab="Reviews" key="3">
                                    <div className="table-wrapper">
                                        <Reviews
                                            reviews={reviews}
                                            venueId={location.state.organizerDetail.organizerInfo[0]._id}
                                            getReviews={getReviews}
                                            review_type={"organizer"}
                                            getVenue={getVenue}
                                            count={count}
                                        />
                                    </div>
                                </TabPaneStyle>
                            </TabsStyle>
                        </div>


                        <div className="venue-info-wrapper">

                            <Grid container alignItems={"center"} justifyContent={"space-between"} style={{marginTop:"50px"}}>
                                {venueDetail["socialMediaAndMarketingLinks"].phoneNumber &&
                                <Grid item onClick={(e)=>openLink('tel:'+venueDetail["socialMediaAndMarketingLinks"].phoneNumber)}>
                                    <img alt="icon" src="/images/icons/phone-icon.svg"/>
                                </Grid>
                                }
                                {venueDetail["socialMediaAndMarketingLinks"].youtube &&
                                <Grid style={{cursor:"pointer"}} item onClick={(e)=>openLink(venueDetail["socialMediaAndMarketingLinks"].youtube)}>
                                    <img alt="icon" src="/images/icons/website-icon.svg"/>
                                </Grid>
                                }
                                {venueDetail["socialMediaAndMarketingLinks"].instagram &&
                                <Grid style={{cursor:"pointer"}}  item onClick={(e)=>openLink(venueDetail["socialMediaAndMarketingLinks"].instagram)}>
                                    <img alt="icon" src="/images/icons/instagram-icon.svg"/>
                                </Grid>
                                }
                                {venueDetail["socialMediaAndMarketingLinks"].facebook &&
                                <Grid style={{cursor:"pointer"}} item onClick={(e)=>openLink(venueDetail["socialMediaAndMarketingLinks"].facebook)}>
                                    <img alt="icon" src="/images/icons/facebook-icon.svg"/>
                                </Grid>
                                }
                                {venueDetail["socialMediaAndMarketingLinks"].twitter &&
                                <Grid style={{cursor:"pointer"}} item onClick={(e)=>openLink(venueDetail["socialMediaAndMarketingLinks"].twitter)}>
                                    <img alt="icon" src="/images/icons/twitter-icon.svg"/>
                                </Grid>
                                }
                                <Grid style={{cursor:"pointer"}} item onClick={(e)=>
                                    openLink(`http://maps.google.com?q=${venueDetail.location.lat},${venueDetail.location.lng}`)}>
                                    <img alt="icon" src="/images/icons/address-icon.svg"/>
                                </Grid>

                            </Grid>



                            {
                                attributeValues.length > 0 &&
                                <Formik initialValues={{}} onSubmit={() => {
                                }}>
                                    {() => (
                                        <Form className="attributes-wrapper">
                                            <LabelWithTag label={"Attributes"} tagType="none"/>
                                            <div className="list-wrapper">
                                                {attributeValues.map((attribute: any) => {
                                                    return (
                                                        <InputCheckbox
                                                            name={attribute.name}
                                                            onClick={() => {
                                                            }}
                                                            className=""
                                                            label={attribute.name}
                                                            isCorrectOption={attribute.value}
                                                        />
                                                    );
                                                })}
                                            </div>
                                        </Form>
                                    )}
                                </Formik>
                            }
                        </div>
                    </VenueDetailsStyle>}
                </>
            }
            {
                fromPartner &&
                <>

                    {isLoading && <Loading/>}
                    <Dashboard hideSidebar={true}>
                        {events && <VenueDetailsStyle>
                            <div className="left-side">
                                <CustomCarousel
                                    // images={[
                                    //   venueDetail.coverPhotoUrl,
                                    //   ...venueDetail.additionalPhotosUrls,
                                    // ]}
                                >
                                    {[
                                        organizerDetail.coverPhotoUrl,
                                        ...organizerDetail.additionalPhotosUrls,
                                    ]?.map((image: any) => (
                                        <img
                                            alt="carousel tab"
                                            style={{maxHeight:"250px"}}
                                            src={`${process.env.REACT_APP_BASE_URL}/images/${image}`}
                                        />
                                    ))}
                                </CustomCarousel>
                                <LogoWithHeading
                                    heading={venueDetail.name}
                                    logo={venueDetail.logoUrl}
                                    averageRating={events.averageRating}
                                    reviewCount={events.reviewCount}
                                />

                                <div className="buttons-wrapper" id={"tab"}>
                                    {venueDetail.categoryTags.map((categoryTag: any) => (
                                        <OutlineButtonStyle>{categoryTag}</OutlineButtonStyle>
                                    ))}
                                </div>

                                <TabsStyle
                                    defaultActiveKey="1"
                                    onChange={(key) => {
                                        if (key === "2") {
                                            setEvents(events)
                                        } else if (key === "3") {
                                            getReviews();
                                        }
                                    }}
                                >
                                    <TabPaneStyle tab="Info" key="1">
                                        <HeadingWithContent description={[venueDetail?.venueBio]}
                                                            heading={venueDetail.name}/>
                                        {/* <HeadingWithContent
                heading="This is heading for venue"
                description={[
                  "Asperiores eveniet tempora possimus ut. Vel minus voluptas et quo. Minus molestias fugiat et. Ut deserunt provident ab id numquam quo laborum. Asperiores facilis voluptates voluptatibus magnam. Et est quo expedita molestiae vel porro. Dicta est earum ab dignissimos sit. Dolorem deserunt eius. Ut quia dolore alias. Ad possimus tenetur consequatur quae odit deleniti magnam qui quidem. Et distinctio et rerum illo dolor. Voluptatem impedit enim sint ducimus corrupti eaque suscipit fuga. Asperiores eveniet tempora possimus ut. Vel minus voluptas et quo. Minus molestias fugiat et. Ut deserunt provident ab id numquam quo laborum. Asperiores facilis voluptates voluptatibus magnam. Et est quo expedita molestiae vel porro. Dicta est earum ab dignissimos sit. Dolorem deserunt eius. Ut quia dolore alias. Ad possimus tenetur consequatur quae odit deleniti magnam qui quidem. Et distinctio et rerum illo dolor. Voluptatem impedit enim sint ducimus corrupti eaque suscipit fuga. Asperiores eveniet tempora possimus ut. Vel minus voluptas et quo. Minus molestias fugiat et. Ut deserunt provident ab id numquam quo laborum. Asperiores facilis voluptates voluptatibus magnam. Et est quo expedita molestiae vel porro. Dicta est earum ab dignissimos sit. Dolorem deserunt eius. Ut quia dolore alias. Ad possimus tenetur consequatur quae odit deleniti magnam qui quidem. Et distinctio et rerum illo dolor. Voluptatem impedit enim sint ducimus corrupti eaque suscipit fuga.",
                ]}
              /> */}
                                    </TabPaneStyle>
                                    <TabPaneStyle tab="Upcoming Events" key="2">
                                        <div className="table-wrapper" onClick={() => {

                                        }}>
                                            {isLoading ? <Spinner/> :
                                                <UpcomingEvents
                                                    events={events.events}
                                                    venue={venueDetail}
                                                    isDetails={true}
                                                    fromPartner={fromPartner}/>}
                                        </div>
                                    </TabPaneStyle>
                                    <TabPaneStyle tab="Reviews" key="3">
                                        <div className="table-wrapper">
                                            <Reviews
                                                reviews={reviews}
                                                venueId={venueDetail._id}
                                                getReviews={getReviews}
                                                getVenue={getVenue}
                                                review_type={"venue"}
                                                count={count}
                                                fromPartner={fromPartner}
                                            />
                                        </div>
                                    </TabPaneStyle>
                                </TabsStyle>
                            </div>

                            <div className="venue-info-wrapper">
                                <div
                                    className="map-wrapper"
                                    onClick={() =>
                                        window.open(
                                            `http://maps.google.com?q=${venueDetail.location.lat},${venueDetail.location.lng}`,
                                            "_blank"
                                        )
                                    }
                                >
                                    <img
                                        src={!venueDetail.location ? "/images/explore-venue/map-2.png"
                                            :
                                            `https://maps.googleapis.com/maps/api/staticmap?size=600x400&markers=icon%3Ahttps://musicpassonline.com:3000/images/location.png%7C${venueDetail.location.lat}%2C${venueDetail.location.lng}&visible=${venueDetail.location.lat}%2C${venueDetail.location.lng}%7C${venueDetail.location.lat}%2C${venueDetail.location.lng}&style=element%3Ageometry%7Ccolor%3A0x242f3e&style=element%3Alabels.text.stroke%7Ccolor%3A0x242f3e&style=element%3Alabels.text.fill%7Ccolor%3A0x746855&style=feature%3Aadministrative.locality%7Celement%3Alabels.text.fill%7Ccolor%3A0xd59563&style=feature%3Apoi%7Celement%3Alabels.text.fill%7Ccolor%3A0xd59563&style=feature%3Apoi.park%7Celement%3Ageometry%7Ccolor%3A0x263c3f&style=feature%3Apoi.park%7Celement%3Alabels.text.fill%7Ccolor%3A0x6b9a76&style=feature%3Aroad%7Celement%3Ageometry%7Ccolor%3A0x38414e&style=feature%3Aroad%7Celement%3Ageometry.stroke%7Ccolor%3A0x212a37&style=feature%3Aroad%7Celement%3Alabels.text.fill%7Ccolor%3A0x9ca5b3&style=feature%3Aroad.highway%7Celement%3Ageometry%7Ccolor%3A0x746855&style=feature%3Aroad.highway%7Celement%3Ageometry.stroke%7Ccolor%3A0x1f2835&style=feature%3Aroad.highway%7Celement%3Alabels.text.fill%7Ccolor%3A0xf3d19c&style=feature%3Atransit%7Celement%3Ageometry%7Ccolor%3A0x2f3948&style=feature%3Atransit.station%7Celement%3Alabels.text.fill%7Ccolor%3A0xd59563&style=feature%3Awater%7Celement%3Ageometry%7Ccolor%3A0x17263c&style=feature%3Awater%7Celement%3Alabels.text.fill%7Ccolor%3A0x515c6d&style=feature%3Awater%7Celement%3Alabels.text.stroke%7Ccolor%3A0x17263c&key=AIzaSyB4oh8lVm9cjXA-V0GovELsSVY5Lr9NMew`}
                                        className="map"
                                        alt="map"
                                    />
                                </div>

                                <div
                                    style={{cursor: "pointer"}}
                                    className="icon-with-content"
                                    onClick={() =>
                                        window.open(
                                            `http://maps.google.com?q=${venueDetail.location.lat},${venueDetail.location.lng}`,
                                            "_blank"
                                        )
                                    }
                                >
                                    <img alt="icon" src="/images/icons/address-icon.svg"/>
                                    <span>{venueDetail.location.address}</span>
                                </div>

                                {venueDetail["socialMediaAndMarketingLinks"].phoneNumber && (
                                    <div className="icon-with-content">
                                        <img alt="icon" src="/images/icons/phone-icon.svg"/>
                                        <span>
                {venueDetail["socialMediaAndMarketingLinks"].phoneNumber}
              </span>
                                    </div>
                                )}

                                {venueDetail["socialMediaAndMarketingLinks"].youtube && (
                                    <div className="icon-with-content">
                                        <img alt="icon" src="/images/icons/website-icon.svg"/>
                                        <span>{venueDetail["socialMediaAndMarketingLinks"].youtube}</span>
                                    </div>
                                )}

                                {venueDetail["socialMediaAndMarketingLinks"].instagram && (
                                    <div className="icon-with-content">
                                        <img alt="icon" src="/images/icons/instagram-icon.svg"/>
                                        <span>
                {venueDetail["socialMediaAndMarketingLinks"].instagram}
              </span>
                                    </div>
                                )}

                                {venueDetail["socialMediaAndMarketingLinks"].facebook && (
                                    <div className="icon-with-content">
                                        <img alt="icon" src="/images/icons/facebook-icon.svg"/>
                                        <span>
                {venueDetail["socialMediaAndMarketingLinks"].facebook}
              </span>
                                    </div>
                                )}

                                {venueDetail["socialMediaAndMarketingLinks"].twitter && (
                                    <div className="icon-with-content">
                                        <img alt="icon" src="/images/icons/twitter-icon.svg"/>
                                        <span>{venueDetail["socialMediaAndMarketingLinks"].twitter}</span>
                                    </div>
                                )}
                                {attributeValues && attributeValues.length > 0 &&
                                <Formik initialValues={{}} onSubmit={() => {
                                }}>
                                    {() => (
                                        <Form className="attributes-wrapper">
                                            <LabelWithTag label={"Attributes"} tagType="none"/>
                                            <div className="list-wrapper">
                                                {attributeValues.map((attribute: any) => {
                                                    return (
                                                        <InputCheckbox
                                                            name={attribute.name}
                                                            onClick={() => {
                                                            }}
                                                            className=""
                                                            label={attribute.name}
                                                            isCorrectOption={attribute.value}
                                                        />
                                                    );
                                                })}
                                            </div>
                                        </Form>
                                    )}
                                </Formik>
                                }


                            </div>
                        </VenueDetailsStyle>}
                    </Dashboard>
                </>
            }
        </>
    );
}

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

import { VenueDetailsStyle,HeadingWithContentStyle } from "../VenueDetails/VenueDetails.style";
import {useLocation} from "react-router-dom";

import {useLoginContext} from "../../context/authenticationContext";
import {Spinner} from "../../components/Spinner";
import {amenties} from "../../mockData/amenties";

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
    const venueDetail = window.location.href.includes("dashboard")?location.state.organizerDetail.venuesInfo[0]: location.state.organizerDetail;
    function getVenue() {
        setIsLoading(true);
        axios
            .get(`/v1/users/allEventsOfVenue?organizerId=${location.state.organizerDetail.organizerInfo[0]._id}&search=organizer`, {
                headers: {Authorization: `Bearer ${state.authToken}`},
            })
            .then((res) => {
                setEvents(res.data.event[0]);
                setIsLoading(false);
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
            }).catch((e) => {
        })
        const tempAmenties = amentiesState.map((item) => {
            item.value = venueDetail.amenities[item.id];
            return item;
        });
        getVenue();
        setamentiesState(tempAmenties);
        // setAttributesListState(tempAttributesList);
    }, []);

    const getReviews = () => {
        axios
            .get(`/v1/review?venueId=${venueDetail._id}`, {
                headers: {Authorization: `Bearer ${state.authToken}`},
            })
            .then((res) => {
                setreviews(res.data);
                // setEvents(res.data);
                // setEvents(res.data);
                // setProfilesList(res.data);
            })
            .catch((error) => {
            });
    };
    const organizerDetail = location.state.organizerDetail.organizerInfo[0]
    const attributes = organizerDetail?.organizationAttributes;
    // const amenities = events && events?.event?.length>0 && JSON.parse(events.event[0].venueInfo[0].amenities)
    let attributeValues:any = [];
   if(attributes)
    {
        for (const property in attributes) {
            attributeValues.push({name:property,value:attributes[property]});
        }
    }

    return (
        <>
            <NavbarWithSearch userCredit={user.credits}/>
            {isLoading&&<Loading/>}
            {events&&<VenueDetailsStyle>
                <div className="left-side">
                    <CustomCarousel
                        // images={[
                        //   venueDetail.coverPhotoUrl,
                        //   ...venueDetail.additionalPhotosUrls,
                        // ]}
                    >
                        {[
                            organizerDetail.coverPhotoUrl,
                            organizerDetail.additionalPhotosUrls[0],
                        ]?.map((image: any) => (
                            <img
                                alt="carousel tab"
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
                        {venueDetail?.categoryTags?venueDetail.categoryTags.map((categoryTag: any) => (
                            <OutlineButtonStyle>{categoryTag}</OutlineButtonStyle>
                        )): venueDetail.venuesInfo[0].categoryTags.map((categoryTag: any) => (
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
                            <HeadingWithContent description={[organizerDetail?.organizerBio]} heading={organizerDetail.organizerName}/>
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
                                {isLoading ? <Spinner/> : <UpcomingEvents events={events.events} venue={venueDetail}/>}
                            </div>
                        </TabPaneStyle>
                        <TabPaneStyle tab="Reviews" key="3">
                            <div className="table-wrapper">
                                <Reviews
                                    reviews={reviews}
                                    venueId={venueDetail._id}
                                    getReviews={getReviews}
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
                            src="/images/explore-venue/map-2.png"
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

                    {organizerDetail["socialMediaAndMarketingLinks"].phoneNumber && (
                        <div className="icon-with-content">
                            <img alt="icon" src="/images/icons/phone-icon.svg"/>
                            <span>
                {organizerDetail["socialMediaAndMarketingLinks"].phoneNumber}
              </span>
                        </div>
                    )}

                    {organizerDetail["socialMediaAndMarketingLinks"].youtube && (
                        <div className="icon-with-content">
                            <img alt="icon" src="/images/icons/website-icon.svg"/>
                            <span>{organizerDetail["socialMediaAndMarketingLinks"].youtube}</span>
                        </div>
                    )}

                    {organizerDetail["socialMediaAndMarketingLinks"].instagram && (
                        <div className="icon-with-content">
                            <img alt="icon" src="/images/icons/instagram-icon.svg"/>
                            <span>
                {organizerDetail["socialMediaAndMarketingLinks"].instagram}
              </span>
                        </div>
                    )}

                    {organizerDetail["socialMediaAndMarketingLinks"].facebook && (
                        <div className="icon-with-content">
                            <img alt="icon" src="/images/icons/facebook-icon.svg"/>
                            <span>
                {organizerDetail["socialMediaAndMarketingLinks"].facebook}
              </span>
                        </div>
                    )}

                    {organizerDetail["socialMediaAndMarketingLinks"].twitter && (
                        <div className="icon-with-content">
                            <img alt="icon" src="/images/icons/twitter-icon.svg"/>
                            <span>{organizerDetail["socialMediaAndMarketingLinks"].twitter}</span>
                        </div>
                    )}

                    <Formik initialValues={{}} onSubmit={() => {
                    }}>
                        {() => (
                            <Form className="attributes-wrapper">
                                <LabelWithTag label={"Attributes"} tagType="none"/>
                                <div className="list-wrapper">
                                    {attributeValues.map((attribute:any) => {
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
                </div>
            </VenueDetailsStyle>}
        </>
    );
}

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

import {
    HeadingWithContentStyle,
    VenueDetailsStyle,
} from "./VenueDetails.style";
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
    const [count,setCount]=useState(0);
    const [events, setEvents] = React.useState<any>(null);
    const [user, setUser] = useState({
        credits: 0
    })
    const [isLoading, setIsLoading] = React.useState(false);
    const [amentiesState, setamentiesState] = useState(amenties);
    const [reviews, setreviews] = useState(null);
    const venueDetail = location.state.venueDetail;
    function getVenue() {
        setIsLoading(true);
        axios
            .get(`/v1/users/allEventsOfVenue?venueId=${venueDetail._id}&review_type=venue`, {
                headers: {Authorization: `Bearer ${state.authToken}`},
            })
            .then((res) => {
                setEvents(res.data.event[0]);
                setCount(count+1);
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
            .get(`/v1/review?venueId=${venueDetail._id}&review_type=venue`, {
                headers: {Authorization: `Bearer ${state.authToken}`},
            })
            .then((res) => {
                setreviews(res.data);
                setCount(count+1);
                // setEvents(res.data);
                // setEvents(res.data);
                // setProfilesList(res.data);
            })
            .catch((error) => {
            });
    };

    const attributes = events && events.event && events.event.length > 0 && events.event[0] && events.event[0].organizerInfo[0].organizationAttributes;
    const amenities = venueDetail  && JSON.parse(venueDetail?.amenities)
    let attributeValues:any = [];
    if(amenities)
    {
        for (const property in amenities) {
            attributeValues.push({name:amenities[property],value:amenties});
        }
    }
    // // else{
    // //     for (const property in window.location.href.includes("dashboard")?amenities:attributes) {
    // //         console.log("property",property,attributes)
    // //         attributeValues.push({name:property,value:attributes[property]});
    // //     }
    // }


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
                            venueDetail.coverPhotoUrl,
                            venueDetail.additionalPhotosUrls[0],
                        ]?.map((image: any) => (
                            <img
                                alt="carousel tab"
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
                            <HeadingWithContent description={[venueDetail?.venueBio]} heading={venueDetail.name}/>
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
                                {isLoading ? <Spinner/> : <UpcomingEvents events={events.events} venue={venueDetail} isDetails={true}/>}
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
                                `https://maps.googleapis.com/maps/api/staticmap?size=600x400&markers=icon%3Ahttps://musicpassonline.com:3000/images/location.png%7C${venueDetail.location.lat}%2C${venueDetail.location.lng}&visible=${venueDetail.location.lat}%2C${venueDetail.location.lng}%7C${venueDetail.location.lat}%2C${venueDetail.location.lng}&style=element:labels.text.stroke%7color:0x242f3e%7Celement:geometry%7Ccolor:0x242f3e&key=AIzaSyB4oh8lVm9cjXA-V0GovELsSVY5Lr9NMew`}
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
                    {  attributeValues && attributeValues.length>0 &&
                        <Formik initialValues={{}} onSubmit={() => {
                        }}>
                            {() => (
                                <Form className="attributes-wrapper">
                                    <LabelWithTag label={"Amenities"} tagType="none"/>
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
    );
}

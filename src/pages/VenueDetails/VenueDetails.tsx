import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { LabelWithTag } from "../../admin/components";
import { attributesList } from "../../admin/components/OrganizationProfileForm/OrganizationAttributesList";
import {} from "../../admin/components/";
import axios from "axios";
import {
  LogoWithHeading,
  NavbarWithSearch,
  UpcomingEvents,
  Reviews,
  InputCheckbox,
  CustomCarousel,
} from "../../components";
import { OutlineButtonStyle } from "../../styles/Common.style";
import { TabPaneStyle, TabsStyle } from "../../styles/Fields.style";

import {
  HeadingWithContentStyle,
  VenueDetailsStyle,
} from "./VenueDetails.style";
import { useLocation } from "react-router-dom";

import { useLoginContext } from "../../context/authenticationContext";
import { Spinner } from "../../components/Spinner";
import { amenties } from "../../mockData/amenties";

type HeadingWithContentProps = {
  heading?: string;
  description: string[];
};

const HeadingWithContent = (props: HeadingWithContentProps) => {
  const { heading, description } = props;

  return (
    <HeadingWithContentStyle>
      <h3 className="heading">{heading}</h3>

      <p className="description">{description}</p>
    </HeadingWithContentStyle>
  );
};

export default function VenueDetails() {
  const location: any = useLocation();
  const { state, dispatch } = useLoginContext();
  const [events, setEvents] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [amentiesState, setamentiesState] = useState(amenties);
  const [reviews, setreviews] = useState(null);
  const venueDetail = location.state.venueDetail;
  console.log(venueDetail,'state',location.state);

  function callback() {
    setIsLoading(true);
    axios
      .get(`/v1/users/allEventsOfVenue?venueId=${venueDetail._id}`, {
        headers: { Authorization: `Bearer ${state.authToken}` },
      })
      .then((res) => {
        console.log(res.data);
        setEvents(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  useEffect(() => {
    const tempAmenties = amentiesState.map((item) => {
      item.value = venueDetail.amenities[item.id];
      return item;
    });
    setamentiesState(tempAmenties);
    // setAttributesListState(tempAttributesList);
  }, []);

  const getReviews = () => {
    axios
      .get(`/v1/review?venueId=${venueDetail._id}`, {
        headers: { Authorization: `Bearer ${state.authToken}` },
      })
      .then((res) => {
        console.log(res.data);
        setreviews(res.data);
        // setEvents(res.data);
        // setEvents(res.data);
        // setProfilesList(res.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  return (
    <>
      <NavbarWithSearch />
      <VenueDetailsStyle>
        <div className="left-side">
          <CustomCarousel
          // images={[
          //   venueDetail.coverPhotoUrl,
          //   ...venueDetail.additionalPhotosUrls,
          // ]}
          >
            {[
              venueDetail.coverPhotoUrl,
              ...venueDetail.additionalPhotosUrls,
            ]?.map((image: any) => (
              <img
                alt="carousel tab"
                src={`${process.env.REACT_APP_BASE_URL}/${image}`}
              />
            ))}
          </CustomCarousel>
          <LogoWithHeading
            heading={venueDetail.name}
            logo={venueDetail.logoUrl}
          />

          <div className="buttons-wrapper">
            {venueDetail.categoryTags.map((categoryTag: any) => (
              <OutlineButtonStyle>{categoryTag}</OutlineButtonStyle>
            ))}
          </div>

          <TabsStyle
            defaultActiveKey="1"
            onChange={(key) => {
              if (key === "2") {
                  setEvents(venueDetail.events)
              } else if (key === "3") {
                getReviews();
              }
            }}
          >
            <TabPaneStyle tab="Info" key="1">
              <HeadingWithContent description={[venueDetail.venueBio]} heading={venueDetail.name} />
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
                {isLoading ? <Spinner /> : <UpcomingEvents events={events} />}
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
            style={{ cursor: "pointer" }}
            className="icon-with-content"
            onClick={() =>
              window.open(
                `http://maps.google.com?q=${venueDetail.location.lat},${venueDetail.location.lng}`,
                "_blank"
              )
            }
          >
            <img alt="icon" src="/images/icons/address-icon.svg" />
            <span>{venueDetail.location.address}</span>
          </div>

          {venueDetail["socialMediaAndMarketingLinks"].phoneNumber && (
            <div className="icon-with-content">
              <img alt="icon" src="/images/icons/phone-icon.svg" />
              <span>
                {venueDetail["socialMediaAndMarketingLinks"].phoneNumber}
              </span>
            </div>
          )}

          {venueDetail["socialMediaAndMarketingLinks"].youtube && (
            <div className="icon-with-content">
              <img alt="icon" src="/images/icons/website-icon.svg" />
              <span>{venueDetail["socialMediaAndMarketingLinks"].youtube}</span>
            </div>
          )}

          {venueDetail["socialMediaAndMarketingLinks"].instagram && (
            <div className="icon-with-content">
              <img alt="icon" src="/images/icons/instagram-icon.svg" />
              <span>
                {venueDetail["socialMediaAndMarketingLinks"].instagram}
              </span>
            </div>
          )}

          {venueDetail["socialMediaAndMarketingLinks"].facebook && (
            <div className="icon-with-content">
              <img alt="icon" src="/images/icons/facebook-icon.svg" />
              <span>
                {venueDetail["socialMediaAndMarketingLinks"].facebook}
              </span>
            </div>
          )}

          {venueDetail["socialMediaAndMarketingLinks"].twitter && (
            <div className="icon-with-content">
              <img alt="icon" src="/images/icons/twitter-icon.svg" />
              <span>{venueDetail["socialMediaAndMarketingLinks"].twitter}</span>
            </div>
          )}

          <Formik initialValues={{}} onSubmit={() => {}}>
            {() => (
              <Form className="attributes-wrapper">
                <LabelWithTag label="Attributes" tagType="none" />
                <div className="list-wrapper">
                  {amentiesState.map((index) => {
                    return (
                      index.value && (
                        <InputCheckbox
                          name={index.name}
                          onClick={() => {}}
                          className=""
                          label={index.name}
                          isCorrectOption={index.value}
                        />
                      )
                    );
                  })}
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </VenueDetailsStyle>
    </>
  );
}

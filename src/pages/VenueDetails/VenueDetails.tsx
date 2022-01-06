import React from "react";

import {
  CustomCarousel,
  LogoWithHeading,
  NavbarWithSearch,
  UpcomingEvents,
  Reviews,
  ImagesBanner
} from "../../components";
import { OutlineButtonStyle } from "../../styles/Common.style";
import { TabPaneStyle, TabsStyle } from "../../styles/Fields.style";

import {
  HeadingWithContentStyle,
  VenueDetailsStyle,
} from "./VenueDetails.style";

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

const imagesList = [
  "/images/explore-venue/image4.png",
  "/images/explore-venue/image1.png",
  "/images/explore-venue/image2.png",
  "/images/explore-venue/image3.png",
  "/images/explore-venue/image4.png",
  "/images/explore-venue/image1.png",
  "/images/explore-venue/image2.png",
  "/images/explore-venue/image3.png",
]

export default function VenueDetails() {
  return (
    <>
      <NavbarWithSearch />
      <VenueDetailsStyle>
        <div className="left-side">
          <LogoWithHeading />

          <ImagesBanner imagesList={imagesList} />
          {/* <CustomCarousel /> */}

          <div className="buttons-wrapper">
            <OutlineButtonStyle>Night Club</OutlineButtonStyle>
            <OutlineButtonStyle>Special Permit</OutlineButtonStyle>
          </div>

          <TabsStyle defaultActiveKey="1">
            <TabPaneStyle tab="Info" key="1">
              <HeadingWithContent
                description={[
                  "Asperiores eveniet tempora possimus ut. Vel minus voluptas et quo. Minus molestias fugiat et. Ut deserunt provident ab id numquam quo laborum. Asperiores facilis voluptates voluptatibus magnam. Et est quo expedita molestiae vel porro. Dicta est earum ab dignissimos sit. Dolorem deserunt eius. Ut quia dolore alias. Ad possimus tenetur consequatur quae odit deleniti magnam qui quidem. Et distinctio et rerum illo dolor. Voluptatem impedit enim sint ducimus corrupti eaque suscipit fuga. Asperiores eveniet tempora possimus ut. Vel minus voluptas et quo. Minus molestias fugiat et. Ut deserunt provident ab id numquam quo laborum. Asperiores facilis voluptates voluptatibus magnam. Et est quo expedita molestiae vel porro. Dicta est earum ab dignissimos sit. Dolorem deserunt eius. Ut quia dolore alias. Ad possimus tenetur consequatur quae odit deleniti magnam qui quidem. Et distinctio et rerum illo dolor. Voluptatem impedit enim sint ducimus corrupti eaque suscipit fuga. Asperiores eveniet tempora possimus ut. Vel minus voluptas et quo. Minus molestias fugiat et. Ut deserunt provident ab id numquam quo laborum. Asperiores facilis voluptates voluptatibus magnam. Et est quo expedita molestiae vel porro. Dicta est earum ab dignissimos sit. Dolorem deserunt eius. Ut quia dolore alias. Ad possimus tenetur consequatur quae odit deleniti magnam qui quidem. Et distinctio et rerum illo dolor. Voluptatem impedit enim sint ducimus corrupti eaque suscipit fuga.",
                ]}
              />
              <HeadingWithContent
                heading="This is heading for venue"
                description={[
                  "Asperiores eveniet tempora possimus ut. Vel minus voluptas et quo. Minus molestias fugiat et. Ut deserunt provident ab id numquam quo laborum. Asperiores facilis voluptates voluptatibus magnam. Et est quo expedita molestiae vel porro. Dicta est earum ab dignissimos sit. Dolorem deserunt eius. Ut quia dolore alias. Ad possimus tenetur consequatur quae odit deleniti magnam qui quidem. Et distinctio et rerum illo dolor. Voluptatem impedit enim sint ducimus corrupti eaque suscipit fuga. Asperiores eveniet tempora possimus ut. Vel minus voluptas et quo. Minus molestias fugiat et. Ut deserunt provident ab id numquam quo laborum. Asperiores facilis voluptates voluptatibus magnam. Et est quo expedita molestiae vel porro. Dicta est earum ab dignissimos sit. Dolorem deserunt eius. Ut quia dolore alias. Ad possimus tenetur consequatur quae odit deleniti magnam qui quidem. Et distinctio et rerum illo dolor. Voluptatem impedit enim sint ducimus corrupti eaque suscipit fuga. Asperiores eveniet tempora possimus ut. Vel minus voluptas et quo. Minus molestias fugiat et. Ut deserunt provident ab id numquam quo laborum. Asperiores facilis voluptates voluptatibus magnam. Et est quo expedita molestiae vel porro. Dicta est earum ab dignissimos sit. Dolorem deserunt eius. Ut quia dolore alias. Ad possimus tenetur consequatur quae odit deleniti magnam qui quidem. Et distinctio et rerum illo dolor. Voluptatem impedit enim sint ducimus corrupti eaque suscipit fuga.",
                ]}
              />
            </TabPaneStyle>
            <TabPaneStyle tab="Upcoming Events" key="2">
              <div className="table-wrapper">
                <UpcomingEvents />
              </div>
            </TabPaneStyle>
            <TabPaneStyle tab="Reviews" key="3">
              <div className="table-wrapper">
                <Reviews />
              </div>
            </TabPaneStyle>
          </TabsStyle>
        </div>

        <div className="venue-info-wrapper">
          <div className="map-wrapper">
            <img
              src="/images/explore-venue/map-2.png"
              className="map"
              alt="map"
            />
          </div>

          <div className="icon-with-content">
            <img alt="icon" src="/images/icons/address-icon.svg" />
            <span>1020 NW 183rd St, Miami, Florida(FL), 33169</span>
          </div>

          <div className="icon-with-content">
            <img alt="icon" src="/images/icons/phone-icon.svg" />
            <span>+1 305 705 2747</span>
          </div>

          <div className="icon-with-content">
            <img alt="icon" src="/images/icons/website-icon.svg" />
            <span>www.website.com</span>
          </div>

          <div className="icon-with-content">
            <img alt="icon" src="/images/icons/instagram-icon.svg" />
            <span>@instagram</span>
          </div>

          <div className="icon-with-content">
            <img alt="icon" src="/images/icons/facebook-icon.svg" />
            <span>@facebook</span>
          </div>

          <div className="icon-with-content">
            <img alt="icon" src="/images/icons/twitter-icon.svg" />
            <span>@twitter</span>
          </div>
        </div>
      </VenueDetailsStyle>
    </>
  );
}

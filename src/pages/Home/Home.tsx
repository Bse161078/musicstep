import React from "react";

import {
  HeadingWithButton,
  HeroSection,
  IconWithContent,
  ImageWithContentCard,
  SectionWithButtons,
  SectionWrapper,
  ValueWithButton,
} from "../../components";
import { HomeStyle } from "./Home.style";

export default function Home() {
  return (
    <HomeStyle>
      <HeroSection />

      <SectionWrapper
        type="dark"
        heading="Have You Ever Wished Attending Concerts Was More Affordable?"
      >
        <HeadingWithButton />
      </SectionWrapper>

      <SectionWrapper
        className="icons-content-wrapper"
        heading="Flexibility In Music & Dance Events, Not Seen Before."
      >
        <IconWithContent
          icon="/images/hero/cancel-reservation.svg"
          heading="Cancel Reservation"
          description="Remove your music event reservation up to 24 hours before event without penalty."
        />
        <IconWithContent
          icon="/images/hero/membership.svg"
          heading="Maximize Membership"
          description="Roll over unused credits up to the total number of credits in your plan."
        />
        <IconWithContent
          icon="/images/hero/add-credit.svg"
          heading="Add Credits To Membership"
          description="Book more events without changing your monthly plan."
        />
        <IconWithContent
          icon="/images/hero/unenroll.svg"
          heading="Un-Enroll Anytime"
          description="Change, freeze, or cancel your monthly plan at your discretion."
        />
      </SectionWrapper>

      <SectionWrapper
        className="cards-wrapper"
        type="dark"
        heading="Transparency In Music & Dance Events, Not Seen Before."
      >
        <ImageWithContentCard
          heading="Share & Read Experiences."
          description="See what other members are saying about music brands & venues. Learn insider tips."
          icon="/images/hero/share-icon.svg"
          image="/images/hero/share-image.png"
        />
        <ImageWithContentCard
          type="right"
          heading="Know Music Events wherever you go."
          description="Real-time technology offers visibility to upcoming events in your area."
          icon="/images/hero/location-icon.svg"
          image="/images/hero/events.png"
        />
      </SectionWrapper>

      <SectionWithButtons />

      <SectionWrapper type="dark" heading="Monthly Membership Starts As Low As">
        <ValueWithButton
          value="$15"
          description="Change, freeze or cancel your plan anytime."
          buttonLink="/free-trial"
        />
      </SectionWrapper>
    </HomeStyle>
  );
}

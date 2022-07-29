import React from "react";
import { HeadingWithContent } from "../../components";

import { HowItWorksStyle } from "./HowItWorks.style";

export default function HowItWorks() {
  return (
    <HowItWorksStyle>
      <HeadingWithContent
        handleButtonClick={() => {}}
        heading="How It Works"
        content={[
            "A MusicPass membership runs on a recurring monthly basis. Each month credits are allotted, the amount of which depends on the membership plan.",
            "Credits are used to make reservations to different events. ",
            "For example in a single month, one subscription may look like the following depending on the MusicPass member’s preference of events:",
            "Timmy is a Music Dip member (6 credits), and decides to use his membership as follows:",
            "1 – Rock concert (6 credits)",
            "Jen is a Music Lite member (23 credits), and decides to use her membership as follows:",
            "1 – Rock concert (6 credits)",
            "1 – Rock concert (6 credits)",
            "1 – Club night (13 credits)",
            "Carlos is a Music Enthusiast member (48 credits), and decides to use his membership as follows:",
            "1 – Latino band (12 credits)",
            "2 – Club nights (26 credits)",
            "1 – Jazz night (10 credits)",
            "Monique is a Music Fan member (68 credits), and decides to use her membership as follows:",
            "4 – Club nights (52 credits)",
            "4 – Club nights (52 credits)",
            "2 – Local Rap performances (10 credits)",
            "Ricky is a Music Pro member (99 credits), and decides to use his membership as follows:",
            "3 – Live band shows (33 credits)",
            "3 – Local DJ sets (15 credits)",
            "1 – World symphony concert (6 credits)",
            "3 – Club nights (39 credits)",
            "1 – Jazz night (7 credits)",
            "Only events hosted by MusicPass Partners will be eligible for reservation. As our Partner network continues to expand, we hope to bring you access to the best experiences available."
        ]}
      />
    </HowItWorksStyle>
  );
}

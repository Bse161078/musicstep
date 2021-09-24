import React from "react"

import { HeadingWithButton, HeroSection } from "../../components"
import { HomeStyle } from "./Home.style"

export default function Home() {
    return (
        <HomeStyle>
            <HeroSection />

            <HeadingWithButton />
        </HomeStyle>
    )
}
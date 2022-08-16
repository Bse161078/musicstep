import React from "react";
import { HeadingWithContent } from "../../components";

import { HowItWorksStyle } from "./HowItWorks.style";
import {useHistory} from "react-router";
import {Link} from "react-router-dom";
import {LeftChevronIcon} from "../../assets";
import {HeadingWithContentStyle} from "../../components/HeadingWithContent/HeadingWithContent.style";

export default function HowItWorks() {
    const history = useHistory();

    const beforeEmail=<p className='description-inline'>The events listed on the MusicPass platform are operated by the Partners we work with.Don’t see an event or partner listed? Send us an email at</p>
    const EmailLink = <p className='description-inline email-margin'><a href={"mailto:contact@musicpassonline.com"}>contact@musicpassonline.com.</a></p>;

    const content=<>
        <p className="description">A MusicPass membership runs on a recurring monthly basis. Each month credits are allotted, the amount of which depends on the membership plan.</p>
        <p className="description">Credits are used to make reservations to different events.</p>
        <p className="description">For example in a single month, one subscription may look like the following depending on the MusicPass member’s preference of events:</p>
        <p className="description"><span style={{fontWeight:"bold"}}>Timmy is a Music Dip member (6 credits), and decides to use his membership as follows:</span></p>
        <p className="description-without-margin" style={{marginLeft:20}}>1 – Rock concert (6 credits) :</p>
        <p className="description"><span style={{fontWeight:"bold"}}>Jen is a Music Lite member (23 credits), and decides to use her membership as follows:</span></p>
        <p className="description-without-margin" style={{marginLeft:20}}>1 – Rock concert (6 credits)</p>
        <p className="description-without-margin" style={{marginLeft:20}}>1 – Indie show (6 credits)</p>
        <p className="description-without-margin" style={{marginLeft:20}}>1 – Club night (11 credits)</p>
        <p className="description"><span style={{fontWeight:"bold"}}>Carlos is a Music Enthusiast member (48 credits), and decides to use his membership as follows:</span></p>
        <p className="description-without-margin" style={{marginLeft:20}}>1 – Latino band (12 credits)</p>
        <p className="description-without-margin" style={{marginLeft:20}}>2 – Club nights (26 credits)</p>
        <p className="description-without-margin" style={{marginLeft:20}}>1 – Jazz night (10 credits)</p>
        <p className="description"><span style={{fontWeight:"bold"}}>Monique is a Music Fan member (68 credits), and decides to use her membership as follows:</span></p>
        <p className="description-without-margin" style={{marginLeft:20}}>4 – Club nights (52 credits)</p>
        <p className="description-without-margin" style={{marginLeft:20}}>1 – World symphony concert (6 credits)</p>
        <p className="description-without-margin" style={{marginLeft:20}}>2 – Local Rap performances (10 credits)</p>
        <p className="description"><span style={{fontWeight:"bold"}}>Ricky is a Music Pro member (99 credits), and decides to use his membership as follows:</span></p>
        <p className="description-without-margin" style={{marginLeft:20}}>3 – Live band shows (33 credits)</p>
        <p className="description-without-margin" style={{marginLeft:20}}>3 – Local DJ sets (15 credits)</p>
        <p className="description-without-margin" style={{marginLeft:20}}>1 – World symphony concert (6 credits)</p>
        <p className="description-without-margin" style={{marginLeft:20}}>3 – Club nights (39 credits)</p>
        <p className="description-without-margin" style={{marginLeft:20}}>1 – Jazz night (6 credits)</p>
        <p className="description">Only events hosted by MusicPass Partners will be eligible for reservation. As our Partner network continues to expand, we hope to bring you access to the best experiences available.</p>

    </>;


    return (
    <HowItWorksStyle>
        <HeadingWithContentStyle>
            <Link to="/">
                <div className="button-wrapper" onClick={(e)=>history.goBack()}>
                    <LeftChevronIcon/> Back To Previous Page
                </div>
            </Link>

            <h2 className="heading">{"How It Works"}</h2>
            {content}
        </HeadingWithContentStyle>
    </HowItWorksStyle>
  );
}

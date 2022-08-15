import React from "react";
import {DcmaStyle} from "./dcma.style";
import {useHistory} from "react-router";
import {HeadingWithContentStyle} from "../../components/HeadingWithContent/HeadingWithContent.style";
import {Link} from "react-router-dom";
import {LeftChevronIcon} from "../../assets";

export default function AboutUs() {
    const history = useHistory();

    const content=<>
        <p className="description-without-margin">Notification of copyright infringement</p>
        <p className="description-without-margin">If you are a copyright owner or an agent thereof, and you believe that any content hosted on the Site infringes your copyrights, you may submit a notification pursuant to the Digital Millennium Copyright Act (“DMCA”) by providing our Designated Copyright Agent with the information listed in the below DMCA Notice in writing (see 17 U.S.C § 512(c)(3) for further detail). Upon receipt of the Notice as described below, MusicPass will take whatever action, in its sole discretion, it deems appropriate, including removal of the challenged material from the Sites. You acknowledge that if you fail to comply with all of the requirements listed below, your Notice may not be valid.</p>
        <p className="description-without-margin">DMCA Notice of alleged infringement (“notice”)</p>
        <p className="description">1.	Identify the copyrighted work that you claim has been infringed, or - if multiple copyrighted works are covered by this Notice - you may provide a representative list of the copyrighted works that you claim have been infringed.</p>
        <p className="description-without-margin">2.	Identify the material that you claim is infringing (or to be the subject of infringing activity) and that is to be removed or access to which is to be disabled, and information reasonably sufficient to permit us to locate the material, including at a minimum, if applicable, the URL of the link shown on the Site(s) where such material may be found.</p>
        <p className="description-without-margin">3.	Provide your mailing address, telephone number, and, if available, email address.</p>
        <p className="description-without-margin">4.	Include both of the following statements in the body of the Notice: “I hereby state that I have a good faith belief that the disputed use of the copyrighted material is not authorized by the copyright owner, its agent, or the law (e.g., as a fair use).”</p>
        <p className="description-without-margin">“I hereby state that the information in this Notice is accurate and, under penalty of perjury, that I am the owner, or authorized to act on behalf of the owner, of the copyright or of an exclusive right under the copyright that is allegedly infringed.”</p>
        <p className="description-without-margin">5.	Provide your full legal name and your electronic or physical signature.</p>
        <p className="description-without-margin">Deliver this Notice, with all items completed, to ClassPass’ Designated Copyright Agent:</p>
        <p className="description-without-margin" style={{marginTop:"-20px"}}>Copyright Agent</p>
        <p className="description-without-margin" style={{marginTop:"-20px"}}>c/o MusicPass</p>
        <p className="description-without-margin" style={{marginTop:"-20px"}}>4000 Ponce De Leon Blvd.</p>
        <p className="description-without-margin" style={{marginTop:"-20px"}}>Suite 470</p>
        <p className="description-without-margin" style={{marginTop:"-20px"}}>Coral Gables, FL 33146</p>
        <p className="description-without-margin">For clarity, only DMCA notices should go to the Copyright Agent. Any other feedback, comments, requests for technical support or other communications should be directed to MusicPass customer service.</p>
    </>;

    return (
        <DcmaStyle>
            <HeadingWithContentStyle>
                <Link to="/">
                    <div className="button-wrapper" onClick={(e)=>history.goBack()}>
                        <LeftChevronIcon/> Back To Previous Page
                    </div>
                </Link>

                <h2 className="heading">{"DCMA"}</h2>
                {content}
            </HeadingWithContentStyle>
        </DcmaStyle>
    );
}

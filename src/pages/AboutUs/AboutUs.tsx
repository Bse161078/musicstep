import React from "react";
import {HeadingWithContent} from "../../components";
import {AboutUsStyle} from "./AboutUs.style";
import {useHistory} from "react-router";
import {HeadingWithContentStyle} from "../../components/HeadingWithContent/HeadingWithContent.style";
import {Link} from "react-router-dom";
import {LeftChevronIcon} from "../../assets";
import {HowItWorksStyle} from "../HowItWorks/HowItWorks.style";

export default function AboutUs() {
    const history = useHistory();

    const content=<>
        <p className="description-sub-heading">{"What is MusicPass?"}</p>
        <p className="description-without-margin">MusicPass is an events aggregator that allows customers to attend music events at a variety of venues, large and small, for a monthly subscription.</p>
        <p className="description-without-margin">The subscription service is currently being launched in Miami and is available for use in the United States.</p>
        <p className="description-without-margin">Our mission is to help people engage in music and dance by connecting them with the best experiences available.</p>
        <p className="description-sub-heading">{"Why MusicPass is Cool?"}</p>
        <p className="description-without-margin">As a MusicPass member, we offer admission at a 40-65% discount based on retail ticket prices.</p>
        <p className="description-without-margin">We have a roll-over policy for un-used credits. <a href={"/credit"}>(See Credits</a>.)</p>
        <p className="description-without-margin">We allow free cancellations of event reservations up until 1 day prior to event. <a href={"/reservation?cancel=true"}>(See Cancellation Policy</a>.)</p>
        <p className="description-without-margin">We offer access to local, upcoming events, anywhere that MusicPass reservations are accepted.</p>
        <p className="description-without-margin">We offer a visual view of music-related events in a given area.</p>
        <p className="description-without-margin">We allow a ratings and review process to aid in the transparency of music and dance events happening in local communities.</p>
        <p className="description-sub-heading">{"Would I make a good MusicPass member?"}</p>
        <p className="description-without-margin">If you like attending music events, the answer is likely, “Yes.” Our subscribers tend to be well-educated when it comes to music. If not educated, usually they are enthusiastic or curious with a heart for music and dance. No matter what your music and dance background is, anyone is welcomed to join. Partners have the right to enforce age and dress code requirements as publicized per event.</p>
        <p className="description-sub-heading">{"Partners"}</p>
        <p className="description-without-margin">Are you interested in being a Partner? <span><a href={"/partner-signup"}>Visit our Partners website.</a></span> </p>
        <p className="description-sub-heading">{"MusicPass' API Access Terms of Use"}</p>
        <p className="description-without-margin" style={{marginTop:"-25px"}}>(last update April 27, 2022)</p>
        <p className="description-without-margin">By using MusicPass, Inc’s (MP) application programming interfaces (the “API”), associated tools, software, documentation, and MP Platform (the “Documentation”), and/or MusicPass Data (defined below), you agree to the terms of this Agreement. If you disagree with any of the terms, MP does not permit you to, and you will not, use any of the Licensed Materials (defined below). You and MP may be individually referred to herein as a “party” and collectively as the parties to this Agreement.</p>
        <p className="description-without-margin" style={{marginLeft:"20px"}}>1.	Definitions</p>
        <p className="description-without-margin" style={{marginLeft:"50px"}}>a.	<span style={{fontWeight:"bold"}}>“Applicable Laws”</span> means all applicable laws, rules and regulations that govern your Platform and use of Licensed Materials including, but not limited to, to the extent applicable: (i) the General Data Protection Regulation ((EU) 2016/679) and any national implementing laws, regulations and secondary legislation, as amended or updated from time to time; (ii) the UK Data Protection Act 2018; (iii) the California Consumer Privacy Act (“CCPA”); and (iv) the Brazilian General Data Protection Law No. 13,709/18</p>
        <p className="description-without-margin" style={{marginLeft:"50px"}}>b.	<span style={{fontWeight:"bold"}}>“Booking Services”</span> means services that permit end users to search, schedule, manage, evaluate, review and book services with third-party partners and providers.</p>
        <p className="description-without-margin" style={{marginLeft:"50px"}}>c.	<span style={{fontWeight:"bold"}}>“MusicPass Data”</span> means all data and other information made available by or to MP or its affiliates (in its discretion) in connection with this Agreement or otherwise via the API (other than Partner & Venue Content), and in all cases, all information regarding MP users, whether sent to you by MP or a third-party.</p>
        <p className="description-without-margin" style={{marginLeft:"50px"}}>d.	<span style={{fontWeight:"bold"}}>“Confidential Information”</span> means any non-public information or materials belonging to, concerning or in the possession or control of MP or its affiliates that is made available (directly or indirectly) to you (or persons acting on your behalf) in connection with this Agreement and which is either marked or identified as confidential or proprietary or is of a type that a reasonable person would recognize it to be confidential or proprietary. MP’s Confidential Information includes, but is not limited to, the Licensed Material, the parties’ relationship, and the terms of this Agreement.</p>
        <p className="description-without-margin" style={{marginLeft:"50px"}}>e.	<span style={{fontWeight:"bold"}}>“MP Platform”</span> means, collectively, MP’s platform, websites and application, as may be updated from time to time, that allows users to search, schedule, manage, and book services.</p>
        <p className="description-without-margin" style={{marginLeft:"50px"}}>f.	<span style={{fontWeight:"bold"}}>“PII”</span> means information that can be used to distinguish or trace an individual’s identity, either alone or when combined with other personal or identifying information that is linked or linkable to a specific individual. PII includes, but is not limited to, names, date of birth and email addresses of MP users.</p>
        <p className="description-without-margin" style={{marginLeft:"50px"}}>g.	<span style={{fontWeight:"bold"}}>“Sell”</span> means renting, releasing, disclosing, disseminating, making available, transferring, or otherwise communicating orally, in writing, or by electronic or other means, PII for monetary or other valuable consideration.</p>
        <p className="description-without-margin" style={{marginLeft:"50px"}}>h.	<span style={{fontWeight:"bold"}}>“Venue Content”</span> means all information received by you from or on behalf of any event hosts or other providers providing events and services, including, but not limited to, the available events, event descriptions, date, location and time of such events, and the number of available participants. Neither party shall be restricted in how it uses Venue Content.</p>
        <p className="description-without-margin" style={{marginLeft:"50px"}}>i.	<span style={{fontWeight:"bold"}}>“Your Platform”</span> means the software application, platform or other interface you own or operate to interact with the API and any listing information contained thereon.</p>
        <p className="description-without-margin" style={{marginLeft:"20px"}}>2.	<span style={{fontWeight:"bold",textDecoration:"underline"}}>API Access</span>: Subject to your compliance with the terms and conditions of this Agreement, MP agrees to allow you, during the term of this Agreement, to use, submit and access the API, Documentation and MusicPass Data (together, the “Licensed Material”), solely to provide and/or facilitate Booking Services for bookings made on the MP Platform, and for no other purpose (the “Permitted Purpose”). You agree that you shall not access, use, retain, Sell, or disclose to any third party, any PII, except, in each case, as necessary to maintain or provide the Booking Services, or as necessary to comply with the law or a valid and binding order of a government body (such as a subpoena or court order). You agree to allow MP to us, during the term of this Agreement, your API to respond to MP calls to effect the Permitted Purpose.</p>
        <p className="description-without-margin" style={{marginLeft:"20px"}}>3.	<span style={{fontWeight:"bold",textDecoration:"underline"}}>Access, Provision and Protection of License Materials</span>: You must provide accurate and complete data in response to any API calls made my MP. Further, you and Your Platform must perform in accordance with Applicable Laws and industry best practices, including with respect to security, availability, access and performance, to ensure the Booking Services are secure and effective, and you shall promptly remediate any defects or issues as soon as commercially possible on becoming aware of such defects and issues. You agree that MusicPass shall be permitted to access and reproduce data and other information on or via Your Platform relating to third-party partners and providers (such as listing information, reviews and ratings) in order to provide, the Booking Services to end users. Unless otherwise agreed, you agree not to provide, or allow any third party to provide, any MusicPass Data to any party via the API or otherwise, other than for the Permitted Purpose and subject to provision not less stringent than this Agreement. You are responsible for the acts and omission of any such third party. You agree to store all MusicPass data separately from other data sets collected by you or otherwise provided to you by your customers or partners. To the extent PII relates to individuals in the European Union or the United Kingdom, you must not transfer such data outside of the European Union or the United Kingdom without MusicPass’s written consent, and the provisions of the MusicPass API Access Data Processing Addendum shall also apply.</p>
        <p className="description-without-margin" style={{marginLeft:"20px"}}>4.	<span style={{fontWeight:"bold",textDecoration:"underline"}}>Data Security and Breach Management</span>: You shall implement and maintain appropriate technical and organizational measures to protect PII against unauthorized or unlawful processing and against accidental loss, destruction, damage, theft of the PII and having regard to the nature of the PII which is to be protected. As a minimum, these should include the requirements required under Applicable Laws. If you become aware of any breach of security leading to the accidental or unlawful destruction, loss ,alteration, unauthorized disclosure of, or access to, PII contained within the Licensed Materials (a “Breach”), you will immediately: (i) promptly notify MusicPass of the Breach; (ii) investigate the Breach and provide MusicPass with information about the Breach; (iii) take reasonable steps to mitigate the effected and to minimize any damage results from the Breach; and (iv) co-operate with MusicPass and take such reasonable commercial steps as are directed by MusicPass to assist in the investigation, mitigation, and remediation of each such Breach; (v) not to make any communication to any MP user concerning the Breach without MP’s prior written consent unless such individual is also a direct user of Your Platform.</p>
        <p className="description-without-margin" style={{marginLeft:"20px"}}>5.	<span style={{fontWeight:"bold",textDecoration:"underline"}}>Restrictions</span>:
            You must not (i) use the Licensed Materials for any illegal, improper or unauthorized purpose, or other than in accordance with this Agreement the Documentation and any guidelines MP may provide (and update) from time to time, (iii) derive income from the use or provision of the Licensed Material, without the expressed written permission of MPP, (iv) disclose the Licensed Material other than to your personnel and advisors who have a need to receive the Licensed Material, (v) use the API in a manner that exceeds reasonable request volume or in a manner intended to disable or negatively impact, or with the effect of disabling or negatively impact, the API or MP Platform, or (vi) transmit any worms, viruses, or disabling code, or anything similar, via the API or otherwise, to MP, the MP Platform, or any MP user or partner.</p>
        <p className="description-without-margin" style={{marginLeft:"20px"}}>6.	<span style={{fontWeight:"bold",textDecoration:"underline"}}>Call Limitations</span>:
            MP may, in its sole discretion, impose a limit on the number of API calls you are permitted to make during a given period.</p>
        <p className="description-without-margin" style={{marginLeft:"20px"}}>7.	<span style={{fontWeight:"bold",textDecoration:"underline"}}>Support and Modifications</span>:
            MP may, but is not required to, provide you with support for the API, and may terminate any such support at any time without notice to you. MP may modify the Licensed Materials (included any aspect of the API), the permitted scope of user or number of calls, or API functionality, in whole or in part, at any time, with or without notice to you. Modifications may impact your compatibility with the API or ability to connect to the MP Platform. MP may require you to use the most recent version of the API.</p>
        <p className="description-without-margin" style={{marginLeft:"20px"}}>8.	<span style={{fontWeight:"bold",textDecoration:"underline"}}>Ownership</span>:
            As between you and MP, MP is the owner of the Licensed Materials, the MP Platform, MP’s trademarks and logos, and any derivative works of any of the foregoing, and all intellectual property rights contained therein, and you are the owner of Your Platform. If you provide MP with any feedback (e.g., comments, suggestions, improvements, ideas, etc.), you hereby assign all right, title and interest in and to such feedback to MP, for it to freely implement and exploit without any obligation to you.</p>
        <p className="description-without-margin" style={{marginLeft:"20px"}}>9.	<span style={{fontWeight:"bold",textDecoration:"underline"}}>Fees</span>:
            Unless otherwise approved in writing by MusicPass (email sufficing), you shall not, and will not charge any fees to third parties in connection with use of the API contemplated by this Agreement.</p>
        <p className="description-without-margin" style={{marginLeft:"20px"}}>10.	<span style={{fontWeight:"bold",textDecoration:"underline"}}>Term and Termination</span>:
            This agreement shall be effective from the date of your first use of the Licensed Materials and shall continue thereafter until you cease to use the Licensed Materials and have deleted all Licensed Materials. MP may suspend, terminate, or limit your access to the Agreement and/or the Licensed Material, in whole or in part, for any reason, in its sole discretion, with or without prior notice, without liability to you, or any third party. You may terminate this Agreement with ninety (90) days’ notice to us in wring. Upon termination, you must cease use of the API, and delete all Licensed Material.</p>
        <p className="description-without-margin" style={{marginLeft:"20px"}}>11.	<span style={{fontWeight:"bold",textDecoration:"underline"}}>Disclaimer</span>:
            MP MAKES NO REPRESENTATIONS THAT THE LICENSED MATERIAL, OR THE MP PLATFORM, IS FREE OF INACCURACY, ERROR, OR BUG OR WILL OPERATE RELIABLY, ACCURATELY, AND WITHOUT INTERRUPTION. THE LICENSED MATIERAL IS PROVIDED ON AN “AS-IS” BASIS, WITH NO WARRANTY, EXPRESSED OR IMPLIED, OF ANY KIND. MP EXPRESSLY DISCLAIMS ANY AND ALL WARRANTIES, INCLUDING ANY WARRANTY OF MERCHANTABILITY, NON-INFRINGEMENT, FITNESS FOR A PARTICULAR PURPOSE, SECURITY, TITLE OR AVAILABILITY. YOU ARE SOLELY RESPONSIBLE FOR YOUR USE OF THE LICENSED MATERIAL AND ARE RESPONSIBLE FOR ANY RESULTANT DAMAGE, INCLUDING DAMAGE TO YOUR SYSTEMS OR YOUR LOSS OF DATA.</p>
        <p className="description-without-margin" style={{marginLeft:"20px"}}>12.	<span style={{fontWeight:"bold",textDecoration:"underline"}}>Indemnification</span>:
            You shall indemnify, defend and hold harmless MusicPass, its affiliates, successors and permitted assignees, and their respective shareholders, members, managers, directors, officers, employees, personnel and agents from and against all claims, costs, losses, damages, liabilities, judgments and expenses (including reasonable attorneys’ fees) (collectively, “Claims”) that may arise from or are related to (i) your use of the API and/or Licensed Materials, (ii) Your Platform (including, but not limited, infringement of any third-party proprietary rights), (iii) your breach of this Agreement, (iv) the unauthorized use or disclosure of MusicPass Data by you, your affiliates, or any third party with whom you share MusicPass Data, or a third party that gains access to MusicPass Data through Your Platform, or (v) your negligence or misconduct. MP maintains the right to control its own defense and to choose and appoint its own defense counsel, regardless of the presence or absence of a conflict of interest between the parties.</p>
        <p className="description-without-margin" style={{marginLeft:"20px"}}>13.	<span style={{fontWeight:"bold",textDecoration:"underline"}}>Limitation of Liability</span>:
            IN NO EVENT SHALL MP BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, PUNITIVE, EXEMPLARY OR CONSEQUENTIAL DAMAGES OF ANY KIND, OR FOR ANY LOST PROFITS OR REVENUES, IN CONNECTION WITH OR ARISING FROM THIS AGREEMENT.MP’S MAXIMUM AGGREGATE LIABILITY SHALL BE LIMITED TO $100, EVEN IF MP HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES OR SUCH DAMAGES ARE REASONABLY FORESEEABLE.</p>
        <p className="description-without-margin" style={{marginLeft:"20px"}}>14.	<span style={{fontWeight:"bold",textDecoration:"underline"}}>Confidentiality</span>:
            You will not use or disclose Confidential Information other than as required for the Permitted Purpose and in accordance with the terms of this Agreement. Any information provided by you to MP hereunder is considered non-confidential unless otherwise agreed, and MP has no duty or obligation with respect to such information. You agree that any breach by you of the foregoing may cause irreparable harm to MP, and that MP shall be entitled to seek injunctive or other equitable relief.</p>
        <p className="description-without-margin" style={{marginLeft:"20px"}}>15.	<span style={{fontWeight:"bold",textDecoration:"underline"}}>Governing Law and Jurisdiction</span>:
            This Agreement shall be governed by and construed in accordance with the internal laws of the State of Florida, without regard to any conflict of laws principles. The parties hereto agree to the personal jurisdiction of the state and federal courts located in New York County, New York and agree that such courts are a convenient forum for the resolution of all disputes between them. .</p>
        <p className="description-without-margin" style={{marginLeft:"20px"}}>16.	<span style={{fontWeight:"bold",textDecoration:"underline"}}>Miscellaneous</span>:
            This agreement constitutes the entire understanding of the parties with respect to the subject matter hereof, and supersedes all prior agreements and understandings. MP may amend this Agreement at any time without advance notice to you or consent by you. This Agreement may not otherwise be amended or modified except by mutual agreement of authorized representatives of the parties in writing. You may not assign this Agreement without MP’s express written consent. MP may transfer or assign this Agreement to a present or future affiliate or pursuant to a merger, consolidation, reorganization or sale of all or substantially all of the assets or our business without the requirement for prior notice to, or consent from, you. You shall not make any press release or other public statements regarding the other party or this Agreement without the prior written consent of MusicPass. A party’s failure at any time to require performance of any provision of this Agreement shall in no way affect such party’s right at a later time to enforce the same, unless the party waives such right in writing. No waiver by a party of a breach of a term contained in this Agreement, whether by conduct or otherwise, in any one of more instances, shall be deemed to be or construed as a further or continuing waiver of such breach of any other term of this Agreement. Any dispute, claim or controversy arising out of or relating to your use of the Licensed Material, any information you provide via the API and/or this Agreement (including the formation, performance, or alleged breach), shall be submitted individually by you and you will not be subject to any class action or representative status. You understand that be agreeing to this class action waiver, you may only pursue any dispute, claim or controversy against MusicPass in an individual capacity and not as a plaintiff or class member in any purported class action or representative proceeding. The provisions of this Agreement shall be severable in the event that any of the provisions hereof are held by a court of competent jurisdiction to be invalid, void or otherwise unenforceable, and the remaining provisions shall remain enforceable to the fullest extent permitted by law.</p>


    </>;

    return (
        <AboutUsStyle>
            <HeadingWithContentStyle>
                <Link to="/">
                    <div className="button-wrapper" onClick={(e)=>history.goBack()}>
                        <LeftChevronIcon/> Back To Previous Page
                    </div>
                </Link>

                <h2 className="heading">{"About"}</h2>
                {content}
            </HeadingWithContentStyle>
        </AboutUsStyle>
    );
}

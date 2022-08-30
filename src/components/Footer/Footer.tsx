import React from "react";
import {Link} from "react-router-dom";
import {footerItems, socialLinks} from "../../mockData/footer";

import {FooterStyle, HeadingWithListStyle} from "./Footer.style";

type HeadingWithListProps = {
    heading: string;
    list?: any;
    children?: any;
};

const HeadingWithList = (props: HeadingWithListProps) => {
    const {heading, list, children} = props;

    return (
        <HeadingWithListStyle>
            <h3 className="heading">{heading}</h3>

            {children ? (
                <div>{children}</div>
            ) : (
                <ul className="footer-items">
                    {list.map((data: any, index: number) => {
                        const {name, url} = data;
                        return (
                            <li className="footer-item">
                                <Link to={url}>{name}</Link>
                            </li>
                        );
                    })}
                </ul>
            )}
        </HeadingWithListStyle>
    );
};

const Footer = () => {
    return (
        <FooterStyle>
            <div className="footer-top">
                {footerItems.map((data, index) => {
                    const {heading, list} = data;
                    return (
                        <HeadingWithList
                            key={`item-${index}`}
                            heading={heading}
                            list={list}
                        />
                    );
                })}
            </div>

            <div className="footer-bottom">
                <div>
                    <img
                        src="/images/social-links/LogowithTrademark.png"
                        className="store-logo"
                        alt="store"
                        style={{width: '20vw'}}
                    />
                </div>
                <div className="social-links" style={{width: "fit-content"}}>
                    <HeadingWithList heading="Social Accounts">
                        <div className="social-links-wrapper">
                            {socialLinks.map((data, index) => {
                                const {icon, url} = data;
                                return (
                                    <a
                                        target="_blank"
                                        rel="noreferrer"
                                        key={`social-icon-${index}`}
                                        href={url}
                                    >
                                        {index !== 4 ?
                                            <img src={icon} className="mobile-social-link" alt="social icon"/>
                                            : <img style={{width:"30px",height:"30px",marginLeft:"-5px"}} src={icon} className="mobile-social-link" alt="social icon"/>
                                        }
                                    </a>
                                );
                            })}
                        </div>
                    </HeadingWithList>
                </div>
                {/* <div>
           <HeadingWithList heading="Explore events on the go">
          <div className="store-items">
            <a href="/">
              <img
                src="/images/social-links/app-store.png"
                className="store-logo"
                alt="store"
              />
            </a>
            <a href="/">
              <img
                src="/images/social-links/google-play.png"
                className="store-logo"
                alt="store"
              />
            </a>
          </div>
        </HeadingWithList>
           </div> */}


            </div>
        </FooterStyle>
    );
};

export default Footer;

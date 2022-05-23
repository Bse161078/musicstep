import React from "react";
import { Link } from "react-router-dom";
import { footerItems, socialLinks } from "../../mockData/footer";

import { FooterStyle, HeadingWithListStyle } from "./Footer.style";

type HeadingWithListProps = {
  heading: string;
  list?: any;
  children?: any;
};

const HeadingWithList = (props: HeadingWithListProps) => {
  const { heading, list, children } = props;

  return (
    <HeadingWithListStyle>
      <h3 className="heading">{heading}</h3>

      {children ? (
        <div>{children}</div>
      ) : (
        <ul className="footer-items">
          {list.map((data: any, index: number) => {
            const { name, url } = data;
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
          const { heading, list } = data;
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

        <div className="social-links">
          <HeadingWithList heading="Social Accounts">
            <div className="social-links-wrapper">
              {socialLinks.map((data, index) => {
                const { icon, url } = data;

                return (
                  <a
                    target="_blank"
                    rel="noreferrer"
                    key={`social-icon-${index}`}
                    href={url}
                  >
                    <img src={icon}  alt="social icon" />
                  </a>
                );
              })}
            </div>
          </HeadingWithList>
        </div>
      </div>
    </FooterStyle>
  );
};

export default Footer;

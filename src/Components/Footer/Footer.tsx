import React, { useContext } from "react";

import twitter from "../../images/twitter.png";
import linkedIn from "../../images/LinkedIn.png";
import email from "../../images/Email.png";
import meetup from "../../images/meetup.png";
import line from "../../images/line.png";

import { AppContext } from "../../AppState/AppState";

const Footer = () => {
  const { Japanese } = useContext(AppContext);
  
  const text: {
    main: string;
    paragraph: string;
    location: string;
    phone: string;
    address: string;
  } = Japanese
    ? {
        main: "新約聖書クリスチャン教会にようこそ！",
        paragraph:
          "私たちはみんなを歓迎したいと思います。新約聖書クリスチャン教会のエベントを参加すると喜びます。ぜひ遊びに来たら、連絡したり、してもよろしいです。",
        location: "場所",
        phone: "080-9180-9239",
        address: "大阪府大阪市西成区萩之茶屋",
      }
    : {
        main: "Welcome to New Testament Christian Church of Japan!",
        paragraph:
          "We would like to welcome everyone to our church.  Please feel free to come visit us or contact us.",
        location: "Location",
        phone: "080-9180-9239",
        address: "Osaka-fu Osaka-city Nishinari Ward Haginochaya",
      };

  const icons: { icon: string; alt: string; link: string }[] = [
    {
      icon: twitter,
      alt: "twitter icon",
      link: "https://twitter.com/NTCCofJapan",
    },
    {
      icon: linkedIn,
      alt: "linked in icon",
      link: "https://www.linkedin.com/company/ntcc-of-japan",
    },
    {
      icon: email,
      alt: "email icon",
      link: "mailto:ntcc_of_japan@outlook.jp?subject='Subject Text'",
    },
    {
      icon: meetup,
      alt: "meet up icon",
      link: "https://www.meetup.com/ja-JP/%E6%96%B0%E7%B4%84%E8%81%96%E6%9B%B8%E3%82%AF%E3%83%AA%E3%82%B9%E3%83%81%E3%83%A3%E3%83%B3%E6%95%99%E4%BC%9A-ntcc-of-japan/",
    },
    {
      icon: line,
      alt: "line icon",
      link: "https://page.line.me/153esgvt",
    },
  ];

  return (
    <>
      <footer
        className="grid place-content-center bg-black text-darkgold text-left"
        aria-labelledby="footer"
      >
        <div className="grid lg:flex">
          <div className="grid place-content-center md:flex md:justify-around">
            <div className="p-8 md:w-1/2 lg:w-1/3">
              <h2 className="text-2xl pb-2">
                {text.main}
              </h2>
              <p className="text-sm">
                {text.paragraph}
              </p>
            </div>
            <div className="p-8 lg:w-1/3">
              <h2 className="text-2xl pb-2">{text.location}</h2>
              <p className="text-sm pb-2">{text.phone}</p>
              <p className="text-sm">{text.address}</p>
            </div>
          </div>
          <div className="p-4 pb-8 lg:w-1/3 flex flex-wrap justify-around items-center gap-2">
            {icons.map((icon, index) => (
              <a key={index} href={icon.link} target="_blank" rel="noreferrer">
                <img
                  className="icons transition hover:filter hover:brightness-125 hover:ease-in-out duration-500 w-12 h-12 p-2 hover:bg-gray rounded-md"
                  src={icon.icon}
                  alt={icon.alt}
                />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

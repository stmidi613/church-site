import React from "react";

import twitter from "../../images/twitter.png";
import linkedIn from "../../images/LinkedIn.png";
import email from "../../images/Email.png";
import meetup from "../../images/meetup.png";
import line from "../../images/line.png";

const Footer = () => {
  const ICONS: string[] = [twitter, linkedIn, email, meetup, line];
  const ALTS: string[] = [
    "twitter icon",
    "linked in icon",
    "email icon",
    "meetup icon",
    "line icon",
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
                新約聖書クリスチャン教会にようこそ！
              </h2>
              <p className="text-sm">
                私たちはみんなを歓迎したいと思います。新約聖書クリスチャン教会のエベントを参加すると喜びます。ぜひ遊びに来たら、連絡したり、してもよろしいです。
              </p>
            </div>
            <div className="p-8 lg:w-1/3">
              <h2 className="text-2xl pb-2">場所</h2>
              <p className="text-sm pb-2">080-9180-9239</p>
              <p className="text-sm">大阪府大阪市西成区萩之茶屋</p>
            </div>
          </div>
          <div className="p-4 pb-8 lg:w-1/3 flex flex-wrap justify-around items-center gap-2">
              {ICONS.map((icon, index) => (
                <img
                  key={index}
                  className="icons transition hover:filter hover:brightness-125 hover:ease-in-out duration-500 w-12 h-12 p-2 hover:bg-gray rounded-md"
                  src={icon}
                  alt={ALTS[index]}
                />
              ))}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

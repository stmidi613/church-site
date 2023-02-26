import React, { useContext } from "react";

import SingleCard from "./SingleCard";

import cross from "../../../images/cross-bg-sm.jpg";
import Bible from "../../../images/Bible.jpg";
import contactUs from "../../../images/contact-us.jpg";

import { AppContext } from "../../../AppState/AppState";

const Cards = () => {
  const { Japanese } = useContext(AppContext);
  
  const CARDS: [
    { cardId: number; heading: string; paragraph: string; picture: string; alt: string; link: string;},
    { cardId: number; heading: string; paragraph: string; picture: string; alt: string; link: string;},
    { cardId: number; heading: string; paragraph: string; picture: string; alt: string; link: string;}
  ] = 
  Japanese ? [
    {
      cardId: 1,
      heading: "教会の情報",
      paragraph:
        "新約聖書クリスチャン教会日本は大阪市にあります。現在、聖書の学び会だけ行いますが、近い未来に礼拝も行うつもりです。誰でも参加してもよろしい、みんなを歓迎したいと思います。",
      picture: `${cross}`,
      alt: "A cross with the sun shining behind it.",
      link: "/AboutUs"
    },
    {
      cardId: 2,
      heading: "勉強ガイド・サポート",
      paragraph:
        "一緒に学んだり、成長したり、生きたり、しましょう。キリスト教や聖書に興味がある方のために分かりやすい勉強ガイドがあります。聖書の内容やキリスト教の信仰が分かるのを手伝いたいと思います。",
      picture: `${Bible}`,
      alt: "A person holding a Bible with a path in the background.",
      link: "/StudyGuides"
    },
    {
      cardId: 3,
      heading: "連絡先",
      paragraph:
        "ぜひ、自由に連絡してください。なるべく早く折り返しご連絡いたします。",
      picture: `${contactUs}`,
      alt: "Cell with apps for contacting people.",
      link: "/ContactUs"
    },
  ] : [
    {
      cardId: 1,
      heading: "About Us",
      paragraph:
        "New Testament Christian Church of Japan is located in Osaka.  Currently we are having Bible studies but in the near future we intend to have services also.  Anyone can participate and we would like to welcome you.",
      picture: `${cross}`,
      alt: "A cross with the sun shining behind it.",
      link: "/AboutUs"
    },
    {
      cardId: 2,
      heading: "Bible Study Support",
      paragraph:
        "Let's learn, live, and grow together in Christ.  We provide study guides and Bible Study outlines to support Bible scholars.  If you are new and just started reading the Bible, the Bible Basics notes will help you get started from zero.",
      picture: `${Bible}`,
      alt: "A person holding a Bible with a path in the background.",
      link: "/StudyGuides"
    },
    {
      cardId: 3,
      heading: "Contact Us",
      paragraph:
        "Please contact us whenever you have time.  We will get back to you as soon as possible.",
      picture: `${contactUs}`,
      alt: "Cell with apps for contacting people.",
      link: "/ContactUs"
    },
  ];

  return (
    <>
      <div className="grid place-content-center md:flex md:justify-around gap-4">
        {CARDS.map((card) => (
          <SingleCard
            key={card.cardId}
            heading={card.heading}
            paragraph={card.paragraph}
            picture={card.picture}
            alt={card.alt}
            link={card.link}
          />
        ))}
      </div>
    </>
  );
};

export default Cards;

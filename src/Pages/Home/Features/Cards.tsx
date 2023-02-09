import React from "react";

import SingleCard from "./SingleCard";

import cross from "../../../images/cross-bg-sm.jpg";
import Bible from "../../../images/Bible.jpg";
import contactUs from "../../../images/contact-us.jpg";

const Cards = () => {
  const CARDS: [
    { cardId: number; heading: string; paragraph: string; picture: string; alt: string; link: string;},
    { cardId: number; heading: string; paragraph: string; picture: string; alt: string; link: string;},
    { cardId: number; heading: string; paragraph: string; picture: string; alt: string; link: string;}
  ] = [
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

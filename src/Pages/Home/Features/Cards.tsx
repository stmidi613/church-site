import React from "react";

import SingleCard from "./SingleCard";

import cross from "../../images/cross-bg-sm.jpg";
import Bible from "../../images/Bible.jpg";
import contactUs from "../../images/contact-us.jpg";

const Cards = () => {
  const CARDS: [
    { cardId: number; heading: string; paragraph: string; picture: string; alt: string; },
    { cardId: number; heading: string; paragraph: string; picture: string; alt: string; },
    { cardId: number; heading: string; paragraph: string; picture: string; alt: string; }
  ] = [
    {
      cardId: 1,
      heading: "教会の情報",
      paragraph:
        "新約聖書クリスチャン教会日本は大阪市にあります。現在、聖書の学び会だけ行いますが、近い未来に礼拝も行うつもりです。誰でも参加してもよろしい、みんなを歓迎したいと思います。",
      picture: `${cross}`,
      alt: "A cross with the sun shining behind it."
    },
    {
      cardId: 2,
      heading: "聖書の学び会",
      paragraph:
        "Please come and study the Bible with us.  Learn together, grow together, live together.  For those who are curious and want to know more about Christianity we have easy to understand study guides to help you understand the Christian faith and what is in the Bible.",
      picture: `${Bible}`,
      alt: "A person holding a Bible with a path in the background."
    },
    {
      cardId: 3,
      heading: "連絡先",
      paragraph:
        "Please feel free to contact us.  We will try to get back to you as soon as possible.",
      picture: `${contactUs}`,
      alt: "Cell with apps for contacting people."
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
          />
        ))}
      </div>
    </>
  );
};

export default Cards;

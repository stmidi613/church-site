import React from "react";

import Details from "./Details/Details";
import Button from "./Button";

import sunBible from "../images/bible.png";

import { Link } from "react-router-dom";

const MainContent = () => {
  return (
    <>
      <section className="bg-lightgray">
        <div className="bg-lightgray text-gray grid place-content-center pb-8">
          <img
            className="w-16 pt-8 mb-[-50px]"
            src={sunBible}
            alt="An open Bible with a cross and sun in the background"
          />
        </div>
        <Details
          detailsParagraph="ぜひ自由に聖書の学び会の概要をダウンロードすることができます。勉強はもっと理解しやすくて、面白くなります。勉強ガードは聖書が分かることを手伝います。「聖書サポート」というボタンをクリックしてください。"
          detailsTitle="聖書の学び会の概要"
        />
        <div className="bg-lightgray text-gray grid place-content-center pb-8">
          <Link to="BibleSupport">
            <Button buttonText="聖書サポート" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default MainContent;

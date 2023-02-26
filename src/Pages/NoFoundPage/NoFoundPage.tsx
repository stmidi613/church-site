import React from "react";

import { Link } from "react-router-dom";

import bible from "../../images/bible.png";
import map from "../../images/map.jpg";

const NoFoundPage = () => {
  const noFoundPageText: {
    main: string;
    span1: string;
    span2: string;
    mainEng: string;
    span1Eng: string;
    span2Eng: string;
  } = {
    main: "ウェブページは見つかりませんでした。",
    span1: "道に迷った？地図",
    span2: "を読んでみましょう。",
    mainEng: "Sorry, we could not find the web page you requested.",
    span1Eng: "Lost?",
    span2Eng: "Read the map.",
  };

  return (
    <>
      <section aria-labelledby="page not found" className="h-screen w-full">
        <div className="bg-footprints bg-cover h-full">
          <div className="grid place-content-center">
            <div className="text-center text-black bg-darkgold bg-opacity-80 p-10 mt-10">
              <h2 className="text-2xl lg:text-5xl">{noFoundPageText.main}</h2>
              <h2 className="text-2xl lg:text-5xl">{noFoundPageText.mainEng}</h2>
              <p className="text-xl lg:text-3xl pt-2">
                {noFoundPageText.span1}
                <span>
                  <img
                    className="w-6 lg:w-10 inline-block relative bottom-1"
                    src={bible}
                    alt="Bible"
                  />
                </span>
                {noFoundPageText.span2}
              </p>
              <p className="text-xl lg:text-3xl pt-2">
                {noFoundPageText.span1Eng}
                <span>
                  <img
                    className="w-6 inline-block relative bottom-1"
                    src={bible}
                    alt="Bible"
                  />
                </span>
                {noFoundPageText.span2Eng}
              </p>
            </div>
            <Link to="/">
            <div className="w-1/3 max-w-sm absolute bottom-20 left-[25%]">
              <img src={map} alt="map and compass" />
              <span className="text-white float-left">Return to Site</span>
              <span className="text-white float-right">ウェブサイトに戻る</span>
            </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default NoFoundPage;

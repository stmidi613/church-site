import React from "react";

import Details from "./Details";
import Button from "./Button";

const MainContent = () => {
  return (
    <>
      <Details
        backgroundColor="bg-lightgray"
        detailsParagraph="ぜひ自由に聖書の学び会の概要をダウンロードすることができます。勉強はもっと理解しやすくて、面白くなります。勉強ガードは聖書が分かることを手伝います。"
        detailsTitle="聖書の学び会の概要"
      />
      <div className="bg-lightgray text-gray grid place-content-center">
        <Button buttonText="勉強サポート" />
      </div>
    </>
  );
};

export default MainContent;

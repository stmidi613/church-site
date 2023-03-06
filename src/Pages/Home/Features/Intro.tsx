import React, { useContext } from "react";

import { AppContext } from "../../../AppState/AppState";

const Intro = () => {
  const { Japanese } = useContext(AppContext);

  const introText: { header: string; subheader: string; paragraph: string } =
    Japanese
      ? {
          header: "暗黒の世界へ, 神様の愛を宣言する",
          subheader: "なぜ教会の礼拝や聖書の学び会を行いますか？",
          paragraph:
            "神様は全世界を愛していますからです。私たちはみんなの命を大切にしています。したがって、聖書の学び会や礼拝、会話や友情などを通して、神様の愛をシェアしたいと思います。",
        }
      : {
          header: "Preaching the love of God, to a lost and dying world",
          subheader: "Why do we tell others about Jesus and have services?",
          paragraph:
            "Because God loves the whole world.  We think every life is important so we hold services and show compassion on others to share and show the love of God.",
        };

  return (
    <>
      <div className="grid place-content-center text-center pb-6">
        <h3 className="text-2xl pb-4">{introText.header}</h3>
        <p className="p-4">{introText.subheader}</p>
        <p className="p-1 max-w-lg">{introText.paragraph}</p>
      </div>
    </>
  );
};

export default Intro;

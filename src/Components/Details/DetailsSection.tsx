import React from "react";

import Details from "./Details";

const DetailsSection: React.FC = () => {
  const aboutUsDetails: {
    detailsTitle: string;
    detailsParagraph: string;
  }[] = [
    {
      detailsTitle: "ミッション",
      detailsParagraph:
        "私たちはみんなにイエス・キリストの福音や神様の愛をシェアしたいと思います。聖書の福音はいいニュースだという意味です。良いニュースはなんでしょうか？私たちは無力感、落ち込み、絶望感を感じる必要はもうありません。",
    },
    {
      detailsTitle: "活動とエベント",
      detailsParagraph:
        "聖書の学び会を行います。未来、礼拝も行います。みんなの参加したい方を歓迎したいと思います。聖書がぜんぜん分からなかったら、心配しなくてもいいですよ。聖書を読んだり、見たりしたことがない人でも、聖書の学び会を楽しむことができます。",
    },
    {
      detailsTitle: "ビジョン",
      detailsParagraph:
        "私たちのビジョンは、日本人が自分の救い主としてイエス・キリストを知ることです。私たちは出会う各人にイエス・キリストの愛を知ってもらいたいと願っていますので、愛を持って、人を愛したり、手伝ったり、したいと思います。",
    },
  ];
  return (
    <>
      <section className="lg:flex">
        {aboutUsDetails.map((detail, index) => (
          <Details
            key={index}
            detailsTitle={detail.detailsTitle}
            detailsParagraph={detail.detailsParagraph}
          />
        ))}
      </section>
    </>
  );
};

export default DetailsSection;

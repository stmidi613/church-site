import React, { useContext } from "react";
import { AppContext } from "../../AppState/AppState";

import Details from "./Details";

const DetailsSection: React.FC = () => {
  const { Japanese } = useContext(AppContext);
  const aboutUsDetails: {
    detailsTitle: string;
    detailsParagraph: string;
  }[] = Japanese
    ? [
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
      ]
    : [
        {
          detailsTitle: "Mission",
          detailsParagraph:
            "We want to share the gospel and love of Jesus Christ with others.  The meaning of the word 'gospel' in the Bible means 'good news'.  The good news is there is hope for the hopeless and joy for the downtrodden and heartbroken.",
        },
        {
          detailsTitle: "Activities",
          detailsParagraph:
            "We would like to welcome everyone to our Bible studies.  We plan to have worship services also in the near future.  Even if you have never read the Bible and do not understand it, we want to meet you and become a part of the family.",
        },
        {
          detailsTitle: "Vision",
          detailsParagraph:
            "Our mission is for everyone in our communities to know Jesus Christ as their Lord and Savior.  We want you to know the love of God.  When you have a loving relationship with God you can love your fellow neighbor.  That's why we learn together, live together, and laugh together.",
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

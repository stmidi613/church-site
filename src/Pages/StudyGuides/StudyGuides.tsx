import React from "react";

import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header";
import Details from "../../Components/Details/Details";
import MainContent from "../../Components/MainContent/MainContent";
import StudyGuideMCImage from "../../Components/MainContent/StudyGuideMCImage";
import Footer from "../../Components/Footer/Footer";

import "../../Pages/Home/Hero/Hero.css";

const StudyGuides = () => {
  const backgroundImage: string = "bg-study";
  const title: string = "勉強ガイド";
  const paragraph: string =
    "ぜひ勉強ガイドを自由に使ってください。聖書やキリスト教に興味がある人のために作られた勉強ガイドには簡単な言葉があります。さらに、分かりやすくて説明があるので学ぶことは簡単で楽しいです。";

  const detailsTitle: string = "神様の全ての祝福について学びましう";
  const detailsParagraph: string =
    "神様がいるかな？命の目的はなんだろうな？なんで私は存在しているのか？神様は私の祈りを本当に聞いていますか？なんで私の人生はそんなにダメだ？すべての答えは聖書の中には書いてありました。神様は世界を愛していて、みんなを知って欲しいですので、聖書をお与になりました。";

  const MCdetailsTitle: string = "勉強ガイド";
  const MCdetailsParagraph: string =
    "ぜひ自由に聖書の学び会の概要をダウンロードすることができます。勉強はもっと理解しやすくて、面白くなります。勉強ガードは聖書が分かることを手伝います。「聖書サポート」というボタンをクリックしてください。";

  const Verse: string[] = [
    '"あなたは熟練した者、すなわち、真理のみことばをまっすぐに説き明かす、恥じることのない働き人として、自分を神にささげるよう、努め励みなさい。"',
    "テモテへの手紙第二２：１",
  ];

  return (
    <>
      <Navbar />
      <Header
        backgroundImage={backgroundImage}
        title={title}
        paragraph={paragraph}
      />
      <Details
        detailsTitle={detailsTitle}
        detailsParagraph={detailsParagraph}
      />
      <MainContent
        button={true}
        image={<StudyGuideMCImage />}
        detailsTitle={MCdetailsTitle}
        detailsParagraph={MCdetailsParagraph}
        quote={Verse[0]}
        verse={Verse[1]}
      />
      <Footer />
    </>
  );
};

export default StudyGuides;

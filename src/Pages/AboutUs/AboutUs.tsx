import React from "react";

import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header";
import DetailsSection from "../../Components/Details/DetailsSection";
import MainContent from "../../Components/MainContent/MainContent";
import Footer from "../../Components/Footer/Footer";

import AUimage from "../../images/HandHeartSun.jpg"

const AboutUs = () => {
  const backgroundImage: string = "bg-earthheart";

  const title: string = "教会の情報";
  const paragraph: string =
    "私たちは新約聖書クリスチャン教会へみんなを歓迎したいと思います。モットーは「暗く死にゆく世界で、愛する神を分かち合う」です。イエス・キリストの話は愛や恵み、平和や哀れみなどでいっぱいという話です。全世界中、この話をシェアしたいと思います。";

  const details: {
    detailsTitle: string;
    detailsTitle2: string;
    detailsTitle3: string;
    detailsParagraph: string;
    detailsParagraph2: string;
    detailsParagraph3: string;
  }[] = [
    {
      detailsTitle: "ミッション",
      detailsTitle2: "活動とエベント",
      detailsTitle3: "ビジョン",
      detailsParagraph:
        "私たちはみんなにイエス・キリストの福音や神様の愛をシェアしたいと思います。聖書の福音はいいニュースだという意味です。良いニュースはなんでしょうか？私たちは無力感、落ち込み、絶望感を感じる必要はもうありません。",
      detailsParagraph2:
        "聖書の学び会を行います。未来、礼拝も行います。みんなの参加したい方を歓迎したいと思います。聖書がぜんぜん分からなかったら、心配しなくてもいいですよ。聖書を読んだり、見たりしたことがない人でも、聖書の学び会を楽しむことができます。",
      detailsParagraph3:
        "私たちのビジョンは、日本人が自分の救い主としてイエス・キリストを知ることです。私たちは出会う各人にイエス・キリストの愛を知ってもらいたいと願っていますので、愛を持って、人を愛したり、手伝ったり、したいと思います。",
    },
  ];

  const MCdetailsTitle: string = "人生の幸を見つける";
  const MCdetailsParagraph: string = "神様との関係を持つ時、他人との関係はどんどん良くなります。人生の目的や自分の存在の理由はだんだろうかなと思っている方に答えがあります。満足や平和を探したら、手伝いの手があります。";

  return (
    <>
      <Navbar />
      <Header
        backgroundImage={backgroundImage}
        title={title}
        paragraph={paragraph}
      />
      <DetailsSection details={details} />
      <MainContent
        image={AUimage}
        detailsTitle={MCdetailsTitle}
        detailsParagraph={MCdetailsParagraph}
        quote={'"義に飢え渇いている者は幸いです。その人は満ち足りるからです。"'}
        verse={"マタイの福音書５：６"}
      />
      <Footer />
    </>
  );
};

export default AboutUs;

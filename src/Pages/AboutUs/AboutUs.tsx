import React from "react";

import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header";
import DetailsSection from "../../Components/Details/DetailsSection";
import MainContent from "../../Components/MainContent/MainContent";
import Footer from "../../Components/Footer/Footer";

import AUimage from "../../images/HandHeartSun.jpg"

const AboutUs = () => {
  const header: {backgroundImage: string, title: string, paragraph: string} =
  {
    backgroundImage: "bg-earthheart",
    title: "教会の情報",
     paragraph:
    "私たちは新約聖書クリスチャン教会へみんなを歓迎したいと思います。モットーは「暗く死にゆく世界で、愛する神を分かち合う」です。イエス・キリストの話は愛や恵み、平和や哀れみなどでいっぱいという話です。全世界中、この話をシェアしたいと思います。"
  }

  const mainContent: {detailsTitle: string, detailsParagraph: string, quote: string, verse: string} =
  {
    detailsTitle: "人生の幸を見つける",
    detailsParagraph: "神様との関係を持つ時、他人との関係はどんどん良くなります。人生の目的や自分の存在の理由はだんだろうかなと思っている方に答えがあります。満足や平和を探したら、手伝いの手があります。",
    quote: '"義に飢え渇いている者は幸いです。その人は満ち足りるからです。"',
    verse: "マタイの福音書５：６"
  } 

  return (
    <>
      <Navbar />
      <Header
        backgroundImage={header.backgroundImage}
        title={header.title}
        paragraph={header.paragraph}
      />
      <DetailsSection />
      <MainContent
        image={AUimage}
        detailsTitle={mainContent.detailsTitle}
        detailsParagraph={mainContent.detailsParagraph}
        quote={mainContent.quote}
        verse={mainContent.verse}
      />
      <Footer />
    </>
  );
};

export default AboutUs;

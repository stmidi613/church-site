import React from "react";

import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header";
import Details from "../../Components/Details";
import MainContent from "../../Components/MainContent";
import Footer from "../../Components/Footer/Footer";

const AboutUs = () => {
  const backgroundImage: string = "bg-earthheart";
  const title: string = "教会の情報";
  const paragraph: string = "私たちは新約聖書クリスチャン教会へみんなを歓迎したいと思います。モットーは「暗く死にゆく世界で、愛する神を分かち合う」です。イエス・キリストの話は愛や恵み、平和や哀れみなどでいっぱいという話です。全世界中、この話をシェアしたいと思います。";
  const detailsTitle: string = "ミッション";
  const detailsParagraph: string =
    "私たちはみんなにイエス・キリストの福音や神様の愛をシェアしたいと思います。聖書の福音はいいニュースだという意味です。良いニュースはなんでしょうか？私たちは無力感、落ち込み、絶望感を感じる必要はもうありません。";
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
      <MainContent />
      <Footer />
    </>
  );
};

export default AboutUs;

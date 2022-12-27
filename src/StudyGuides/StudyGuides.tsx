import React from "react";

import Navbar from "../Navbar/Navbar";
import Header from "../Components/Header";
import Details from "../Components/Details";
import MainContent from "../Components/MainContent";
import Footer from "../Footer/Footer";

import "../Home/Hero/Hero.css";

const StudyGuides = () => {
  
  const backgroundImage: string = "bg-study";
  const title: string = "勉強ガイド";
  const paragraph: string =
    "ぜひ勉強ガイドを自由に使ってください。聖書やキリスト教に興味がある人のために作られた勉強ガイドには簡単な言葉があります。さらに、分かりやすくて説明があるので学ぶことは簡単で楽しいです。";
  const detailsTitle: string = "神様の全ての祝福について学びましう";
  const detailsParagraph: string = "神様がいるかな？命の目的はなんだろうな？なんで私は存在しているのか？神様は私の祈りを本当に聞いていますか？なんで私の人生はそんなにダメだ？すべての答えは聖書の中には書いてありました。神様は世界を愛していて、みんなを知って欲しいですので、聖書をお与になりました。";

  return (
    <>
      <Navbar />
      <Header
        backgroundImage={backgroundImage}
        title={title}
        paragraph={paragraph}
      />
      <Details detailsTitle={detailsTitle} detailsParagraph={detailsParagraph} />
      <MainContent />
      <Footer />
    </>
  );
};

export default StudyGuides;

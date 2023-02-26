import React, { useContext } from "react";

import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header";
import Details from "../../Components/Details/Details";
import MainContent from "../../Components/MainContent/MainContent";
import MCButton from "../../Components/MainContent/MCButton";
import Footer from "../../Components/Footer/Footer";

import { AppContext } from "../../AppState/AppState";

import sunBible from "../../images/bible.png";

import "../../Pages/Home/Hero/Hero.css";

const StudyGuides = () => {
  const { Japanese } = useContext(AppContext);

  const header: { backgroundImage: string; title: string; paragraph: string } =
    Japanese ? {
      backgroundImage: "bg-study",
      title: "勉強ガイド",
      paragraph:
        "ぜひ勉強ガイドを自由に使ってください。聖書やキリスト教に興味がある人のために作られた勉強ガイドには簡単な言葉があります。さらに、分かりやすくて説明があるので学ぶことは簡単で楽しいです。",
      } : {
      backgroundImage: "bg-study",
      title: "Study Guides",
      paragraph:
        "Please use the study materials as much as you like.  We created these study guides for those seeking a deeper knowledge of the Bible.  We use easy to understand explanations and simple words to try to make things as easy as possible for the learner.",
    };

    const studyGuideDetails: {title: string, paragraph: string} = 
    Japanese ? {
      title: "神様の全ての祝福について学びましう",
      paragraph: "神様がいるかな？命の目的はなんだろうな？なんで私は存在しているのか？神様は私の祈りを本当に聞いていますか？なんで私の人生はそんなにダメだ？すべての答えは聖書の中には書いてありました。神様は世界を愛していて、みんなを知って欲しいですので、聖書をお与になりました。"
    } : {
      title: "Learn about all of God's blessings for you",
      paragraph: "Does God exist? What is the meaning of life?  Why am I here?  Does God really hear my prayers?  Why does my life feel so empty?  All the answers are in the Bible, and because God wants you to know His love for you, He gave us the Bible."
    };

    const mainContent: {title: string, paragraph: string, verse: string, quote: string} = 
    Japanese ? {
      title: "勉強ガイド",
      paragraph: "ぜひ自由に聖書の学び会の概要をダウンロードすることができます。勉強はもっと理解しやすくて、面白くなります。勉強ガードは聖書が分かることを手伝います。「聖書サポート」というボタンをクリックしてください。",
      quote: "あなたは熟練した者、すなわち、真理のみことばをまっすぐに説き明かす、恥じることのない働き人として、自分を神にささげるよう、努め励みなさい。",
      verse: "テモテへの手紙第二２：１５"
    } : {
      title: "Study Guides",
      paragraph: "Download the Bible study outlines and guides as you need.  We hope you will enjoy all the materials to gain a strong understanding of God and His Word.",
      quote: "Study to shew thyself approved unto God, a workman that needeth not to be ashamed, rightly dividing the word of truth.",
      verse: "II Timothy 2:15 KJV"
    };

  return (
    <>
      <Navbar />
      <Header
        backgroundImage={header.backgroundImage}
        title={header.title}
        paragraph={header.paragraph}
      />
      <Details
        detailsTitle={studyGuideDetails.title}
        detailsParagraph={studyGuideDetails.paragraph}
      />
      <MainContent
        image={sunBible}
        detailsTitle={mainContent.title}
        detailsParagraph={mainContent.paragraph}
        quote={mainContent.quote}
        verse={mainContent.verse}
        extra={<MCButton />}
      />
      <Footer />
    </>
  );
};

export default StudyGuides;

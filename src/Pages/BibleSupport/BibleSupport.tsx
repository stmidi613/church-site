import React from "react";

import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer/Footer";
import FullPageTabs from "../../Components/FullPageTabs/FullPageTabs";

const BibleSupport = () => {
  const header: { backgroundImage: string; title: string; paragraph: string } =
    {
      backgroundImage: "bg-studyhelp",
      title: "聖書サポート",
      paragraph:
        "すべての勉強ガイドや教材を楽しみしてください。聖書の学び会の前にできるだけ早くアウトラインをアップロードしてみます。質問があればぜひご連絡してください。",
    };

    return (
    <>
      <Navbar />
      <Header
        title={header.title}
        paragraph={header.paragraph}
        backgroundImage={header.backgroundImage}
      />
      <FullPageTabs />
      <Footer />
    </>
  );
};

export default BibleSupport;

import React, { useContext } from "react";

import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer/Footer";
import FullPageTabs from "../../Components/FullPageTabs/FullPageTabs";

import { AppContext } from "../../AppState/AppState";

const BibleSupport = () => {
  const { Japanese } = useContext(AppContext);

  const header: { backgroundImage: string; title: string; paragraph: string } =
    Japanese
      ? {
          backgroundImage: "bg-studyhelp",
          title: "聖書サポート",
          paragraph:
            "すべての勉強ガイドや教材を楽しみしてください。聖書の学び会の前にできるだけ早くアウトラインをアップロードしてみます。質問があればぜひご連絡してください。",
        }
      : {
          backgroundImage: "bg-studyhelp",
          title: "Study Guides",
          paragraph:
            "Please enjoy our study materials.  We will try to upload the Bible study outlines as soon as possible.  Please feel free to contact us if you have any questions.",
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

import React from "react";

import Navbar from "../Navbar/Navbar";
import Header from "../Components/Header";
import Footer from "../Footer/Footer";

import "../Home/Hero/Hero.css";

const StudyGuides = () => {
  
  const backgroundImage: string = "bg-study";
  const title: string = "勉強ガイド";
  const paragraph: string =
    "ぜひ勉強ガイドを自由に使ってください。聖書やキリスト教に興味がある人のために作られた勉強ガイドには簡単な言葉があります。さらに、分かりやすくて説明があるので学ぶことは簡単で楽しいです。";
  
  return (
    <>
      <Navbar />
      <Header
        backgroundImage={backgroundImage}
        title={title}
        paragraph={paragraph}
      />
      <Footer />
    </>
  );
};

export default StudyGuides;

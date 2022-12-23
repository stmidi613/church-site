import React from "react";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import "../Home/Hero/Hero.css";

const StudyGuides = () => {
  return (
    <>
      <Navbar />
      <section className="w-full h-80 md:h-[60vh] bg-cover bg-[url(./images/studying.jpg)]">
        <div className="grid place-content-center h-full w-full bg-gray/50">
          <div className="text-center">
            <h2 className="text-3xl text-white pb-4">勉強ガイド</h2>
            <p className="text-white px-8">
              ぜひ勉強ガイドを自由に使ってください。聖書やキリスト教に興味がある人のために作られた勉強ガイドには簡単な言葉があります。さらに、分かりやすくて説明があるので学ぶことは簡単で楽しいです。
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default StudyGuides;

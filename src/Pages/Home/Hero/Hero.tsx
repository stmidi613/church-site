import React from "react";

import Navbar from "../../../Components/Navbar/Navbar";

import "./Hero.css";

const Hero = () => {
  return (
    <header
      tabIndex={-1}
      className="min-h-[300px] h-[50vh] md:h-[80vh] bg-[url(./images/cross-bg-sm.jpg)] bg-cover md:bg-[url(./images/cross-bg-lg.jpg)] md:bg-cover"
    >
      <section className="top-header">
        <Navbar />
        <div className="title-group p-8">
          <h1 className="title text-2xl md:text-5xl">
            新約聖書クリスチャン<span className="break-all">教会日本</span>
          </h1>
        </div>
      </section>
    </header>
  );
};

export default Hero;

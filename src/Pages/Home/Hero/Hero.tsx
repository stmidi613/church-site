import React, { useContext } from "react";

import Navbar from "../../../Components/Navbar/Navbar";

import { AppContext } from "../../../AppState/AppState";

import "./Hero.css";

const Hero = () => {
  const { Japanese } = useContext(AppContext);

  return (
    <header
      tabIndex={-1}
      className="min-h-[300px] h-[50vh] md:h-[80vh] bg-[url(./images/cross-bg-sm.jpg)] bg-cover md:bg-[url(./images/cross-bg-lg.jpg)] md:bg-cover"
    >
      <section className="top-header">
        <Navbar />
        <div className="title-group p-8">
          <h1 className="title text-2xl md:text-5xl">
            {Japanese ? "新約聖書クリスチャン教会" : "New Testament Christian Church of Japan"}
          </h1>
        </div>
      </section>
    </header>
  );
};

export default Hero;

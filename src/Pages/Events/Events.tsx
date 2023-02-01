import React from "react";

import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer/Footer";

const Events = () => {
const backgroundImage: string = "bg-handheart";
const title: string = "集会・エベント"
const paragraph: string = "神様について学んだり、友達ができたり、賛美を歌ったり、することは楽しいです。神様の臨在のなかで一緒に生きたり、笑ったり、愛したり、しましょう。"

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

export default Events;

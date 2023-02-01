import React from "react";

import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header";
import Details from "../../Components/Details/Details";
import MainContent from "../../Components/MainContent/MainContent";
import AboutUsImage from "../../Components/MainContent/AboutUsImage";
import Footer from "../../Components/Footer/Footer";

const Events = () => {
  const backgroundImage: string = "bg-handheart";
  const title: string = "集会・エベント";
  const paragraph: string =
    "神様について学んだり、友達ができたり、賛美を歌ったり、することは楽しいです。神様の臨在のなかで一緒に生きたり、笑ったり、愛したり、しましょう。";

  const details: { detailsTitle: string; detailsParagraph: string } = {
    detailsTitle: "神様のご家族に入りましょう",
    detailsParagraph: "イエス様の言葉は「あなたの隣人をあなた自身のように愛せよ。」私たちは隣の人だけはなくて、家族のように歓迎したいと思います。初めて教会に行っても、キリスト教にちょっと興味があっても、参加するとよろしくお願い申し上げます。",
  };

  return (
    <>
      <Navbar />
      <Header
        backgroundImage={backgroundImage}
        title={title}
        paragraph={paragraph}
      />
      <Details
        detailsTitle={details.detailsTitle}
        detailsParagraph={details.detailsParagraph}
      />
      <MainContent button={false} image={<AboutUsImage />} detailsTitle={"時間割"} detailsParagraph={""} quote={""} verse={""} />
      <Footer />
    </>
  );
};

export default Events;

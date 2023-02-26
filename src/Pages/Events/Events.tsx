import React, { useContext } from "react";

import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header";
import Details from "../../Components/Details/Details";
import MainContent from "../../Components/MainContent/MainContent";
import Schedule from "../../Components/MainContent/Schedule";
import Footer from "../../Components/Footer/Footer";

import EventsImage from "../../images/PrayingBible.jpg";

import { AppContext } from "../../AppState/AppState";

const Events = () => {
  const { Japanese } = useContext(AppContext);

  const header: { backgroundImage: string; title: string; paragraph: string } =
    Japanese
      ? {
          backgroundImage: "bg-handheart",
          title: "集会・エベント",
          paragraph:
            "神様について学んだり、友達ができたり、賛美を歌ったり、することは楽しいです。神様の臨在のなかで一緒に生きたり、笑ったり、愛したり、しましょう。",
        }
      : {
          backgroundImage: "bg-handheart",
          title: "Services",
          paragraph:
            "Here you can learn about God, make friends, and sing psalms together.  Let's live, laught, and love together in the presence of the Lord.",
        };

  const details: { detailsTitle: string; detailsParagraph: string } = Japanese
    ? {
        detailsTitle: "神様のご家族に入りましょう",
        detailsParagraph:
          "イエス様の言葉は「あなたの隣人をあなた自身のように愛せよ。」私たちは隣の人だけはなくて、家族のように歓迎したいと思います。初めて教会に行っても、キリスト教にちょっと興味があっても、参加するとよろしくお願い申し上げます。",
      }
    : {
        detailsTitle: "Worship God with Joy",
        detailsParagraph:
          "Jesus said, 'Love your neighbor as yourself.' We are not just neighbors but family in Christ.  Our family welcomes you whether it is your first time in church or grew up in a Christian home.  Are you curious about the Bible or God?  Please participate in one of our services.",
      };

  const mainContent: {
    title: string;
    paragraph: string;
    verse: string;
    quote: string;
  } = 
  Japanese ? {
    title: "時間割",
    paragraph: "遊びに行きませんか？",
    quote:
      '"ふたりでも三人でも、わたしの名において集まる所には、わたしもその中にいるからです。"',
    verse: "マタイの福音書１８：２０",
  } : {
    title: "Schedule",
    paragraph: "Will you give God a chance?",
    quote:
      '"For where two or three are gathered together in my name, there am I in the midst of them."',
    verse: "Matthew 18:20",
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
        detailsTitle={details.detailsTitle}
        detailsParagraph={details.detailsParagraph}
      />
      <MainContent
        extra={<Schedule />}
        image={EventsImage}
        detailsTitle={mainContent.title}
        detailsParagraph={mainContent.paragraph}
        quote={mainContent.quote}
        verse={mainContent.verse}
      />
      <Footer />
    </>
  );
};

export default Events;

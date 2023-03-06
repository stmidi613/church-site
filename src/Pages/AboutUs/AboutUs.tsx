import { useContext } from "react";

import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header";
import DetailsSection from "../../Components/Details/DetailsSection";
import MainContent from "../../Components/MainContent/MainContent";
import Footer from "../../Components/Footer/Footer";

import { AppContext } from "../../AppState/AppState";

import AUimage from "../../images/HandHeartSun.jpg";

const AboutUs = () => {
  const { Japanese } = useContext(AppContext);

  const header: { backgroundImage: string; title: string; paragraph: string } =
    Japanese
      ? {
          backgroundImage: "bg-earthheart",
          title: "教会の情報",
          paragraph:
            "新約聖書クリスチャン教会の牧師スティーブンと申します。よろしくお願いいたします。みんなを歓迎したいと思います。モットーは「暗く死にゆく世界で、愛する神を分かち合う」です。イエス・キリストの話は愛や恵み、平和や哀れみなどでいっぱいという話です。全世界中、この話をシェアしたいと思います。",
        }
      : {
          backgroundImage: "bg-earthheart",
          title: "About Us",
          paragraph:
            "Hello, my name is Steve and I am the pastor of NTCC of Japan.  I would like to welcome everyone to our church.  Our motto is 'Sharing the love of God, to a lost and dying world' because the gospel is about the love of Jesus.  We want to share this story with the world.",
        };

  const mainContent: {
    detailsTitle: string;
    detailsParagraph: string;
    quote: string;
    verse: string;
  } = Japanese ? {
    detailsTitle: "人生の幸を見つける",
    detailsParagraph:
      "神様との関係を持つ時、他人との関係はどんどん良くなります。人生の目的や自分の存在の理由はなんだろうかなと思っている方に答えがあります。満足や平和を探したら、手伝いの手があります。",
    quote: '"義に飢え渇いている者は幸いです。その人は満ち足りるからです。"',
    verse: "マタイの福音書５：６",
  } : {
    detailsTitle: "Find the Joy of the Lord",
    detailsParagraph:
      "When you have a relationship with God your relationships with others will mean something.  Are you wondering 'Why am I here?' and looking for your purpose in life?  Is there something missing in your life but do not know what it is?  Give God a try.",
    quote: '"Blessed are those who hunger and thirst after righteousness, for they shall be filled."',
    verse: "Matthew 5:6",
  };

  return (
    <>
      <Navbar />
      <Header
        backgroundImage={header.backgroundImage}
        title={header.title}
        paragraph={header.paragraph}
      />
      <DetailsSection />
      <MainContent
        image={AUimage}
        detailsTitle={mainContent.detailsTitle}
        detailsParagraph={mainContent.detailsParagraph}
        quote={mainContent.quote}
        verse={mainContent.verse}
      />
      <Footer />
    </>
  );
};

export default AboutUs;

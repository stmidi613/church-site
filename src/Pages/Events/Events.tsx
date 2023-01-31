import React from "react";

import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer/Footer";

const Events = () => {
const backgroundImage: string = "bg-handheart";
const title: string = "エベントの参加"
const paragraph: string = "This is the events paragraph"

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

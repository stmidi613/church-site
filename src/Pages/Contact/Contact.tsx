import React from "react";

import Header from "../../Components/Header";
import Navbar from "../../Components/Navbar/Navbar";

const Contact = () => {
  const header: {
    backgroundImage: string;
    title: string;
    paragraph: string;
  } = {
    backgroundImage: "bg-contact",
    title: "連絡先",
    paragraph:
      "いつでも自由にご連絡してよろしくお願いします。なるべく早く返事を送ります。ご連絡をお待ちしております。",
  };
  return (
    <>
      <Navbar />
      <Header
        backgroundImage={header.backgroundImage}
        title={header.title}
        paragraph={header.paragraph}
      />
    </>
  );
};

export default Contact;

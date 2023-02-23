import React, { useContext } from "react";

import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header";
import Form from "../../Components/Form/Form";
import Footer from "../../Components/Footer/Footer";

import { AppContext } from "../../AppState/AppState";

const Contact = () => {
  const { Japanese } = useContext(AppContext);

  const header: {
    backgroundImage: string;
    title: string;
    paragraph: string;
  } = Japanese
    ? {
        backgroundImage: "bg-contact",
        title: "連絡先",
        paragraph:
          "いつでも自由にご連絡してよろしくお願いします。なるべく早く返事を送ります。ご連絡をお待ちしております。",
      }
    : {
        backgroundImage: "bg-contact",
        title: "Contact Us",
        paragraph:
          "Please contact us whenever you have time, and we will get back to you as soon as possible.  We can't wait to hear from you.",
      };
  return (
    <>
      <Navbar />
      <Header
        backgroundImage={header.backgroundImage}
        title={header.title}
        paragraph={header.paragraph}
      />
      <Form request={Japanese ? "メッセージ" : "Message"} />
      <Footer />
    </>
  );
};

export default Contact;

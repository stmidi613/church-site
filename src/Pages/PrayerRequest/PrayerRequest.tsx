import React from 'react'

import Navbar from '../../Components/Navbar/Navbar';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer/Footer';
import Form from '../../Components/Form/Form';

const PrayerRequest = () => {
    
    const header: {
    backgroundImage: string;
    title: string;
    paragraph: string;
  } = {
    backgroundImage: "bg-prayer",
    title: "祈り求め",
    paragraph:
      "そこで、まず第一に勧める。すべての人のために、王たちと上に立っているすべての人々のために、願いと、祈と、とりなしと、感謝とをささげなさい。テモテへの手紙第一２：１ ",
  };

  return (
    <>
      <Navbar />
      <Header
        backgroundImage={header.backgroundImage}
        title={header.title}
        paragraph={header.paragraph}
      />
      <Form request="祈り求め" />
      <Footer />
    </>
  );
    
  
}

export default PrayerRequest
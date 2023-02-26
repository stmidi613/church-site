import React, { useContext } from 'react'

import Navbar from '../../Components/Navbar/Navbar';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer/Footer';
import Form from '../../Components/Form/Form';

import { AppContext } from '../../AppState/AppState';

const PrayerRequest = () => {
  const { Japanese } = useContext(AppContext);

  const prayerRequestForm: {
    backgroundImage: string;
    title: string;
    paragraph: string;
  } = 
  Japanese ? {
    backgroundImage: "bg-prayer",
    title: "祈り求め",
    paragraph:
      "そこで、まず第一に勧める。すべての人のために、王たちと上に立っているすべての人々のために、願いと、祈と、とりなしと、感謝とをささげなさい。テモテへの手紙第一２：１ ",
  } : {
    backgroundImage: "bg-prayer",
    title: "Prayer Request",
    paragraph: "I exhort therefore, that, first of all, supplications, prayers, intercessions, and giving of thanks, be made for all men; ~~~ I Timothy 2:1 KJV"
  };

  return (
    <>
      <Navbar />
      <Header
        backgroundImage={prayerRequestForm.backgroundImage}
        title={prayerRequestForm.title}
        paragraph={prayerRequestForm.paragraph}
      />
      <Form request={prayerRequestForm.title} />
      <Footer />
    </>
  );
    
  
}

export default PrayerRequest
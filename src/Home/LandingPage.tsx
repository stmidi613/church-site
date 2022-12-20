import React from "react";

import Footer from "../Footer/Footer";
import NextEvents from "./Events/NextEvents";
import Features from "./Features/Features";
import PrayerRequests from "./PrayerRequests/PrayerRequests";
import Hero from "./Hero/Hero";

const LandingPage = () => {
  return (
    <>
      <Hero />
      <NextEvents />
      <Features />
      <PrayerRequests />
      <Footer />
    </>
  );
};

export default LandingPage;

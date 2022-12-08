import { Fragment } from "react";

import Hero from "./Home/Hero/Hero";
import NextEvents from "./Home/Events/NextEvents";
import Features from "./Home/Features/Features";
import PrayerRequests from "./Home/PrayerRequests/PrayerRequests";

import "./App.css";

function App() {
  return (
    <Fragment>
      <Hero />
      <NextEvents />
      <Features />
      <PrayerRequests />
    </Fragment>
  );
}

export default App;

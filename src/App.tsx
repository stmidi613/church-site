import { Fragment } from "react";

import Hero from "./Home/Hero/Hero";
import NextEvents from "./Home/Events/NextEvents";
import Features from "./Home/Features/Features";

import "./App.css";

function App() {
  return (
    <Fragment>
      <Hero />
      <NextEvents />
      <Features />
    </Fragment>
  );
}

export default App;

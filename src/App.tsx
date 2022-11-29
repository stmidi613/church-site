import { Fragment } from "react";
import "./App.css";
import NextEvents from "./Home/Events/NextEvents";
import Hero from "./Home/Hero/Hero";

function App() {
  return (
    <Fragment>
      <Hero />
      <NextEvents />
    </Fragment>
  );
}

export default App;

import { Fragment } from "react";

import LandingPage from "./Pages/Home/LandingPage";
import StudyGuides from "./Pages/StudyGuides/StudyGuides";
import BibleSupport from "./Pages/BibleSupport/BibleSupport";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Events from "./Pages/Events/Events";
import Contact from "./Pages/Contact/Contact";
import PrayerRequest from "./Pages/PrayerRequest/PrayerRequest";
import NoFoundPage from "./Pages/NoFoundPage/NoFoundPage";

import AppState from "./AppState/AppState";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <AppState>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="StudyGuides" element={<StudyGuides />} />
            <Route path="StudyGuides/BibleSupport" element={<BibleSupport />} />
            <Route path="AboutUs" element={<AboutUs />} />
            <Route path="Events" element={<Events />} />
            <Route path="ContactUs" element={<Contact />} />
            <Route path="PrayerRequest" element={<PrayerRequest />} />
            <Route path="*" element={<NoFoundPage />} />
          </Routes>
        </AppState>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;

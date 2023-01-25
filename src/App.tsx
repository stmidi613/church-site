import { Fragment } from "react";

import LandingPage from "./Pages/Home/LandingPage";
import StudyGuides from "./Pages/StudyGuides/StudyGuides";
import BibleSupport from "./Pages/BibleSupport/BibleSupport";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="StudyGuides" element={<StudyGuides />} />
          <Route path="StudyGuides/BibleSupport" element={<BibleSupport />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;

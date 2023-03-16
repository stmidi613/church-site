import React, { useContext } from "react";

import LanguageButton from "../Buttons/LanguageButton";

import { Link } from "react-router-dom";

import { AppContext } from "../../AppState/AppState";

import "./Navbar.css";

const Navbar = () => {
  const { Japanese } = useContext(AppContext);

  const navbar: {
    title: string;
    left: string;
    right: string;
    nav1: string;
    nav2: string;
    nav3: string;
    nav4: string;
    nav5: string;
    nav6: string;
  } = Japanese
    ? {
        title: "新約聖書クリスチャン教会",
        left: "新約聖書クリ",
        right: "スチャン教会",
        nav1: "ホームパージ",
        nav2: "教会の情報",
        nav3: "勉強ガイド",
        nav4: "集会",
        nav5: "祈り求め",
        nav6: "連絡先",
      }
    : {
        title: "New Testament Christian Church of Japan",
        left: "NTCC",
        right: "of Japan",
        nav1: "Home",
        nav2: "About Us",
        nav3: "Study Guide",
        nav4: "Events",
        nav5: "Prayer Requests",
        nav6: "Contact Us",
      };
  return (
    <>
      <div className="flex justify-center">
        <div className="w-full bg-charcoal static h-[52px] md:h-[148px]"></div>
        {/* regular navbar */}
        <div className="fixed w-full z-10">
          <div className="hidden md:block float-right relative right-5 bottom-2">
            <LanguageButton />
          </div>
          <div className="hidden bg-charcoal text-darkgold w-full text-center text-3xl p-5 md:block">
            <h1>{navbar.title}</h1>
          </div>
          <nav className="navbar bg-charcoal p-1">
            <ul className="hidden nav-links md:flex">
              <li className="">
                <Link to="/">{navbar.nav1}</Link>
              </li>
              <li>
                <Link to="/AboutUs">{navbar.nav2}</Link>
              </li>
              <li>
                <Link to="/StudyGuides">{navbar.nav3}</Link>
              </li>
              <li>
                <Link to="/Events">{navbar.nav4}</Link>
              </li>
              <li>
                <Link to="/PrayerRequest">{navbar.nav5}</Link>
              </li>
              <li>
                <Link to="/ContactUs">{navbar.nav6}</Link>
              </li>
            </ul>
            {/* collapsed navbar */}
            <div id="hamburger-container" className="md:hidden">
              <label htmlFor="hamburger">
                <span className="pt-3 text-xl text-darkgold">
                  {navbar.left}
                </span>
                &#9776;
                <span className="pt-3 text-xl text-darkgold">
                  {navbar.right}
                </span>
              </label>
              <input type="checkbox" id="hamburger" />
              <ul id="hamburger-background">
                <li className="hamburger-item">
                  <Link to="/">{navbar.nav1}</Link>
                </li>
                <li className="hamburger-item">
                  <Link to="/AboutUs">{navbar.nav2}</Link>
                </li>
                <li className="hamburger-item">
                  <Link to="/StudyGuides">{navbar.nav3}</Link>
                </li>
                <li className="hamburger-item">
                  <Link to="/Events">{navbar.nav4}</Link>
                </li>
                <li className="hamburger-item">
                  <Link to="/PrayerRequest">{navbar.nav5}</Link>
                </li>
                <li className="hamburger-item">
                  <Link to="/ContactUs">{navbar.nav6}</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="fixed md:hidden bottom-24 right-2 z-10">
          <LanguageButton />
        </div>
      </div>
    </>
  );
};

export default Navbar;

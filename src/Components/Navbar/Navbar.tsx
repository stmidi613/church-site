import React from "react";

import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-full bg-black static h-[52px] md:h-[116px]"></div>
        {/* regular navbar */}
        <div className="fixed w-full z-10">
          <div className="hidden bg-black text-darkgold w-full text-center text-3xl p-4 md:block">
            新約聖書クリスチャン教会
          </div>
          <nav className="navbar bg-black p-1">
            <ul className="hidden nav-links md:flex">
              <li className="">
                <Link to="/">ホームパージ</Link>
              </li>
              <li>
                <Link to="/AboutUs">教会の情報</Link>
              </li>
              <li>
                <Link to="/StudyGuides">勉強ガイド</Link>
              </li>
              <li>
                <Link to="/Events">集会</Link>
              </li>
              <li>
                <Link to="/PrayerRequest">祈り求め</Link>
              </li>
              <li>
                <Link to="/ContactUs">連絡先</Link>
              </li>
            </ul>
            {/* collapsed navbar */}
            <div id="hamburger-container" className="md:hidden">
              <label htmlFor="hamburger">
                <span className="pt-3 text-xl text-darkgold">新約聖書クリ</span>
                &#9776;
                <span className="pt-3 text-xl text-darkgold">スチャン教会</span>
              </label>
              <input type="checkbox" id="hamburger" />
              <ul id="hamburger-background">
                <li className="hamburger-item">
                  <Link to="/">ホームパージ</Link>
                </li>
                <li className="hamburger-item">
                  <Link to="/AboutUs">教会の情報</Link>
                </li>
                <li className="hamburger-item">
                  <Link to="/StudyGuides">勉強ガイド</Link>
                </li>
                <li className="hamburger-item">
                  <Link to="/Events">集会・エベント</Link>
                </li>
                <li className="hamburger-item">
                  <Link to="/PrayerRequest">祈り求め</Link>
                </li>
                <li className="hamburger-item">
                  <Link to="/ContactUs">連絡先</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;

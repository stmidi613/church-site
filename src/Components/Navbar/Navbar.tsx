import React from "react";

import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-full bg-black static h-[48px]"></div>
        {/* regular navbar */}
        <nav className="navbar bg-black fixed z-10 p-1">
          <ul className="hidden nav-links md:flex">
            <li>
              <Link to="/">ホームパージ</Link>
            </li>
            <li>
              <Link to="/ChurchInfo">教会の情報</Link>
            </li>
            <li>
              <Link to="/StudyGuides">勉強ガイド</Link>
            </li>
            <li>
              <Link to="/Events">エベントの参加</Link>
            </li>
            <li>
              <Link to="/ContactUs">連絡先</Link>
            </li>
          </ul>
          {/* collapsed navbar */}
          <div id="hamburger-container" className="md:hidden">
            <label htmlFor="hamburger">&#9776;</label>
            <input type="checkbox" id="hamburger" />
            <ul id="hamburger-background">
              <li className="hamburger-item">
                <Link to="/">ホームパージ</Link>
              </li>
              <li className="hamburger-item">
                <Link to="/ChurchInfo">教会の情報</Link>
              </li>
              <li className="hamburger-item">
                <Link to="/StudyGuides">勉強ガイド</Link>
              </li>
              <li className="hamburger-item">
                <Link to="/Events">エベントの参加</Link>
              </li>
              <li className="hamburger-item">
                <Link to="/ContactUs">連絡先</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;

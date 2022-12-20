import React from "react";

import "./Navbar.css"

const Navbar = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-full bg-black static h-[48px]"></div>
        {/* regular navbar */}
        <nav className="navbar bg-black fixed z-10 p-1">
          <ul className="hidden nav-links md:flex">
            <li>
              <a href="/#">ホームパージ</a>
            </li>
            <li>
              <a href="/#">教会の情報</a>
            </li>
            <li>
              <a href="/#">勉強ガイド</a>
            </li>
            <li>
              <a href="/#">エベントの参加</a>
            </li>
            <li>
              <a href="/#">連絡先</a>
            </li>
          </ul>
          {/* collapsed navbar */}
          <div id="hamburger-container" className="md:hidden">
            <label htmlFor="hamburger">&#9776;</label>
            <input type="checkbox" id="hamburger" />
            <ul id="hamburger-background">
              <li className="hamburger-item">
                <a href="/#">ホームパージ</a>
              </li>
              <li className="hamburger-item">
                <a href="/#">教会の情報</a>
              </li>
              <li className="hamburger-item">
                <a href="/#">勉強ガイド</a>
              </li>
              <li className="hamburger-item">
                <a href="/#">エベントの参加</a>
              </li>
              <li className="hamburger-item">
                <a href="/#">連絡先</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;

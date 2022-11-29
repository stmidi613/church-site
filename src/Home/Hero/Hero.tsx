import React from 'react'
import "./Hero.css"

const Hero = () => {
  return (
    <header
        tabIndex={-1}
        className="min-h-[300px] h-[50vh] md:h-[80vh] bg-[url(./images/cross-bg-sm.jpg)] bg-cover md:bg-[url(./images/cross-bg-lg.jpg)] md:bg-cover"
      >
        <section className="top-header">
          <div className="flex justify-center m-5">
            {/* regular navbar */}
            <nav className="navbar">
              <ul className="hidden nav-links md:flex">
                <li>
                  <a href="/#">ホームパージ</a>
                </li>
                <li>
                  <a href="/#">教会の内容</a>
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
              <div id="hamburger-container" className="block md:hidden">
                <label htmlFor="hamburger">&#9776;</label>
                <input type="checkbox" id="hamburger" />
                <ul id="hamburger-background">
                  <li className="hamburger-item">
                    <a href="/#">ホームパージ</a>
                  </li>
                  <li className="hamburger-item">
                    <a href="/#">教会の内容</a>
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
          <div className="title-group m-5">
            <h1 className="title text-2xl md:text-5xl pt-6">
              新約聖書クリスチャン<span className="break-all">教会日本</span>
            </h1>
          </div>
        </section>
      </header>
  )
}

export default Hero
import { Fragment } from "react";
import "./App.css";

function App() {
  return (
    <Fragment>
      <header
        tabIndex={-1}
        className="bg-[url(./images/cross-bg-sm.jpg)] bg-contain md:bg-[url(./images/cross-bg-lg.jpg)] md:bg-cover"
      >
        <section className="top-header">
          <div className="md:flex justify-center m-5 hidden">
            <nav className="navbar">
              <ul className="nav-links">
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
            </nav>
          </div>
          <div className="title-group m-5">
            <p className="title text-2xl md:text-5xl">
              新約聖書クリスチャン<span className="break-words">教会日本</span>
            </p>
          </div>
        </section>
      </header>
    </Fragment>
  );
}

export default App;

import { Fragment } from "react";
import "./App.css";

function App() {
  return (
    <Fragment>

    <header tabIndex={-1}>
      <section className="top-header">
        <div className="title-group">
          <img src="" alt="十字架" />
          <p className="title">新約聖書クリスチャン教会日本</p>
        </div>
        <nav className="navbar">
          <ul className="nav-links">
            <li>
              <a href="#">ホームパージ</a>
            </li>
            <li>
              <a href="#">教会の内容</a>
            </li>
            <li>
              <a href="#">連絡先</a>
            </li>
            <li>
              <a href="#">勉強ガイド</a>
            </li>
            <li>
              <a href="#">エベントの参加</a>
            </li>
          </ul>
        </nav>
        <div className="log-in-group">
          <img src="" alt="プロファイル写真" />
          <p>ログイン</p>
        </div>
      </section>
    </header>

        
    </Fragment>
  );
}

export default App;

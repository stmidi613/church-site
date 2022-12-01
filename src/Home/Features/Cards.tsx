import React from "react";

import cross from "../../images/cross-bg-sm.jpg";

const Cards = () => {
  return (
    <>
      <div className="grid place-content-center">
        <div className="grid place-content-center w-[300px]">
          <img width="300px" height="160px" src={cross} alt="A cross" />
          <div className="bg-[#f7f6f2] text-center pb-8">
            <h4 className="text-xl p-4">教会の情報</h4>
            <p className="text-sm px-4 pb-8">
              新約聖書クリスチャン教会日本は大阪市にあります。
              現在、聖書の学び会だけ行いますが、
              近い未来に礼拝も行うつもりです。誰でも参加してもよろしい、
              みんなを歓迎したいと思います。
            </p>
            <a href="/#">もっと読む &gt;&gt;</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;

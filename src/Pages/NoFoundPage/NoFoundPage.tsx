import React from "react";

import bible from "../../images/bible.png";
import map from "../../images/map.jpg";

const NoFoundPage = () => {
  return (
    <>
      <section aria-labelledby="page not found" className="h-screen w-full">
        <div className="bg-footprints bg-cover h-full">
          <div className="grid place-content-center">
            <div className="text-center text-black bg-darkgold bg-opacity-80 p-10 mt-10">
              <h1 className="text-2xl lg:text-5xl">ウェブページは見つかりませんでした。</h1>
              <p className="text-xl lg:text-3xl pt-2">
                道に迷った？地図
                <span>
                  <img
                    className="w-6 lg:w-10 inline-block relative bottom-1"
                    src={bible}
                    alt="Bible"
                  />
                </span>
                を読んでみましょう。
              </p>
            </div>
            <div className="w-1/3 absolute bottom-20 left-[25%]">
              <img src={map} alt="map and compass" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NoFoundPage;

import React, { useState } from "react";

import "./FullPageTabs.css";
import SingleTab from "./SingleTab";
import SingleTabContent from "./SingleTabContent";

const FullPageTabs = () => {
  const [tabNumber, setTabNumber] = useState(0);

  const tabs: { tabName: string; number: number; title: string }[] = [
    { tabName: "聖書の学び会のアウトライン", number: 0, title: "アウトライン" },
    { tabName: "聖書の基礎", number: 1, title: "聖書の基礎" },
    { tabName: "勉強ガイド", number: 2, title: "勉強ガイド" },
    { tabName: "地図やグラフ", number: 3, title: "地図やグラフ" },
  ];
  return (
    <>
      <section>
        <div className="flex flex-col sm:flex-row justify-evenly bg-darkgold h-full">
          {tabs.map((tab) => (
            <SingleTab
              key={tab.number}
              tabName={tab.tabName}
              number={tab.number}
              tabNumber={tabNumber}
              setTabNumber={setTabNumber}
            />
          ))}
        </div>
        {tabs.map((tab) => (
          <SingleTabContent
            key={tab.number}
            number={tab.number}
            tabNumber={tabNumber}
            title={tab.title}
          />
        ))}
      </section>
    </>
  );
};

export default FullPageTabs;

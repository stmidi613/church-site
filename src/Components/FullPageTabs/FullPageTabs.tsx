import React, { useContext, useState } from "react";
import { AppContext } from "../../AppState/AppState";

import SingleTab from "./SingleTab";
import SingleTabContent from "./SingleTabContent";

import "./FullPageTabs.css";

const FullPageTabs = () => {
  const { Japanese } = useContext(AppContext);

  const [tabNumber, setTabNumber] = useState(0);

  const tabs: { tabName: string; number: number; title: string }[] = Japanese
    ? [
        {
          tabName: "聖書の学び会のアウトライン",
          number: 0,
          title: "アウトライン",
        },
        { tabName: "聖書の基礎", number: 1, title: "聖書の基礎" },
        { tabName: "勉強ガイド", number: 2, title: "勉強ガイド" },
        { tabName: "地図やグラフ", number: 3, title: "地図やグラフ" },
      ]
    : [
        {
          tabName: "Bible Study Outlines",
          number: 0,
          title: "Outlines",
        },
        { tabName: "Bible Basics", number: 1, title: "Bible Basics" },
        { tabName: "Study Guides", number: 2, title: "Study Guides" },
        { tabName: "Maps and Graphs", number: 3, title: "Maps and Graphs" },
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

import React, { useContext } from "react";

import { AppContext } from "../../AppState/AppState";

const Schedule = () => {
  const { Japanese } = useContext(AppContext);

  const text: {
    JT1: string;
    JT2: string;
    JT3: string;
    ET1: string;
    ET2: string;
    ET3: string;
  } = Japanese
    ? {
        JT1: "聖書の学び会（日本語）",
        JT2: "毎週の木曜日・午後６時〜午後７時３０分",
        JT3: "場所：西成市民館",
        ET1: "聖書の学び会（英語）",
        ET2: "毎週の日曜日・TBD",
        ET3: "場所：TBD",
      }
    : {
        JT1: "Japanese Bible Study",
        JT2: "Every Thursday 6:00PM - 7:30PM",
        JT3: "Location: Nishinari City Hall",
        ET1: "English Bible Study",
        ET2: "Every Sunday / TBD",
        ET3: "Location:  TBD",
      };
  return (
    <>
      <div className="text-center pb-6">
        <h4 className="pb-1">{text.JT1}</h4>
        <p className="text-sm">{text.JT2}</p>
        <p className="text-sm">{text.JT3}</p>
      </div>
      <div className="text-center">
        <h4 className="pb-1">{text.ET1}</h4>
        <p className="text-sm">{text.ET2}</p>
        <p className="text-sm">{text.ET3}</p>
      </div>
    </>
  );
};

export default Schedule;

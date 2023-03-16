import React, { useContext } from "react";

import SingleEvent from "./SingleEvent";
import BibleVerse from "../../../Components/BibleVerse";

import { AppContext } from "../../../AppState/AppState";

const NextEvents = () => {
  const { Japanese } = useContext(AppContext);

  const eventsTitle: string = Japanese ? "次のエベント" : "Next Events";

  const EVENTS: {
    eventId: number;
    name: string;
    date: string;
    fullDate: string;
  }[] = 
  Japanese ? [
    {
      eventId: 1,
      name: "聖書の学び会",
      date: "3月23日",
      fullDate: "2023年03月23日（木曜日）",
    },
    {
      eventId: 2,
      name: "聖書の学び会",
      date: "3月30日",
      fullDate: "2022年03月30日（木曜日）",
    },
  ] : [
    {
      eventId: 1,
      name: "Bible Study",
      date: "3/23",
      fullDate: "March 23, 2023 (Thursday)",
    },
    {
      eventId: 2,
      name: "Bible Study",
      date: "3/30",
      fullDate: "March 30, 2023 (Thursday)",
    },
  ];

  const Verse: string[] = 
  Japanese ? [
    '"神は, その独り子をお与えになったほどに、世を愛された。独り子を信じる者が一人も滅びないで、永遠の命を得るためである。"',
    "ヨハネ 3:16",
  ] : [
    '"For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life."',
    "John 3:16 KJV",    
  ];

  return (
    <>
      <section
        aria-labelledby="Next-events"
        className="bg-[#f7f6f2] text-center p-6"
      >
        <h2 className="text-3xl pt-8 lg:pb-4">{eventsTitle}</h2>
        <div className="lg:flex w-full">
          {EVENTS.map((event) => (
            <span className="lg:w-1/3" key={event.eventId}>
              <SingleEvent
                name={event.name}
                date={event.date}
                fullDate={event.fullDate}
              />
              <hr className="lg:hidden border-t-2 border-black mx-[20%] opacity-50"></hr>
            </span>
          ))}
          <BibleVerse verse={Verse[1]} quote={Verse[0]} home={true} />
        </div>
      </section>
    </>
  );
};

export default NextEvents;

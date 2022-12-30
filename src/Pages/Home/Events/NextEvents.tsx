import React, { Fragment } from "react";
import SingleEvent from "./SingleEvent";

const NextEvents = () => {
  const EVENTS: [
    { eventId: number; name: string; date: string; fullDate: string },
    { eventId: number; name: string; date: string; fullDate: string }
  ] = [
    {
      eventId: 1,
      name: "聖書の学び会",
      date: "12月1日",
      fullDate: "2022年12月01日（木曜日）",
    },
    {
      eventId: 2,
      name: "聖書の学び会",
      date: "12月8日",
      fullDate: "2022年12月08日（木曜日）",
    },
  ];

  const BIBLEVERSE: string[] = [
    '"神は, その独り子をお与えになったほどに、世を愛された。独り子を信じる者が一人も滅びないで、永遠の命を得るためである。"',
    "ヨハネ 3:16",
  ];

  return (
    <>
      <section
        aria-labelledby="Next-events"
        className="bg-[#f7f6f2] text-center p-6"
      >
        <h2 className="text-3xl pt-8 lg:pb-4">次のエベント</h2>
        <div className="lg:flex w-full">
          {EVENTS.map((event) => (
            <Fragment>
              <SingleEvent
                key={event.eventId}
                name={event.name}
                date={event.date}
                fullDate={event.fullDate}
              />
              <hr className="lg:hidden border-t-2 border-black mx-[20%] opacity-50"></hr>
            </Fragment>
          ))}
          <div className="grid place-content-center lg:w-1/3">
            <blockquote className="max-w-[500px] italic opacity-70 text-xl m-8">
              {BIBLEVERSE[0]}
            </blockquote>
            <p className="font-bold pb-8">{BIBLEVERSE[1]}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default NextEvents;

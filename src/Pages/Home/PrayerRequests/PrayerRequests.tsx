import React, { useContext } from "react";

import Button from "../../../Components/Buttons/Button";

import { AppContext } from "../../../AppState/AppState";

import { Link } from "react-router-dom";

const Participate = () => {
  const { Japanese } = useContext(AppContext);
  
  const prayerRequest: { header: string; scripture: string; verse: string; button: string; } = 
  Japanese ? {
    header: "祈りの求め",
    scripture:
      '“すべての祈りと願いを用いて、どんなときにも御霊によって祈りなさい。そのためには絶えず目をさましていて、すべての聖徒のために、忍耐の限りを尽くし、また祈りなさい。”',
    verse: "エペソ人への手紙6章18節",
    button: "祈りの求め"
  } : {
    header: "Prayer Requests",
    scripture:
      '"Praying always with all prayer and supplication in the Spirit, and watching thereunto with all perseverance and supplication for all saints;"',
    verse: "Ephesians 6:18 KJV",
    button: "Prayer Request"
  };
  
  return (
    <>
      <section
        aria-labelledby="prayer requests"
        className="w-full h-64 md:h-96 bg-cover bg-[url(./images/prayer.jpg)]"
      >
        <div className="grid place-content-center w-full h-full bg-black/50">
          <div className="text-center text-darkgold">
            <h3 className="p-4 text-xl md:text-2xl lg:text-3xl">{prayerRequest.header}</h3>
            <blockquote className="px-[10%] text-sm md:text-xl lg:text-2xl">
              {prayerRequest.scripture}
            </blockquote>
            <p className="text-sm md:text-xl lg:text-2xl pt-2">
              {prayerRequest.verse}
            </p>
            <Link to="/PrayerRequest">
              <Button buttonText={prayerRequest.button} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Participate;
